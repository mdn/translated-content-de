---
title: optional_host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Verbindlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>3 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"optional_host_permissions": [
  "*://developer.mozilla.org/*",
  "*://*.example.org/*"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `optional_host_permissions`, um Laufzeitanfragen für den Zugriff (vom Benutzer nach der Installation Ihrer Erweiterung gewährt) für die APIs in Ihrer Erweiterung zu aktivieren, die Hostdaten lesen oder ändern, wie z.B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Strings.

Lesen Sie [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für weitere Informationen zur Definition von Hosts.

Verwenden Sie die {{webextapiref("permissions")}}-API, um eine optionale Hostberechtigung zur Laufzeit anzufordern. Das Anfordern einer Hostberechtigung kann dem Benutzer ein Dialogfeld anzeigen, in dem er gefragt wird, ob er die Berechtigung für Ihre Erweiterung erteilen möchte.

## Beispiel

```json
 "optional_host_permissions": ["*://developer.mozilla.org/*"]
```

Ermöglicht Ihrer Erweiterung, eine Laufzeitanfrage für privilegierten Zugriff auf Seiten unter `developer.mozilla.org` zu stellen.

## Browser-Kompatibilität

{{Compat}}
