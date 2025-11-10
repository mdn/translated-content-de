---
title: dictionaries
slug: Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"dictionaries": {
  "en-US": "dictionaries/en-US.dic"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Der Schlüssel `dictionaries` gibt den `locale_code` an, für den Ihre Erweiterung ein Wörterbuch bereitstellt. Obwohl das Wörterbuch aus zwei Dateien besteht, eine mit der Erweiterung `.dic` und eine mit der Erweiterung `.aff`, wird im manifest.json nur die mit der Erweiterung `.dic` referenziert.

Wenn Sie den Schlüssel `dictionaries` verwenden, müssen Sie auch eine ID für Ihre Erweiterung mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel festlegen.

## Beispiel

```json
"dictionaries": {
  "en-US": "dictionaries/en-US.dic"
}
```

## Browser-Kompatibilität

{{Compat}}
