---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatorisch</th>
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

Verwenden Sie den Schlüssel `permissions`, um Ihrer Erweiterung spezielle Berechtigungen anzufordern. Dieser Schlüssel ist ein Array von Strings, wobei jeder String eine Berechtigung anfordert.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn um Bestätigung bitten, ob er mit der Gewährung dieser Berechtigungen einverstanden ist. Der Browser kann dem Benutzer auch die Möglichkeit geben, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da die Bitte um Erteilung von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, ist eine sorgfältige Überlegung wert. Zum Beispiel möchten Sie unnötige Berechtigungen vermeiden und möglicherweise Informationen darüber bereitstellen, warum Sie Berechtigungen in der Beschreibung Ihres Verlaufs im Store anfordern. Weitere Informationen zu den zu berücksichtigenden Aspekten finden Sie im Artikel [Anforderung der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen darüber, wie Sie Berechtigungsanfragen testen und in der Vorschau anzeigen können, finden Sie unter [Testen von Berechtigungsanfragen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Website der Extension Workshop.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab` Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationszeit-Anfrage mit diesem (`permissions`) Manifest-Schlüssel.
>   - Laufzeitanfrage mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Installationszeit-Anfrage mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Laufzeitanfrage mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Host-Berechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Beispielsweise könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen (auch für Anfragen, die von Inhalts-Skripten gemacht werden)
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung auszulesen, wie z.B. die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Fähigkeit, programmgesteuert Inhalts-Skripte und Stile in von diesen Ursprüngen bereitgestellte Seiten einzufügen.
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Fähigkeit, Cookies für diesen Host zuzugreifen, indem die {{webextAPIref("cookies")}} API verwendet wird, sofern die `"cookies"` API-Berechtigung ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhalts-Skripte können jedoch den Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmgesteuert abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

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
- `devtools` (Diese Berechtigung wird implizit erteilt, wenn der [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Manifest-Schlüssel vorhanden ist.)
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

In den meisten Fällen gewährt die Berechtigung nur Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` gewährt Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo` Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} einschließen möchten. Der Rest der `tabs` API kann ohne Anforderung von Berechtigungen verwendet werden.
  - Ab Firefox 86 und Chrome 50 können passende [Host-Berechtigungen](#host-berechtigungen) auch anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht es Ihnen, das `"blocking"` Argument zu verwenden, sodass Sie Anfragen [ändern und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` erlaubt es Ihnen, die {{WebExtAPIRef("downloads.open()")}} API zu verwenden.
- `tabHide` erlaubt es Ihnen, die {{WebExtAPIRef("tabs.hide()")}} API zu verwenden.

## activeTab Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab` Berechtigung hat, erhält die Erweiterung zusätzliche Berechtigungen nur für den aktiven Tab, wenn der Benutzer mit der Erweiterung interagiert.

"Benutzerinteraktion" beinhaltet:

- der Benutzer klickt auf die {{webextAPIref("browserAction", "browser action", "", 1)}} der Erweiterung oder [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- der Benutzer wählt das Kontextmenü-Element aus
- der Benutzer aktiviert einen vom Add-on definierten Tastaturkurzbefehl

Die zusätzlichen Berechtigungen sind:

- Die Fähigkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

Das Ziel dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen zu verleihen. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es fordert".

Zum Beispiel, betrachten Sie eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browser-Aktion klickt. Wenn die `activeTab` Berechtigung nicht existieren würde, müsste die Erweiterung um die Host-Berechtigung `<all_urls>` bitten. Aber das gibt der Erweiterung mehr Macht, als sie benötigt: Sie könnte jetzt Skripte in _jedem Tab_, _zu jeder Zeit_ ausführen, wann sie möchte, anstatt nur im aktiven Tab und nur als Antwort auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf den Tab/die Daten zugreifen, die da waren, als die Benutzerinteraktion stattfand (z.B. der Klick). Wenn der aktive Tab navigiert (z.B. durch Abschluss des Ladens oder ein anderes Ereignis), gewährt die Berechtigung keinen Zugriff mehr auf den Tab.

Die `activeTab` Berechtigung ermöglicht Skriptzugang zur oberen Ebene der Tab-Seite und gleichen Ursprungs-Fenstern. Das Ausführen von Skripten oder Ändern von Stilen innerhalb von [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Fenstern kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich gelten auch [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Seiten und URI-Schemata.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, nur der derzeit aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht es einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt (d.h. auf das Element in der Tableiste, das den Benutzer ermöglicht, von einem Tab zum anderen zu wechseln).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab` Berechtigung für den Tab, den der Benutzer angeklickt hat, gewährt, auch wenn er nicht der aktuell aktive Tab ist (ab Firefox 63, [Firefox Fehler 1446956](https://bugzil.la/1446956)).

## Zwischenablagezugang

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen von der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die `unlimitedStorage` Berechtigung:

- Erlaubt Erweiterungen, jegliche Quoten zu überschreiten, die durch die {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegt werden
- In Firefox erlaubt es Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis bittet, wenn die Datenbank erstellt wird.

## Beispiele

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
