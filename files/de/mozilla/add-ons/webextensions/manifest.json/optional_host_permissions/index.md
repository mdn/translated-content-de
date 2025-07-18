---
title: optional_host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
      <th scope="row">Manifestversion</th>
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

Verwenden Sie den Schlüssel `optional_host_permissions`, um Laufzeitanfragen für den Zugriff zu ermöglichen (Zugriff gewährt durch den Benutzer, nachdem Ihre Erweiterung installiert wurde) für die APIs in Ihrer Erweiterung, die Hostdaten lesen oder ändern, wie z. B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenketten.

Weitere Informationen zum Definieren von Hosts finden Sie unter [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).

Verwenden Sie die {{webextapiref("permissions")}} API, um eine optionale Host-Berechtigung zur Laufzeit anzufordern. Das Anfordern einer Host-Berechtigung kann dem Benutzer einen Dialog anzeigen, in dem gefragt wird, ob er die Berechtigung für Ihre Erweiterung erteilen möchte.

## Beispiel

```json
 "optional_host_permissions": ["*://developer.mozilla.org/*"]
```

Ermöglicht Ihrer Erweiterung, eine Laufzeitanfrage für privilegierten Zugriff auf Seiten unter `developer.mozilla.org` zu stellen.

## Browser-Kompatibilität

{{Compat}}
