---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 4da1a8a9c5464e521d95ff78341ec8ed791fc97b
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Pflicht</th>
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Strings, wobei jeder String eine Anfrage für eine Berechtigung darstellt.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer während der Installation darüber informieren, dass die Erweiterung bestimmte Rechte anfordert, und ihn um Bestätigung bitten, ob er bereit ist, diese Rechte zu gewähren. Der Browser kann dem Benutzer auch erlauben, die Privilegien einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage zur Gewährung von Privilegien die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, lohnt sich eine sorgfältige Überlegung bei der Anforderung von Privilegien. Beispielsweise sollten Sie vermeiden, unnötige Berechtigungen anzufordern und in der Beschreibung Ihres Erweiterungsspeichers Informationen darüber bereitstellen, warum Sie Berechtigungen anfordern. Weitere Informationen zu den Überlegungen, die Sie beachten sollten, finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen darüber, wie Sie Berechtigungsanfragen testen und eine Vorschau anzeigen können, finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest V3 oder höher im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installations- oder Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationsanforderung mit diesem (`permissions`) Manifestschlüssel.
>   - Laufzeitanforderung mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifestschlüssel.
> - Manifest V3 oder höher:
>   - Installationsanforderung mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifestschlüssel.
>   - Laufzeitanforderung mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifestschlüssel.

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, wobei jedes Muster eine Gruppe von URLs angibt, für die die Erweiterung zusätzliche Rechte anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- Zugriff auf [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) für diese Ursprünge ohne Cross-Origin-Beschränkungen (auch für Anfragen von Content-Skripten)
- die Möglichkeit, tab-spezifische Metadaten wie die `url`-, `title`- und `favIconUrl`-Eigenschaften von {{WebExtAPIRef("tabs.Tab")}}-Objekten ohne die "tabs"-Berechtigung zu lesen
- die Fähigkeit, Inhaltsskripte und Stile programmgesteuert in Seiten einzufügen, die von diesen Ursprüngen geliefert werden
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Fähigkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, sofern auch die `"cookies"` API-Berechtigung enthalten ist
- Umgehung des Trackingschutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Wildcards angegeben ist. Inhaltsskripte können den Trackingschutz jedoch nur bei Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

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

API-Berechtigungen werden als Schlüsselwörter angegeben, wobei jedes Schlüsselwort eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API) benennt, die die Erweiterung verwenden möchte.

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
- `devtools` (Diese Berechtigung wird implizit erteilt, wenn der [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Manifestschlüssel vorhanden ist.)
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

In den meisten Fällen gewährt die Berechtigung nur den Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit für [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter von {{webextAPIref("tabs/query", "tabs.query()")}} einfügen möchten. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können übereinstimmende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht es Ihnen, das Argument `"blocking"` zu verwenden, sodass Sie Anfragen [modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` ermöglicht es Ihnen, die {{WebExtAPIRef("downloads.open()")}} API zu nutzen.
- `tabHide` ermöglicht es Ihnen, die {{WebExtAPIRef("tabs.hide()")}} API zu nutzen.

## activeTab Berechtigung

Wenn eine Erweiterung über die Berechtigung `"activeTab"` verfügt, werden der Erweiterung, wenn ein Benutzer mit der Erweiterung interagiert, zusätzliche Privilegien nur für den aktiven Tab gewährt.

Diese Interaktionen sind als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bekannt und umfassen:

- Klicken auf die [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung.
- Auswahl eines Kontextmenüeintrags der Erweiterung.
- Aktivierung einer Tastenkombination, die von der Erweiterung definiert wurde (ab Firefox 63).
- Klicken auf eine Schaltfläche auf einer mit der Erweiterung gebündelten Seite.
- Klicken auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) (ab Firefox 142).

Die zusätzlichen Privilegien sind:

- Die Möglichkeit, programmatisch JavaScript oder CSS in den Tab einzufügen (siehe [Laden von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Das Ziel dieser Berechtigung ist es, Erweiterungen zu ermöglichen, ein allgemeines Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen zu geben. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es fordert".

Zum Beispiel wollen wir eine Erweiterung betrachten, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber dies gibt der Erweiterung mehr Macht als nötig: Sie könnte nun Skripte in _jedem Tab_, _jederzeit_ ausführen, anstatt nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Tab-/Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion stattfand (z. B. der Klick). Wenn der aktive Tab navigiert (z. B. durch das Laden eines neuen Abschnitts oder ein anderes Ereignis), gewährt die Berechtigung Ihnen keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht Skripting-Zugriff auf die oberste Seite des Tabs und frames mit gleichem Ursprung. Für das Ausführen von Skripten oder das Ändern von Stilen innerhalb von [cross-origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) Frames können zusätzliche [Host-Berechtigungen](#host-berechtigungen) erforderlich sein. Natürlich werden auch [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Sites und URI-Schemata angewendet.

In der Regel ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann mit der {{webextAPIref("menus")}} API ein Menüelement erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt. Das heißt, ein Menü auf einem Element im Tabstrip, das es dem Benutzer ermöglicht, von einem Tab zu einem anderen zu wechseln. Wenn der Benutzer auf dieses Menü klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, den der Benutzer anklickt, auch wenn es sich nicht um den aktiven Tab handelt (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zugriff auf die Zwischenablage

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage unter Verwendung von [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage unter Verwendung von [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Details finden Sie unter [Interact with the clipboard](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die Berechtigung `unlimitedStorage`:

- Ermöglicht Erweiterungen, alle Quoten zu übersteigen, die von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegt werden
- Ermöglicht es Erweiterungen in Firefox, eine ["persistent" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer zur Genehmigung auffordert, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, fordere privilegierten Zugriff auf Seiten unter `developer.mozilla.org`.

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
