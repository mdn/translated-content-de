---
title: developer
slug: Mozilla/Add-ons/WebExtensions/manifest.json/developer
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Der Name des Entwicklers der Erweiterung und die URL seiner Homepage, die zur Anzeige in der Benutzeroberfläche des Browsers vorgesehen sind.

Das Objekt und beide seiner Eigenschaften sind optional. Die Eigenschaften "name" und "url", falls vorhanden, überschreiben die Schlüssel [author](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author) und [homepage_url](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url). Dieses Objekt erlaubt es nur, einen einzelnen Entwicklernamen und eine URL anzugeben.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}
```

## Browser-Kompatibilität

{{Compat}}
