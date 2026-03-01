---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
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
      <th scope="row">Manifest Version</th>
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, von denen jede eine Berechtigungsanfrage darstellt.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn bitten, zu bestätigen, dass er bereit ist, diese Berechtigungen zu gewähren. Der Browser kann dem Benutzer auch erlauben, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da das Anfordern von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, lohnt sich eine sorgfältige Überlegung. Zum Beispiel sollten Sie unnötige Berechtigungen vermeiden und erklären, warum Sie Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Für weitere Informationen zu den zu berücksichtigenden Fragen siehe den Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Informationen zum Testen und Vorschau von Berechtigungsanfragen finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Hostberechtigungen (nur Manifest V2, Hostberechtigungen werden im Manifest V3 oder höher im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel angegeben.)
- API-Berechtigungen
- die `activeTab` Berechtigung

## Hostberechtigungen

> [!NOTE]
> Wie Sie Hostberechtigungen anfordern, hängt davon ab, ob Sie diese zur Installationszeit oder zur Laufzeit und mit welcher Manifestversion Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationszeitliche Anforderung mit diesem (`permissions`) Manifest-Schlüssel.
>   - Laufzeitliche Anforderung mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Installationszeitliche Anforderung mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Laufzeitliche Anforderung mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Hostberechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Zum Beispiel könnte eine Hostberechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen.
  > [!NOTE]
  > Für Manifest V2-Erweiterungen nur in Firefox, schließt dies Anfragen ein, die von Inhalts-Skripten gesendet werden.
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Fähigkeit, [Inhalts-Skripte zu injizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Styles programmgesteuert in Seiten, die von diesen Ursprüngen geliefert werden.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Möglichkeit, auf Cookies für diesen Host mithilfe der {{webextAPIref("cookies")}} API zuzugreifen, solange die `"cookies"` API-Berechtigung vorliegt.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Wildcards angegeben ist. Inhalts-Skripte hingegen können den Tracking-Schutz nur für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.

## API-Berechtigungen

Sie geben API-Berechtigungen als Schlüsselwörter an, wobei jedes Schlüsselwort eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API) benennt, die die Erweiterung verwenden möchte.

Diese Berechtigungen sind in Manifest V2 und darüber verfügbar, es sei denn, anders angegeben:

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
- `tabGroups`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `unlimitedStorage`
- `userScripts` (siehe [userScripts Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung nur Zugriff auf die API, mit folgenden Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Hostberechtigungen](#hostberechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und älter benötigen Sie auch `tabs`, wenn Sie die `url` im `queryInfo` Parameter von {{webextAPIref("tabs/query", "tabs.query()")}} einbeziehen möchten. Die Erweiterung kann den Rest der `tabs` API ohne Anforderung von Berechtigungen verwenden.
  - Ab Firefox 86 und Chrome 50 können übereinstimmende [Hostberechtigungen](#hostberechtigungen) statt der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"` Arguments, um [Anfragen zu modifizieren und abzubrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- `downloads.open` ermöglicht die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` ermöglicht die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab Berechtigung

Wenn eine Erweiterung die `"activeTab"` Berechtigung hat, werden der Erweiterung beim Benutzerinteraktion zusätzliche Berechtigungen nur für den aktiven Tab gewährt.

Diese Interaktionen sind als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bekannt und umfassen, dass der Benutzer:

- auf die [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung klickt.
- einen Kontextmenüeintrag der Erweiterung auswählt.
- eine von der Erweiterung definierte Tastenkombination aktiviert (ab Firefox 63).
- auf einen auf einer mit der Erweiterung gebündelten Seite eingebetteten Knopf klickt.
- auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) klickt (ab Firefox 142).

Die zusätzlichen Berechtigungen sind:

- Die Fähigkeit, JavaScript oder CSS programmgesteuert in den Tab zu injizieren (siehe [Laden von Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der Tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Der Zweck dieser Berechtigung besteht darin, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen übermäßig mächtige Berechtigungen zu gewähren. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es anfordert".

Betrachten Sie zum Beispiel eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browser-Aktion klickt. Wenn die `activeTab` Berechtigung nicht existierte, müsste die Erweiterung die Hostberechtigung `<all_urls>` anfordern. Aber das gibt der Erweiterung mehr Macht, als sie benötigt: Sie kann jetzt Skripte in _jedem Tab_ ausführen, _jederzeit_, anders als nur im aktiven Tab und nur in Reaktion auf eine Benutzeraktion.

> [!NOTE]
> Ihre Erweiterung kann nur auf den Tab oder die Daten zugreifen, die existierten, als die Benutzerinteraktion stattfand (z. B. ein Klick). Wenn der aktive Tab weg navigiert (z. B. aufgrund des Abschlusses des Seitenladevorgangs oder eines anderen Ereignisses), hat die Erweiterung keine Berechtigung mehr, auf den Tab zuzugreifen.

Die `activeTab` Berechtigung ermöglicht Skripting-Zugriff auf die Seite des obersten Tabs und Same-Origin-Frames. Das Ausführen von Skripten oder das Modifizieren von Styles innerhalb von [Cross-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Hostberechtigungen](#hostberechtigungen) erfordern. Natürlich werden [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die in Bezug auf bestimmte Websites und URI-Schemata spezifisch sind, ebenfalls angewandt.

Normalerweise ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann einen Menüpunkte mit der {{webextAPIref("menus")}} API erstellen, der angezeigt wird, wenn der Benutzer auf ein Tab kontextklickt. Das heißt, ein Menü auf einem Element im Tabstrip, das dem Benutzer erlaubt, zwischen Tabs zu wechseln. Wenn der Benutzer auf dieses Menü klickt, wird die `activeTab` Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, selbst wenn es nicht der aktive Tab ist (ab Firefox 63, [Firefox-Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablage-Zugriff

Zwei Berechtigungen ermöglichen es einer Erweiterung, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`.
- `clipboardRead`
  - : Lesen aus der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`.

Siehe [Mit der Zwischenablage interagieren](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die `unlimitedStorage` Berechtigung:

- Ermöglicht Erweiterungen, ein von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegtes Quota zu überschreiten
- Erlaubt es Erweiterungen in Firefox, eine ["persistent" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Benutzer zum Zeitpunkt der Erstellung der Datenbank um Erlaubnis fragt.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Verlangen Sie in Manifest V2 nur privilegierten Zugriff auf Seiten unter `developer.mozilla.org`.

```json
  "permissions": ["tabs"]
```

Fordern Sie den Zugriff auf die privilegierten Teile der `tabs` API an.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Fordern Sie in Manifest V2 sowohl die obigen Berechtigungen an.

## Browser-Kompatibilität

{{Compat}}
