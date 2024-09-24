---
title: Omnibox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
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

Verwenden Sie den `omnibox`-Schlüssel, um ein Omnibox-Schlüsselwort für Ihre Erweiterung zu definieren.

Wenn der Benutzer dieses Schlüsselwort in die Adressleiste des Browsers eingibt, gefolgt von einem Leerzeichen, werden alle nachfolgenden Zeichen über die [`omnibox`](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) API an die Erweiterung gesendet. Die Erweiterung kann dann die Vorschlagsliste der Adressleiste mit eigenen Vorschlägen füllen.

Wenn zwei oder mehr Erweiterungen dasselbe Schlüsselwort definieren, erhält die zuletzt installierte Erweiterung die Kontrolle über das Schlüsselwort. Alle zuvor installierten Erweiterungen, die dasselbe Schlüsselwort definiert hatten, können die `omnibox`-API nicht mehr verwenden.

## Beispiel

```json
"omnibox": {
  "keyword": "mdn"
}
```

## Browser-Kompatibilität

{{Compat}}
