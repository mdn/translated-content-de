---
title: Firefox 78 für Entwickler
slug: Mozilla/Firefox/Releases/78
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 78, die Entwickler betreffen werden. Firefox 78 wurde am 30. Juni 2020 veröffentlicht.

Siehe auch [Neu in Firefox 78: Verbesserungen der DevTools, neue Regex-Engine und zahlreiche Web-Plattform-Updates](https://hacks.mozilla.org/2020/06/new-in-firefox-78/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwickler-Tools

#### Debugger

- Sie können jetzt die URL, die vom Remote-Gerät aufgerufen wird, aus dem [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device)-Panel ändern. ([Firefox-Bug 1617237](https://bugzil.la/1617237))
- Der Menüpunkt **Disable JavaScript** im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html) betrifft jetzt nur noch den aktuellen Tab und wird zurückgesetzt, wenn die Entwickler-Tools geschlossen werden. ([Firefox-Bug 1640318](https://bugzil.la/1640318))
- [Logpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) können Variablennamen im Quellcode, der Quellkarten verwendet, auf ihre ursprünglichen Namen zurückführen, wenn Sie **Maps** im [Scopes-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes) aktivieren. ([Firefox-Bug 1536857](https://bugzil.la/1536857))

#### Netzwerk-Monitor

- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie jetzt die Spalten der Anforderungsliste durch Ziehen der Spaltengrenzen überall in der Tabelle anpassen. ([Firefox-Bug 1618409](https://bugzil.la/1618409))
- Das [Anforderungsdetailpanel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) im Netzwerk-Monitor hat einige UX-Verbesserungen erhalten. ([Firefox-Bug 1631302](https://bugzil.la/1631302), [Firefox-Bug 1631295](https://bugzil.la/1631295))
- Wenn eine Anfrage blockiert wurde, zeigt die [Anforderungsliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html) jetzt den Grund an, wie ein Add-on, CSP, CORS oder erweiterter Tracking-Schutz. ([Firefox-Bug 1555057](https://bugzil.la/1555057), [Firefox-Bug 1445637](https://bugzil.la/1445637), [Firefox-Bug 1556451](https://bugzil.la/1556451))

#### Andere Werkzeuge

- Der [Barrierefreiheit](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)-Inspektor ist nicht mehr in der Beta-Phase. Sie können ihn nutzen, um verschiedene Barrierefreiheitsprobleme auf Ihrer Website zu überprüfen. ([Firefox-Bug 1602075](https://bugzil.la/1602075))
- Nicht abgefangene Promise-Fehler bieten nun alle Details in der Konsole, einschließlich ihres Namens und ihrer Stapelstruktur. ([Firefox-Bug 1636590](https://bugzil.la/1636590))

### CSS

- Die {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen sind jetzt standardmäßig aktiviert ([Firefox-Bug 1632646](https://bugzil.la/1632646)).
- Die {{CSSxRef(":read-only")}} und {{CSSxRef(":read-write")}} Pseudoklassen werden jetzt ohne Präfixe unterstützt ([Firefox-Bug 312971](https://bugzil.la/312971)).

  - Zusätzlich werden `:read-write` Stile nicht mehr auf deaktivierte [`<input>`](/de/docs/Web/HTML/Element/input)- und [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Elemente angewendet, was eine Verletzung der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-write) darstellte ([Firefox-Bug 888884](https://bugzil.la/888884)).

### JavaScript

- Die [`Intl.ListFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)-API wird jetzt unterstützt ([Firefox-Bug 1589095](https://bugzil.la/1589095)).
- Der [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktor wurde erweitert, um neue Optionen zu unterstützen, die im [Intl.NumberFormat Unified API Proposal](https://github.com/tc39/proposal-unified-intl-numberformat) spezifiziert sind ([Firefox-Bug 1633836](https://bugzil.la/1633836)). Dies umfasst unter anderem:

  - [Unterstützung für wissenschaftliche Notationen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#scientific_engineering_or_compact_notations)
  - Formatierungen für [Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit_formatting), [Währungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency_formatting) und [Vorzeichendarstellung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#displaying_signs)

- Die {{JSxRef("RegExp")}}-Engine [wurde aktualisiert](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) und unterstützt nun alle neuen Funktionen, die in ECMAScript 2018 eingeführt wurden:

  - [Lookbehind-Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) ([Firefox-Bug 1225665](https://bugzil.la/1225665))
  - {{JSxRef("RegExp.prototype.dotAll")}} ([Firefox-Bug 1361856](https://bugzil.la/1361856))
  - [Unicode Property Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) ([Firefox-Bug 1361876](https://bugzil.la/1361876))
  - [Benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ([Firefox-Bug 1362154](https://bugzil.la/1362154))

- Aufgrund einer [WebIDL-Spezifikationsänderung](https://github.com/whatwg/webidl/pull/357) Mitte 2020 haben wir eine [`Symbol.toStringTag`-Eigenschaft zu allen DOM-Prototyp-Objekten hinzugefügt](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#tostringtag_available_on_all_dom_prototype_objects) ([Firefox-Bug 1277799](https://bugzil.la/1277799)).
- Die Speicherbereinigung von {{jsxref("WeakMap")}}-Objekten wurde verbessert. `WeakMaps` werden jetzt inkrementell markiert ([Firefox-Bug 1167452](https://bugzil.la/1167452)).

### APIs

#### DOM

- Die Methode [`Element.replaceChildren`](/de/docs/Web/API/Element/replaceChildren) wurde implementiert ([Firefox-Bug 1626015](https://bugzil.la/1626015)).

#### Service Worker

- [Extended Support Releases (ESR)](https://www.mozilla.org/en-US/firefox/enterprise/): Firefox 78 ist die erste ESR-Version, die [Service Worker](/de/docs/Web/API/Service_Worker_API) (und die [Push API](/de/docs/Web/API/Push_API)) unterstützt. Frühere ESR-Versionen hatten keine Unterstützung ([Firefox-Bug 1547023](https://bugzil.la/1547023)).

### WebAssembly

- [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) wird jetzt unterstützt, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Instruktionssequenzen mehrere Stapelwerte konsumieren und erzeugen können ([Firefox-Bug 1628321](https://bugzil.la/1628321)).
- WebAssembly unterstützt jetzt den Import und Export von 64-Bit-Integer-Funktionsparametern (i64) mit [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) aus JavaScript ([Firefox-Bug 1608770](https://bugzil.la/1608770)).

### Entfernung von TLS 1.0 und 1.1

- Die Unterstützung für das [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS) Protokollversion 1.0 und 1.1 wird von allen Browsern eingestellt. Lesen Sie [TLS 1.0 and 1.1 Removal Update](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/) für die vorherige Ankündigung und welche Aktionen zu ergreifen sind, wenn Sie betroffen sind ([Firefox-Bug 1643229](https://bugzil.la/1643229)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeCache")}} und {{WebExtAPIRef("browsingData.removePluginData")}} unterstützen jetzt das Löschen nach Hostname. ([Firefox-Bug 1636784](https://bugzil.la/1636784)).
- Bei der Verwendung von [`proxy.onRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) wird ein Filter, der auf Tab-ID oder Fenster-ID basiert, jetzt korrekt angewendet. Dies könnte nützlich für Add-ons sein, die Proxy-Funktionalität nur in einem einzigen Fenster bieten möchten.
- [Klicken innerhalb des Kontextmenüs](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked) aus dem "Alle Tabs"-Dropdown übergibt jetzt das richtige Tab-Objekt. In der Vergangenheit wurde fälschlicherweise der aktive Tab übergeben.
- Bei der Nutzung von [`downloads.download`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) mit der SaveAs-Option wird das zuletzt verwendete Verzeichnis jetzt gespeichert. Diese Information steht Entwicklern nicht zur Verfügung, ist aber für Benutzer sehr praktisch.

## Ältere Versionen

{{Firefox_for_developers}}
