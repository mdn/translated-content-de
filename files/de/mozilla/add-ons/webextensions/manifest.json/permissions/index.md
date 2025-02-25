---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenketten, und jede Zeichenkette ist eine Anfrage nach einer Berechtigung.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Privilegien anfordert und ihn bitten, zu bestätigen, dass er bereit ist, diese Privilegien zu gewähren. Der Browser kann dem Benutzer auch ermöglichen, die Privilegien einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage von Privilegien die Bereitschaft der Benutzer beeinflussen kann, Ihre Erweiterung zu installieren, sollte das Anfordern von Privilegien sorgfältig überlegt werden. Zum Beispiel sollten unnötige Berechtigungen vermieden werden, und es könnte nützlich sein, Informationen darüber bereitzustellen, warum Sie Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Weitere Informationen zu den Überlegungen, die Sie anstellen sollten, finden Sie im Artikel [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen darüber, wie Sie Anfragen nach Berechtigungen testen und vorschauen können, finden Sie unter [Testen von Berechtigungsanfragen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit benötigen und welche Manifestversion Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Anforderung zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
> - Manifest V3 oder höher:
>   - Anforderung zur Installationszeit mit dem Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).
>   - Anforderung zur Laufzeit mit dem Manifest-Schlüssel [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions).

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Ein Beispiel für eine Host-Berechtigung könnte `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)- und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen (auch für Anfragen, die von Inhalts-Skripten gestellt werden)
- Die Möglichkeit, tabspezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten
- Die Möglichkeit, programmgesteuert Inhalte und Stile in Seiten von diesen Ursprüngen zu injizieren.
- Die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen
- Die Möglichkeit, auf Cookies für diesen Host zuzugreifen, solange die `"cookies"`-API-Berechtigung ebenfalls inkludiert ist.
- Das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Wildcards angegeben ist. Inhalts-Skripte können jedoch nur den Tracking-Schutz für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der die Form hat:

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

Diese Berechtigungen sind in Manifest V2 und höher verfügbar, es sei denn, es ist anders angegeben:

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
- `devtools` (Diese Berechtigung wird automatisch gewährt, wenn der Manifest-Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) vorhanden ist.)
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
- 'userScripts' (siehe [userScripts-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung nur Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` ermöglicht den Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter für {{webextAPIref("tabs/query", "tabs.query()")}} einbinden möchten. Der Rest der `tabs`-API kann ohne Anforderung von Berechtigungen verwendet werden.
  - Seit Firefox 86 und Chrome 50 können auch entsprechende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"`-Arguments, sodass Sie [Anfragen modifizieren und abbrechen können](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- `downloads.open` ermöglicht die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab-Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, dann werden der Erweiterung beim Benutzerinteraktion nur für den aktiven Tab zusätzliche Privilegien gewährt.

"Benutzerinteraktion" beinhaltet:

- der Benutzer klickt auf die {{webextAPIref("browserAction", "browser action", "", 1)}} der Erweiterung oder auf eine [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- der Benutzer wählt ein Kontextmenüelement aus
- der Benutzer aktiviert ein von der Erweiterung definiertes Tastenkürzel

Die zusätzlichen Privilegien sind:

- Die Möglichkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

Der Zweck dieser Berechtigung ist es, Erweiterungen die Erfüllung eines häufigen Anwendungsfalls zu ermöglichen, ohne ihnen sehr mächtige Berechtigungen zu geben. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es verlangt".

Zum Beispiel könnte eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer eine Browseraktion anklickt, das `activeTab`-Recht verwenden. Ohne `activeTab`-Berechtigung müsste die Erweiterung das Host-Recht `<all_urls>` anfordern. Dies würde der Erweiterung jedoch mehr Macht geben als nötig: Sie könnte jetzt Skripte in _jeder_ Registerkarte _jederzeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Registerkarte/Daten zugreifen, die zu dem Zeitpunkt vorhanden waren, als die Benutzerinteraktion stattfand (z.B. der Klick). Wenn die aktive Registerkarte navigiert (z.B. durch das Beenden des Ladevorgangs oder eines anderen Ereignisses), erlaubt Ihnen die Berechtigung nicht mehr, auf die Registerkarte zuzugreifen.

Die `activeTab`-Berechtigung ermöglicht den Skriptzugriff auf die oberste Ebene der Registerkarten-Seite und gleichherzige Frames. Das Ausführen von Skripten oder Modifizieren von Stilen innerhalb von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich gelten auch [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Sites und URI-Schemata.

Normalerweise ist die mit `activeTab` gewährte Registerkarte einfach die aktuell aktive Registerkarte, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht es einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer auf eine Registerkarte klickt (d.h. auf das Element im Tabstrip, das es dem Benutzer ermöglicht, von einer Registerkarte zur anderen zu wechseln).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für die Registerkarte, auf die der Benutzer geklickt hat, gewährt, auch wenn sie nicht die derzeit aktive Registerkarte ist (seit Firefox 63, [Firefox-Bug 1446956](https://bugzil.la/1446956)).

## Zugriff auf die Zwischenablage

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : In die Zwischenablage schreiben mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Aus der Zwischenablage lesen mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Weitere Informationen finden Sie unter [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die `unlimitedStorage` Berechtigung:

- Ermöglicht es Erweiterungen, jede durch die {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Quote zu überschreiten
- In Firefox können Erweiterungen eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) erstellen, ohne dass der Browser den Benutzer zur Erlaubnis auffordert, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, beantragen Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org`.

```json
  "permissions": ["tabs"]
```

Beantragen Sie Zugriff auf die privilegierten Teile der `tabs` API.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 nur, beantragen Sie beide oben genannten Berechtigungen.

## Browser-Kompatibilität

{{Compat}}
