---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
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
"homepage_url": "https://example.org/my-addon"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

URL für die Startseite der Erweiterung.

Wenn ein [Entwickler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel mit der Eigenschaft "url" und "homepage_url" definiert sind, verwendet Firefox "developer.url", während Opera "homepage_url" verwendet. Chrome und Safari unterstützen den "developer"-Schlüssel nicht.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify"
```

## Browser-Kompatibilität

{{Compat}}
