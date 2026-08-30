// Shared Leaflet helpers for the Overview and Stay pages.
// Both pages load Leaflet + this file, then call one of the init
// functions below with data fetched from /data/*.json.
window.TripMap = (function () {

  function pinIcon(num) {
    return L.divIcon({
      className: "trip-pin",
      html: '<span class="pin-badge">' + num + "</span>",
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -14]
    });
  }

  function lodgingIcon() {
    return L.divIcon({
      className: "trip-pin",
      html: '<span class="pin-badge lodging">🏨</span>',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -18]
    });
  }

  function addBaseLayers(map) {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.tileLayer("https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png", {
      maxZoom: 18,
      maxNativeZoom: 16,
      opacity: 0.95,
      attribution: 'Piste data: &copy; <a href="https://www.opensnowmap.org">OpenSnowMap.org</a> (CC-BY-SA)'
    }).addTo(map);
  }

  // The container can report zero width for a moment right after load
  // (fonts/stylesheets still settling), which makes fitBounds degenerate
  // to max zoom. Poll until it actually has real dimensions.
  function fitWhenReady(map, el, bounds, attempt) {
    attempt = attempt || 0;
    if (el.offsetWidth > 0 || attempt > 40) {
      map.invalidateSize();
      map.fitBounds(bounds, { padding: [24, 24] });
    } else {
      setTimeout(function () { fitWhenReady(map, el, bounds, attempt + 1); }, 100);
    }
  }

  function haversineKm(lat1, lng1, lat2, lng2) {
    var R = 6371;
    var toRad = function (d) { return (d * Math.PI) / 180; };
    var dLat = toRad(lat2 - lat1);
    var dLng = toRad(lng2 - lng1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  // Overview page: all 9 zones plus the Route 292 open/closed road overlay.
  function initOverviewMap(containerId, zones, road) {
    var el = document.getElementById(containerId);
    if (!el || el._leaflet_id) return;

    var map = L.map(containerId, { scrollWheelZoom: false });
    addBaseLayers(map);

    L.polyline(road.open, { color: "#D9A22E", weight: 5, opacity: 0.9, lineJoin: "round" }).addTo(map);
    L.polyline(road.closed, { color: "#D9A22E", weight: 5, opacity: 0.75, dashArray: "1 12", lineJoin: "round" })
      .addTo(map)
      .bindPopup('<div class="popcard"><h4>Closed in winter</h4><p>Route 292 past here is shut roughly mid-November to late April, toward Kusatsu (Gunma). In ski season this is a dead end, not a through-route.</p></div>');

    var points = [];
    zones.forEach(function (z) {
      var html = '<div class="popcard"><span class="num">' + z.num + '</span><h4>' + z.name + '</h4><p>' + z.blurb + '</p><a href="#' + z.id + '">Full details &darr;</a></div>';
      L.marker([z.lat, z.lng], { icon: pinIcon(z.num) }).addTo(map).bindPopup(html);
      points.push([z.lat, z.lng]);
    });

    fitWhenReady(map, el, L.latLngBounds(points));
  }

  // Stay page: the hotel plus all zones renumbered 1-9 by distance from it.
  function initStayMap(containerId, zones, hotel) {
    var el = document.getElementById(containerId);
    if (!el || el._leaflet_id) return;

    var ranked = zones
      .map(function (z) {
        return {
          name: z.name,
          lat: z.lat,
          lng: z.lng,
          km: haversineKm(hotel.lat, hotel.lng, z.lat, z.lng)
        };
      })
      .sort(function (a, b) { return a.km - b.km; })
      .map(function (z, i) { z.num = i + 1; return z; });

    var map = L.map(containerId, { scrollWheelZoom: false });
    addBaseLayers(map);

    var points = [[hotel.lat, hotel.lng]];

    ranked.forEach(function (z) {
      L.polyline([[hotel.lat, hotel.lng], [z.lat, z.lng]], {
        color: "#4A6259", weight: 1.5, opacity: 0.5, dashArray: "1 8"
      }).addTo(map);

      var html = '<div class="popcard"><span class="num">' + z.num + '</span><h4>' + z.name + '</h4><p>'
        + z.km.toFixed(2) + ' km from the hotel (straight-line)</p></div>';
      L.marker([z.lat, z.lng], { icon: pinIcon(z.num) }).addTo(map).bindPopup(html);
      points.push([z.lat, z.lng]);
    });

    L.marker([hotel.lat, hotel.lng], { icon: lodgingIcon(), zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup('<div class="popcard"><h4>🏨 ' + hotel.name + '</h4><p>Where we\'re staying — ' + hotel.dates + '.</p></div>');

    fitWhenReady(map, el, L.latLngBounds(points));
  }

  return {
    initOverviewMap: initOverviewMap,
    initStayMap: initStayMap
  };
})();
