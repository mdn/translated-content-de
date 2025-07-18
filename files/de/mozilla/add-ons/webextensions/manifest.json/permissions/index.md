---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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

Verwenden Sie den `permissions`-Schlüssel, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenketten, und jede Zeichenkette ist eine Anfrage für eine Berechtigung.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Privilegien anfordert, und ihn bitten zu bestätigen, dass er mit der Gewährung dieser Privilegien einverstanden ist. Der Browser kann dem Benutzer auch erlauben, die Privilegien einer Erweiterung nach der Installation zu überprüfen. Da die Anfrage zur Gewährung von Privilegien die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, sollte die Anforderung von Privilegien sorgfältig überlegt werden. Beispielsweise sollten unnötige Berechtigungen vermieden werden, und es kann sinnvoll sein, in der Beschreibung Ihrer Erweiterung im Store Informationen darüber bereitzustellen, warum Sie Berechtigungen anfordern. Weitere Informationen zu den zu berücksichtigenden Aspekten finden Sie im Artikel [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschau von Berechtigungsanfragen finden Sie unter [Testen von Berechtigungsanfragen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Site.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest-Schlüssel [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab`-Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie sie zur Installationszeit oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Anforderung zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Anforderung zur Installationszeit mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Host-Berechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster kennzeichnet eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Beispielsweise könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` lauten.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (auch für Anfragen, die von Inhalts-Skripten gesendet werden)
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie z.B. die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Möglichkeit, Inhalts-Skripte und Stile programmatisch in Seiten einzuspeisen, die von diesen Ursprüngen bereitgestellt werden.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Möglichkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, sofern die `"cookies"` API-Berechtigung ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domäne oder mit Wildcards angegeben ist. Inhalts-Skripte können jedoch den Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domäne angegeben sind.

In Firefox erhalten Erweiterungen ab Version 56 automatisch Host-Berechtigungen für ihren eigenen Ursprung, der folgende Form hat:

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
- `tabGroups`
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

In den meisten Fällen gewährt die Berechtigung einfach den Zugriff auf die API, mit folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im `queryInfo`-Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} aufnehmen möchten. Der Rest der `tabs` API kann ohne Anforderung einer Berechtigung verwendet werden.
  - Ab Firefox 86 und Chrome 50 können auch entsprechende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` erlaubt Ihnen die Verwendung des `"blocking"` Arguments, sodass Sie Anfragen [ändern und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` erlaubt Ihnen die Verwendung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` erlaubt Ihnen die Verwendung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab Berechtigung

Diese Berechtigung wird als `"activeTab"` angegeben. Wenn eine Erweiterung die `activeTab`-Berechtigung hat, erhält die Erweiterung, wenn der Benutzer mit ihr interagiert, zusätzliche Privilegien nur für den aktiven Tab.

"Benutzerinteraktion" umfasst:

- Der Benutzer klickt auf die {{webextAPIref("browserAction", "browser action", "", 1)}} oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung.
- Der Benutzer wählt dessen Kontextmenüpunkt aus.
- Der Benutzer aktiviert eine von der Erweiterung definierte Tastenkombination.

Die zusätzlichen Privilegien sind:

- Die Fähigkeit, JavaScript oder CSS programmatisch in den Tab einzufügen (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Der Zweck dieser Berechtigung besteht darin, es Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen sehr mächtige Berechtigungen zu geben. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es wünscht".

Betrachten Sie zum Beispiel eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber das gibt der Erweiterung mehr Macht, als sie benötigt: Sie könnte jetzt Skripte in _jedem Tab_, _beliebig oft_, nicht nur im aktiven Tab und nur als Reaktion auf eine Benutzeraktion, ausführen.

> [!NOTE]
> Sie können nur auf die Tab-/Daten zugreifen, die vorhanden waren, als die Benutzerinteraktion stattfand (z. B. der Klick). Wenn der aktive Tab weg navigiert (z. B. aufgrund des Abschlusses des Ladevorgangs oder eines anderen Ereignisses), gewährt die Berechtigung Ihnen keinen Zugriff mehr auf den Tab.

Die `activeTab`-Berechtigung ermöglicht Skriptzugriff auf die Seite des obersten Tabs und gleichartige Ursprungsrahmen. Das Ausführen von Skripten oder das Ändern von Stilen auf Grundlage von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access)-Rahmen kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich werden auch [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die für bestimmte Sites und URI-Schemata gelten, berücksichtigt.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, einfach der aktuell aktive Tab, außer in einem Fall. Die {{webextAPIref("menus")}}-API ermöglicht es einer Erweiterung, einen Menüpunkt zu erstellen, der angezeigt wird, wenn der Benutzer bei einem Tab (d.h. auf das Element im Tabstreifen, das den Benutzer ermöglicht, von einem Tab zum anderen zu wechseln) einen Kontextklick ausführt.

Wenn der Benutzer auf ein solches Element klickt, wird die `activeTab`-Berechtigung für den angeklickten Tab gewährt, auch wenn es nicht der aktuell aktive Tab ist (ab Firefox 63, [Firefox Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablagenzugriff

Es gibt zwei Berechtigungen, die es der Erweiterung ermöglichen, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mithilfe von [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`
- `clipboardRead`
  - : Lesen aus der Zwischenablage mithilfe von [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`

Weitere Details finden Sie unter [Mit der Zwischenablage interagieren](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- ermöglicht es Erweiterungen, jede von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Quota zu überschreiten.
- ermöglicht in Firefox Erweiterungen das Erstellen einer ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API), ohne dass der Browser den Benutzer um Erlaubnis fragt, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, privilegierten Zugriff auf Seiten unter `developer.mozilla.org` anfordern.

```json
  "permissions": ["tabs"]
```

Zugriff auf die privilegierten Teile der `tabs` API anfordern.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 nur, beide obigen Berechtigungen anfordern.

## Browser-Kompatibilität

{{Compat}}
