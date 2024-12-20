---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 7f4dc4ea54b47cd6638d35b4456370b840125041
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Pflicht</th>
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

Der [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung zur Installationszeit nicht benötigt, aber nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die {{webextapiref("permissions")}} API. Das Anfordern einer Berechtigung kann den Benutzer mit einem Dialog konfrontieren, der ihn bittet, der Erweiterung die Berechtigung zu erteilen.

Für Ratschläge zur Gestaltung Ihrer Anfrage für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer diese gewähren, siehe [Anfragen von Berechtigungen zur Laufzeit](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Ab Firefox 84 können Benutzer optionale Berechtigungen über den Firefox Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können auf die API-Ereignisse [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) hören, um zu wissen, wann ein Benutzer diese Berechtigungen gewährt oder widerruft.

Der Schlüssel kann zwei Arten von Berechtigungen enthalten: Host-Berechtigungen und API-Berechtigungen.

## Host-Berechtigungen

Diese sind dieselben wie die Host-Berechtigungen, die Sie im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) Schlüssel angeben können.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher sollten optionale Host-Berechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox führte `optional_host_permissions` in Version 128 ein, siehe [Bug 1766026](https://bugzil.la/1766026), und ermöglicht die fortgesetzte Nutzung von `optional_permissions` zur Angabe optionaler Hosts. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

## API-Berechtigungen

Sie können hier eines der folgenden Elemente einfügen, jedoch nicht in allen Browsern: Überprüfen Sie die Kompatibilitätstabelle für browserspezifische Details.

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

Beachten Sie, dass dies ein Teil der API-Berechtigungen ist, die im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) Schlüssel erlaubt sind.

Von diesem Set werden die folgenden Berechtigungen stillschweigend erteilt, ohne eine Benutzeraufforderung:

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

Ermöglichen Sie in Manifest V2 nur der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Ermöglichen Sie der Erweiterung, den Zugriff auf die privilegierten Teile der `tabs` API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Ermöglichen Sie in Manifest V2 nur der Erweiterung, beide oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
