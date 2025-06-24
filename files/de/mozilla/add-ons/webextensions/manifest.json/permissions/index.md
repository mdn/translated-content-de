---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
"permissions": [
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `permissions`-Schlüssel, um besondere Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Privilegien anfordert, und ihn bitten, zu bestätigen, dass er bereit ist, diese Privilegien zu gewähren. Der Browser kann dem Benutzer auch erlauben, die Privilegien einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage zur Gewährung von Privilegien die Bereitschaft der Benutzer, Ihre Erweiterung zu installieren, beeinflussen kann, sollte die Beantragung von Privilegien sorgfältig überlegt werden. Beispielsweise sollten Sie unnötige Berechtigungen vermeiden und eventuell Informationen darüber bereitstellen, warum Sie Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Weitere Informationen zu den Überlegungen, die Sie anstellen sollten, finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschauen von Berechtigungsanfragen finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab` Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationszeitliche Anfrage mit diesem (`permissions`) Manifest-Schlüssel.
>   - Laufzeitliche Anfrage mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Installationszeitliche Anfrage mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Laufzeitliche Anfrage mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Herkunftsbeschränkungen (auch für Anfragen, die aus Inhalts-Skripten erstellt werden)
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung auszulesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Möglichkeit, [Inhalts-Skripte zu injizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Stile programmgesteuert in Seiten von diesen Ursprüngen zu laden
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Möglichkeit, Cookies für diesen Host unter Verwendung der {{webextAPIref("cookies")}} API zuzugreifen, vorausgesetzt, die `"cookies"` API-Berechtigung ist ebenfalls enthalten
- das Umgehen von Tracking-Schutz für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhalts-Skripte können jedoch Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der folgende Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmgesteuert abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter angegeben, und jedes Schlüsselwort benennt eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

Diese Berechtigungen sind in Manifest V2 und höher verfügbar, sofern nicht anders angegeben:

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
- `devtools` (Diese Berechtigung wird implizit gewährt, wenn der [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Manifest-Schlüssel vorhanden ist.)
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
- 'userScripts' (siehe [userScripts permission](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung nur Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo` Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} verwenden möchten. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können auch passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs" Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"` Arguments, sodass Sie [Anfragen modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` ermöglicht die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, dann wird der Erweiterung beim Interagieren des Benutzers mit der Erweiterung nur auf dem aktiven Tab zusätzliche Privilegien gewährt.

"Benutzerinteraktion" umfasst:

- Der Benutzer klickt auf die {{webextAPIref("browserAction", "Browseraktion", "", 1)}} oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung
- Der Benutzer wählt das Kontextmenüelement aus
- Der Benutzer aktiviert eine Tastenkombination, die von der Erweiterung definiert ist

Die zusätzlichen Privilegien sind:

- Die Möglichkeit, JavaScript oder CSS programmatisch in den Tab zu injizieren (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der tabs API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen gängigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen erteilen zu müssen. Viele Erweiterungen möchten "etwas mit der aktuellen Seite tun, wenn der Benutzer es verlangt".

Zum Beispiel könnte eine Erweiterung ein Skript auf der aktuellen Seite ausführen wollen, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existierte, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Dies würde der Erweiterung jedoch mehr Freiheiten geben, als sie benötigt: Sie könnte nun Skripte in _jedem Tab_, _jederzeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-/Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion stattfand (z.B. der Klick). Wenn der aktive Tab navigiert (z.B. durch das Beenden des Ladens oder ein anderes Ereignis), gewährt die Berechtigung Ihnen keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht Skript-Zugriff auf die Seite des obersten Tabs und gleichartige Ursprungsrahmen. Skripte oder das Ändern von Stilen in [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Rahmen kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich gelten auch [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Websites und URI-Schemata.

In der Regel ist der Tab, dem `activeTab` gewährt wird, einfach der aktuell aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht es einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer im Kontext auf einen Tab klickt (das heißt, auf das Element im Registerkartenstreifen, das es dem Benutzer ermöglicht, von einem Tab zum anderen zu wechseln).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den Tab, auf den der Benutzer geklickt hat, gewährt, auch wenn es sich nicht um den derzeit aktiven Tab handelt (ab Firefox 63, [Firefox-Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen von der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Siehe [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für mehr Details.

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, das von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Quotenlimit zu überschreiten
- Ermöglicht es in Firefox den Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis fragt, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, fordere privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

```json
  "permissions": ["tabs"]
```

Fordere Zugriff auf die privilegierten Teile der `tabs` API.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 nur, fordere beide oben genannten Berechtigungen an.

## Browser-Kompatibilität

{{Compat}}
