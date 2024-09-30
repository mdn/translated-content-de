---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
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
        <pre class="brush: json;">
"permissions": [
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `permissions`-Schlüssel, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn bitten zu bestätigen, dass er bereit ist, diese zu gewähren. Der Browser kann dem Benutzer auch erlauben, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da das Anfordern von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, sollte die Anforderung von Berechtigungen sorgfältig überlegt werden. Sie wollen z.B. unnötige Berechtigungen vermeiden und möglicherweise Informationen darüber bereitstellen, warum Sie Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Weitere Informationen zu den zu beachtenden Aspekten finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Für Informationen darüber, wie Sie Berechtigungsanfragen testen und anzeigen können, lesen Sie [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Hostberechtigungen (Nur Manifest V2, Hostberechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Hostberechtigungen

> [!NOTE]
> Wie Sie Hostberechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Anforderung zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Anforderung zur Installationszeit mit dem Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Anforderung zur Laufzeit mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Hostberechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Ein Beispiel für eine Hostberechtigung könnte `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (auch für Anfragen, die von Inhalts-Skripten gemacht werden)
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Fähigkeit, Inhalts-Skripte und Styles programmgesteuert in Seiten von diesen Ursprüngen einzufügen.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Fähigkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, sofern auch die "cookies" API-Berechtigung enthalten ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domäne oder mit Platzhaltern angegeben ist. Inhalts-Skripte können jedoch den Tracking-Schutz nur für Hosts umgehen, die als vollständige Domäne angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Hostberechtigungen für ihren eigenen Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmgesteuert durch Aufrufen von {{webextAPIref("extension/getURL", "extension.getURL()")}} erhalten:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter angegeben, und jedes Schlüsselwort benennt eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

Diese Berechtigungen sind in Manifest V2 und darüber verfügbar, sofern nicht anders angegeben:

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
- `proxy`
- `scripting`
- `search`
- `sessions`
- `storage`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `unlimitedStorage`
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und darüber)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung einfach den Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` gibt Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit für [Hostberechtigungen](#hostberechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigte man auch `tabs`, wenn man `url` im `queryInfo`-Parameter von {{webextAPIref("tabs/query", "tabs.query()")}} verwenden wollte. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können passende [Hostberechtigungen](#hostberechtigungen) auch anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"`-Arguments, sodass Sie [Anfragen modifizieren und abbrechen können](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- `downloads.open` ermöglicht die Verwendung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht die Verwendung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab-Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, erhält sie zusätzliche Berechtigungen nur für den aktiven Tab, wenn der Benutzer mit der Erweiterung interagiert.

"Benutzerinteraktion" umfasst:

- Der Benutzer klickt auf die {{webextAPIref("browserAction", "browser action", "", 1)}} der Erweiterung oder die [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- Der Benutzer wählt einen Kontextmenüeintrag der Erweiterung aus
- Der Benutzer aktiviert eine Tastenkombination, die von der Erweiterung definiert wurde

Die zusätzlichen Berechtigungen sind:

- Die Fähigkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der `tabs` API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen gemeinsamen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen geben zu müssen. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es verlangt".

Zum Beispiel könnte eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browseraktion klickt, ohne die `activeTab`-Berechtigung die Hostberechtigung `<all_urls>` anfordern müssen. Das würde der Erweiterung mehr Macht geben, als sie benötigt: sie könnte nun Skripte in _alle Tabs_, _zu jeder Zeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf den Tab/die Daten zugreifen, die beim Auftreten der Benutzerinteraktion vorhanden waren (z.B. der Klick). Wenn der aktive Tab weg navigiert (z.B. durch das Beenden des Ladens oder ein anderes Ereignis), gewährt die Berechtigung keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung aktiviert den Skriptzugriff auf die oberste Seite des Tabs und gleiche Ursprungsrahmen. Das Ausführen von Skripten oder Ändern von Styles in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Rahmen kann zusätzliche [Hostberechtigungen](#hostberechtigungen) erfordern. Natürlich werden [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die auf bestimmte Seiten und URI-Schemata angewendet werden, ebenfalls angewendet.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, einfach der derzeit aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt (d.h. auf das Element im Tabstreifen, das es dem Benutzer ermöglicht, von einem Tab zu einem anderen zu wechseln).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, auch wenn es nicht der derzeit aktive Tab ist (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Siehe [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, eine von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Quoten zu überschreiten
- In Firefox ermöglicht es Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis bittet, wenn die Datenbank erstellt wird.

## Beispiel

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

```json
  "permissions": ["tabs"]
```

Fordern Sie Zugriff auf die privilegierten Teile der `tabs` API an.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 nur, fordern Sie beide oben genannten Berechtigungen an.

## Browser-Kompatibilität

{{Compat}}
