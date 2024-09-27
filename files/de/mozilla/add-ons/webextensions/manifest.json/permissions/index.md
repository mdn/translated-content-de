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
      <th scope="row">Manifestversion</th>
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenketten, wobei jede Zeichenkette eine Anfrage für eine Berechtigung darstellt.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Rechte anfordert, und ihn bitten zu bestätigen, dass er bereit ist, diese Rechte zu gewähren. Der Browser kann dem Benutzer auch ermöglichen, die Privilegien einer Erweiterung nach der Installation zu überprüfen. Da die Anforderung von Rechten die Bereitschaft der Benutzer, Ihre Erweiterung zu installieren, beeinflussen kann, sollte die Anforderung von Rechten sorgfältig überlegt werden. Vermeiden Sie beispielsweise das Anfordern unnötiger Berechtigungen und stellen Sie möglicherweise Informationen darüber bereit, warum Sie Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Weitere Informationen zu den zu berücksichtigenden Punkten finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorab-Anzeigen von Berechtigungsanfragen finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die Berechtigung `activeTab`

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit und welche Manifestversion Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationszeit-Anfrage mit diesem (`permissions`) Manifest-Schlüssel.
>   - Laufzeit-Anfrage mit dem Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Installationszeit-Anfrage mit dem Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Laufzeit-Anfrage mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Host-Berechtigungen werden als [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, wobei jedes Muster eine Gruppe von URLs identifiziert, für die die Erweiterung zusätzliche Rechte anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Rechte umfassen:

- Zugriff auf diese Ursprünge über [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) ohne Cross-Origin-Einschränkungen (auch für Anfragen aus Inhalteskripten)
- die Fähigkeit, tabspezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten
- die Fähigkeit, Inhalteskripte und Stile programmgesteuert in Seiten dieser Ursprünge einzufügen
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Fähigkeit, auf Cookies für diesen Host über die {{webextAPIref("cookies")}} API zuzugreifen, solange die "cookies"-API-Berechtigung ebenfalls enthalten ist
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhalteskripte können den Tracking-Schutz jedoch nur umgehen, wenn Hosts mit einer vollständigen Domain angegeben sind.

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

API-Berechtigungen werden als Schlüsselwörter angegeben, wobei jedes Schlüsselwort eine [WebExtension-API](/de/docs/Mozilla/Add-ons/WebExtensions/API) benennt, die die Erweiterung verwenden möchte.

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

In den meisten Fällen gewährt die Berechtigung einfach Zugriff auf die API, mit folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [bevorzugte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo` Parameter von {{webextAPIref("tabs/query", "tabs.query()")}} einbinden möchten. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können passende [Host-Berechtigungen](#host-berechtigungen) auch anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht es Ihnen, das Argument `"blocking"` zu verwenden, um [Anfragen zu modifizieren und abzubrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- `downloads.open` ermöglicht Ihnen, die {{WebExtAPIRef("downloads.open()")}} API zu verwenden.
- `tabHide` ermöglicht Ihnen, die {{WebExtAPIRef("tabs.hide()")}} API zu verwenden.

## activeTab-Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, dann werden der Erweiterung beim Interagieren des Benutzers mit der Erweiterung zusätzliche Rechte für den aktiven Tab gewährt.

"Benutzerinteraktion" umfasst:

- der Benutzer klickt auf die {{webextAPIref("browserAction", "Browser-Aktion", "", 1)}} oder die [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung
- der Benutzer wählt den Kontextmenüeintrag aus
- der Benutzer aktiviert eine von der Erweiterung definierte Tastenkombination

Die zusätzlichen Rechte sind:

- Die Möglichkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Loading content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der tab-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Das Ziel dieser Berechtigung ist es, Erweiterungen zu ermöglichen, eine gängige Anforderung zu erfüllen, ohne ihnen sehr leistungsfähige Berechtigungen zu geben. Viele Erweiterungen wollen "etwas auf der aktuellen Seite tun, wenn der Benutzer es verlangt".

Betrachten Sie beispielsweise eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browser-Aktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber das gibt der Erweiterung mehr Macht als nötig: Sie könnte jetzt Skripte in _jedem Tab_ zu _jeder Zeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-/Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion stattfand (z.B. der Klick). Wenn der aktive Tab weg navigiert (z.B. aufgrund des Beendens des Ladens oder eines anderen Ereignisses), gewährt die Berechtigung Ihnen keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht den Skriptzugriff auf die Seite des obersten Tabs und gleichartige Ursprünge. Das Ausführen von Skripten oder das Modifizieren von Stilen in [Cross-Origin-](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Rahmen kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Selbstverständlich gelten auch [Einschränkungen und Limitierungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die sich auf bestimmte Seiten und URI-Schemata beziehen.

In der Regel ist der Tab, dem `activeTab` gewährt wird, nur der derzeit aktive Tab, mit einer Ausnahme. Die {{webextAPIref("menus")}} API ermöglicht es einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt (das heißt, auf das Element in der Tab-Leiste, mit dem der Benutzer zwischen den Tabs wechseln kann).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, auch wenn es nicht der aktuell aktive Tab ist (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugriff

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Siehe [Interact with the clipboard](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht es Erweiterungen, jede Quote zu überschreiten, die von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegt wird
- Ermöglicht es in Firefox Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis bittet, wenn die Datenbank erstellt wird.

## Beispiel

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Nur in Manifest V2: Privilegierten Zugriff auf Seiten unter `developer.mozilla.org` anfordern.

```json
  "permissions": ["tabs"]
```

Anfordern des Zugriffs auf die privilegierten Teile der `tabs` API.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2: Beide oben genannten Berechtigungen anfordern.

## Browser-Kompatibilität

{{Compat}}
