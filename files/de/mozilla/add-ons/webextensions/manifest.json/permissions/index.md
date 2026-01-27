---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: bdb21cdfa9a7dc7c65222d2219aa2d96543d8a2e
---

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
      <th scope="row">Manifestversion</th>
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Rechte für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darauf hinweisen, dass die Erweiterung bestimmte Privilegien anfordert, und ihn um Bestätigung bitten. Der Browser kann dem Benutzer auch gestatten, die Privilegien einer Erweiterung nach der Installation zu prüfen. Da die Anfrage von Privilegien die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, sollte die Anforderung von Privilegien sorgfältig überlegt werden. Beispielsweise möchten Sie vermeiden, unnötige Berechtigungen anzufordern, und es könnte nützlich sein, in der Beschreibung Ihrer Erweiterung im Store Informationen darüber bereitzustellen, warum Sie diese Berechtigungen anfordern. Weitere Informationen zu den zu berücksichtigenden Themen finden Sie im Artikel [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschau von Berechtigungsanfragen finden Sie unter [Testen von Berechtigungsanfragen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Website des Extension Workshops.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest V3 oder höher im Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit und welche Manifestversion Ihre Erweiterung verwendet, anfordern möchten.
>
> - Manifest V2:
>   - Anforderung zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Anforderung zur Installationszeit mit dem Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Anforderung zur Laufzeit mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Host-Berechtigungen werden als [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` lauten.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen.
  > [!NOTE]
  > Für Manifest V2-Erweiterungen nur in Firefox beinhalten diese Zugriffe Anfragen von Content-Skripten.
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Fähigkeit, [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Stile programmatisch in Seiten von diesen Ursprüngen einzufügen.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Fähigkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, solange auch die Berechtigung `"cookies"` enthalten ist.
- Umgehung des Tracking-Schutzes für Seiten der Erweiterung, bei denen ein Host als vollständige Domäne oder mit Platzhaltern angegeben ist. Content-Skripte können jedoch nur den Tracking-Schutz für Hosts umgehen, die mit einer vollständigen Domäne angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der folgende Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch durch Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} erhalten:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter angegeben, und jedes Schlüsselwort benennt eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

Diese Berechtigungen sind ab Manifest V2 und höher verfügbar, sofern nicht anders angegeben:

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
- `devtools` (Diese Berechtigung wird implizit gewährt, wenn der Manifest-Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) vorhanden ist.)
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
- 'userScripts' (siehe [userScripts-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung einfach Zugriff auf die API, mit folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo` Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} einbeziehen möchten. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht Ihnen die Verwendung des `"blocking"` Arguments, sodass Sie [Anfragen modifizieren und stornieren können](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- `downloads.open` ermöglicht Ihnen die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht Ihnen die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## ActiveTab-Berechtigung

Wenn eine Erweiterung die Berechtigung `"activeTab"` hat, wird der Erweiterung, sobald ein Benutzer mit der Erweiterung interagiert, nur für den aktiven Tab zusätzliche Privilegien gewährt.

Diese Interaktionen sind als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bekannt und umfassen den Benutzer:

- Klick auf die [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung.
- Auswahl eines Kontextmenüeintrags der Erweiterung.
- Aktivieren einer von der Erweiterung definierten Tastenkombination (ab Firefox 63).
- Klick auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.
- Klick auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) (ab Firefox 142).

Die zusätzlichen Privilegien sind:

- Die Fähigkeit, JavaScript oder CSS programmatisch in den Tab einzufügen (siehe [Laden von Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen geben zu müssen. Viele Erweiterungen möchten "etwas mit der aktuellen Seite tun, wenn der Benutzer es verlangt".

Ein Beispiel: Eine Erweiterung möchte ein Skript in die aktuelle Seite ausführen, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Das würde der Erweiterung jedoch mehr Macht geben als nötig: sie könnte nun Skripte in _jedem Tab_, _jederzeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab- / Daten zugreifen, die da waren, als die Benutzerinteraktion stattfand (z. B. der Klick). Wenn der aktive Tab wegnavigiert (z. B. durch Ladevorgang oder ein anderes Ereignis), gibt die Berechtigung Ihnen keinen weiteren Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht Skripting-Zugriff auf die oberste Seite des Tabs und Frames mit dem gleichen Ursprung. Das Ausführen von Skripten oder Modifizieren von Stilen in [Cross-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich werden [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die für bestimmte Sites und URI-Schemata gelten, ebenfalls angewendet.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann mit der {{webextAPIref("menus")}} API ein Menüelement erstellen, das angezeigt wird, wenn der Benutzer im Tabkontext klickt. Das heißt, ein Menü auf einem Element im Tabstrip, das es dem Benutzer ermöglicht, von einem Tab zu einem anderen zu wechseln. Wenn der Benutzer auf dieses Menü klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, auch wenn es nicht der aktive Tab ist (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Zwei Berechtigungen ermöglichen einer Erweiterung die Interaktion mit der Zwischenablage:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`.
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`.

Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzte Speicherung

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, jedes von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Kontingent zu überschreiten.
- Ermöglicht Erweiterungen in Firefox, ohne dass der Browser den Benutzer um Erlaubnis fragt, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, sobald die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2: Privilegierten Zugriff auf Seiten unter `developer.mozilla.org` anfordern.

```json
  "permissions": ["tabs"]
```

Zugriff auf die privilegierten Teile der `tabs` API anfordern.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2: Beide oben genannten Berechtigungen anfordern.

## Browser-Kompatibilität

{{Compat}}
