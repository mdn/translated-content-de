---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
l10n:
  sourceCommit: 6b7f22c8cc81515d9a17d988f4bb8006357dcd59
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
      <th scope="row">Manifestversion</th>
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

Wenn ein [Entwickler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel mit der Eigenschaft "url" und "homepage_url" definiert ist, verwendet Firefox "developer.url", während Opera "homepage_url" verwendet. Chrome und Safari unterstützen den "developer"-Schlüssel nicht.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify"
```

## Kompatibilität mit Browsern

{{Compat}}