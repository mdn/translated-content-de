---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 509fa54c6dd5ff8c4719a3a7db45917a68718765
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
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"optional_permissions": [
  "webRequest"
]</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `optional_permissions`-Schlüssel, um Berechtigungen aufzuführen, die Sie zur Laufzeit anfordern möchten, nachdem Ihre Erweiterung installiert wurde.

Der [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung nicht zur Installationszeit, sondern nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die {{webextapiref("permissions.request()")}}-API. Beim Anfordern einer Berechtigung wird dem Benutzer ein Dialogfeld angezeigt, in dem er aufgefordert wird, die Berechtigung für Ihre Erweiterung zu erteilen, es sei denn, alle angeforderten Berechtigungen werden lautlos gewährt.

Für Ratschläge zur Gestaltung Ihrer Anfrage für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer ihnen zustimmen, siehe [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Ab Firefox 84 können Benutzer optionale Berechtigungen über den Firefox-Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können die vom Benutzer gewährten Berechtigungen mit {{webextapiref("permissions.getAll()")}} überprüfen und auf {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} hören, um zu erfahren, wann ein Benutzer Berechtigungen erteilt oder widerruft.

Der Schlüssel kann Hostberechtigungen und API-Berechtigungen enthalten.

## Hostberechtigungen

Dies sind dieselben wie die Hostberechtigungen, die Sie im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)-Schlüssel angeben können.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher sollten optionale Hostberechtigungen mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Schlüssel im Manifest angegeben werden. Firefox führte `optional_host_permissions` in der Version 128 ein, siehe [Bug 1766026](https://bugzil.la/1766026), und ermöglicht die weiterhin Nutzung von `optional_permissions`, um optionale Hosts anzugeben. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

## API-Berechtigungen

Die optionalen API-Berechtigungen sind:

- `activeTab`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `cookies`
- `debugger`
- `declarativeNetRequest`
- `declarativeNetRequestFeedback`
- `declarativeNetRequestWithHostAccess`
- `devtools`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `idle`
- `management`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `proxy`
- `scripting`
- `search`
- `sessions`
- `tabHide`
- `tabs`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Überprüfen Sie die Kompatibilitätstabelle für browserspezifische Unterstützungsdetails.

Diese optionalen Berechtigungen werden lautlos gewährt, ohne Benutzeraufforderung:

- `activeTab`
- `cookies`
- `idle`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Nur optionale Berechtigungen

Optionale Berechtigungen sind im Allgemeinen zur Verwendung im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)-Schlüssel verfügbar, sodass sie zur Installationszeit angefordert werden können. Einige Browser unterstützen jedoch das Konzept von nur optionalen Berechtigungen, die nur zur Laufzeit mit der {{webextapiref("permissions.request()")}}-API angefordert werden können. Zusätzlich müssen nur optionale Berechtigungen einzeln und allein über die {{webextapiref("permissions.request()")}}-API angefordert werden.

> [!NOTE]
> Zum Zeitpunkt des Schreibens, Dezember 2024, waren keine nur optionalen Berechtigungen allgemein verfügbar.

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2: Ermöglichen Sie der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Ermöglichen Sie der Erweiterung, Zugriff auf die privilegierten Teile der `tabs`-API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2: Ermöglichen Sie der Erweiterung, beide oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
