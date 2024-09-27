---
title: Firefox 77 für Entwickler
slug: Mozilla/Firefox/Releases/77
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 77, die Entwickler betreffen. Firefox 77 wurde am [2. Juni 2020](https://wiki.mozilla.org/RapidRelease/Calendar) veröffentlicht.

**Siehe auch den begleitenden Hacks-Artikel — [Neu in Firefox 77: Verbesserungen in den DevTools und Updates der Webplattform](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Firefox Developer Edition bietet ein [Kompatibilitäts-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) im Seiteninspektor, um die von den CSS-Eigenschaften auf der Seite unterstützten Browser anzuzeigen. ([Firefox Bug 1625134](https://bugzil.la/1625134))
- Der Debugger hat ein [Einstellungsmenü in seiner Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar); die einzige Menüoption (bisher) ist **JavaScript deaktivieren**. ([Firefox Bug 1630957](https://bugzil.la/1630957))
- Die [Netzwerkmonitor-Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) hat ein **Aktionen**-Menü zum Verwalten der Protokolldaten ([Firefox Bug 1459175](https://bugzil.la/1459175)):

  - **Protokolle beibehalten**
  - **HAR-Datei importieren**
  - **Alles als HAR speichern**
  - **Alles als HAR kopieren**

- Das [Panel zur Anforderungsblockierung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) des Netzwerkmonitors verfügt über ein Kontextmenü zum Aktivieren, Deaktivieren oder Entfernen aller Anforderungsblockelemente. ([Firefox Bug 1588076](https://bugzil.la/1588076))
- Wenn Sie die ausgewählte Quellzeile im Debugger durch Klicken auf einen Frame im [Aufrufstapel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) ändern und dann **Über Schritt** (`F10`) klicken, führt der Debugger den Code bis zur Zeile nach der neu ausgewählten Zeile aus (unabhängig davon, an welcher Zeile der Debugger ursprünglich angehalten hat). ([Firefox Bug 1630642](https://bugzil.la/1630642))
- Sie können einen Beobachtungspunkt setzen, der die Ausführung pausiert, wenn ein Wert [entweder gelesen oder zugewiesen ("get or set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) wird, sowie nur gelesen ("get") oder nur zugewiesen ("set") wird. ([Firefox Bug 1580585](https://bugzil.la/1580585)

### HTML

- Firefox zeigt jetzt den [Label-Wert](/de/docs/Web/HTML/Element/option#browser_compatibility) auf einem {{HTMLElement("option")}}-Element an, wenn der Inhalt des Elements leer ist. ([Firefox Bug 40545](https://bugzil.la/40545))

### SVG

- Firefox unterstützt jetzt das {{SVGAttr("transform-origin")}} Präsentationsattribut ([Firefox Bug 1581691](https://bugzil.la/1581691)).

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} wird jetzt unterstützt ([Firefox Bug 1608168](https://bugzil.la/1608168)).

### APIs

#### IndexedDB

- Die [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request)-Eigenschaft wurde implementiert ([Firefox Bug 1536540](https://bugzil.la/1536540)).

### WebDriver-Konformität (Marionette)

- Bestimmte Befehle konnten dazu führen, dass Marionette hängen blieb, wenn der derzeit ausgewählte oberste Browsing-Kontext entfernt wurde (z.B. durch Klick auf das Schließen des Fensters) ([Firefox Bug 1619481](https://bugzil.la/1619481)).
- Bekanntes Problem: Aufgrund von Änderungen in Firefox 77 konnte eine offene Benutzereingabeaufforderung zu früh geschlossen werden, wenn man von der aktuellen Seite weg navigiert. Dieses Problem wird in Firefox 78 behoben ([Firefox Bug 1631362](https://bugzil.la/1631362)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

- {{WebExtAPIRef("tabs.goBack")}} und {{WebExtAPIRef("tabs.goForward")}} werden jetzt unterstützt. ([Firefox Bug 1603796](https://bugzil.la/1603796))
- {{WebExtAPIRef("browsingData.remove")}} mit den Typen `serviceWorkers` und `indexedDB` unterstützt jetzt das Löschen nach Hostnamen. ([Firefox Bug 1632990](https://bugzil.la/1632990) und [Firefox Bug 1551301](https://bugzil.la/1551301))
- Die {{WebExtAPIRef("tabs.duplicate")}}-API unterstützt jetzt `duplicateProperties`, wodurch die Position und der aktive Status eines duplizierten Tabs angegeben werden können. ([Firefox Bug 1560218](https://bugzil.la/1560218))
- Die {{WebExtAPIRef("permissions")}} API-Ereignisse {{WebExtAPIRef("permissions.onAdded")}} und {{WebExtAPIRef("permissions.onRemoved")}} werden jetzt unterstützt. ([Firefox Bug 1444294](https://bugzil.la/1444294))
- Mehrere Änderungen der `Content-Security-Policy`-Header, die in {{WebExtAPIRef("webRequest.onHeadersReceived")}} angefordert wurden, werden zusammengeführt. ([Firefox Bug 1462989](https://bugzil.la/1462989))
- {{WebExtAPIRef("webRequest")}}-Ereignisse werden für `data:` URLs nicht mehr ausgelöst. ([Firefox Bug 1631933](https://bugzil.la/1631933))

### Manifest-Änderungen

- Die folgenden Berechtigungen sind jetzt optional, sie können im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel angegeben und mit der {{WebExtAPIRef("permissions")}} API angefordert werden:
  - `browsingData` ([Firefox Bug 1630417](https://bugzil.la/1630417))
  - `devtools` ([Firefox Bug 1606862](https://bugzil.la/1606862)) – durch Festlegen dieser Berechtigung kann eine Erweiterung Entwicklerwerkzeuge-Panels in einem Update einführen, ohne dass die Erweiterung deaktiviert (in Chrome) oder vom Update blockiert (in Firefox) wird.
  - `pkcs11` ([Firefox Bug 1630418](https://bugzil.la/1630418))
  - `proxy` ([Firefox Bug 1548011](https://bugzil.la/1548011))
  - `sessions` ([Firefox Bug 1630414](https://bugzil.la/1630414)).

### Sonstiges

- Die Verwendung der `unlimitedStorage`-Berechtigung führt während der Installation oder Aktualisierung der Erweiterung nicht mehr zu einer Eingabeaufforderung. Siehe [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) für weitere Informationen. ([Firefox Bug 1630413](https://bugzil.la/1630413))
- Änderungen im Zusammenhang mit [`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) bedeuten, dass beim Festlegen von [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), um den Tracking-Schutz für Erweiterungsseiten zu umgehen, Hosts als vollständige Domain oder mit Platzhaltern angegeben werden müssen. Für Inhalts-Skripte kann der Tracking-Schutz jedoch nur für Hosts umgangen werden, die mit einer vollständigen Domain angegeben sind.

## Ältere Versionen

{{Firefox_for_developers}}
