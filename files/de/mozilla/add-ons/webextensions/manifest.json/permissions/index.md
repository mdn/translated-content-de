---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 2cfef1ac3bd1afe2710bcb5807ae6cf39ce42b91
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

Verwenden Sie den Schlüssel `permissions`, um besondere Berechtigungen für Ihre Erweiterung zu beantragen. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist ein Antrag auf eine Berechtigung.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darauf hinweisen, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn bitten, zu bestätigen, dass er bereit ist, diese Berechtigungen zu gewähren. Der Browser kann dem Benutzer außerdem erlauben, die Berechtigungen einer Erweiterung nach der Installation zu prüfen. Da das Anfordern von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinträchtigen kann, sollte die Beantragung von Berechtigungen sorgfältig abgewogen werden. Zum Beispiel möchten Sie vermeiden, unnötige Berechtigungen anzufordern, und Sie sollten möglicherweise Informationen darüber bereitstellen, warum Sie die Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Mehr Informationen zu den Überlegungen, die Sie anstellen sollten, finden Sie in dem Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen dazu, wie Sie Berechtigungsanfragen testen und vorab ansehen können, finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die Berechtigung `activeTab`

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Anforderung zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Anforderung zur Installationszeit mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel.

Host-Berechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Beispiel: Eine Host-Berechtigung könnte `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)- und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen.
  > [!NOTE]
  > Für Manifest V2-Erweiterungen nur in Firefox umfasst dies Anfragen, die von Inhalts-Skripten gestellt werden.
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten.
- die Möglichkeit, [Inhaltsskripte einzubetten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Styles programmgesteuert in von diesen Ursprüngen bereitgestellte Seiten einzufügen.
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen.
- die Möglichkeit, auf Cookies für diesen Host zuzugreifen, solange die API-Berechtigung `cookies` ebenfalls enthalten ist.
- das Umgehen des Trackingschutzes für Erweiterungsseiten, wenn ein Host als vollständiges Domain oder mit Platzhaltern angegeben ist. Inhaltsskripte können jedoch nur den Trackingschutz für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter angegeben, und jedes Schlüsselwort benennt eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

Diese Berechtigungen sind in Manifest V2 und höher verfügbar, es sei denn, es wird anders angegeben:

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

In den meisten Fällen gewährt die Berechtigung einfach Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` verschafft Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im Parameter `queryInfo` an {{webextAPIref("tabs/query", "tabs.query()")}} einschließen möchten. Der Rest der `tabs`-API kann ohne Anforderung von Berechtigungen verwendet werden.
  - Ab Firefox 86 und Chrome 50 können die passenden [Host-Berechtigungen](#host-berechtigungen) ebenfalls anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht es Ihnen, das Argument `"blocking"` zu verwenden, sodass Sie [Anfragen modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` erlaubt es Ihnen, die {{WebExtAPIRef("downloads.open()")}} API zu verwenden.
- `tabHide` ermöglicht es Ihnen, die {{WebExtAPIRef("tabs.hide()")}} API zu nutzen.

## activeTab-Berechtigung

Wenn eine Erweiterung die Berechtigung `"activeTab"` hat, werden der Erweiterung zusätzliche Berechtigungen nur für den aktiven Tab gewährt, wenn ein Benutzer mit der Erweiterung interagiert.

Diese Interaktionen sind als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bekannt und umfassen das Benutzer:

- Klicken auf die [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder die [Seitenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung.
- Auswählen eines Kontextmenüelements der Erweiterung.
- Drücken einer von der Erweiterung definierten Tastenkombination (ab Firefox 63).
- Klicken auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.
- Klicken auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) (ab Firefox 142).

Die zusätzlichen Berechtigungen sind:

- Die Möglichkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Laden von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der tabs API für den aktuellen Tab: `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

Ziel dieser Berechtigung ist es, Erweiterungen zu ermöglichen, gängige Anwendungsfälle zu erfüllen, ohne dass sehr leistungsstarke Berechtigungen erforderlich sind. Viele Erweiterungen möchten "etwas mit der aktuellen Seite tun, wenn der Benutzer darum bittet".

Beispielsweise ziehen Sie eine Erweiterung in Betracht, die ein Skript in der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browser-Schaltfläche klickt. Wenn die Berechtigung `activeTab` nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber das würde der Erweiterung mehr Macht geben, als sie benötigt: sie könnte jetzt Skripte in _jedem Tab_ zu _jeder Zeit_ ausführen, die sie möchte, anstatt nur im aktiven Tab und nur als Antwort auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-Daten zugreifen, die zum Zeitpunkt der Benutzeraktion vorhanden waren (z. B. der Klick). Wenn der aktive Tab navigiert (z. B. aufgrund eines Ladens der Seite oder eines anderen Ereignisses), gewährt die Berechtigung Ihnen keinen Zugang mehr zum Tab.

Die Berechtigung `activeTab` ermöglicht Skripting-Zugriff auf die Top-Level-Tabseite und Frames desselben Ursprungs. Das Ausführen von Skripten oder das Ändern von Styles innerhalb von [cross-origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access)-Frames erfordert möglicherweise zusätzliche [Host-Berechtigungen](#host-berechtigungen). Natürlich gelten auch die [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) für bestimmte Sites und URI-Schemata.

In der Regel ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann ein Menüelement mit der {{webextAPIref("menus")}} API erstellen, das angezeigt wird, wenn der Benutzer mit Rechtsklick einen Tab auswählt. Das ist ein Menü auf einem Element in der Tab-Leiste, das dem Benutzer ermöglicht, von einem Tab zu einem anderen zu wechseln. Wenn der Benutzer auf dieses Menü klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, auch wenn es nicht der aktive Tab ist (ab Firefox 63, [Firefox-Fehler 1446956](https://bugzil.la/1446956)).

## Zwischenablagenzugriff

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`.
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`.

Siehe [Mit der Zwischenablage interagieren](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die Berechtigung `unlimitedStorage`:

- Ermöglicht Erweiterungen, jedes von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Kontingent zu überschreiten.
- In Firefox ermöglicht es Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis bittet, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, privilegierten Zugriff auf Seiten unter `developer.mozilla.org` anfordern.

```json
  "permissions": ["tabs"]
```

Zugriff auf die privilegierten Teile der `tabs` API anfordern.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, sowohl die obigen Berechtigungen anfordern.

## Browser-Kompatibilität

{{Compat}}
