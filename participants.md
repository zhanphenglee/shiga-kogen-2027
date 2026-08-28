---
layout: default
title: Who's Coming
permalink: /participants/
---

12 of us! Add yourself by editing `_data/participants.yml` in the repo — no need to touch
this page, it reads from that file automatically.

<table>
  <thead>
    <tr><th>Name</th><th>Ski/board level</th><th>Role</th><th>Notes</th></tr>
  </thead>
  <tbody>
    {% for p in site.data.participants %}
    <tr>
      <td>{{ p.name }}</td>
      <td>{{ p.level }}</td>
      <td>{{ p.role }}</td>
      <td>{{ p.notes }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

*Currently {{ site.data.participants | size }} of {{ site.trip.pax }} listed — if you're
missing, add yourself in `_data/participants.yml`!*
