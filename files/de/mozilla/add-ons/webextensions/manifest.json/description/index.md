---
title: description
slug: Mozilla/Add-ons/WebExtensions/manifest.json/description
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

<table class="fullwidth-table">
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
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"description": "Replaces pictures with pictures of cats."</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Eine kurze Beschreibung der Erweiterung, die in der Benutzeroberfläche des Browsers angezeigt werden soll. In Chromium-Browsern kann dieser Wert bis zu 132 Zeichen lang sein. Das Limit kann in anderen Browsern abweichen.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"description": "Replaces pictures with pictures of cats."
```

## Browser-Kompatibilität

{{Compat}}
