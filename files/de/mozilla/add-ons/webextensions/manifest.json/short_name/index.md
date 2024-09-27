---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

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

Kurzname für die Erweiterung. Falls angegeben, wird dieser in Kontexten verwendet, in denen das [name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)-Feld zu lang ist. Es wird empfohlen, dass der Kurzname nicht länger als 12 Zeichen ist. Wenn das Kurzname-Feld nicht in der manifest.json enthalten ist, wird stattdessen der Name verwendet und möglicherweise gekürzt.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"short_name": "My Extension"
```

## Browser-Kompatibilität

{{Compat}}
