---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
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
"omnibox": {
  "keyword": "mdn"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `omnibox`-Schlüssel, um ein Omnibox-Keyword für Ihre Erweiterung zu definieren.

Wenn der Benutzer dieses Keyword in die Adressleiste des Browsers eingibt, gefolgt von einem Leerzeichen, werden alle nachfolgenden Zeichen mithilfe der [`omnibox`](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) API an die Erweiterung gesendet. Die Erweiterung kann dann die Vorschlagsliste der Adressleiste mit ihren eigenen Vorschlägen füllen.

Wenn zwei oder mehr Erweiterungen dasselbe Keyword definieren, kontrolliert die zuletzt installierte Erweiterung das Keyword. Alle zuvor installierten Erweiterungen, die dasselbe Keyword definiert haben, können die `omnibox`-API nicht mehr verwenden.

## Beispiel

```json
"omnibox": {
  "keyword": "mdn"
}
```

## Browser-Kompatibilität

{{Compat}}
