---
title: Firefox 77 für Entwickler
slug: Mozilla/Firefox/Releases/77
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 77, die Entwickler betreffen. Firefox 77 wurde am [2. Juni 2020](https://wiki.mozilla.org/RapidRelease/Calendar) veröffentlicht.

**Lesen Sie auch den begleitenden Hacks-Beitrag — [Neu in Firefox 77: Verbesserungen der DevTools und Aktualisierungen der Webplattform](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Firefox Developer Edition bietet ein [Kompatibilitäts-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) im Seiteninspektor, um die von den auf der Seite verwendeten CSS-Eigenschaften unterstützten Browser anzuzeigen. ([Firefox Fehler 1625134](https://bugzil.la/1625134))
- Der Debugger hat ein [Einstellungsmenü in seiner Toolbar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar); die einzige Menüoption (bislang) ist **JavaScript deaktivieren**. ([Firefox Fehler 1630957](https://bugzil.la/1630957))
- Die [Netzwerk-Monitor-Toolbar](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) verfügt über ein **Aktionsmenü** zur Verwaltung von Log-Daten ([Firefox Fehler 1459175](https://bugzil.la/1459175)):

  - **Logs beibehalten**
  - **HAR-Datei importieren**
  - **Alles als HAR speichern**
  - **Alles als HAR kopieren**

- Das [Request Blocking Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) des Netzwerk-Monitors hat ein Kontextmenü, um alle Anforderungsblockierungselemente zu aktivieren, deaktivieren oder entfernen. ([Firefox Fehler 1588076](https://bugzil.la/1588076))
- Wenn Sie im Debugger die ausgewählte Quellzeile ändern, indem Sie auf einen Rahmen im [Call Stack](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) klicken und dann auf **Schritt über** (`F10`) klicken, führt der Debugger bis zur Zeile nach der neu ausgewählten Zeile aus (unabhängig davon, bei welcher Zeile der Debugger ursprünglich gestoppt hat). ([Firefox Fehler 1630642](https://bugzil.la/1630642))
- Sie können einen Watchpoint setzen, der die Ausführung pausiert, wenn ein Wert [entweder gelesen oder zugewiesen wird ("get or set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint), sowie nur beim Lesen ("get") oder nur beim Zuweisen ("set"). ([Firefox Fehler 1580585](https://bugzil.la/1580585))

### HTML

- Firefox zeigt jetzt den [Label-Wert](/de/docs/Web/HTML/Reference/Elements/option#browser_compatibility) auf einem {{HTMLElement("option")}}-Element an, wenn der Inhalt des Elements leer ist. ([Firefox Fehler 40545](https://bugzil.la/40545))

### SVG

- Firefox unterstützt jetzt das {{SVGAttr("transform-origin")}} Präsentationsattribut ([Firefox Fehler 1581691](https://bugzil.la/1581691)).

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} wird jetzt unterstützt ([Firefox Fehler 1608168](https://bugzil.la/1608168)).

### APIs

#### IndexedDB

- Die Eigenschaft [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) wurde implementiert ([Firefox Fehler 1536540](https://bugzil.la/1536540)).

### WebDriver-Konformität (Marionette)

- Bestimmte Befehle könnten dazu geführt haben, dass Marionette hängt, wenn der aktuell ausgewählte oberste Browsing-Kontext entfernt wird (z.B. durch Schließen des Fensters per Klick) ([Firefox Fehler 1619481](https://bugzil.la/1619481)).
- Bekanntes Problem: Aufgrund von Änderungen in Firefox 77 könnte ein offenes Benutzerprompt zu früh geschlossen werden, wenn von der aktuellen Seite weg navigiert wird. Dieses Problem wird in Firefox 78 behoben werden ([Firefox Fehler 1631362](https://bugzil.la/1631362)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("tabs.goBack")}} und {{WebExtAPIRef("tabs.goForward")}} werden jetzt unterstützt. ([Firefox Fehler 1603796](https://bugzil.la/1603796))
- {{WebExtAPIRef("browsingData.remove")}} mit den Typen `serviceWorkers` und `indexedDB` unterstützt jetzt das Löschen nach Hostnamen. ([Firefox Fehler 1632990](https://bugzil.la/1632990) und [Firefox Fehler 1551301](https://bugzil.la/1551301))
- Die {{WebExtAPIRef("tabs.duplicate")}} API unterstützt jetzt `duplicateProperties`, wodurch die Position und der aktive Status eines duplizierten Tabs spezifiziert werden können. ([Firefox Fehler 1560218](https://bugzil.la/1560218))
- Die API-Events {{WebExtAPIRef("permissions.onAdded")}} und {{WebExtAPIRef("permissions.onRemoved")}} der {{WebExtAPIRef("permissions")}} API werden jetzt unterstützt. ([Firefox Fehler 1444294](https://bugzil.la/1444294))
- Mehrere Änderungen am `Content-Security-Policy`-Header, die in {{WebExtAPIRef("webRequest.onHeadersReceived")}} angefordert werden, werden zusammengeführt. ([Firefox Fehler 1462989](https://bugzil.la/1462989))
- {{WebExtAPIRef("webRequest")}} Events werden nicht mehr für `data:` URLs ausgelöst. ([Firefox Fehler 1631933](https://bugzil.la/1631933))

### Manifest-Änderungen

- Die folgenden Berechtigungen sind jetzt optional; sie können im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) angegeben und mit der {{WebExtAPIRef("permissions")}} API angefordert werden:
  - `browsingData` ([Firefox Fehler 1630417](https://bugzil.la/1630417))
  - `devtools` ([Firefox Fehler 1606862](https://bugzil.la/1606862)) – indem diese Berechtigung festgelegt wird, kann eine Erweiterung Entwicklerwerkzeug-Panels in einem Update einführen, ohne dass die Erweiterung deaktiviert (in Chrome) oder vom Update ausgeschlossen wird (in Firefox).
  - `pkcs11` ([Firefox Fehler 1630418](https://bugzil.la/1630418))
  - `proxy` ([Firefox Fehler 1548011](https://bugzil.la/1548011))
  - `sessions` ([Firefox Fehler 1630414](https://bugzil.la/1630414)).

### Sonstiges

- Die Verwendung der Berechtigung `unlimitedStorage` führt bei der Installation oder Aktualisierung von Erweiterungen nicht länger zu einer Eingabeaufforderung. Weitere Informationen finden Sie unter [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/). ([Firefox Fehler 1630413](https://bugzil.la/1630413))
- Änderungen im Zusammenhang mit [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) bedeuten, dass beim Setzen von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) zur Umgehung des Tracking-Schutzes für Erweiterungsseiten Hosts als vollständige Domain oder mit Platzhaltern angegeben werden müssen. Für Inhalts-Skripte kann der Tracking-Schutz jedoch nur für Hosts umgangen werden, die mit einer vollständigen Domain angegeben sind.

## Ältere Versionen

{{Firefox_for_developers}}
