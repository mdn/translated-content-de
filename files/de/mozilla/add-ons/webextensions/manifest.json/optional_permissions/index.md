---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
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

Verwenden Sie den Schlüssel `optional_permissions`, um Berechtigungen aufzulisten, die Ihre Erweiterung zur Laufzeit anfordern soll, nachdem sie installiert wurde.

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung bei der Installation nicht benötigt, aber danach anfordern kann. Verwenden Sie zum Anfordern einer Berechtigung die API {{webextapiref("permissions.request()")}}. Beim Anfordern einer Berechtigung wird dem Benutzer ein Dialogfeld angezeigt, in dem er aufgefordert wird, Ihrer Erweiterung die Berechtigung zu erteilen, sofern nicht alle angeforderten Berechtigungen ohne Nachfrage erteilt werden.

Hinweise dazu, wie Sie Berechtigungsanfragen zur Laufzeit so gestalten, dass Benutzer ihnen mit höherer Wahrscheinlichkeit zustimmen, finden Sie unter [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

> [!NOTE]
> Benutzer können [optionale Berechtigungen im Firefox-Add-ons-Manager verwalten](https://support.mozilla.org/en-US/kb/manage-optional-permissions-extensions). Erweiterungen, die optionale Berechtigungen verwenden, können mit {{webextapiref("permissions.getAll()")}} prüfen, welche Berechtigungen der Benutzer erteilt hat, und über {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} erkennen, wann ein Benutzer Berechtigungen erteilt oder widerruft.

Der Schlüssel kann Host-Berechtigungen und API-Berechtigungen enthalten.

## Host-Berechtigungen

Dies sind dieselben Host-Berechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher sollten optionale Host-Berechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox hat `optional_host_permissions` mit Version 128 eingeführt (siehe [Bug 1766026](https://bugzil.la/1766026)) und erlaubt weiterhin die Verwendung von `optional_permissions` zur Angabe optionaler Hosts. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

## API-Berechtigungen

Die optionalen API-Berechtigungen sind:

- [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission)
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
- `userScripts` ([nur optional](#berechtigungen,_die_nur_optional_angefordert_werden_können))
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Einzelheiten zur Unterstützung in den jeweiligen Browsern finden Sie in der Kompatibilitätstabelle.

Die folgenden optionalen Berechtigungen werden ohne Nachfrage beim Benutzer erteilt:

- `activeTab`
- `cookies`
- `idle`
- `publicSuffix`
- `tabGroups`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Berechtigungen, die nur optional angefordert werden können

Optionale Berechtigungen können im Allgemeinen im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) verwendet und somit bei der Installation angefordert werden. Einige Browser unterstützen jedoch Berechtigungen, die nur optional angefordert werden können, also ausschließlich zur Laufzeit. In Firefox kann der Benutzer solche Berechtigungen beispielsweise über die [Optionsseite der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder mithilfe von {{webextapiref("permissions.request()")}} erteilen. Berechtigungen, die nur optional angefordert werden können, müssen über die API {{webextapiref("permissions.request()")}} einzeln und ohne weitere Berechtigungen angefordert werden.

Die API-Berechtigungen, die nur optional angefordert werden können, sind:

- `userScripts` (siehe [Berechtigung für userScripts](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Ermöglicht der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern. Dies gilt nur für Manifest V2.

```json
  "optional_permissions": ["tabs"]
```

Ermöglicht der Erweiterung, Zugriff auf die privilegierten Teile der `tabs`-API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Ermöglicht der Erweiterung, beide oben genannten Berechtigungen anzufordern. Dies gilt nur für Manifest V2.

## Browser-Kompatibilität

{{Compat}}
