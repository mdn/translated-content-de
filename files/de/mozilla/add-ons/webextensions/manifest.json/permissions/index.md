---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
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

Verwenden Sie den `permissions`-Schlüssel, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Privilegien anfordert, und ihn bitten, zu bestätigen, dass er bereit ist, diese Privilegien zu gewähren. Der Browser kann dem Benutzer auch erlauben, die Privilegien einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage zur Gewährung von Privilegien die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, ist es ratsam, die Anforderung von Privilegien sorgfältig zu überlegen. Beispielsweise sollten Sie vermeiden, unnötige Berechtigungen anzufordern, und möglicherweise Informationen darüber bereitstellen, warum Sie Berechtigungen in der Beschreibung Ihrer Erweiterung im jeweiligen Store anfordern. Weitere Informationen zu den Überlegungen, die Sie anstellen sollten, finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen dazu, wie Sie Berechtigungsanfragen testen und eine Vorschau anzeigen können, finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Webseite des Extension Workshop.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (Nur Manifest V2, Host-Berechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit benötigen und welche Manifestversion Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Anfrage zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anfrage zur Laufzeit mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Anfrage zur Installationszeit mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel.
>   - Anfrage zur Laufzeit mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel.

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)- und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (auch für Anfragen, die von Content-Skripten gemacht werden)
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl`-Eigenschaften von {{WebExtAPIRef("tabs.Tab")}}-Objekten
- die Möglichkeit, [Content-Scripts zu injizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Styles programmatisch in Seiten einzufügen, die von diesen Ursprüngen stammen.
- die Möglichkeit, Ereignisse der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen
- die Möglichkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}}-API zuzugreifen, sofern die `"cookies"`-API-Berechtigung ebenfalls enthalten ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Wildcards angegeben wird. Content-Scripts können jedoch den Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domain angegeben werden.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch durch Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} erhalten:

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
- `devtools` (Diese Berechtigung wird automatisch erteilt, wenn der [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)-Manifest-Schlüssel vorhanden ist.)
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
- `userScripts` (siehe [userScripts permission](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung einfach Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} einbeziehen möchten. Der Rest der `tabs`-API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können auch passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht Ihnen die Verwendung des `"blocking"`-Arguments, sodass Sie [Anfragen modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` ermöglicht Ihnen die Nutzung der {{WebExtAPIRef("downloads.open()")}}-API.
- `tabHide` ermöglicht Ihnen die Nutzung der {{WebExtAPIRef("tabs.hide()")}}-API.

## activeTab-Berechtigung

Wenn eine Erweiterung die `"activeTab"`-Berechtigung hat, erhält sie, wenn ein Benutzer mit der Erweiterung interagiert, zusätzliche Privilegien nur für den aktiven Tab.

Diese Interaktionen werden als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bezeichnet und umfassen den Benutzer:

- Klicken auf den [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder die [Seitenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung.
- Auswählen eines Kontextmenüpunkts der Erweiterung.
- Aktivieren einer von der Erweiterung definierten Tastenkombination (ab Firefox 63).
- Klicken auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.
- Klicken auf einen Erweiterungsvorschlag in der Adressleiste (omnibox) (ab Firefox 142).

Die zusätzlichen Privilegien sind:

- Die Möglichkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Loading content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der `tabs` API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr leistungsstarke Berechtigungen geben zu müssen. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es verlangt".

Zum Beispiel, betrachten Sie eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Aktion im Browser klickt. Wenn die `activeTab`-Berechtigung nicht existierte, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber dies gibt der Erweiterung mehr Macht, als sie braucht: Sie könnte jetzt Skripte in _jedem Tab_ _jederzeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-/Daten zugreifen, die zu dem Zeitpunkt der Benutzerinteraktion vorhanden waren (z. B. beim Klicken). Wenn der aktive Tab zu einem anderen Ereignis wechselt (z. B. durch Fertigstellen des Ladens oder ein anderes Ereignis), gewährt die Berechtigung keinen Zugang mehr zu dem Tab.

Die `activeTab`-Berechtigung ermöglicht es, auf die Seite des obersten Tabs und Frames mit demselben Ursprung zuzugreifen. Das Ausführen von Skripten oder das Modifizieren von Stilen innerhalb von [Cross-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access)-Frames kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Selbstverständlich gelten auch [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Websites und URI-Schemata.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann ein Menüelement mit der {{webextAPIref("menus")}} API erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt. Das heißt, ein Menü auf einem Element im Tabstreifen, das dem Benutzer erlaubt, von einem Tab zum anderen zu wechseln. Wenn der Benutzer dieses Menü anklickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, selbst wenn es nicht der aktive Tab ist (ab Firefox 63, [Firefox-Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Es gibt zwei Berechtigungen, die der Erweiterung den Zugriff auf die Zwischenablage ermöglichen:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Weitere Details finden Sie unter [Interact with the clipboard](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht es Erweiterungen, ein beliebiges durch die {{WebExtAPIRef("storage/local", "storage.local")}} API festgelegtes Kontingent zu überschreiten.
- Ermöglicht es in Firefox Erweiterungen, ohne Aufforderung des Browsers zum Zeitpunkt der Datenbankerstellung eine ["persistent" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, um privilegierten Zugriff auf Seiten unter `developer.mozilla.org` zu beantragen.

```json
  "permissions": ["tabs"]
```

Zugriff auf die privilegierten Teile der `tabs` API beantragen.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, um beide obigen Berechtigungen zu beantragen.

## Browser-Kompatibilität

{{Compat}}
