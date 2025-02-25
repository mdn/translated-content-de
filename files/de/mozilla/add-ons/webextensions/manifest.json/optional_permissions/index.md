---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
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
"optional_permissions": [
  "webRequest"
]</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `optional_permissions`, um Berechtigungen aufzulisten, die Sie zur Laufzeit anfordern möchten, nachdem Ihre Erweiterung installiert wurde.

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung zur Installationszeit nicht benötigt, aber nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die {{webextapiref("permissions.request()")}} API. Das Anfordern einer Berechtigung präsentiert dem Benutzer einen Dialog, in dem dieser aufgefordert wird, der Erweiterung die Berechtigung zu erteilen, es sei denn, alle angeforderten Berechtigungen werden stillschweigend gewährt.

Für Ratschläge zur Gestaltung Ihrer Anfragen zur Laufzeiterteilung von Berechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer diese gewähren, siehe [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Ab Firefox 84 können Benutzer optionale Berechtigungen über den Firefox Add-ons Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können die vom Benutzer gewährten Berechtigungen mit {{webextapiref("permissions.getAll()")}} überprüfen und auf {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} lauschen, um zu erfahren, wann ein Benutzer Berechtigungen erteilt oder widerruft.

Der Schlüssel kann Host-Berechtigungen und API-Berechtigungen enthalten.

## Host-Berechtigungen

Diese sind dieselben wie die Host-Berechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Beim Verwenden von Manifest V3 oder höher sollten optionale Host-Berechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox hat `optional_host_permissions` in der Version 128 eingeführt, siehe [Bug 1766026](https://bugzil.la/1766026), und erlaubt weiterhin die Nutzung von `optional_permissions`, um optionale Hosts anzugeben. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

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
- 'userScripts' ([nur optional](#nur_optionale_berechtigungen))
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Überprüfen Sie die Kompatibilitätstabelle für browserspezifische Unterstützung.

Diese optionalen Berechtigungen werden ohne Benutzeraufforderung stillschweigend gewährt:

- `activeTab`
- `cookies`
- `idle`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Nur optionale Berechtigungen

Optionale Berechtigungen sind im Allgemeinen zur Verwendung im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) verfügbar, sodass sie zur Installationszeit angefordert werden können. Einige Browser unterstützen jedoch das Konzept von nur optionalen Berechtigungen, die nur zur Laufzeit angefordert werden können. Beispielsweise können in Firefox nur optionale Berechtigungen vom Benutzer von der [Optionsseite der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) aus oder mit {{webextapiref("permissions.request()")}} gewährt werden. Nur optionale Berechtigungen müssen einzeln und allein über die {{webextapiref("permissions.request()")}} API angefordert werden.

Die nur optionalen API-Berechtigungen sind:

- 'userScripts' (siehe [userScripts Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, ermöglichen Sie der Erweiterung, für privilegierten Zugriff auf Seiten unter developer.mozilla.org zu fragen.

```json
  "optional_permissions": ["tabs"]
```

Ermöglichen Sie der Erweiterung, für Zugriff auf die privilegierten Teile der `tabs` API zu fragen.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, ermöglichen Sie der Erweiterung, beide oben genannten Berechtigungen zu erfragen.

## Browser-Kompatibilität

{{Compat}}
