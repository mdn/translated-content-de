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
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest Version</th>
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

Verwenden Sie den Schlüssel `optional_permissions`, um Berechtigungen aufzulisten, die Sie während der Laufzeit anfordern möchten, nachdem Ihre Erweiterung installiert wurde.

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung zur Installationszeit nicht benötigt, die jedoch nach der Installation angefordert werden können. Um eine Berechtigung anzufordern, verwenden Sie die {{webextapiref("permissions")}} API. Das Anfordern einer Berechtigung kann dem Benutzer ein Dialogfeld anzeigen, in dem er aufgefordert wird, Ihrer Erweiterung die Berechtigung zu erteilen.

Für Ratschläge zur Gestaltung Ihrer Anfragen für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer ihnen zustimmen, sehen Sie [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Beginnend mit Firefox 84 können Benutzer optionale Berechtigungen im Firefox Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, können auf API-Ereignisse wie [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) hören, um zu wissen, wann ein Benutzer diese Berechtigungen gewährt oder widerruft.

Der Schlüssel kann zwei Arten von Berechtigungen enthalten: Hostberechtigungen und API-Berechtigungen.

## Hostberechtigungen

Diese sind die gleichen wie die Hostberechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher sollten optionale Hostberechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox hat `optional_host_permissions` in der Version 128 eingeführt, siehe [Bug 1766026](https://bugzil.la/1766026), und ermöglicht weiterhin die Verwendung von `optional_permissions`, um optionale Hosts anzugeben. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

## API-Berechtigungen

Sie können die folgenden Berechtigungen hier einschließen, jedoch nicht in allen Browsern: Überprüfen Sie die Kompatibilitätstabelle für browserspezifische Details.

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

Beachten Sie, dass dies ein Teil der in [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) erlaubten API-Berechtigungen ist.

Von diesem Satz werden folgende Berechtigungen stillschweigend erteilt, ohne eine Benutzeraufforderung:

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

Nur in Manifest V2: Ermöglichen Sie der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Ermöglichen Sie der Erweiterung, Zugriff auf die privilegierten Teile der `tabs` API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2: Ermöglichen Sie der Erweiterung, beide oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
