---
title: optional_host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions
l10n:
  sourceCommit: a46ee9267e4c49ce85c780b76c0f08fc389a2553
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

Verwenden Sie den Schlüssel `optional_host_permissions`, um Laufzeitanfragen für den Zugriff zu aktivieren (Zugriff, der dem Nutzer nach der Installation Ihrer Erweiterung gewährt wird) für die APIs in Ihrer Erweiterung, die Hostdaten lesen oder modifizieren, wie z.B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen.

Weitere Informationen zur Definition von Hosts finden Sie unter [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).

Verwenden Sie die {{webextapiref("permissions")}} API, um zur Laufzeit eine optionale Host-Berechtigung anzufordern. Das Anfordern einer Host-Berechtigung kann dem Benutzer einen Dialog anzeigen, in dem er gefragt wird, ob er die Berechtigung für Ihre Erweiterung erteilen möchte.

> [!NOTE]
> [Benutzer können sich für optionale Host-Berechtigungen entscheiden oder diese ablehnen](https://support.mozilla.org/en-US/kb/manage-optional-permissions-extensions) auf der **Berechtigungen**-Registerkarte im Firefox Add-ons Manager. Erweiterungen, die optionale Host-Berechtigungen verwenden, können prüfen, welche Berechtigungen vom Benutzer erteilt wurden, mit {{webextapiref("permissions.getAll()")}} und können auf {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} lauschen, um zu wissen, wann ein Benutzer Berechtigungen erteilt oder widerruft.

## Beispiel

```json
 "optional_host_permissions": ["*://developer.mozilla.org/*"]
```

Ermöglicht Ihrer Erweiterung eine Laufzeitanfrage für privilegierten Zugriff auf Seiten unter `developer.mozilla.org` zu stellen.

## Browser-Kompatibilität

{{Compat}}
