---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
l10n:
  sourceCommit: 674d6c8868cde1654eaba3c285afde9d3b60ce9f
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

Verwenden Sie den `permissions` Schlüssel, um besondere Berechtigungen für Ihre Erweiterung anzufordern. Dieser Schlüssel ist ein Array von Strings, wobei jeder String einen Berechtigungsantrag darstellt.

Wenn Sie Berechtigungen über diesen Schlüssel anfordern, kann der Browser den Benutzer bei der Installation darüber informieren, dass die Erweiterung bestimmte Berechtigungen anfordert, und ihn bitten, die Berechtigungen zu bestätigen. Der Browser kann dem Benutzer auch erlauben, die Berechtigungen einer Erweiterung nach der Installation zu überprüfen. Da die Anforderung von Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, ist eine sorgfältige Überlegung wert. Vermeiden Sie zum Beispiel das Anfordern unnötiger Berechtigungen und erklären Sie, warum Sie Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Weitere Informationen zu den zu berücksichtigenden Aspekten finden Sie im Artikel [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

Weitere Informationen darüber, wie Sie Berechtigungsanfragen testen und anzeigen können, finden Sie unter [Testberechtigungsanfragen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

Der Schlüssel kann drei Arten von Berechtigungen enthalten:

- Host-Berechtigungen (nur Manifest V2, Host-Berechtigungen werden im [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel für Manifest V3 oder höher angegeben.)
- API-Berechtigungen
- die `activeTab` Berechtigung

## Host-Berechtigungen

> [!NOTE]
> Wie Sie Host-Berechtigungen anfordern, hängt davon ab, ob Sie diese zur Installationszeit oder zur Laufzeit benötigen und welche Manifest-Version Ihre Erweiterung verwendet.
>
> - Manifest V2:
>   - Anforderung zur Installationszeit mit diesem (`permissions`) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel.
> - Manifest V3 oder höher:
>   - Anforderung zur Installationszeit mit dem [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel.
>   - Anforderung zur Laufzeit mit dem [`optional_host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel.

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, wobei jedes Muster eine Gruppe von URLs identifiziert, für die die Erweiterung zusätzliche Berechtigungen anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen.
  > [!NOTE]
  > Für Manifest V2-Erweiterungen in Firefox umfasst dies Anfragen, die von Inhalts-Skripten gemacht werden.
- Die Möglichkeit, Tab-spezifische Metadaten ohne die "tabs" Berechtigung zu lesen, wie z.B. die `url`, `title`, und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- Die Möglichkeit, [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) und Styles programmatisch in Seiten von diesen Ursprüngen einzufügen.
- Die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen.
- Die Möglichkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, solange die `"cookies"` API-Berechtigung vorhanden ist.
- Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist. Inhaltsskripte können jedoch nur den Tracking-Schutz für Hosts umgehen, die mit einer vollständigen Domain angegeben sind.
- Die Möglichkeit, WebAuthn-Zugangsdaten zu erstellen und abzurufen. Weitere Details finden Sie unter [Verwendung der Web Authn API in Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api).

## API-Berechtigungen

Sie geben API-Berechtigungen als Schlüsselwörter an, wobei jedes Schlüsselwort eine [WebExtension API](/de/docs/Mozilla/Add-ons/WebExtensions/API) benennt, die die Erweiterung verwenden möchte.

Diese Berechtigungen sind in Manifest V2 und höher verfügbar, es sei denn, es ist anders vermerkt:

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

In den meisten Fällen gewährt die Berechtigung nur den Zugriff auf die API, mit diesen Ausnahmen:

- `tabs` gibt Ihnen Zugriff auf [privilegierte Teile der `tabs` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ohne die Notwendigkeit von [Host-Berechtigungen](#host-berechtigungen): `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.
  - In Firefox 85 und früher benötigen Sie außerdem `tabs`, wenn Sie `url` im `queryInfo` Parameter zu {{webextAPIref("tabs/query", "tabs.query()")}} einschließen möchten. Die Erweiterung kann den Rest der `tabs` API ohne Anforderung einer Berechtigung verwenden.
  - Ab Firefox 86 und Chrome 50 können auch übereinstimmende [Host-Berechtigungen](#host-berechtigungen) anstelle der "tabs" Berechtigung verwendet werden.

- `webRequestBlocking` ermöglicht die Verwendung des `"blocking"` Arguments, sodass Sie [Anfragen modifizieren und abbrechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) können.
- `downloads.open` erlaubt die Nutzung der {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` erlaubt die Nutzung der {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab Berechtigung

Wenn eine Erweiterung die Berechtigung `"activeTab"` hat, erhält sie bei Interaktion des Benutzers mit der Erweiterung zusätzliche Berechtigungen nur für den aktiven Tab.

Diese Interaktionen sind bekannt als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) und umfassen den Benutzer:

- Klick auf den [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionsschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung.
- Auswahl eines Kontextmenüeintrags der Erweiterung.
- Aktivierung einer Tastenkombination, die von der Erweiterung definiert wurde (ab Firefox 63).
- Klick auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.
- Klick auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) (ab Firefox 142).

Die zusätzlichen Berechtigungen sind:

- Die Möglichkeit, JavaScript oder CSS programmatisch in den Tab einzufügen (siehe [Laden von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts)).
- Zugriff auf die privilegierten Teile der tabs API für den aktuellen Tab: `Tab.url`, `Tab.title`, und `Tab.faviconUrl`.

Die Absicht dieser Berechtigung ist es, Erweiterungen zu ermöglichen, einen häufigen Anwendungsfall zu erfüllen, ohne ihnen übermäßig mächtige Berechtigungen zu gewähren. Viele Erweiterungen möchten "etwas auf der aktuellen Seite tun, wenn der Benutzer es fordert".

Ein Beispiel: Stellen Sie sich eine Erweiterung vor, die ein Skript auf der aktuellen Seite ausführen möchte, wenn der Benutzer auf eine Browser-Aktion klickt. Wenn die `activeTab`-Berechtigung nicht existieren würde, müsste die Erweiterung die Host-Berechtigung `<all_urls>` anfordern. Aber das gibt der Erweiterung mehr Macht, als sie benötigt: sie kann nun Skripte in _jedem Tab_ beliebig ausführen, anstatt nur im aktiven Tab und nur als Antwort auf eine Benutzeraktion.

> [!NOTE]
> Ihre Erweiterung kann nur auf den Tab oder die Daten zugreifen, die existierten, als die Benutzerinteraktion stattfand (z.B. ein Klick). Wenn der aktive Tab sich wegbewegt (z.B. durch das Beenden des Seitenladens oder ein anderes Ereignis), hat die Erweiterung nicht mehr die Erlaubnis, auf den Tab zuzugreifen.

Die `activeTab`-Berechtigung ermöglicht Skripting-Zugriff auf die Seite des obersten Tabs und Frames mit demselben Ursprung. Das Ausführen von Skripten oder das Modifizieren von Styles innerhalb von [cross-origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) Frames kann zusätzliche [Host-Berechtigungen](#host-berechtigungen) erfordern. Natürlich werden auch [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) in Bezug auf bestimmte Seiten und URI-Schemata angewendet.

In der Regel ist der Tab, dem `activeTab` gewährt wird, der aktive Tab, mit einer Ausnahme. Eine Erweiterung kann ein Menüelement mit der {{webextAPIref("menus")}} API erstellen, das angezeigt wird, wenn der Benutzer einen Tab mit der rechten Maustaste anklickt. Das heißt, ein Menü auf einem Element im Tabstreifen, das es dem Benutzer ermöglicht, zwischen Tabs zu wechseln. Wenn der Benutzer auf dieses Menü klickt, wird die `activeTab`-Berechtigung für den Tab gewährt, auf den der Benutzer geklickt hat, selbst wenn es nicht der aktive Tab ist (ab Firefox 63, [Firefox-Bug 1446956](https://bugzil.la/1446956)).

## Zwischenablage-Zugriff

Zwei Berechtigungen ermöglichen es einer Erweiterung, mit der Zwischenablage zu interagieren:

- `clipboardWrite`
  - : Schreiben in die Zwischenablage mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText), `document.execCommand("copy")` oder `document.execCommand("cut")`.
- `clipboardRead`
  - : Lesen von der Zwischenablage mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) oder `document.execCommand("paste")`.

Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) für weitere Details.

## Unbegrenzter Speicher

Die `unlimitedStorage`-Berechtigung:

- Ermöglicht Erweiterungen, alle von der {{WebExtAPIRef("storage/local", "storage.local")}} API auferlegten Quoten zu überschreiten.
- Ermöglicht in Firefox Erweiterungen das Erstellen einer ["persistenten" IndexedDB-Datenbank](/de/docs/Web/API/IndexedDB_API) ohne, dass der Browser den Benutzer um Erlaubnis bittet, wenn die Datenbank erstellt wird.

## Beispiele

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 nur, Anforderung privilegierten Zugriffs auf Seiten unter `developer.mozilla.org`.

```json
  "permissions": ["tabs"]
```

Anforderung von Zugriff auf die privilegierten Teile der `tabs` API.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 nur, Anforderung beider oben genannten Berechtigungen.

## Browser-Kompatibilität

{{Compat}}
