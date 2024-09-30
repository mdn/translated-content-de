---
title: optional_host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions
l10n:
  sourceCommit: 965d924679c5455c10615dbb7a5994f7a6b6ab15
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>3 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json;">
"optional_host_permissions": [
  "*://developer.mozilla.org/*",
  "*://*.example.org/*"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `optional_host_permissions`, um zur Laufzeit Zugriffsanfragen für APIs in Ihrer Erweiterung zu ermöglichen, die Hostdaten lesen oder ändern, wie zum Beispiel {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}}, und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenketten.

Siehe [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für weitere Informationen zur Definition von Hosts.

Verwenden Sie die {{webextapiref("permissions")}} API, um zur Laufzeit um eine optionale Hostberechtigung zu bitten. Das Anfordern einer Hostberechtigung kann den Benutzer mit einem Dialogfeld konfrontieren, in dem gefragt wird, ob er die Berechtigung Ihrer Erweiterung erteilen möchte.

## Beispiel

```json
 "optional_host_permissions": ["*://developer.mozilla.org/*"]
```

Ermöglicht es Ihrer Erweiterung, zur Laufzeit eine privilegierte Zugriffsanfrage zu Seiten unter `developer.mozilla.org` zu stellen.

## Browser-Kompatibilität

{{Compat}}
