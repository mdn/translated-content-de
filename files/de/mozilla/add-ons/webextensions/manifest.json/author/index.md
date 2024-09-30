---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
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
      <td><pre class="brush: json">"author": "Walt Whitman"</pre></td>
    </tr>
  </tbody>
</table>

Der Autor der Erweiterung, der zur Anzeige in der Benutzeroberfläche des Browsers vorgesehen ist. Wenn der [developer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) Schlüssel angegeben ist und die Eigenschaft "name" enthält, wird er den author-Schlüssel überschreiben. Es gibt keine Möglichkeit, mehrere Autoren anzugeben.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"author": "Walt Whitman"
```

## Browser-Kompatibilität

{{Compat}}
