---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
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
"permissions": [
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `permissions`, um besondere Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel enthält ein Array von Zeichenfolgen, von denen jede eine Berechtigungsanfrage darstellt.

Wenn Sie über diesen Schlüssel Berechtigungen anfordern, kann der Browser die Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und sie um Bestätigung bitten. Der Browser kann Benutzern auch ermöglichen, die Berechtigungen einer Erweiterung nach der Installation einzusehen. Da angeforderte Berechtigungen die Bereitschaft zur Installation Ihrer Erweiterung beeinflussen können, sollten Sie sorgfältig abwägen, welche Berechtigungen Sie benötigen. Vermeiden Sie beispielsweise unnötige Berechtigungen und erläutern Sie in der Beschreibung Ihrer Erweiterung im Store, warum Sie Berechtigungen anfordern. Weitere Informationen zu den dabei zu berücksichtigenden Aspekten finden Sie im Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen dazu, wie Sie Berechtigungsanfragen testen und in der Vorschau anzeigen können, finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Website Extension Workshop.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2; ab Manifest V3 werden Host-Berechtigungen im Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) angegeben.)
- API-Berechtigungen
- die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission)

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie bei der Installation oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Bei der Installation über diesen Manifest-Schlüssel (`permissions`).
>   - Zur Laufzeit über den Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Bei der Installation über den Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Zur Laufzeit über den Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Host-Berechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben. Jedes Muster bezeichnet eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Eine Host-Berechtigung könnte beispielsweise `"*://developer.mozilla.org/*"` lauten.

Zu den zusätzlichen Berechtigungen gehören:

- Zugriff über [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) auf diese Ursprünge ohne Einschränkungen für ursprungsübergreifende Anfragen.
  > [!NOTE]
  > Bei Manifest-V2-Erweiterungen in Firefox gilt dies auch für Anfragen aus Content-Skripten.
- Die Möglichkeit, ohne die Berechtigung „tabs“ tabspezifische Metadaten wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten auszulesen.
- Die Möglichkeit, [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Stile programmgesteuert in Seiten einzufügen, die von diesen Ursprüngen bereitgestellt werden.
- Die Möglichkeit, für diese Hosts Ereignisse der API {{webextAPIref("webRequest")}} zu empfangen.
- Die Möglichkeit, über die API {{webextAPIref("cookies")}} auf Cookies für den jeweiligen Host zuzugreifen, sofern die API-Berechtigung `"cookies"` vorliegt.
- Die Umgehung des Tracking-Schutzes für Erweiterungsseiten, wenn ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Content-Skripte können den Tracking-Schutz dagegen nur für Hosts umgehen, die als vollständige Domain angegeben sind.
- Die Möglichkeit, WebAuthn-Anmeldedaten zu erstellen und abzurufen. Weitere Informationen finden Sie unter [WebAuthn API in Web-Erweiterungen verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api).

## API-Berechtigungen

API-Berechtigungen geben Sie als Schlüsselwörter an. Jedes Schlüsselwort bezeichnet eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

Sofern nicht anders angegeben, sind diese Berechtigungen in Manifest V2 und höher verfügbar:

- `activeTab`
- `alarms`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `captivePortal`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `contextualIdentities`
- `cookies`
- `debugger`
- `declarativeNetRequest`
- `declarativeNetRequestFeedback`
- `declarativeNetRequestWithHostAccess`
- `devtools` (Diese Berechtigung wird implizit erteilt, wenn der Manifest-Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) vorhanden ist.)
- `dns`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `identity`
- `idle`
- `management`
- `menus`
- `menus.overrideContext`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `publicSuffix`
- `proxy`
- `scripting`
- `search`
- `sessions`
- `storage`
- `tabGroups`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `unlimitedStorage`
- `userScripts` (siehe [userScripts-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung lediglich Zugriff auf die API. Es gibt jedoch folgende Ausnahmen:

- `tabs` gewährt Ihnen ohne [Host-Berechtigungen](#host-berechtigungen) Zugriff auf [privilegierte Teile der `tabs`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie `tabs` auch dann, wenn Sie `url` im Parameter `queryInfo` für {{webextAPIref("tabs/query", "tabs.query()")}} angeben möchten. Den übrigen Teil der `tabs`-API kann die Erweiterung ohne Berechtigungsanfrage verwenden.
  - Ab Firefox 86 und Chrome 50 können statt der Berechtigung „tabs“ auch passende [Host-Berechtigungen](#host-berechtigungen) verwendet werden.

- Mit `webRequestBlocking` können Sie das Argument `"blocking"` verwenden und dadurch [Anfragen ändern und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- Mit `downloads.open` können Sie die API {{WebExtAPIRef("downloads.open()")}} verwenden.
- Mit `tabHide` können Sie die API {{WebExtAPIRef("tabs.hide()")}} verwenden.

## activeTab-Berechtigung

Wenn ein Benutzer mit einer Erweiterung interagiert, die über die Berechtigung `activeTab` verfügt, erhält die Erweiterung zusätzliche Berechtigungen für den Tab, in dem die Interaktion stattgefunden hat. So kann eine Erweiterung auf Wunsch des Benutzers auf der aktuellen Seite tätig werden, ohne umfassende [Host-Berechtigungen](#host-berechtigungen) anzufordern.

Einzelheiten dazu, wie die Berechtigung erteilt wird, was sie ermöglicht, wann der Zugriff endet und wie sich das Verhalten zwischen Browsern unterscheidet, finden Sie auf der Seite zur [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

## Zugriff auf die Zwischenablage

Zwei Berechtigungen ermöglichen einer Erweiterung die Interaktion mit der Zwischenablage:

- `clipboardWrite`
  - : Mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")` in die Zwischenablage schreiben.
- `clipboardRead`
  - : Mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")` aus der Zwischenablage lesen.

Weitere Informationen finden Sie unter [Mit der Zwischenablage interagieren](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die Berechtigung `unlimitedStorage`:

- Ermöglicht Erweiterungen, die von der API {{WebExtAPIRef("storage/local", "storage.local")}} festgelegten Speicherplatzbegrenzungen zu überschreiten.
- Ermöglicht Erweiterungen in Firefox, eine [„persistente“ IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser die Benutzer beim Erstellen der Datenbank um Erlaubnis bittet.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2: Fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

```json
  "permissions": ["tabs"]
```

Fordern Sie Zugriff auf die privilegierten Teile der `tabs`-API an.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2: Fordern Sie beide oben genannten Berechtigungen an.

## Browser-Kompatibilität

{{Compat}}
