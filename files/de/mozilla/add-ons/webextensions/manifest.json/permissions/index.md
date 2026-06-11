---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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

Verwenden Sie den Schlüssel `permissions`, um spezielle Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Zeichenfolgen, von denen jede eine Berechtigungsanfrage darstellt.

Wenn Sie Berechtigungen mit diesem Schlüssel anfordern, kann der Browser den Nutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und er kann sie bitten, diese Berechtigungen zu genehmigen. Der Browser kann dem Nutzer auch erlauben, nach der Installation die Berechtigungen einer Erweiterung zu überprüfen. Da das Anfordern von Berechtigungen die Bereitschaft der Nutzer, Ihre Erweiterung zu installieren, beeinträchtigen kann, ist eine sorgfältige Überlegung sinnvoll. Vermeiden Sie es beispielsweise, unnötige Berechtigungen anzufordern, und erklären Sie in der Store-Beschreibung Ihrer Erweiterung, warum Sie Berechtigungen anfordern. Weitere Informationen zu den zu berücksichtigenden Aspekten finden Sie im Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Weitere Informationen zum Testen und Überprüfen von Berechtigungsanfragen finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im Manifest V3 oder höher im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel angegeben.)
- API-Berechtigungen
- die Berechtigung `activeTab`

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie diese zur Installationszeit oder zur Laufzeit anfordern möchten und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Installationszeit-Anfrage mit diesem (`permissions`) Manifest-Schlüssel.
>   - Laufzeitanfrage mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Installationszeit-Anfrage mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Laufzeitanfrage mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen.
  > [!NOTE]
  > Für Erweiterungen der Manifest-Version V2 in Firefox schließt dies Anfragen ein, die von Inhaltsskripten gestellt werden.
- die Fähigkeit, registerkartenbezogene Metadaten ohne die "tabs"-Berechtigung auszulesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}} Objekten
- die Fähigkeit, [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Styles programmgesteuert in Seiten einzuspeisen, die von diesen Ursprünge bereitgestellt werden.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen
- die Fähigkeit, Cookies für diesen Host mithilfe der {{webextAPIref("cookies")}} API zuzugreifen, solange die `"cookies"` API-Berechtigung vorhanden ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhaltsskripte können jedoch den Tracking-Schutz nur für Hosts mit vollständiger Domain umgehen.
- die Fähigkeit, WebAuthn-Anmeldeinformationen zu erstellen und abzurufen. Siehe [Use Web Authn API in web extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details.

## API-Berechtigungen

Sie geben API-Berechtigungen als Schlüsselwörter an, und jedes Schlüsselwort benennt eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API), die die Erweiterung verwenden möchte.

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
- `publicSuffix`
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
- `userScripts` (siehe [userScripts permission](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 und höher)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In den meisten Fällen gewährt die Berechtigung nur Zugriff auf die API, mit diesen Ausnahmen:

- `tabs` ermöglicht Ihnen den Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit für [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title` und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie auch `tabs`, wenn Sie `url` im Parameter `queryInfo` an {{webextAPIref("tabs/query", "tabs.query()")}} einfügen möchten. Die Erweiterung kann den Rest der `tabs` API verwenden, ohne irgendeine Berechtigung anzufordern.
  - Ab Firefox 86 und Chrome 50 können auch passende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs"-Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht Ihnen die Verwendung des Arguments `"blocking"`, sodass Sie Anfragen [ändern und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` gestattet Ihnen die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` gestattet Ihnen die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab-Berechtigung

Wenn eine Erweiterung die Berechtigung `"activeTab"` hat, erhält die Erweiterung, wenn ein Nutzer mit ihr interagiert, zusätzliche Berechtigungen nur für den aktiven Tab.

Diese Interaktionen sind als [Nutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bekannt und beinhalten, dass der Nutzer:

- auf die [Symbolleisten-Taste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) der Erweiterung oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- einen Kontextmenüeintrag der Erweiterung auswählt.
- eine von der Erweiterung definierte Tastenkombination aktiviert (ab Firefox 63).
- auf eine Schaltfläche auf einer mitgelieferten Seite klickt.
- auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) klickt (ab Firefox 142).

Die zusätzlichen Berechtigungen sind:

- Die Fähigkeit, JavaScript oder CSS programmgesteuert in den Tab einzufügen (siehe [Loading content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der tabs-API für den aktuellen Tab: `Tab.url`, `Tab.title` und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung besteht darin, Erweiterungen die Möglichkeit zu geben, einen häufigen Anwendungsfall zu bearbeiten, ohne ihnen zu mächtige Berechtigungen zu gewähren. Viele Erweiterungen möchten "etwas mit der aktuellen Seite tun, wenn der Nutzer fragt".

Betrachten Sie zum Beispiel eine Erweiterung, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Nutzer auf eine Browseraktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber das gibt der Erweiterung mehr Macht, als sie benötigt: Sie kann jetzt Skripte in _jedem Tab_ zu _jeder Zeit_ ausführen, anstatt nur im aktiven Tab und nur als Antwort auf eine Nutzeraktion.

> [!NOTE]
> Ihre Erweiterung kann nur auf den Tab oder die Daten zugreifen, die existierten, als die Nutzerinteraktion stattfand (z. B. ein Klick). Wenn der aktive Tab weiter navigiert (z. B. durch das Beenden des Seitenladens oder ein anderes Ereignis), hat die Erweiterung nicht mehr die Berechtigung, auf den Tab zuzugreifen.

Die `activeTab`-Berechtigung ermöglicht Skripting-Zugriff auf die Seite des übergeordneten Tabs und Frames mit demselben Ursprung. Das Ausführen von Skripten oder das Ändern von Styles in [cross-origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich gelten auch [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Sites und URI-Schemata.

Üblicherweise ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann mit der {{webextAPIref("menus")}} API ein Menüelement erstellen, das angezeigt wird, wenn der Nutzer einen Tab kontext-klickt. Das ist ein Menü auf einem Element im Tabstreifen, mit dem der Nutzer zwischen Tabs wechseln kann. Wenn der Nutzer auf dieses Menü klickt, dann wird die `activeTab`-Berechtigung für den Tab gewährt, den der Nutzer angeklickt hat, auch wenn er nicht der aktive Tab ist (ab Firefox 63, [Firefox bug 1446956](https://bugzil.la/1446956)).

## Zwischenablage-Zugriff

Zwei Berechtigungen ermöglichen einer Erweiterung die Interaktion mit der Zwischenablage:

- `clipboardWrite`
  - : Schreibzugriff auf die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`.
- `clipboardRead`
  - : Lesezugriff auf die Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`.

Siehe [Interact with the clipboard](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die Berechtigung `unlimitedStorage`:

- Ermöglicht Erweiterungen, jede durch die {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegte Quote zu überschreiten
- Ermöglicht es Erweiterungen in Firefox, eine ["persistente" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) zu erstellen, ohne dass der Browser den Nutzer um Erlaubnis fragt, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur: Privilegierten Zugriff auf Seiten unter `developer.mozilla.org` anfordern.

```json
  "permissions": ["tabs"]
```

Zugriff auf die privilegierten Teile der `tabs` API anfordern.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 nur: Beide oben genannten Berechtigungen anfordern.

## Browser-Kompatibilität

{{Compat}}
