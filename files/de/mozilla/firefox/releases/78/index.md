---
title: Firefox 78 – Versionshinweise für Entwickler
short-title: Firefox 78
slug: Mozilla/Firefox/Releases/78
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

Dieser Artikel informiert über die Änderungen in Firefox 78, die für Entwickler relevant sind. Firefox 78 wurde am 30. Juni 2020 veröffentlicht.

Lesen Sie auch [Neu in Firefox 78: Verbesserungen der DevTools, eine neue Regex-Engine und zahlreiche Aktualisierungen der Webplattform](https://hacks.mozilla.org/2020/06/new-in-firefox-78/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Im Bereich [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) können Sie jetzt die URL ändern, die vom entfernten Gerät aufgerufen wird. ([Firefox-Bug 1617237](https://bugzil.la/1617237))
- Der Menüpunkt **JavaScript deaktivieren** im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html) wirkt sich jetzt nur noch auf den aktuellen Tab aus. Die Einstellung wird zurückgesetzt, wenn die Entwicklerwerkzeuge geschlossen werden. ([Firefox-Bug 1640318](https://bugzil.la/1640318))
- [Logpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) können Variablennamen in Code mit Source Maps wieder ihren ursprünglichen Namen zuordnen, wenn Sie **Maps** im [Bereich „Scopes“](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes) aktivieren. ([Firefox-Bug 1536857](https://bugzil.la/1536857))

#### Netzwerkmonitor

- Im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie jetzt die Größe der Spalten in der Anfrageliste ändern, indem Sie die Spaltenränder an einer beliebigen Stelle der Tabelle ziehen. ([Firefox-Bug 1618409](https://bugzil.la/1618409))
- Der [Bereich mit Anfragedetails](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) im Netzwerkmonitor wurde hinsichtlich der Benutzerfreundlichkeit verbessert. ([Firefox-Bug 1631302](https://bugzil.la/1631302), [Firefox-Bug 1631295](https://bugzil.la/1631295))
- Wenn eine Anfrage blockiert wurde, zeigt die [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html) jetzt den Grund an, beispielsweise ein Add-on, CSP, CORS oder den verbesserten Schutz vor Aktivitätenverfolgung. ([Firefox-Bug 1555057](https://bugzil.la/1555057), [Firefox-Bug 1445637](https://bugzil.la/1445637), [Firefox-Bug 1556451](https://bugzil.la/1556451))

#### Weitere Werkzeuge

- Der [Barrierefreiheits-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) befindet sich nicht mehr in der Betaphase. Sie können damit Ihre Website auf verschiedene Probleme mit der Barrierefreiheit prüfen. ([Firefox-Bug 1602075](https://bugzil.la/1602075))
- Bei nicht abgefangenen Promise-Fehlern werden jetzt alle Details in der Konsole angezeigt, einschließlich Name und Stack-Trace. ([Firefox-Bug 1636590](https://bugzil.la/1636590))

### CSS

- Die Pseudoklassen {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1632646](https://bugzil.la/1632646)).
- Die Pseudoklassen {{CSSxRef(":read-only")}} und {{CSSxRef(":read-write")}} werden jetzt ohne Präfix unterstützt ([Firefox-Bug 312971](https://bugzil.la/312971)).
  - Außerdem werden `:read-write`-Stile nicht mehr auf deaktivierte [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)- und [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Elemente angewendet. Das bisherige Verhalten verstieß gegen [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-write) ([Firefox-Bug 888884](https://bugzil.la/888884)).

### JavaScript

- Die API [`Intl.ListFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) wird jetzt unterstützt ([Firefox-Bug 1589095](https://bugzil.la/1589095)).
- Der Konstruktor [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) wurde erweitert, um neue Optionen aus dem [Vorschlag für eine vereinheitlichte Intl.NumberFormat-API](https://github.com/tc39/proposal-unified-intl-numberformat) zu unterstützen ([Firefox-Bug 1633836](https://bugzil.la/1633836)). Dazu gehören unter anderem:
  - [Unterstützung für wissenschaftliche Schreibweisen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#scientific_engineering_or_compact_notations)
  - Formatierung von [Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit_formatting), [Währungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency_formatting) und [Vorzeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#displaying_signs)

- Die {{JSxRef("RegExp")}}-Engine [wurde aktualisiert](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) und unterstützt jetzt alle neuen Funktionen aus ECMAScript 2018:
  - [Lookbehind-Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) ([Firefox-Bug 1225665](https://bugzil.la/1225665))
  - {{JSxRef("RegExp.prototype.dotAll")}} ([Firefox-Bug 1361856](https://bugzil.la/1361856))
  - [Unicode-Property-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) ([Firefox-Bug 1361876](https://bugzil.la/1361876))
  - [Benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ([Firefox-Bug 1362154](https://bugzil.la/1362154))

- Aufgrund einer [Änderung der WebIDL-Spezifikation](https://github.com/whatwg/webidl/pull/357) Mitte 2020 haben wir [allen DOM-Prototypobjekten eine `Symbol.toStringTag`-Eigenschaft hinzugefügt](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#tostringtag_available_on_all_dom_prototype_objects) ([Firefox-Bug 1277799](https://bugzil.la/1277799)).
- Die Garbage Collection von {{jsxref("WeakMap")}}-Objekten wurde verbessert. `WeakMaps` werden jetzt inkrementell markiert ([Firefox-Bug 1167452](https://bugzil.la/1167452)).

### APIs

#### DOM

- Die Methode [`Element.replaceChildren`](/de/docs/Web/API/Element/replaceChildren) wurde implementiert ([Firefox-Bug 1626015](https://bugzil.la/1626015)).

#### Service Workers

- [Versionen mit erweitertem Support (ESR)](https://www.firefox.com/en-US/enterprise/): Firefox 78 ist die erste ESR-Version, die [Service Workers](/de/docs/Web/API/Service_Worker_API) und die [Push API](/de/docs/Web/API/Push_API) unterstützt. Frühere ESR-Versionen unterstützten diese nicht ([Firefox-Bug 1547023](https://bugzil.la/1547023)).

### WebAssembly

- [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) wird jetzt unterstützt. Damit können WebAssembly-Funktionen mehrere Werte zurückgeben und Befehlsfolgen mehrere Stack-Werte verarbeiten und erzeugen ([Firefox-Bug 1628321](https://bugzil.la/1628321)).
- WebAssembly unterstützt jetzt den Import und Export von 64-Bit-Ganzzahlparametern (i64) für Funktionen unter Verwendung von [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) aus JavaScript ([Firefox-Bug 1608770](https://bugzil.la/1608770)).

### Wegfall von TLS 1.0 und 1.1

- Die Unterstützung für die Versionen 1.0 und 1.1 des Protokolls [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS) wird in allen Browsern eingestellt. Lesen Sie [Aktuelles zum Wegfall von TLS 1.0 und 1.1](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/), um mehr über die frühere Ankündigung und die erforderlichen Maßnahmen zu erfahren, falls Sie betroffen sind ([Firefox-Bug 1643229](https://bugzil.la/1643229)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeCache")}} und {{WebExtAPIRef("browsingData.removePluginData")}} unterstützen jetzt das Löschen nach Hostname. ([Firefox-Bug 1636784](https://bugzil.la/1636784))
- Bei der Verwendung von [`proxy.onRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) wird ein Filter, der anhand der Tab-ID oder Fenster-ID einschränkt, jetzt korrekt angewendet. Das kann für Add-ons nützlich sein, die Proxy-Funktionen nur in einem bestimmten Fenster bereitstellen möchten.
- Beim [Klicken auf einen Eintrag im Kontextmenü](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked) des Dropdown-Menüs „Alle Tabs“ wird jetzt das richtige Tab-Objekt übergeben. Zuvor wurde fälschlicherweise das Objekt des aktiven Tabs übergeben.
- Bei der Verwendung von [`downloads.download`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) mit der Option saveAs wird jetzt das zuletzt verwendete Verzeichnis gespeichert. Diese Information ist für Entwickler zwar nicht verfügbar, für Benutzer jedoch sehr praktisch.
