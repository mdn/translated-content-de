---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

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

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung zur Installationszeit nicht benötigt, aber nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die API {{webextapiref("permissions.request()")}}. Das Anfordern einer Berechtigung zeigt dem Benutzer ein Dialogfeld an, in dem er aufgefordert wird, der Erweiterung die Berechtigung zu erteilen, es sei denn, alle angeforderten Berechtigungen werden stillschweigend gewährt.

Für Ratschläge zur Gestaltung Ihrer Anfrage nach Berechtigungen zur Laufzeit, um die Wahrscheinlichkeit zu maximieren, dass Benutzer sie gewähren, siehe [Fordern Sie Berechtigungen zur Laufzeit an](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

> [!NOTE]
> Benutzer können [optionale Berechtigungen über den Firefox Add-ons-Manager verwalten](https://support.mozilla.org/en-US/kb/manage-optional-permissions-extensions). Erweiterungen, die optionale Berechtigungen verwenden, können die vom Benutzer gewährten Berechtigungen mit {{webextapiref("permissions.getAll()")}} überprüfen und auf {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} hören, um zu wissen, wann ein Benutzer Berechtigungen gewährt oder widerruft.

Der Schlüssel kann Host-Berechtigungen und API-Berechtigungen enthalten.

## Host-Berechtigungen

Diese sind identisch mit den Host-Berechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher sollten optionale Host-Berechtigungen mit dem Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) im Manifest angegeben werden. Firefox hat `optional_host_permissions` in Version 128 eingeführt, siehe [Fehler 1766026](https://bugzil.la/1766026), und erlaubt weiterhin die Verwendung von `optional_permissions`, um optionale Hosts anzugeben. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

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
- `publicSuffix`
- `scripting`
- `search`
- `sessions`
- `tabHide`
- `tabGroups`
- `tabs`
- `topSites`
- `userScripts` ([optional-only](#nur-optionale_berechtigungen))
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Überprüfen Sie die Kompatibilitätstabelle für detailspezifische Unterstützung der Browser.

Diese optionalen Berechtigungen werden stillschweigend gewährt, ohne eine Benutzeraufforderung:

- `activeTab`
- `cookies`
- `idle`
- `publicSuffix`
- `tabGroups`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Nur-optionale Berechtigungen

Optionale Berechtigungen sind im Allgemeinen zur Verwendung im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) verfügbar, so dass sie zur Installationszeit angefordert werden können. Einige Browser unterstützen jedoch das Konzept der nur-optionalen Berechtigungen, Berechtigungen, die nur zur Laufzeit angefordert werden können. Zum Beispiel können in Firefox nur-optionale Berechtigungen vom Benutzer von der [Optionsseite der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) aus oder mithilfe von {{webextapiref("permissions.request()")}} gewährt werden. Nur-optionale Berechtigungen müssen einzeln und allein über die API {{webextapiref("permissions.request()")}} angefordert werden.

Die nur-optionalen API-Berechtigungen sind:

- `userScripts` (siehe [userScripts permission](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, ermöglichen Sie der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Erlauben Sie der Erweiterung, um Zugriff auf die privilegierten Teile der `tabs` API zu bitten.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, ermöglichen Sie der Erweiterung, um beide der oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
