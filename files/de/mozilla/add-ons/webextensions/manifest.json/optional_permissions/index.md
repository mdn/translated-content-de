---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
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

Verwenden Sie den Schlüssel `optional_permissions`, um Berechtigungen aufzulisten, die Sie zur Laufzeit anfordern möchten, nachdem Ihre Erweiterung installiert wurde.

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung zur Installationszeit nicht benötigt, die aber nach der Installation angefordert werden können. Um eine Berechtigung anzufordern, verwenden Sie die API {{webextapiref("permissions.request()")}}. Das Anfordern einer Berechtigung präsentiert dem Benutzer einen Dialog, der ihn auffordert, die Berechtigung für Ihre Erweiterung zu erteilen, es sei denn, es werden alle angeforderten Berechtigungen stillschweigend gewährt.

Für Ratschläge zum Entwerfen Ihrer Anforderung für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer sie gewähren, siehe [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Ab Firefox 84 können Benutzer optionale Berechtigungen über den Firefox-Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können mit {{webextapiref("permissions.getAll()")}} prüfen, welche Berechtigungen vom Benutzer erteilt wurden, und {webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} anhören, um zu wissen, wann ein Benutzer Berechtigungen erteilt oder entzieht.

Der Schlüssel kann Host-Berechtigungen und API-Berechtigungen enthalten.

## Host-Berechtigungen

Diese sind dieselben wie die Host-Berechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher sollten optionale Host-Berechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox führte `optional_host_permissions` in Release 128 ein, siehe [Fehler 1766026](https://bugzil.la/1766026), und erlaubt weiterhin die Nutzung von `optional_permissions`, um optionale Hosts anzugeben. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

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
- 'userScripts' ([nur optional](#nur_optionale_berechtigungen))
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Überprüfen Sie die Kompatibilitätstabelle für Details zur browser-spezifischen Unterstützung.

Diese optionalen Berechtigungen werden stillschweigend gewährt, ohne Benutzerprompt:

- `activeTab`
- `cookies`
- `idle`
- `tabGroups`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Nur optionale Berechtigungen

Optionale Berechtigungen sind generell für die Verwendung im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) verfügbar, sodass sie zur Installationszeit angefordert werden können. Einige Browser unterstützen jedoch das Konzept von nur optionalen Berechtigungen, d.h. Berechtigungen, die nur zur Laufzeit angefordert werden können. In Firefox können beispielsweise nur optionale Berechtigungen vom Benutzer über die [Optionen-Seite der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder über {{webextapiref("permissions.request()")}} gewährt werden. Nur optionale Berechtigungen müssen individuell und einzeln über die API {{webextapiref("permissions.request()")}} angefordert werden.

Die nur optionalen API-Berechtigungen sind:

- 'userScripts' (siehe [userScripts-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, erlauben Sie der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Erlauben Sie der Erweiterung, Zugriff auf die privilegierten Teile der `tabs` API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, erlauben Sie der Erweiterung, beide obigen Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
