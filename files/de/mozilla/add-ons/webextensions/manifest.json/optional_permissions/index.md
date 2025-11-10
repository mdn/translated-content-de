---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 299d98711cc631222b839bd7b084592e42241c7f
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatorisch</th>
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
"optional_permissions": [
  "webRequest"
]</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `optional_permissions`, um Berechtigungen aufzulisten, die zur Laufzeit angefordert werden sollen, nachdem Ihre Erweiterung installiert wurde.

Der [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel listet Berechtigungen auf, die Ihre Erweiterung vor der Installation benötigt. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung zur Installationszeit nicht benötigt, aber nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die {{webextapiref("permissions.request()")}} API. Das Anfordern einer Berechtigung präsentiert dem Benutzer einen Dialog, der ihn auffordert, die Berechtigung für Ihre Erweiterung zu erteilen, es sei denn, alle angeforderten Berechtigungen werden stillschweigend gewährt.

Für Ratschläge zur Gestaltung Ihrer Anfragen für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer ihnen zustimmen, siehe [Anfordern von Berechtigungen zur Laufzeit](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Ab Firefox 84 können Benutzer optionale Berechtigungen über den Firefox Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können überprüfen, welche Berechtigungen vom Benutzer erteilt wurden, mit {{webextapiref("permissions.getAll()")}} und nach {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} lauschen, um zu wissen, wann ein Benutzer Berechtigungen erteilt oder widerruft.

Der Schlüssel kann Host-Berechtigungen und API-Berechtigungen enthalten.

## Host-Berechtigungen

Diese sind dieselben wie die Host-Berechtigungen, die Sie im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)-Schlüssel angeben können.

> [!NOTE]
> Beim Verwenden von Manifest V3 oder höher sollten optionale Host-Berechtigungen mithilfe des [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssels angegeben werden. Firefox führte `optional_host_permissions` in der Version 128 ein, siehe [Bug 1766026](https://bugzil.la/1766026), und erlaubt weiterhin die Verwendung von `optional_permissions` zur Spezifikation optionaler Hosts. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

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
- `tabGroups`
- `tabs`
- `topSites`
- `userScripts` ([optional-only](#optional-only-berechtigungen))
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Überprüfen Sie die Kompatibilitätstabelle für browser-spezifische Unterstützungsdetails.

Diese optionalen Berechtigungen werden stillschweigend gewährt, ohne dass ein Benutzerdialog erfolgt:

- `activeTab`
- `cookies`
- `idle`
- `tabGroups`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Optional-only-Berechtigungen

Optionale Berechtigungen sind im Allgemeinen zur Verwendung im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)-Schlüssel verfügbar, sodass sie zur Installationszeit angefordert werden können. Einige Browser unterstützen jedoch das Konzept der optional-only-Berechtigungen, Berechtigungen, die nur zur Laufzeit angefordert werden können. Zum Beispiel können in Firefox optionale Berechtigungen vom Benutzer von der [Optionsseite der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder durch die Verwendung von {{webextapiref("permissions.request()")}} gewährt werden. Optional-only-Berechtigungen müssen einzeln und alleine über die {{webextapiref("permissions.request()")}} API angefordert werden.

Die optional-only API-Berechtigungen sind:

- `userScripts` (siehe [userScripts permission](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, ermöglicht es der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Ermöglicht der Erweiterung, Zugriff auf die privilegierten Teile der `tabs` API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, ermöglicht es der Erweiterung, beide oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
