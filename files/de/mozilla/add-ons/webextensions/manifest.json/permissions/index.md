---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn fragen, ob er bereit ist, diese Berechtigungen zu gewähren. Der Browser kann dem Benutzer auch ermöglichen, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da die Anforderung von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, ist die Anforderung von Berechtigungen sorgfältig zu überlegen. Beispielsweise möchten Sie unnötige Berechtigungen vermeiden und in der Beschreibung Ihrer Erweiterung im Store Informationen darüber bereitstellen, warum Sie Berechtigungen anfordern. Weitere Informationen zu den Überlegungen, die Sie anstellen sollten, finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschauen von Berechtigungsanfragen finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Seite des Extension Workshops.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (Nur Manifest V2, Host-Berechtigungen werden im Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die Berechtigung `activeTab`

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder Laufzeit und welche Manifest-Version Ihre Erweiterung verwendet, wünschen.
>
> - Manifest V2:
>   - Installationsanfrage mit diesem (`permissions`) Manifest-Schlüssel.
>   - Laufzeitanfrage mit dem Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Installationsanfrage mit dem Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Laufzeitanfrage mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Host-Berechtigungen werden als [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Ein Beispiel für eine Host-Berechtigung könnte `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen (auch für Anfragen, die von Inhalts-Skripten gestellt werden)
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie z. B. die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten
- die Möglichkeit, [Inhalts-Skripte zu injizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Stile programmatisch in von diesen Ursprüngen bereitgestellte Seiten
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen
- die Möglichkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}}-API zuzugreifen, vorausgesetzt die `"cookies"`-API-Berechtigung ist ebenfalls enthalten.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, wenn ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhalts-Skripte können jedoch den Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox, ab Version 56, erhalten Erweiterungen automatisch Host-Berechtigungen für ihren eigenen Ursprung, der die Form hat:

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
- `devtools` (Diese Berechtigung wird automatisch erteilt, wenn der Manifest-Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) vorhanden ist.)
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

  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} einbeziehen möchten. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können auch passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"`-Arguments, sodass Sie Anfragen [ändern und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` erlaubt Ihnen, die {{WebExtAPIRef("downloads.open()")}} API zu verwenden.
- `tabHide` erlaubt Ihnen, die {{WebExtAPIRef("tabs.hide()")}} API zu verwenden.

## activeTab-Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, erhält die Erweiterung, wenn der Benutzer mit ihr interagiert, zusätzliche Berechtigungen nur für den aktiven Tab.

"Benutzerinteraktion" umfasst:

- der Benutzer klickt auf die {{webextAPIref("browserAction", "browser action", "", 1)}} oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung
- der Benutzer wählt das Kontextmenüelement aus
- der Benutzer aktiviert eine von der Erweiterung definierte Tastenkombination

Die zusätzlichen Berechtigungen sind:

- Die Fähigkeit, JavaScript oder CSS programmgesteuert in den Tab zu injizieren (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Der Zweck dieser Berechtigung besteht darin, Erweiterungen die Möglichkeit zu geben, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen geben zu müssen. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es anfordert".

Betrachten Sie zum Beispiel eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber dies gibt der Erweiterung mehr Macht als sie benötigt: sie könnte jetzt Skripte in _jedem Tab_ ausführen, _jederzeit_, wenn sie möchte, anstatt nur im aktiven Tab und nur als Antwort auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion stattfand (z. B. der Klick). Wenn der aktive Tab weg navigiert (z. B. aufgrund des Abschlusses des Ladens oder eines anderen Ereignisses), gewährt die Berechtigung Ihnen keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht den Zugriff auf das Haupt-Tab-Seite und gleichartige Ursprungsrahmen. Das Ausführen von Skripten oder das Ändern von Stilen innerhalb [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Rahmen erfordert möglicherweise zusätzliche [Host-Berechtigungen](#host-berechtigungen). Natürlich werden auch [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Sites und URI-Schemata angewendet.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, einfach der aktuell aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht es einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab (also auf das Element im Tabstreifen, das dem Benutzer das Wechseln von einem Tab zum anderen ermöglicht) klickt.

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, selbst wenn es nicht der aktuell aktive Tab ist (ab Firefox 63, [Firefox-Fehler 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Es gibt zwei Berechtigungen, die der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Weitere Informationen finden Sie unter [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, jede Quote zu überschreiten, die von der {{WebExtAPIRef("storage/local", "storage.local")}} API verhängt wird.
- In Firefox ermöglicht es Erweiterungen, eine ["dauerhafte" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis bittet, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2: Fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

```json
  "permissions": ["tabs"]
```

Fordern Sie Zugriff auf die privilegierten Teile der `tabs` API an.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2: Fordern Sie beide der oben genannten Berechtigungen an.

## Browser-Kompatibilität

{{Compat}}
