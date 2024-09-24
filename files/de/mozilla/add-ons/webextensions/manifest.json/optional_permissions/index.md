---
title: optionale_Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 7f4dc4ea54b47cd6638d35b4456370b840125041
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

Verwenden Sie den Schlüssel `optional_permissions`, um Berechtigungen aufzulisten, die Sie zur Laufzeit nach der Installation Ihrer Erweiterung anfordern möchten.

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung bei der Installation nicht benötigt, aber nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die {{webextapiref("permissions")}} API. Das Anfordern einer Berechtigung kann dem Benutzer einen Dialog präsentieren, in dem er aufgefordert wird, die Berechtigung Ihrer Erweiterung zu erteilen.

Für Ratschläge zur Gestaltung Ihrer Anfragen für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer diese erteilen, siehe [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Ab Firefox 84 können Benutzer optionale Berechtigungen im Firefox-Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können auf [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) API-Ereignisse lauschen, um zu wissen, wann ein Benutzer diese Berechtigungen erteilt oder widerruft.

Der Schlüssel kann zwei Arten von Berechtigungen enthalten: Host-Berechtigungen und API-Berechtigungen.

## Host-Berechtigungen

Dies sind die gleichen wie die Host-Berechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher sollten optionale Host-Berechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox hat `optional_host_permissions` in der Version 128 eingeführt, siehe [Bug 1766026](https://bugzil.la/1766026), und ermöglicht weiterhin die Verwendung von `optional_permissions`, um optionale Hosts anzugeben. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

## API-Berechtigungen

Sie können hier eine der folgenden Berechtigungen einschließen, aber nicht in allen Browsern: Überprüfen Sie die Kompatibilitätstabelle für browserspezifische Details.

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

Beachten Sie, dass dies ein Teil der API-Berechtigungen ausmacht, die in [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) erlaubt sind.

Aus diesem Satz werden die folgenden Berechtigungen ohne Benachrichtigung gewährt:

- `activeTab`
- `cookies`
- `idle`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

## Beispiel

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2 ermöglichen Sie der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Ermöglichen Sie der Erweiterung, Zugriff auf die privilegierten Teile der `tabs` API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2 ermöglichen Sie der Erweiterung, beide der oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
