---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
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

Der Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet Berechtigungen auf, die Ihre Erweiterung benötigt, bevor sie installiert werden kann. Im Gegensatz dazu listet `optional_permissions` Berechtigungen auf, die Ihre Erweiterung nicht zum Installationszeitpunkt benötigt, aber nach der Installation anfordern kann. Um eine Berechtigung anzufordern, verwenden Sie die API {{webextapiref("permissions.request()")}}. Das Anfordern einer Berechtigung zeigt dem Benutzer einen Dialog an, der ihn bittet, die Berechtigung für Ihre Erweiterung zu erteilen, es sei denn, alle angeforderten Berechtigungen werden stillschweigend gewährt.

Für Ratschläge, wie Sie Ihre Anfrage für Laufzeitberechtigungen gestalten können, um die Wahrscheinlichkeit zu maximieren, dass Benutzer diese erteilen, lesen Sie [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

> [!NOTE]
> Benutzer können [optionale Berechtigungen über den Firefox-Add-ons-Manager verwalten](https://support.mozilla.org/en-US/kb/manage-optional-permissions-extensions). Erweiterungen, die optionale Berechtigungen verwenden, können die vom Benutzer gewährten Berechtigungen mit {{webextapiref("permissions.getAll()")}} überprüfen und auf {{webextapiref("permissions.onAdded")}} und {{webextapiref("permissions.onRemoved")}} hören, um zu erfahren, wann ein Benutzer Berechtigungen erteilt oder widerruft.

Der Schlüssel kann Hostberechtigungen und API-Berechtigungen enthalten.

## Hostberechtigungen

Dies sind dieselben Hostberechtigungen, die Sie im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) angeben können.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher sollten optionale Hostberechtigungen mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) angegeben werden. Firefox hat `optional_host_permissions` in Version 128 eingeführt, siehe [Bug 1766026](https://bugzil.la/1766026), und erlaubt die weitere Nutzung von `optional_permissions` zur Angabe optionaler Hosts. Die Verwendung von `optional_host_permissions` wird jedoch empfohlen.

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
- `userScripts` ([optional-only](#nur-optional-berechtigungen))
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Überprüfen Sie die Kompatibilitätstabelle für detailspezifische Unterstützung.

Diese optionalen Berechtigungen werden stillschweigend erteilt, ohne eine Benutzerabfrage:

- `activeTab`
- `cookies`
- `idle`
- `tabGroups`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

### Nur-optional-Berechtigungen

Optionale Berechtigungen stehen im Allgemeinen für den Einsatz im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zur Verfügung, sodass sie zur Installationszeit angefordert werden können. Einige Browser unterstützen jedoch das Konzept von nur-optional-Berechtigungen, Berechtigungen, die nur zur Laufzeit angefordert werden können. In Firefox können Benutzer z. B. nur-optional-Berechtigungen von der [Optionen-Seite der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder mit {{webextapiref("permissions.request()")}} erteilen. Nur-optional-Berechtigungen müssen einzeln und allein über die API {{webextapiref("permissions.request()")}} angefordert werden.

Die nur-optional API-Berechtigungen sind:

- `userScripts` (siehe [userScripts-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))

## Beispiele

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2 ermöglicht es der Erweiterung, privilegierten Zugriff auf Seiten unter developer.mozilla.org anzufordern.

```json
  "optional_permissions": ["tabs"]
```

Ermöglicht der Erweiterung, den Zugriff auf die privilegierten Teile der `tabs` API anzufordern.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2 ermöglicht es der Erweiterung, beide oben genannten Berechtigungen anzufordern.

## Browser-Kompatibilität

{{Compat}}
