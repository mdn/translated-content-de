---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"short_name": "My Extension"</pre></td>
    </tr>
  </tbody>
</table>

Kurzname für die Erweiterung. Falls angegeben, wird dieser in Kontexten verwendet, in denen das Feld [name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) zu lang ist. Es wird empfohlen, dass der Kurzname nicht mehr als 12 Zeichen umfasst. Wenn das Feld "short_name" nicht in der manifest.json enthalten ist, wird stattdessen der Name verwendet und möglicherweise abgeschnitten.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"short_name": "My Extension"
```

## Browser-Kompatibilität

{{Compat}}
