---
title: Firefox 77 für Entwickler
slug: Mozilla/Firefox/Releases/77
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 77, die Entwickler betreffen werden. Firefox 77 wurde am [2. Juni 2020](https://wiki.mozilla.org/RapidRelease/Calendar) veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Neu in Firefox 77: Verbesserungen der DevTools und Updates der Webplattform](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Firefox Developer Edition bietet ein [Kompatibilitäts-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) im Seiten-Inspektor, um die von den CSS-Eigenschaften unterstützten Browser auf der Seite anzuzeigen. ([Firefox-Bug 1625134](https://bugzil.la/1625134))
- Der Debugger verfügt über ein [Einstellungsmenü in seiner Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar); die einzige Menüoption ist (bislang) **JavaScript deaktivieren**. ([Firefox-Bug 1630957](https://bugzil.la/1630957))
- Die [Netzwerk-Monitor-Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) verfügt über ein **Aktionen**-Menü zur Verwaltung von Protokolldaten ([Firefox-Bug 1459175](https://bugzil.la/1459175)):

  - **Protokolle beibehalten**
  - **HAR-Datei importieren**
  - **Alle als HAR speichern**
  - **Alle als HAR kopieren**

- Das [Anfrageblockierungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) des Netzwerkanalysators hat ein Kontextmenü zum Aktivieren, Deaktivieren oder Entfernen aller Anfragenelemente. ([Firefox-Bug 1588076](https://bugzil.la/1588076))
- Wenn Sie die ausgewählte Quellzeile im Debugger ändern, indem Sie auf einen Frame im [Aufruf-Stack](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) klicken und dann **Übergehen** (`F10`) klicken, führt der Debugger so lange aus, bis die Linie nach der neu ausgewählten Linie erreicht wird (unabhängig von der Linie, an der der Debugger ursprünglich angehalten hat). ([Firefox-Bug 1630642](https://bugzil.la/1630642))
- Sie können einen Beobachtungspunkt setzen, der die Ausführung anhält, wenn ein Wert [entweder gelesen oder zugewiesen wird ("get oder set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint), sowie nur gelesen ("get") oder nur zugewiesen ("set"). ([Firefox-Bug 1580585](https://bugzil.la/1580585))

### HTML

- Firefox zeigt nun den [Beschriftungswert](/de/docs/Web/HTML/Reference/Elements/option#browser_compatibility) eines {{HTMLElement("option")}}-Elements an, wenn der Inhalt des Elements leer ist. ([Firefox-Bug 40545](https://bugzil.la/40545))

### SVG

- Firefox unterstützt jetzt das Präsentationsattribut {{SVGAttr("transform-origin")}} ([Firefox-Bug 1581691](https://bugzil.la/1581691)).

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} wird jetzt unterstützt ([Firefox-Bug 1608168](https://bugzil.la/1608168)).

### APIs

#### IndexedDB

- Die Eigenschaft [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) wurde implementiert ([Firefox-Bug 1536540](https://bugzil.la/1536540)).

### WebDriver-Konformität (Marionette)

- Bestimmte Befehle könnten ein Hängenbleiben von Marionette verursacht haben, wenn der aktuell ausgewählte oberste Browsing-Kontext entfernt wird (z.B. durch Klicken des Fensterschließens) ([Firefox-Bug 1619481](https://bugzil.la/1619481)).
- Bekanntes Problem: Aufgrund von Änderungen in Firefox 77 konnte ein offenes Benutzerfenster möglicherweise zu früh geschlossen werden, wenn von der aktuellen Seite weg navigiert wird. Dieses Problem wird in Firefox 78 behoben ([Firefox-Bug 1631362](https://bugzil.la/1631362)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("tabs.goBack")}} und {{WebExtAPIRef("tabs.goForward")}} werden jetzt unterstützt. ([Firefox-Bug 1603796](https://bugzil.la/1603796))
- {{WebExtAPIRef("browsingData.remove")}} mit dem Typ `serviceWorkers` und `indexedDB` unterstützt jetzt das Löschen nach Hostname. ([Firefox-Bug 1632990](https://bugzil.la/1632990) und [Firefox-Bug 1551301](https://bugzil.la/1551301))
- Die API {{WebExtAPIRef("tabs.duplicate")}} unterstützt jetzt `duplicateProperties`, sodass die Position und der aktive Status eines duplizierten Tabs angegeben werden können. ([Firefox-Bug 1560218](https://bugzil.la/1560218))
- Die API-Ereignisse {{WebExtAPIRef("permissions")}}-Ereignisse {{WebExtAPIRef("permissions.onAdded")}} und {{WebExtAPIRef("permissions.onRemoved")}} werden jetzt unterstützt. ([Firefox-Bug 1444294](https://bugzil.la/1444294))
- Mehrere `Content-Security-Policy`-Header-Änderungen, die im {{WebExtAPIRef("webRequest.onHeadersReceived")}} angefordert wurden, werden zusammengeführt. ([Firefox-Bug 1462989](https://bugzil.la/1462989))
- {{WebExtAPIRef("webRequest")}}-Ereignisse werden für `data:`-URLs nicht mehr ausgelöst. ([Firefox-Bug 1631933](https://bugzil.la/1631933))

### Manifest-Änderungen

- Die folgenden Berechtigungen sind jetzt optional, sie können im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel angegeben und über die {{WebExtAPIRef("permissions")}} API angefordert werden:
  - `browsingData` ([Firefox-Bug 1630417](https://bugzil.la/1630417))
  - `devtools` ([Firefox-Bug 1606862](https://bugzil.la/1606862)) – durch die Setzung dieser Berechtigung kann eine Erweiterung Entwicklerwerkzeuge-Panels in einem Update einführen, ohne dass die Erweiterung deaktiviert wird (in Chrome) oder vom Update blockiert wird (in Firefox).
  - `pkcs11` ([Firefox-Bug 1630418](https://bugzil.la/1630418))
  - `proxy` ([Firefox-Bug 1548011](https://bugzil.la/1548011))
  - `sessions` ([Firefox-Bug 1630414](https://bugzil.la/1630414)).

### Sonstiges

- Die Verwendung der Berechtigung `unlimitedStorage` führt bei Installation oder Aktualisierung der Erweiterung nicht mehr zu einem Prompt. Weitere Informationen finden Sie unter [Den richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/). ([Firefox-Bug 1630413](https://bugzil.la/1630413))
- Änderungen im Zusammenhang mit [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) bedeuten, dass beim Setzen von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), um den Tracking-Schutz für Erweiterungsseiten zu umgehen, Hosts als vollständige Domäne oder mit Platzhaltern angegeben werden müssen. Für Inhalts-Skripte kann der Tracking-Schutz jedoch nur für Hosts umgangen werden, die mit einer vollständigen Domäne angegeben sind.

## Ältere Versionen

{{Firefox_for_developers}}
