---
title: omnibox
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
      <th scope="row">Manifestversion</th>
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

Wenn der Benutzer dieses Schlüsselwort in die Adressleiste des Browsers eingibt, gefolgt von einem Leerzeichen, werden alle nachfolgenden Zeichen mit der [`omnibox`](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) API an die Erweiterung gesendet. Die Erweiterung wird dann in der Lage sein, die Vorschlagsliste der Adressleiste mit eigenen Vorschlägen zu füllen.

Wenn zwei oder mehr Erweiterungen dasselbe Schlüsselwort definieren, wird die zuletzt installierte Erweiterung das Schlüsselwort kontrollieren. Alle zuvor installierten Erweiterungen, die dasselbe Schlüsselwort definiert haben, werden die `omnibox` API nicht mehr verwenden können.

## Beispiel

```json
"omnibox": {
  "keyword": "mdn"
}
```

## Browser-Kompatibilität

{{Compat}}
