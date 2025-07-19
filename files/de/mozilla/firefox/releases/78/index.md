---
title: Firefox 78 für Entwickler
short-title: Firefox 78
slug: Mozilla/Firefox/Releases/78
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 78, die Entwickler betreffen werden. Firefox 78 wurde am 30. Juni 2020 veröffentlicht.

Siehe auch [Neu in Firefox 78: Verbesserungen der Entwicklerwerkzeuge, neue Regex-Engine und zahlreiche Webplattform-Aktualisierungen](https://hacks.mozilla.org/2020/06/new-in-firefox-78/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Sie können jetzt die URL, auf die vom Remote-Gerät zugegriffen wird, im [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device)-Panel ändern. ([Firefox-Bug 1617237](https://bugzil.la/1617237))
- Der Menüeintrag **JavaScript deaktivieren** im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html) betrifft jetzt nur noch den aktuellen Tab und wird zurückgesetzt, wenn die Entwicklerwerkzeuge geschlossen werden. ([Firefox-Bug 1640318](https://bugzil.la/1640318))
- [Logpunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) können Variablennamen im Quellcode, der einer Quelle zugeordnet ist, auf ihre ursprünglichen Namen abbilden, wenn Sie **Maps** im [Bereich Scopes](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes) aktivieren. ([Firefox-Bug 1536857](https://bugzil.la/1536857))

#### Netzwerk-Monitor

- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie jetzt die Spalten der Anforderungsliste durch Ziehen der Spaltenränder überall in der Tabelle anpassen. ([Firefox-Bug 1618409](https://bugzil.la/1618409))
- Das [Anforderungsdetail-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) im Netzwerk-Monitor hat einige UX-Verbesserungen erhalten. ([Firefox-Bug 1631302](https://bugzil.la/1631302), [Firefox-Bug 1631295](https://bugzil.la/1631295))
- Wenn eine Anforderung blockiert wurde, zeigt die [Anforderungsliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html) jetzt den Grund an, wie z.B. ein Add-on, CSP, CORS oder erweiterter Schutz vor Verfolgung. ([Firefox-Bug 1555057](https://bugzil.la/1555057), [Firefox-Bug 1445637](https://bugzil.la/1445637), [Firefox-Bug 1556451](https://bugzil.la/1556451))

#### Andere Werkzeuge

- Der [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist aus der Beta-Phase heraus. Sie können ihn verwenden, um verschiedene Barrierefreiheitsprobleme auf Ihrer Website zu überprüfen. ([Firefox-Bug 1602075](https://bugzil.la/1602075))
- Fehler bei nicht abgefangenen Versprechungen geben jetzt alle Details in der Konsole aus, einschließlich ihres Namens und ihres Stacks. ([Firefox-Bug 1636590](https://bugzil.la/1636590))

### CSS

- Die Pseudo-Klassen {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1632646](https://bugzil.la/1632646)).
- Die Pseudo-Klassen {{CSSxRef(":read-only")}} und {{CSSxRef(":read-write")}} werden jetzt ohne Präfixe unterstützt ([Firefox-Bug 312971](https://bugzil.la/312971)).
  - Zusätzlich werden `:read-write`-Stile nicht mehr auf deaktivierte [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Elemente angewendet, was einen Verstoß gegen [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-write) darstellte ([Firefox-Bug 888884](https://bugzil.la/888884)).

### JavaScript

- Die [`Intl.ListFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)-API wird jetzt unterstützt ([Firefox-Bug 1589095](https://bugzil.la/1589095)).
- Der [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktor wurde erweitert, um neue Optionen zu unterstützen, die im [Intl.NumberFormat Unified API Proposal](https://github.com/tc39/proposal-unified-intl-numberformat) spezifiziert sind ([Firefox-Bug 1633836](https://bugzil.la/1633836)). Dazu gehören unter anderem:
  - [Unterstützung für wissenschaftliche Notationen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#scientific_engineering_or_compact_notations)
  - [Einheits-](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit_formatting), [Währungs-](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency_formatting) und [Vorzeichen-Anzeigeformatierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#displaying_signs)

- Die {{JSxRef("RegExp")}}-Engine [wurde aktualisiert](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) und unterstützt jetzt alle neuen in ECMAScript 2018 eingeführten Funktionen:
  - [Lookbehind-Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) ([Firefox-Bug 1225665](https://bugzil.la/1225665))
  - {{JSxRef("RegExp.prototype.dotAll")}} ([Firefox-Bug 1361856](https://bugzil.la/1361856))
  - [Unicode-Eigenschafts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) ([Firefox-Bug 1361876](https://bugzil.la/1361876))
  - [Benannte Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ([Firefox-Bug 1362154](https://bugzil.la/1362154))

- Aufgrund einer [WebIDL-Spezifikationsänderung](https://github.com/whatwg/webidl/pull/357) Mitte 2020 haben wir [eine `Symbol.toStringTag`-Eigenschaft zu allen DOM-Prototypobjekten hinzugefügt](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#tostringtag_available_on_all_dom_prototype_objects) ([Firefox-Bug 1277799](https://bugzil.la/1277799)).
- Die Speicherbereinigung von {{jsxref("WeakMap")}}-Objekten wurde verbessert. `WeakMaps` werden jetzt inkrementell markiert ([Firefox-Bug 1167452](https://bugzil.la/1167452)).

### APIs

#### DOM

- Die [`Element.replaceChildren`](/de/docs/Web/API/Element/replaceChildren)-Methode wurde implementiert ([Firefox-Bug 1626015](https://bugzil.la/1626015)).

#### Service Workers

- [Extended Support Releases (ESR)](https://www.firefox.com/en-US/browsers/enterprise/): Firefox 78 ist die erste ESR-Version, die [Service Workers](/de/docs/Web/API/Service_Worker_API) (und die [Push API](/de/docs/Web/API/Push_API)) unterstützt. Frühere ESR-Versionen hatten keine Unterstützung ([Firefox-Bug 1547023](https://bugzil.la/1547023)).

### WebAssembly

- [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) wird jetzt unterstützt, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben und Anweisungssequenzen mehrere Stapelwerte konsumieren und produzieren können ([Firefox-Bug 1628321](https://bugzil.la/1628321)).
- WebAssembly unterstützt jetzt den Import und Export von 64-Bit-Ganzzahl-Funktion-Parameter (i64) unter Verwendung von [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) aus JavaScript ([Firefox-Bug 1608770](https://bugzil.la/1608770)).

### Entfernen von TLS 1.0 und 1.1

- Unterstützung für die [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)-Protokollversionen 1.0 und 1.1 wird in allen Browsern eingestellt. Lesen Sie [TLS 1.0 und 1.1 Removal Update](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/) für die vorherige Ankündigung und welche Maßnahmen zu ergreifen sind, wenn Sie betroffen sind ([Firefox-Bug 1643229](https://bugzil.la/1643229)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeCache")}} und {{WebExtAPIRef("browsingData.removePluginData")}} unterstützen jetzt das Löschen nach Hostnamen. ([Firefox-Bug 1636784](https://bugzil.la/1636784)).
- Bei Verwendung von [`proxy.onRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) wird jetzt ein Filter, der auf tab id oder Fenster id basiert, korrekt angewendet. Dies könnte nützlich für Add-ons sein, die Proxy-Funktionalität nur in einem Fenster bereitstellen möchten.
- [Ein Klick im Kontextmenü](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked) aus dem "Alle Tabs"-Dropdown übergibt jetzt das entsprechende Tab-Objekt. In der Vergangenheit wurde irrtümlicherweise das aktive Tab übergeben.
- Bei Verwendung von [`downloads.download`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) mit der saveAs-Option wird jetzt das zuletzt verwendete Verzeichnis gespeichert. Obwohl diese Information Entwicklern nicht zur Verfügung steht, ist sie sehr benutzerfreundlich.
