---
title: description
slug: Mozilla/Add-ons/WebExtensions/manifest.json/description
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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
"description": "Ersetzt Bilder durch Bilder von Katzen."</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Eine kurze Beschreibung der Erweiterung, die für die Anzeige in der Benutzeroberfläche des Browsers vorgesehen ist. In Firefox und Chrome kann dieser Wert bis zu 132 Zeichen lang sein. Das Limit in anderen Browsern kann abweichen.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"description": "Replaces pictures with pictures of cats."
```

## Browser-Kompatibilität

{{Compat}}
