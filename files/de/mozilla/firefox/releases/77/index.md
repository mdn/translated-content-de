---
title: Firefox 77 für Entwickler
slug: Mozilla/Firefox/Releases/77
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 77, die Entwickler betreffen. Firefox 77 wurde am [2. Juni 2020](https://wiki.mozilla.org/RapidRelease/Calendar) veröffentlicht.

**Siehe auch den dazugehörigen Hacks-Beitrag — [Neu in Firefox 77: Verbesserungen der Developer Tools und Aktualisierungen der Webplattform](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/).**

## Änderungen für Webentwickler

### Entwickler-Tools

- Firefox Developer Edition bietet ein [Kompatibilitäts-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) im Seiten-Inspektor, um die von den auf der Seite verwendeten CSS-Eigenschaften unterstützten Browser anzuzeigen. ([Firefox-Bug 1625134](https://bugzil.la/1625134))
- Der Debugger hat ein [Einstellungsmenü in seiner Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar); die einzige Menüoption (bisher) ist **JavaScript deaktivieren**. ([Firefox-Bug 1630957](https://bugzil.la/1630957))
- Die [Netzwerk-Monitor-Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) hat ein **Aktionen**-Menü zum Verwalten von Protokolldaten ([Firefox-Bug 1459175](https://bugzil.la/1459175)):

  - **Protokolle beibehalten**
  - **HAR-Datei importieren**
  - **Alles als HAR speichern**
  - **Alles als HAR kopieren**

- Das [Request-Blocking-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) des Netzwerk-Monitors hat ein Kontextmenü zum Aktivieren, Deaktivieren oder Entfernen aller Anforderungsblockeinträge. ([Firefox-Bug 1588076](https://bugzil.la/1588076))
- Wenn Sie die ausgewählte Quellzeile im Debugger ändern, indem Sie auf einen Frame im [Call Stack](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) klicken und dann **Schritt übergehen** (`F10`) anklicken, führt der Debugger bis zur Zeile nach der neu ausgewählten Zeile aus (unabhängig davon, bei welcher Zeile der Debugger ursprünglich angehalten wurde). ([Firefox-Bug 1630642](https://bugzil.la/1630642))
- Sie können einen Überwachungspunkt setzen, der die Ausführung pausiert, wenn ein Wert [entweder gelesen oder zugewiesen wird ("get or set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint), sowie nur gelesen ("get") oder nur zugewiesen ("set") wird. ([Firefox-Bug 1580585](https://bugzil.la/1580585))

### HTML

- Firefox zeigt nun den [Label-Wert](/de/docs/Web/HTML/Element/option#browser_compatibility) auf einem {{HTMLElement("option")}}-Element an, wenn der Inhalt des Elements leer ist. ([Firefox-Bug 40545](https://bugzil.la/40545))

### SVG

- Firefox unterstützt nun das Präsentationsattribut {{SVGAttr("transform-origin")}} ([Firefox-Bug 1581691](https://bugzil.la/1581691)).

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} wird nun unterstützt ([Firefox-Bug 1608168](https://bugzil.la/1608168)).

### APIs

#### IndexedDB

- Die {{DOMxRef("IDBCursor.request")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1536540](https://bugzil.la/1536540)).

### WebDriver-Konformität (Marionette)

- Bestimmte Befehle konnten dazu führen, dass Marionette hängen bleibt, wenn der aktuell ausgewählte oberste Browsing-Kontext entfernt wird (z.B. durch Klicken auf das Schließen der Fenster) ([Firefox-Bug 1619481](https://bugzil.la/1619481)).
- Bekanntes Problem: Aufgrund von Änderungen in Firefox 77 konnte ein geöffnetes Benutzeraufforderungsfenster zu früh geschlossen werden, wenn man von der aktuellen Seite navigiert. Dieses Problem wird in Firefox 78 behoben ([Firefox-Bug 1631362](https://bugzil.la/1631362)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("tabs.goBack")}} und {{WebExtAPIRef("tabs.goForward")}} werden nun unterstützt. ([Firefox-Bug 1603796](https://bugzil.la/1603796))
- {{WebExtAPIRef("browsingData.remove")}} mit den Typen `serviceWorkers` und `indexedDB` unterstützt nun das Löschen nach Hostname. ([Firefox-Bug 1632990](https://bugzil.la/1632990) und [Firefox-Bug 1551301](https://bugzil.la/1551301))
- Die {{WebExtAPIRef("tabs.duplicate")}}-API unterstützt nun `duplicateProperties`, sodass die Position und der aktive Status eines duplizierten Tabs angegeben werden können. ([Firefox-Bug 1560218](https://bugzil.la/1560218))
- Die {{WebExtAPIRef("permissions")}}-API-Ereignisse {{WebExtAPIRef("permissions.onAdded")}} und {{WebExtAPIRef("permissions.onRemoved")}} werden nun unterstützt. ([Firefox-Bug 1444294](https://bugzil.la/1444294))
- Mehrere `Content-Security-Policy`-Header-Änderungen, die in {{WebExtAPIRef("webRequest.onHeadersReceived")}} angefordert wurden, werden zusammengeführt. ([Firefox-Bug 1462989](https://bugzil.la/1462989))
- {{WebExtAPIRef("webRequest")}}-Ereignisse werden nicht mehr für `data:`-URLs ausgelöst. ([Firefox-Bug 1631933](https://bugzil.la/1631933))

### Manifest-Änderungen

- Die folgenden Berechtigungen sind nun optional, sie können im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel angegeben und mit der {{WebExtAPIRef("permissions")}}-API angefordert werden:
  - `browsingData` ([Firefox-Bug 1630417](https://bugzil.la/1630417))
  - `devtools` ([Firefox-Bug 1606862](https://bugzil.la/1606862)) – durch Setzen dieser Berechtigung kann eine Erweiterung Entwickler-Tools-Panels in einem Update einführen, ohne dass die Erweiterung deaktiviert wird (in Chrome) oder vom Aktualisieren blockiert wird (in Firefox).
  - `pkcs11` ([Firefox-Bug 1630418](https://bugzil.la/1630418))
  - `proxy` ([Firefox-Bug 1548011](https://bugzil.la/1548011))
  - `sessions` ([Firefox-Bug 1630414](https://bugzil.la/1630414)).

### Sonstiges

- Die Verwendung der `unlimitedStorage`-Berechtigung führt nicht mehr zu einer Aufforderung während der Installation oder Aktualisierung der Erweiterung. Siehe [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) für mehr Informationen. ([Firefox-Bug 1630413](https://bugzil.la/1630413))
- Änderungen bezüglich [`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) bedeuten, dass beim Setzen von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) zur Umgehung des Tracking-Schutzes für Erweiterungsseiten Hosts als vollständige Domain oder mit Platzhaltern angegeben werden müssen. Für Inhaltsskripte kann der Tracking-Schutz jedoch nur für Hosts umgangen werden, die mit einer vollständigen Domain angegeben sind.

## Ältere Versionen

{{Firefox_for_developers}}
