---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
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

Verwenden Sie den `permissions`-Schlüssel, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darauf hinweisen, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn bitten zu bestätigen, dass er mit der Vergabe dieser Berechtigungen einverstanden ist. Der Browser kann dem Benutzer auch erlauben, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage zur Vergabe von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, sollte die Anforderung von Berechtigungen sorgfältig überlegt werden. Beispielsweise sollten Sie vermeiden, unnötige Berechtigungen anzufordern, und können in Betracht ziehen, Informationen darüber bereitzustellen, warum Sie Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Weitere Informationen zu den Überlegungen finden Sie in dem Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschauen von Berechtigungsanforderungen finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest V3 oder höher im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifests angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Die Art und Weise, wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit und welche Manifestversion Ihre Erweiterung verwendet, wünschen.
>
> - Manifest V2:
>   - Berechtigungsanfrage zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Berechtigungsanfrage zur Laufzeit mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Berechtigungsanfrage zur Installationszeit mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Berechtigungsanfrage zur Laufzeit mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Host-Berechtigungen werden als [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Beispielsweise könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` lauten.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen (auch für Anfragen, die von Content-Skripten gemacht werden)
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung auszulesen, wie z.B. die `url`- , `title`- und `favIconUrl`-Eigenschaften von {{WebExtAPIRef("tabs.Tab")}}-Objekten
- die Fähigkeit, Content-Skripte und Stile programmatisch in Seiten einzufügen, die von diesen Ursprüngen bereitgestellt werden.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen
- die Fähigkeit, auf Cookies für diesen Host über die {{webextAPIref("cookies")}}-API zuzugreifen, sofern die `"cookies"`-API-Berechtigung ebenfalls enthalten ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domäne oder mit Wildcards angegeben ist. Content-Skripte können den Tracking-Schutz jedoch nur für Hosts umgehen, die mit einer vollständigen Domäne angegeben sind.

Ab Version 56 von Firefox erhalten Erweiterungen automatisch Host-Berechtigungen für ihren eigenen Ursprung, der in der Form ist:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch durch den Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} erhalten:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter angegeben, und jedes Schlüsselwort benennt eine [WebExtension-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

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
- `devtools` (Diese Berechtigung wird implizit gewährt, wenn der [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)-Manifest-Schlüssel vorhanden ist.)
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
- 'userScripts' (siehe [userScripts permission](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung einfach Zugang zur API, mit den folgenden Ausnahmen:

- `tabs` gibt Zugang zu [privilegierten Teilen der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit für [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} einfügen möchten. Der Rest der `tabs` API kann verwendet werden, ohne eine Berechtigung anzufordern.
  - Ab Firefox 86 und Chrome 50 können auch passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"`-Arguments, sodass Sie Anfragen [modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` ermöglicht die Verwendung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht die Verwendung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab-Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, werden der Erweiterung beim Benutzerinteraktion zusätzliche Berechtigungen nur für den aktiven Tab gewährt.

"Benutzerinteraktion" schließt ein:

- Der Benutzer klickt auf die {{webextAPIref("browserAction", "browser action", "", 1)}} oder die [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung
- der Benutzer wählt ihren Eintrag im Kontextmenü aus
- der Benutzer aktiviert eine von der Erweiterung definierte Tastenkombination

Die zusätzlichen Berechtigungen sind:

- Die Fähigkeit, JavaScript oder CSS programmatisch in den Tab zu injizieren (siehe [Loading content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der tabs API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung besteht darin, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen zu gewähren. Viele Erweiterungen möchten "etwas auf der aktuellen Seite machen, wenn der Benutzer es anfordert".

Betrachten Sie beispielsweise eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Dies würde der Erweiterung jedoch mehr Macht verleihen, als sie benötigt: Sie könnte jetzt jederzeit Skripte in _jedem Tab_ ausführen, statt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-/Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion stattfand (z.B. der Klick). Wenn der aktive Tab weg navigiert (z.B. durch Abschluss des Ladevorgangs oder ein anderes Ereignis), gewährt die Berechtigung keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht den Skript-Zugriff auf die oberste Ebene der Tab-Seite und gleichmäßig Ursprungs-Frames. Das Ausführen von Skripten oder Ändern von Stilen in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Selbstverständlich gelten auch [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Sites und URI-Schemata.

In der Regel ist der Tab, der `activeTab` gewährt wird, nur der derzeit aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht es einer Erweiterung, ein Menüobjekt zu erstellen, das angezeigt wird, wenn der Benutzer per Rechtsklick auf einen Tab klickt (d.h. auf das Element im Tab-Streifen, mit dem der Benutzer von einem Tab zu einem anderen wechseln kann).

Wenn der Benutzer auf einen solchen Eintrag klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, selbst wenn es nicht der derzeit aktive Tab ist (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagenzugriff

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : In die Zwischenablage schreiben mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`.
- `clipboardRead`
  - : Aus der Zwischenablage lesen mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`.

Siehe [Interact with the clipboard](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, jede von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Kontingent zu überschreiten.
- In Firefox ermöglicht es Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis beim Erstellen der Datenbank bittet.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, verlangen Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org`.

```json
  "permissions": ["tabs"]
```

Fordern Sie Zugriff auf die privilegierten Teile der `tabs` API an.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, fordern Sie beide oben genannten Berechtigungen an.

## Browser-Kompatibilität

{{Compat}}
