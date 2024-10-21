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
        <pre class="brush: json;">
"permissions": [
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn bitten, zu bestätigen, dass er mit der Gewährung dieser Berechtigungen einverstanden ist. Der Browser kann dem Benutzer auch erlauben, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage zur Gewährung von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, lohnt sich eine sorgfältige Abwägung der angeforderten Berechtigungen. Beispielsweise möchten Sie unnötige Berechtigungen vermeiden und könnten Informationen darüber bereitstellen, warum Sie Berechtigungen in der Storebeschreibung Ihrer Erweiterung anfordern. Mehr Informationen zu diesen Überlegungen finden Sie im Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorabprüfen von Berechtigungsanfragen finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (Nur Manifest V2, Host-Berechtigungen sind im Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie diese zur Installationszeit oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationsanfrage mit diesem ( `permissions` ) Manifest-Schlüssel.
>   - Laufzeitanfrage mit dem Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Installationsanfrage mit dem Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Laufzeitanfrage mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Host-Berechtigungen werden als [Matchmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Ein Host-Berechtigungsmuster könnte z.B. `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- Zugriff auf [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) für diese Ursprünge ohne Cross-Origin-Beschränkungen (auch für Anfragen, die von Inhalts-Skripts gemacht werden)
- die Möglichkeit, tabspezifische Metadaten ohne die "tabs"-Berechtigung auszulesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Möglichkeit, [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Stile programmgesteuert in Seiten mit diesen Ursprüngen zu injizieren.
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen
- die Möglichkeit, über die {{webextAPIref("cookies")}}-API auf Cookies dieses Hosts zuzugreifen, solange auch die "cookies"-API-Berechtigung enthalten ist.
- Umgehung des Trackingschutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhalts-Skripte können jedoch nur den Trackingschutz für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, welcher die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmgesteuert durch den Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} abrufen:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter spezifiziert, und jedes Schlüsselwort benennt eine [WebExtension-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

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
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung einfach den Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` ermöglicht den Zugriff auf [privilegierte Teile der `tabs`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs), ohne dass [Host-Berechtigungen](#host-berechtigungen) erforderlich sind: `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

  - In Firefox 85 und älter benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter für {{webextAPIref("tabs/query", "tabs.query()")}} einfügen möchten. Der Rest der `tabs`-API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht Ihnen die Verwendung des Arguments `"blocking"`, sodass Sie Anfragen [ändern und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` ermöglicht Ihnen die Verwendung der API {{WebExtAPIRef("downloads.open()")}}.
- `tabHide` ermöglicht Ihnen die Verwendung der API {{WebExtAPIRef("tabs.hide()")}}.

## activeTab Permission

Diese Berechtigung wird als `"activeTab"` spezifiziert. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, wird der Erweiterung, wenn der Benutzer mit der Erweiterung interagiert, genau für diesen aktiven Tab zusätzliche Berechtigungen erteilt.

"Benutzerinteraktion" umfasst:

- der Benutzer klickt auf die {{webextAPIref("browserAction", "Schaltfläche der Browseraktion", "", 1)}} oder [Seitwärtsaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung
- der Benutzer wählt das Kontextmenüelement der Erweiterung aus
- der Benutzer aktiviert eine von der Erweiterung definierte Tastenkombination

Die zusätzlichen Berechtigungen sind:

- Die Möglichkeit, JavaScript oder CSS in den Tab programmgesteuert zu injizieren (siehe [Inhalts-Skripte laden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

Ziel dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen zu geben. Viele Erweiterungen möchten "etwas mit der aktuellen Seite machen, wenn der Benutzer es verlangt".

Ein Beispiel: Eine Erweiterung möchte ein Skript auf der aktuellen Seite ausführen, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber das gäbe der Erweiterung mehr Macht, als sie benötigt: Sie könnte nun Skripte in _jedem Tab_ zu _jeder Zeit_ ausführen, anstatt nur im aktiven Tab und nur als Antwort auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf den Tab/die Daten zugreifen, die dort waren, als die Benutzerinteraktion stattgefunden hat (z.B. der Klick). Wenn der aktive Tab weg navigiert (z.B. durch das Beenden des Ladevorgangs oder eines anderen Ereignisses), gewährt die Berechtigung keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht Skriptzugriff auf die Seite des obersten Tabs und gleichartigen Rahmen. Das Ausführen von Skripten oder Ändern von Stilen innerhalb [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Rahmen kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich gelten auch die [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die sich auf bestimmte Sites und URI-Schemata beziehen.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, einfach der aktuell aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}}-API ermöglicht es einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer auf einen Tab kontextklickt (d.h. auf das Element in der Tab-Leiste, das es dem Benutzer ermöglicht, von einem Tab zum anderen zu wechseln).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, auch wenn es nicht der derzeit aktive Tab ist (ab Firefox 63, [Firefox-Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Es gibt zwei Berechtigungen, die der Erweiterung den Zugriff auf die Zwischenablage erlauben:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Weitere Details finden Sie unter [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen das Überschreiten jeder vom {{WebExtAPIRef("storage/local", "storage.local")}}-API auferlegten Quota
- Ermöglicht es Erweiterungen in Firefox, eine "persistente" IndexedDB-Datenbank ohne Aufforderung an den Benutzer zur Erteilung von Berechtigungen zu erstellen, wenn die Datenbank erstellt wird.

## Beispiel

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2, beantragen Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org`.

```json
  "permissions": ["tabs"]
```

Fordern Sie Zugriff auf die privilegierten Teile der `tabs`-API an.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2, beantragen Sie beide der oben genannten Berechtigungen.

## Browser-Kompatibilität

{{Compat}}
