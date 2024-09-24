---
title: Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
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

Verwenden Sie den `permissions`-Schlüssel, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenketten, wobei jede Zeichenkette eine Anforderung für eine Berechtigung darstellt.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Privilegien anfordert, und ihn bitten zu bestätigen, dass sie diese Privilegien gewähren möchten. Der Browser kann dem Benutzer auch erlauben, die Privilegien einer Erweiterung nach der Installation zu prüfen. Da die Aufforderung zur Gewährung von Privilegien die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, sollten Sie die Anforderung von Privilegien sorgfältig abwägen. Beispielsweise möchten Sie unnötige Berechtigungen vermeiden und Informationen darüber bereitstellen, warum Sie Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Weitere Informationen zu den zu berücksichtigenden Problemen finden Sie im Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschau von Berechtigungsanforderungen finden Sie unter [Berechtigungsanforderungen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Hostberechtigungen (nur Manifest V2; Hostberechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Hostberechtigungen

> [!NOTE]
> Wie Sie Hostberechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit wollen und welche Manifestversion Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Zur Laufzeit mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Zur Installationszeit mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Zur Laufzeit mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Hostberechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Hostberechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [Fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (selbst für Anfragen, die aus Inhaltsskripten gestellt werden)
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Möglichkeit, programmgesteuert Inhaltsskripte und Stile in von diesen Ursprüngen bereitgestellte Seiten zu injizieren.
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Möglichkeit, Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, solange die `"cookies"` API-Berechtigung ebenfalls enthalten ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhaltsskripte können jedoch den Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Hostberechtigungen für ihren eigenen Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmgesteuert abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API-Berechtigungen

API-Berechtigungen werden als Schlüsselwörter angegeben, und jedes Schlüsselwort benennt eine [WebExtension-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung nutzen möchte.

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
- `devtools` (Diese Berechtigung wird implizit gewährt, wenn der [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Manifest-Schlüssel vorhanden ist.)
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

In den meisten Fällen gewährt die Berechtigung einfach Zugriff auf die API, mit den folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Hostberechtigungen](#hostberechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

  - In Firefox 85 und früher benötigen Sie `tabs` auch, wenn Sie `url` in den `queryInfo`-Parameter von {{webextAPIref("tabs/query", "tabs.query()")}} aufnehmen möchten. Der Rest der `tabs`-API kann ohne die Anforderung von Berechtigungen verwendet werden.
  - Ab Firefox 86 und Chrome 50 können passende [Hostberechtigungen](#hostberechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht es Ihnen, das `"blocking"`-Argument zu verwenden, sodass Sie [Anfragen modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` ermöglicht die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab-Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, erhält sie zusätzliche Privilegien nur für den aktiven Tab, wenn der Benutzer mit der Erweiterung interagiert.

"Benutzerinteraktion" beinhaltet:

- der Benutzer klickt auf die {{webextAPIref("browserAction", "Benutzeraktion in der Symbolleiste", "", 1)}} oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung
- der Benutzer wählt das Kontextmenüelement aus
- der Benutzer aktiviert ein Tastaturkürzel, das von der Erweiterung definiert wurde

Die zusätzlichen Privilegien sind:

- Die Möglichkeit, JavaScript oder CSS programmgesteuert in den Tab zu injizieren (siehe [Laden von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung besteht darin, es Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen zu geben. Viele Erweiterungen wollen "etwas mit der aktuellen Seite tun, wenn der Benutzer es verlangt".

Zum Beispiel, betrachten Sie eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Hostberechtigung `<all_urls>` anfordern. Dies würde der Erweiterung jedoch mehr Macht geben, als sie benötigt: sie könnte nun Skripte in _jedem Tab_ zu _jeder Zeit_ ausführen, anstatt nur im aktiven Tab und nur als Antwort auf eine Benutzeraktion.

> [!NOTE]
> Sie können nur auf die Registerkarte/Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion erfolgt ist (z.B. der Klick). Wenn der aktive Tab weggeblättert wird (z.B. durch das endgültige Laden oder ein anderes Ereignis), gewährt die Berechtigung Ihnen keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht skriptgesteuerten Zugriff auf die Seite des obersten Tabs und gleichartige Rahmen. Das Ausführen von Skripten oder das Ändern von Stilen in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Hostberechtigungen](#hostberechtigungen) erfordern. Natürlich werden ebenso [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Websites und URI-Schemata angewendet.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, einfach der derzeit aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}} API ermöglicht einer Erweiterung, ein Menüelement zu erstellen, das angezeigt wird, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt (das ist auf das Element im Tabstreifen, das es dem Benutzer ermöglicht, von einem Tab zu einem anderen zu wechseln).

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, auch wenn es nicht der derzeit aktive Tab ist (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zugriff auf die Zwischenablage

Es gibt zwei Berechtigungen, die der Erweiterung den Zugriff auf die Zwischenablage ermöglichen:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit {{DOMxRef("Clipboard.write()")}}, {{DOMxRef("Clipboard.writeText()")}}, `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen von der Zwischenablage mit {{DOMxRef("Clipboard.read()")}}, {{DOMxRef("Clipboard.readText()")}} oder `document.execCommand("paste")`

Weitere Einzelheiten finden Sie unter [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, jedes von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Quota zu überschreiten
- In Firefox ermöglicht es Erweiterungen, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer um Erlaubnis beim Erstellen der Datenbank bittet.

## Beispiel

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, fordert privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

```json
  "permissions": ["tabs"]
```

Forderung des Zugriffs auf die privilegierten Teile der `tabs` API.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Nur in Manifest V2 fordert beide oben genannten Berechtigungen an.

## Browserkompatibilität

{{Compat}}
