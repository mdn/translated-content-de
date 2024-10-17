---
title: Firefox 40 für Entwickler
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 40 wurde am 11. August 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Erweiterungsentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Verbesserungen der Animationsansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [Hilfe von MDN für CSS-Eigenschaftssyntax erhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [Filter im Seiteninspektor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [Webkonsole zeigt jetzt Nachrichten von Arbeitern an](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [Anforderungen nach URL im Netzwerkmonitor filtern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [Viele neue Kontextmenüoptionen im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [Anzeigen, wann Netzressourcen aus dem Browser-Cache abgerufen werden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Regeln im Seiteninspektor filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

Weitere:

- [Unterbrechen bei debugger; Anweisungen in namenlosen eval-Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [URL kopieren / Im neuen Tab öffnen Kontextmenüelemente für die Quelllistenleiste des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [console.dirxml Unterstützung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [Stil-Editor: "Link im neuen Tab öffnen" Element zur Stylesheet-Liste hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [Inspektor-Selektorsuche umfasst jetzt auch Klassenzuordnungsergebnisse, selbst ohne CSS-Präfix](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Tooltips in der Box-Modellansicht sagen, welche CSS-Regel den Wert verursacht hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [Zwischen Farbeneinheit im Inspektor mit Shift+Klick wechseln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- ["In den Fokus scrollen" Menüpunkt für den Inspektor implementieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Verlinken von URL/ID/Ressourcen-Attributen im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [IP-Adresstooltip im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

Alles: [alle Devtools Fehler behoben zwischen Firefox 39 und Firefox 40](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Präfixregeln (`-moz-`) für {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} wurden entfernt ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die Eigenschaft {{cssxref("text-align")}} unterstützt jetzt den `match-parent` Wert ([Firefox-Bug 645642](https://bugzil.la/645642)).
- Im Quirks-Modus ist {{cssxref("empty-cells")}} jetzt standardmäßig auf `show`, wie im Standardmodus ([Firefox-Bug 1020400](https://bugzil.la/1020400)).
- Die nicht-standardmäßige Eigenschaft {{cssxref("-moz-orient")}}, die verwendet wird, um das {{HTMLElement('meter')}} und {{HTMLElement('progress')}} Element zu stylen, wurde für vertikale Schreibrichtungen angepasst: der Wert `auto` wurde entfernt und die Werte `inline` und `block` hinzugefügt, wobei `inline` der neue Standardwert ist ([Firefox-Bug 1028716](https://bugzil.la/1028716)).
- Die Eigenschaft {{cssxref("font-size-adjust")}} wurde korrigiert, sodass `0` als Multiplikator und nicht als Wert `none` behandelt wird, was zu einer `0` Höhe der Schrift führt und sie somit versteckt ([Firefox-Bug 1144885](https://bugzil.la/1144885)).
- Korrektur: text-overflow funktioniert nicht im vertikalen Schreibmodus ([Firefox-Bug 1117227](https://bugzil.la/1117227)).

### HTML

_Keine Änderungen._

### JavaScript

- Unzugänglicher Code nach einer {{jsxref("Statements/return", "return")}} Anweisung (einschließlich unzugänglicher Ausdrücke nach {{jsxref("Statements/return", "Semikolon-losen Rückgabeanweisungen", "#Automatic_semicolon_insertion", 1)}}) zeigt jetzt eine Warnung in der Konsole ([Firefox-Bug 1005110](https://bugzil.la/1005110), [Firefox-Bug 1151931](https://bugzil.la/1151931)).
- {{jsxref("Symbol.match")}} wurde hinzugefügt ([Firefox-Bug 1054755](https://bugzil.la/1054755)).
- Übergeben eines Objekts, das eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy", "truthy")}} Wert an {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}} und `String.prototype.contains` wirft jetzt einen {{jsxref("TypeError")}} ([Firefox-Bug 1054755](https://bugzil.la/1054755)).
- Die Funktion {{jsxref("RegExp")}} gibt das Muster selbst zurück, wenn sie ohne {{jsxref("Operators/new", "new")}} und Musterobjekt aufgerufen wird, das eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy", "truthy")}} Wert hat, und die `constructor` Eigenschaft des Musterobjekts entspricht der Funktion {{jsxref("RegExp")}}. ([Firefox-Bug 1147817](https://bugzil.la/1147817)).
- Unterstützung für die nicht-standardisierte JS1.7 Dekomposition für-in wurde entfernt ([Firefox-Bug 1083498](https://bugzil.la/1083498)).
- [Nicht-standardisierte Initialisierungsausdrücke](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen werden jetzt ignoriert und zeigen eine Warnung in der Konsole an. ([Firefox-Bug 748550](https://bugzil.la/748550) und [Firefox-Bug 1164741](https://bugzil.la/1164741)).
- [`\u{xxxxxx}`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) Unicode-Codepunkt-Escapes wurden hinzugefügt ([Firefox-Bug 320500](https://bugzil.la/320500)).
- {{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} wurde durch {{jsxref("String.prototype.includes")}} ersetzt, `String.prototype.contains` bleibt als Alias erhalten ([Firefox-Bug 1102219](https://bugzil.la/1102219)).
- Wenn der {{jsxref("DataView")}} Konstruktor als Funktion ohne den {{ jsxref("Operators/new", "new") }} Operator aufgerufen wird, wird jetzt ein {{jsxref("TypeError")}} ausgelöst, wie es die ES2015-Spezifikation vorsieht.
- Ein in Firefox 21 aufgetretener Fehler, bei dem proxifizierte Arrays ohne `get`-Falle nicht ordnungsgemäß funktionierten, wurde behoben. Wenn die `get`-Falle in einem {{jsxref("Proxy")}} nicht definiert war, gab {{jsxref("Array.length")}} `0` zurück und die `set`-Falle wurde nicht aufgerufen. Ein Workaround bestand darin, die `get`-Falle hinzuzufügen, auch wenn sie nicht im Code benötigt wurde. Dieses Problem wurde jetzt behoben ([Firefox-Bug 895223](https://bugzil.la/895223)).
- `WeakMap.prototype` und `WeakSet.prototype` wurden gemäß der ES2015-Spezifikation so aktualisiert, dass sie nur gewöhnliche Objekte sind ([Firefox-Bug 1055473](https://bugzil.la/1055473)).

### Schnittstellen/APIs/DOM

#### Neue APIs

- Die [Push-API](/de/docs/Web/API/Push_API) wurde experimentell implementiert ([Firefox-Bug 1038811](https://bugzil.la/1038811)). Gesteuert durch die Präferenz `services.push.enabled`, ist sie standardmäßig deaktiviert.

#### Web Animations API

Verbesserungen in unserer experimentellen Web-Animations-Implementierung, hauptsächlich um die neuesten Spezifikationsänderungen zu erfüllen:

- [`AnimationPlayer.currentTime`](/de/docs/Web/API/Animation/currentTime) kann jetzt auch gesetzt werden ([Firefox-Bug 1072037](https://bugzil.la/1072037)).
- `Animatable.getAnimationPlayers()`, verfügbar auf [`Element`](/de/docs/Web/API/Element), wurde in [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) umbenannt ([Firefox-Bug 1145246](https://bugzil.la/1145246)).
- `Animation` und `AnimationEffect` wurden in das neu erstellte `KeyframeEffectReadOnly` zusammengeführt ([Firefox-Bug 1153734](https://bugzil.la/1153734)).
- `AnimationPlayer` wurde in [`Animation`](/de/docs/Web/API/Animation) umbenannt ([Firefox-Bug 1154615](https://bugzil.la/1154615)).
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) ist jetzt eine abstrakte Klasse, mit [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) als einziger Implementierung ([Firefox-Bug 1152171](https://bugzil.la/1152171)).

#### CSSOM

- Die CSS-Font-Loading-API ist jetzt standardmäßig in Nightly- und Developer-Edition-Versionen aktiviert ([Firefox-Bug 1088437](https://bugzil.la/1088437)). Sie ist in Beta- und Release-Browsern noch standardmäßig deaktiviert.
- Die `CSSCharsetRule` Schnittstelle wurde entfernt und solche Objekte sind in CSSOM nicht mehr verfügbar ([Firefox-Bug 1148694](https://bugzil.la/1148694)). Dies entspricht der Spezifikation (kürzlich angepasst) und dem Chrome-Verhalten.

#### WebRTC

- WebRTC: das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis wird jetzt auch für Anfangsverhandlungen gesendet, nicht nur für Neuaushandlungen ([Firefox-Bug 1149838](https://bugzil.la/1149838)).

#### DOM & HTML DOM

- Wenn [`srcset`](/de/docs/Web/HTML/Element/img#srcset) nicht geparst werden kann, gibt die Methode [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) nicht mehr `null`, sondern `""` zurück, wie es die neueste Spezifikation verlangt ([Firefox-Bug 1139560](https://bugzil.la/1139560)).
- Wie bei Bildern drosselt Firefox jetzt [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) für nicht sichtbare {{HTMLElement("iframe")}} ([Firefox-Bug 1145439](https://bugzil.la/1145439)).
- [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ist für Webarbeiter nicht mehr verfügbar ([Firefox-Bug 1154878](https://bugzil.la/1154878)).

#### Web-Audio-API

Neue Erweiterungen der [Web-Audio-API](/de/docs/Web/API/Web_Audio_API):

- Die Eigenschaften [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) und [`AudioContext.onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event) sowie die Methoden [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume) und [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close) wurden hinzugefügt ([Firefox-Bug 1094764](https://bugzil.la/1094764)).
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) implementiert jetzt das [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune) [k-rate](/de/docs/Web/API/AudioParam#k-rate) Attribut ([Firefox-Bug 1153783](https://bugzil.la/1153783)).

#### Web Worker

- Leichte Verbesserung in unserer [Service-Worker-API](/de/docs/Web/API/Service_Worker_API): die [`update()`](/de/docs/Web/API/ServiceWorkerRegistration/update) Methode wurde von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zu [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) verschoben ([Firefox-Bug 1131350](https://bugzil.la/1131350)).
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) ist jetzt in Webarbeitern verfügbar ([Firefox-Bug 1131327](https://bugzil.la/1131327)).
- [`DataStore`](/de/docs/Web/API/DataStore) ist jetzt in Webarbeitern verfügbar ([Firefox-Bug 916196](https://bugzil.la/916196)).

#### IndexedDB

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) sind jetzt standardmäßig nicht dauerhaft ([Firefox-Bug 1112702](https://bugzil.la/1112702)). Dies begünstigt die Leistung gegenüber der Zuverlässigkeit und entspricht dem Vorgehen anderer Browser. Für weitere Informationen lesen Sie unsere [Definition der Dauerhaftigkeit](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#durable).

#### Entwicklerwerkzeuge

- Die Eigenschaft [`console.timeStamp()`](/de/docs/Web/API/Console/timeStamp_static) wurde hinzugefügt ([Firefox-Bug 922221](https://bugzil.la/922221)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## Netzwerk

_Keine Änderungen._

## Sicherheit

- Die Verwendung eines Sternchens (`*`) in einer {{Glossary("CSP", "CSP")}} schließt die Schemata `data:`, `blob:` oder `:filesystem` nicht mehr ein, wenn Quellenausdrücke abgeglichen werden. Diese Schemata müssen also jetzt ausdrücklich innerhalb des betreffenden Headers definiert werden, um der CSP zu entsprechen ([Firefox-Bug 1086999](https://bugzil.la/1086999)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

- Es ist nicht mehr möglich, transparente oberste Fenster zu erstellen [Firefox-Bug 1162649](https://bugzil.la/1162649).

### JavaScript-Code-Module

- Dict.jsm wurde entfernt [Firefox-Bug 1123309](https://bugzil.la/1123309). Verwenden Sie stattdessen {{jsxref("Map")}}.

### XPCOM

- Das Attribut `nsIClassInfo.implementationLanguage` wurde entfernt, zusammen mit der Funktion `nsClassInfo::GetImplementationLanguage()`.
- Die folgenden XPCOM-Schnittstellen wurden entfernt; Sie sollten stattdessen die standardmäßigen HTML-Schnittstellen verwenden:

  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### Sonstiges

- Die Places Keywords API wurde veraltet und wird bald entfernt ([Firefox-Bug 1140395](https://bugzil.la/1140395)).
- Das automatische Testsystem unterstützt jetzt das Überspringen einzelner Testfunktionen. Siehe [bedingte Tests ausführen](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) in XPCShell-Tests.

## Ältere Versionen

{{Firefox_for_developers}}
