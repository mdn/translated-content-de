---
title: Firefox 77 für Entwickler
slug: Mozilla/Firefox/Releases/77
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 77, die sich auf Entwickler auswirken. Firefox 77 wurde am [2. Juni 2020](https://wiki.mozilla.org/RapidRelease/Calendar) veröffentlicht.

**Siehe auch den begleitenden Artikel auf Hacks — [Neu in Firefox 77: Verbesserungen in DevTools und Web-Plattform-Aktualisierungen](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Firefox Developer Edition bietet ein [Kompatibilitätspanel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) im Seiteninspektor, um die von den auf der Seite verwendeten CSS-Eigenschaften unterstützten Browser anzuzeigen. ([Firefox Bug 1625134](https://bugzil.la/1625134))
- Der Debugger hat ein [Einstellungsmenü in seiner Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar); die einzige Menüoption (bisher) ist **JavaScript deaktivieren**. ([Firefox Bug 1630957](https://bugzil.la/1630957))
- Die [Symbolleiste des Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) verfügt über ein **Aktionen**-Menü zum Verwalten von Protokolldaten ([Firefox Bug 1459175](https://bugzil.la/1459175)):

  - **Logs beibehalten**
  - **HAR-Datei importieren**
  - **Alles als HAR speichern**
  - **Alles als HAR kopieren**

- Das [Anforderungsblockierungspanel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) des Netzwerkmonitors hat ein Kontextmenü zum Aktivieren, Deaktivieren oder Entfernen aller Anforderungsblockierungen. ([Firefox Bug 1588076](https://bugzil.la/1588076))
- Wenn Sie die ausgewählte Quellzeile im Debugger durch Klicken auf einen Frame im [Call Stack](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) ändern und dann auf **Schritt über** (`F10`) klicken, führt der Debugger die Ausführung bis zur Zeile nach der neu ausgewählten Zeile fort (unabhängig davon, bei welcher Zeile der Debugger ursprünglich gestoppt hat). ([Firefox Bug 1630642](https://bugzil.la/1630642))
- Sie können einen Beobachtungspunkt festlegen, der die Ausführung unterbricht, wenn ein Wert [entweder abgerufen oder zugewiesen wird ("get or set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint), sowie nur abgerufen ("get") oder nur zugewiesen ("set") wird. ([Firefox Bug 1580585](https://bugzil.la/1580585))

### HTML

- Firefox zeigt jetzt den [Labelwert](/de/docs/Web/HTML/Element/option#browser_compatibility) auf einem {{HTMLElement("option")}}-Element an, wenn der Inhalt des Elements leer ist. ([Firefox Bug 40545](https://bugzil.la/40545))

### SVG

- Firefox unterstützt jetzt das Präsentationsattribut {{SVGAttr("transform-origin")}} ([Firefox Bug 1581691](https://bugzil.la/1581691)).

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} wird jetzt unterstützt ([Firefox Bug 1608168](https://bugzil.la/1608168)).

### APIs

#### IndexedDB

- Die Eigenschaft [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) wurde implementiert ([Firefox Bug 1536540](https://bugzil.la/1536540)).

### WebDriver-Konformität (Marionette)

- Bestimmte Befehle konnten bei Marionette zu einem Hängenbleiben führen, wenn der aktuell ausgewählte oberste Browsing-Kontext entfernt wird (z.B. durch Schließen des Fensters per Klick) ([Firefox Bug 1619481](https://bugzil.la/1619481)).
- Bekanntes Problem: Aufgrund von Änderungen in Firefox 77 könnte ein offenes Benutzerprompt zu früh geschlossen werden, wenn man von der aktuellen Seite weg navigiert. Dieses Problem wird in Firefox 78 behoben ([Firefox Bug 1631362](https://bugzil.la/1631362)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("tabs.goBack")}} und {{WebExtAPIRef("tabs.goForward")}} werden jetzt unterstützt. ([Firefox Bug 1603796](https://bugzil.la/1603796))
- {{WebExtAPIRef("browsingData.remove")}} mit den Typen `serviceWorkers` und `indexedDB` unterstützt jetzt das Löschen nach Hostname. ([Firefox Bug 1632990](https://bugzil.la/1632990) und [Firefox Bug 1551301](https://bugzil.la/1551301))
- Die {{WebExtAPIRef("tabs.duplicate")}}-API unterstützt jetzt `duplicateProperties`, wodurch die Position und der aktive Status eines duplizierten Tabs angegeben werden können. ([Firefox Bug 1560218](https://bugzil.la/1560218))
- Die {{WebExtAPIRef("permissions")}}-API-Ereignisse {{WebExtAPIRef("permissions.onAdded")}} und {{WebExtAPIRef("permissions.onRemoved")}} werden jetzt unterstützt. ([Firefox Bug 1444294](https://bugzil.la/1444294))
- Mehrere Änderungen des `Content-Security-Policy`-Headers, die in {{WebExtAPIRef("webRequest.onHeadersReceived")}} angefordert werden, werden zusammengeführt. ([Firefox Bug 1462989](https://bugzil.la/1462989))
- {{WebExtAPIRef("webRequest")}}-Ereignisse werden für `data:`-URLs nicht mehr ausgelöst. ([Firefox Bug 1631933](https://bugzil.la/1631933))

### Manifest-Änderungen

- Die folgenden Berechtigungen sind jetzt optional. Sie können im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) angegeben und mit der {{WebExtAPIRef("permissions")}}-API angefordert werden:
  - `browsingData` ([Firefox Bug 1630417](https://bugzil.la/1630417))
  - `devtools` ([Firefox Bug 1606862](https://bugzil.la/1606862)) – durch Festlegen dieser Berechtigung kann eine Erweiterung Entwicklerwerkzeug-Panels einführen, ohne dass die Erweiterung deaktiviert (in Chrome) oder vom Update ausgeschlossen (in Firefox) wird.
  - `pkcs11` ([Firefox Bug 1630418](https://bugzil.la/1630418))
  - `proxy` ([Firefox Bug 1548011](https://bugzil.la/1548011))
  - `sessions` ([Firefox Bug 1630414](https://bugzil.la/1630414)).

### Sonstiges

- Die Verwendung der Berechtigung `unlimitedStorage` führt bei der Installation oder Aktualisierung einer Erweiterung nicht mehr zu einem Prompt. Siehe [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) für weitere Informationen. ([Firefox Bug 1630413](https://bugzil.la/1630413))
- Änderungen im Zusammenhang mit [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) bedeuten, dass beim Festlegen von [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), um den Tracking-Schutz für Erweiterungsseiten zu umgehen, Hosts als vollständige Domäne oder mit Wildcards angegeben werden müssen. Für Content-Skripte kann der Tracking-Schutz jedoch nur für Hosts umgangen werden, die mit einer vollständigen Domäne angegeben sind.

## Ältere Versionen

{{Firefox_for_developers}}
