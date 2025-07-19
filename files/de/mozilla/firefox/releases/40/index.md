---
title: Firefox 40 für Entwickler
short-title: Firefox 40
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 40 wurde am 11. August 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Verbesserungen in der Animationsansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [Hilfe von MDN für CSS-Eigenschaftssyntax erhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [Filter im Seiteninspektor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [Webkonsole zeigt jetzt Nachrichten von Workern an](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [Anfragen im Netzwerkmonitor nach URL filtern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [Viele neue Kontextmenüoptionen im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [Anzeigen, wenn Netzwerkressourcen aus dem Browser-Cache abgerufen werden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Regeln im Seiteninspektor filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

Mehr:

- [Break bei debugger; Anweisungen in unbenannten Eval-Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [Kopieren Sie URL/Öffnen im neuen Tab Kontextmenüelemente für Debugger-Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [console.dirxml-Unterstützung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [Stil-Editor: "Link in neuem Tab öffnen"-Eintrag zur Stylesheet-Liste hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [Inspektor-Selektor-Suche umfasst jetzt Klassen-/ID-Ergebnisse auch ohne CSS-Präfix](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Tooltips in der Box-Modell-Ansicht geben an, welche CSS-Regel den Wert verursacht hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [Wechseln Sie zwischen Farbeinheitsformaten im Inspektor mit Shift+Click](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- [Implementierung des "In den Blick Scrollen"-Menüelements für den Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Linkify URL-/ID-/Ressourcenattribute im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [IP-Adress-Tooltip im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

Alles: [alle Devtools-Bugs, die zwischen Firefox 39 und Firefox 40 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Die vorangestellten Regeln (`-moz-`) für {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} wurden entfernt ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die Eigenschaft {{cssxref("text-align")}} unterstützt jetzt den `match-parent` Wert ([Firefox-Bug 645642](https://bugzil.la/645642)).
- Im Quirks-Modus wird {{cssxref("empty-cells")}} jetzt standardmäßig `show`, wie im Standardmodus ([Firefox-Bug 1020400](https://bugzil.la/1020400)).
- Die nicht standardmäßige Eigenschaft {{cssxref("-moz-orient")}}, die zur Gestaltung der {{HTMLElement('meter')}} und {{HTMLElement('progress')}}-Elemente verwendet wird, wurde an vertikale Schreibmodi angepasst: Der Wert `auto` wurde entfernt, und die Werte `inline` und `block` wurden hinzugefügt, wobei `inline` der neue Standardwert ist ([Firefox-Bug 1028716](https://bugzil.la/1028716)).
- Die Eigenschaft {{cssxref("font-size-adjust")}} wurde korrigiert, sodass `0` jetzt als Multiplikator behandelt wird (was zu einer Höhe von `0` für die Schrift führt und sie daher ausblendet) anstatt als `none`-Wert (was keine Anpassung bedeutet oder einem Wert von `1.0` entspricht) ([Firefox-Bug 1144885](https://bugzil.la/1144885)).
- Textüberlauf funktioniert nicht im vertikalen Schreibmodus ([Firefox-Bug 1117227](https://bugzil.la/1117227)).

### HTML

_Keine Änderungen._

### JavaScript

- Nicht erreichbarer Code nach der {{jsxref("Statements/return", "return")}}-Anweisung (einschließlich nicht erreichbarer Ausdrücke nach {{jsxref("Statements/return", "Semikolon-losen return-Anweisungen", "#Automatic_semicolon_insertion", 1)}}) wird jetzt eine Warnung in der Konsole auslösen ([Firefox-Bug 1005110](https://bugzil.la/1005110), [Firefox-Bug 1151931](https://bugzil.la/1151931)).
- {{jsxref("Symbol.match")}} wurde hinzugefügt ([Firefox-Bug 1054755](https://bugzil.la/1054755)).
- Ein Objekt mit einer Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy", "truthy")}} Wert an {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}} und `String.prototype.contains` weiterzugeben, wirft jetzt einen {{jsxref("TypeError")}} ([Firefox-Bug 1054755](https://bugzil.la/1054755)).
- Die {{jsxref("RegExp")}}-Funktion gibt das Muster selbst zurück, wenn sie ohne {{jsxref("Operators/new", "new")}} aufgerufen wird und das Musterobjekt eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy", "truthy")}} Wert besitzt, und die `constructor`-Eigenschaft des Musterobjekts gleich der {{jsxref("RegExp")}}-Funktion ist. ([Firefox-Bug 1147817](https://bugzil.la/1147817)).
- Unterstützung für das nicht standardmäßige JS1.7-Destrukturieren in `for-in`-Schleifen wurde entfernt ([Firefox-Bug 1083498](https://bugzil.la/1083498)).
- [Nicht standardmäßige Initialisierer-Ausdrücke](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen werden jetzt ignoriert und eine Warnung in der Konsole angezeigt. ([Firefox-Bug 748550](https://bugzil.la/748550) und [Firefox-Bug 1164741](https://bugzil.la/1164741)).
- [Unicode-Zeichenpunkt-Escapes](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) in der Form [`\u{xxxxxx}`] wurden hinzugefügt ([Firefox-Bug 320500](https://bugzil.la/320500)).
- `String.prototype.contains` wurde durch {{jsxref("String.prototype.includes")}} ersetzt; `String.prototype.contains` bleibt als Alias erhalten ([Firefox-Bug 1102219](https://bugzil.la/1102219)).
- Wenn der {{jsxref("DataView")}}-Konstruktor als Funktion ohne den {{ jsxref("Operators/new", "new") }}-Operator aufgerufen wird, wird jetzt ein {{jsxref("TypeError")}} ausgelöst, wie es die ES2015-Spezifikation vorsieht.
- Ein in Firefox 21 eingeführtes Problem, bei dem proxifizierte Arrays ohne `get`-Falle nicht richtig funktionierten, wurde behoben. Wenn die `get`-Falle in einem {{jsxref("Proxy")}} nicht definiert war, gab {{jsxref("Array.length")}} `0` zurück, und die `set`-Falle wurde nicht aufgerufen. Eine Lösung bestand darin, die `get`-Falle hinzuzufügen, auch wenn diese in Ihrem Code nicht notwendig war. Dieses Problem wurde jetzt behoben ([Firefox-Bug 895223](https://bugzil.la/895223)).
- `WeakMap.prototype` und `WeakSet.prototype` wurden aktualisiert, um einfache Objekte zu sein, gemäß der ES2015-Spezifikation ([Firefox-Bug 1055473](https://bugzil.la/1055473)).

### Schnittstellen/APIs/DOM

#### Neue APIs

- Die [Push API](/de/docs/Web/API/Push_API) wurde experimentell implementiert ([Firefox-Bug 1038811](https://bugzil.la/1038811)). Gesteuert durch die `services.push.enabled` Voreinstellung, ist sie standardmäßig deaktiviert.

#### Web-Animations-API

Verbesserungen in unserer experimentellen Web-Animations-Implementierung, hauptsächlich um den neuesten Spezifikationsänderungen zu entsprechen:

- [`AnimationPlayer.currentTime`](/de/docs/Web/API/Animation/currentTime) kann jetzt auch gesetzt werden ([Firefox-Bug 1072037](https://bugzil.la/1072037)).
- `Animatable.getAnimationPlayers()`, verfügbar auf [`Element`](/de/docs/Web/API/Element), wurde umbenannt in [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) ([Firefox-Bug 1145246](https://bugzil.la/1145246)).
- `Animation` und `AnimationEffect` wurden in das neu erstellte `KeyframeEffectReadOnly` zusammengeführt ([Firefox-Bug 1153734](https://bugzil.la/1153734)).
- `AnimationPlayer` wurde umbenannt in [`Animation`](/de/docs/Web/API/Animation) ([Firefox-Bug 1154615](https://bugzil.la/1154615)).
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) ist jetzt eine abstrakte Klasse, mit [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) als einziger Implementierung ([Firefox-Bug 1152171](https://bugzil.la/1152171)).

#### CSSOM

- Die CSS-Font-Loading-API ist jetzt in Nightly- und Developer-Editionen standardmäßig aktiviert ([Firefox-Bug 1088437](https://bugzil.la/1088437)). Sie ist weiterhin standardmäßig in Beta- und Release-Browsern deaktiviert.
- Die `CSSCharsetRule`-Schnittstelle wurde entfernt und solche Objekte sind im CSSOM nicht mehr verfügbar ([Firefox-Bug 1148694](https://bugzil.la/1148694)). Dies entspricht der Spezifikation (kürzlich angepasst) und dem Verhalten von Chrome.

#### WebRTC

- WebRTC: Das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis wird jetzt auch für initiale Verhandlungen gesendet, nicht nur für Neuverhandlungen ([Firefox-Bug 1149838](https://bugzil.la/1149838)).

#### DOM & HTML-DOM

- Wenn [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) nicht geparst werden kann, gibt die [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Methode nicht mehr `null` zurück, sondern `""`, wie es die neueste Spezifikation fordert ([Firefox-Bug 1139560](https://bugzil.la/1139560)).
- Ähnlich wie bei Bildern drosselt Firefox jetzt [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) für nicht sichtbare {{HTMLElement("iframe")}} ([Firefox-Bug 1145439](https://bugzil.la/1145439)).
- [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ist für Webworker nicht mehr verfügbar ([Firefox-Bug 1154878](https://bugzil.la/1154878)).

#### Web-Audio-API

Neue Erweiterungen zur [Web-Audio-API](/de/docs/Web/API/Web_Audio_API):

- Die Eigenschaften [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) und [`AudioContext.onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event), sowie die Methoden [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume) und [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close) wurden hinzugefügt ([Firefox-Bug 1094764](https://bugzil.la/1094764)).
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) implementiert jetzt das [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune) [k-rate](/de/docs/Web/API/AudioParam#k-rate) Attribut ([Firefox-Bug 1153783](https://bugzil.la/1153783)).

#### Web Workers

- Leichte Verbesserung unserer [Service Worker API](/de/docs/Web/API/Service_Worker_API): Die [`update()`](/de/docs/Web/API/ServiceWorkerRegistration/update)-Methode wurde von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zu [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) verschoben ([Firefox-Bug 1131350](https://bugzil.la/1131350)).
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) ist jetzt in Webworkern verfügbar ([Firefox-Bug 1131327](https://bugzil.la/1131327)).
- `DataStore` ist jetzt in Webworkern verfügbar ([Firefox-Bug 916196](https://bugzil.la/916196)).

#### IndexedDB

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) sind jetzt standardmäßig nicht dauerhaft ([Firefox-Bug 1112702](https://bugzil.la/1112702)). Dies begünstigt die Leistung gegenüber der Zuverlässigkeit und entspricht dem Verhalten anderer Browser. Für weitere Informationen lesen Sie unsere [Definition der Dauerhaftigkeit](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#durable).

#### Entwicklertools

- Die Eigenschaft [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static) wurde hinzugefügt ([Firefox-Bug 922221](https://bugzil.la/922221)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## Netzwerke

_Keine Änderungen._

## Sicherheit

- Die Verwendung eines Sternchens (`*`) in einer {{Glossary("CSP", "CSP")}} umfasst nicht mehr die Schemen `data:`, `blob:` oder `:filesystem`, wenn Quellausdrücke abgeglichen werden. Diese Schemen müssen jetzt explizit innerhalb des entsprechenden Headers definiert werden, um mit der CSP übereinzustimmen ([Firefox-Bug 1086999](https://bugzil.la/1086999)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

- Es ist nicht mehr möglich, transparente Fenster auf oberster Ebene zu erstellen [Firefox-Bug 1162649](https://bugzil.la/1162649).

### JavaScript-Code-Module

- Dict.jsm wurde entfernt [Firefox-Bug 1123309](https://bugzil.la/1123309). Verwenden Sie stattdessen {{jsxref("Map")}}.

### XPCOM

- Das `nsIClassInfo.implementationLanguage`-Attribut wurde entfernt, zusammen mit der `nsClassInfo::GetImplementationLanguage()`-Funktion.
- Die folgenden XPCOM-Schnittstellen wurden entfernt; Sie sollten stattdessen die standardmäßigen HTML-Schnittstellen verwenden:
  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### Sonstiges

- Die Places Keywords API wurde als veraltet markiert und wird bald entfernt ([Firefox-Bug 1140395](https://bugzil.la/1140395)).
- Das automatisierte Testsystem unterstützt jetzt das Überspringen einzelner Testfunktionen. Siehe [bedingtes Ausführen von Tests](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) im XPCShell-Testing.
