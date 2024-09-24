---
title: Firefox 40 für Entwickler
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 40 wurde am 11. August 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

Höhepunkte:

- [Verbesserungen der Animationsansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [Hilfe von MDN für die CSS-Attributsyntax erhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [Filter im Seiten-Inspektor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [Webkonsole zeigt nun Nachrichten von Arbeitern an](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [Anfragen nach URL im Netzwerk-Monitor filtern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [Viele neue Kontextmenüoptionen im Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [Anzeigen, wann Netzwerkressourcen aus dem Browsercache abgerufen werden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Filterregeln im Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

Mehr:

- [An Debugger; Anweisungen in unbenannten Eval-Quellen anhalten](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [URL kopieren/In neuem Tab öffnen Kontextmenüeinträge für Debugger-Quelllistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [console.dirxml-Unterstützung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [Stil-Editor: "Link in neuem Tab öffnen" Element zur Stylesheet-Liste hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [Inspektor-Selektorsuche umfasst jetzt Klasse/ID-Ergebnisse, auch ohne CSS-Präfix](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Tooltips in der Boxmodellansicht zeigen, welche CSS-Regel den Wert verursacht hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [Zwischen Farbeinheitsformaten im Inspektor mit Shift+Klick wechseln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- [Menüpunkt „Scrollen in die Ansicht“ für den Inspektor implementieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Url/ID/Ressourcenattribute im Inspektor verlinken](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [IP-Adresstooltip im Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

Alles: [alle Devtools-Bugs, die zwischen Firefox 39 und Firefox 40 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Präfix-Regeln (`-moz-`) für {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, und {{cssxref("text-decoration-style")}} wurden entfernt ([Firefox Bug 1097922](https://bugzil.la/1097922)).
- Die Eigenschaft {{cssxref("text-align")}} unterstützt jetzt den Wert `match-parent` ([Firefox Bug 645642](https://bugzil.la/645642)).
- Im Quirks-Modus hat {{cssxref("empty-cells")}} jetzt den Standardwert `show`, wie im Standardmodus ([Firefox Bug 1020400](https://bugzil.la/1020400)).
- Die nicht standardmäßige Eigenschaft {{cssxref("-moz-orient")}}, die zum Stylen von {{HTMLElement('meter')}} und {{HTMLElement('progress')}} Elementen verwendet wird, wurde für vertikale Schreibmodi angepasst: der Wert `auto` wurde entfernt und die Werte `inline` und `block` hinzugefügt, wobei `inline` der neue Standardwert ist ([Firefox Bug 1028716](https://bugzil.la/1028716)).
- Die Eigenschaft {{cssxref("font-size-adjust")}} wurde so korrigiert, dass `0` als Multiplikator behandelt wird (was zu einer `0` Höhe für die Schrift führt und sie somit ausblendet), anstatt des Werts `none` (was zu keiner Anpassung, oder einem Wert von `1.0` führen würde) ([Firefox Bug 1144885](https://bugzil.la/1144885)).
- Fehlerbehebung, dass text-overflow im vertikalen Schreibmodus nicht funktioniert ([Firefox Bug 1117227](https://bugzil.la/1117227)).

### HTML

_Keine Änderung._

### JavaScript

- Nicht erreichbarer Code nach einer {{jsxref("Statements/return", "return")}}-Anweisung (einschließlich nicht erreichbarer Ausdrücke nach {{jsxref("Statements/return", "Semikolon-losen return-Anweisungen", "#Automatic_semicolon_insertion", 1)}}) zeigt nun eine Warnung in der Konsole an ([Firefox Bug 1005110](https://bugzil.la/1005110), [Firefox Bug 1151931](https://bugzil.la/1151931)).
- {{jsxref("Symbol.match")}} wurde hinzugefügt ([Firefox Bug 1054755](https://bugzil.la/1054755)).
- Wenn ein Objekt, das eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy")}} Wert hat, an {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}} und `String.prototype.contains` übergeben wird, wirft das jetzt einen {{jsxref("TypeError")}} ([Firefox Bug 1054755](https://bugzil.la/1054755)).
- Die Funktion {{jsxref("RegExp")}} gibt das Muster selbst zurück, wenn sie ohne {{jsxref("Operators/new", "new")}} aufgerufen wird und das Musterobjekt eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy")}} Wert hat, und die `constructor` Eigenschaft des Musterobjekts gleich der Funktion {{jsxref("RegExp")}} ist. ([Firefox Bug 1147817](https://bugzil.la/1147817)).
- Die Unterstützung für die nicht standardisierte JS1.7 Destrukturierung für-in wurde entfernt ([Firefox Bug 1083498](https://bugzil.la/1083498)).
- [Nicht-standardmäßige Initialisierungsausdrücke](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen werden jetzt ignoriert und zeigen eine Warnung in der Konsole an. ([Firefox Bug 748550](https://bugzil.la/748550) und [Firefox Bug 1164741](https://bugzil.la/1164741)).
- [`\u{xxxxxx}`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) Unicode-Codepunkt-Escape-Sequenzen wurden hinzugefügt ([Firefox Bug 320500](https://bugzil.la/320500)).
- {{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} wurde durch {{jsxref("String.prototype.includes")}} ersetzt, `String.prototype.contains` bleibt als Alias erhalten ([Firefox Bug 1102219](https://bugzil.la/1102219)).
- Wenn der {{jsxref("DataView")}}-Konstruktor als Funktion ohne den {{ jsxref("Operators/new", "new") }}-Operator aufgerufen wird, wird jetzt ein {{jsxref("TypeError")}} gemäß der ES2015-Spezifikation geworfen.
- Ein in Firefox 21 aufgetretenes Problem, bei dem proxifierte Arrays ohne `get`-Falle nicht ordnungsgemäß funktionierten, wurde behoben. Wenn die `get`-Falle in einem {{jsxref("Proxy")}} nicht definiert war, gab {{jsxref("Array.length")}} `0` zurück und die `set`-Falle wurde nicht aufgerufen. Eine Umgehung bestand darin, die `get`-Falle hinzuzufügen, auch wenn sie in Ihrem Code nicht erforderlich war. Dieses Problem wurde nun behoben ([Firefox Bug 895223](https://bugzil.la/895223)).
- `WeakMap.prototype` und `WeakSet.prototype` wurden aktualisiert, um gemäß der ES2015-Spezifikation nur gewöhnliche Objekte zu sein ([Firefox Bug 1055473](https://bugzil.la/1055473)).

### Schnittstellen/APIs/DOM

#### Neue APIs

- Die [Push API](/de/docs/Web/API/Push_API) wurde experimentell implementiert ([Firefox Bug 1038811](https://bugzil.la/1038811)). Gesteuert durch die Einstellung `services.push.enabled`; sie ist standardmäßig deaktiviert.

#### Web Animations API

Verbesserungen in unserer experimentellen Webanimations-Implementierung, hauptsächlich um die neuesten Spezifikationsänderungen zu erfüllen:

- {{domxref("Animation/currentTime", "AnimationPlayer.currentTime")}} kann jetzt auch gesetzt werden ([Firefox Bug 1072037](https://bugzil.la/1072037)).
- `Animatable.getAnimationPlayers()`, verfügbar auf {{domxref("Element")}} wurde umbenannt in {{domxref("Element.getAnimations()")}} ([Firefox Bug 1145246](https://bugzil.la/1145246)).
- `Animation` und `AnimationEffect` wurden in das neu erstellte `KeyframeEffectReadOnly` zusammengeführt ([Firefox Bug 1153734](https://bugzil.la/1153734)).
- `AnimationPlayer` wurde umbenannt in {{domxref("Animation")}} ([Firefox Bug 1154615](https://bugzil.la/1154615)).
- {{domxref("AnimationTimeline")}} ist jetzt eine abstrakte Klasse, mit {{domxref("DocumentTimeline")}} als einzige Implementierung ([Firefox Bug 1152171](https://bugzil.la/1152171)).

#### CSSOM

- Die CSS Font Loading API ist jetzt standardmäßig in den Nightly- und Developer-Edition-Releases aktiviert ([Firefox Bug 1088437](https://bugzil.la/1088437)). In Beta- und Release-Browsern ist sie weiterhin standardmäßig deaktiviert.
- Die `CSSCharsetRule`-Schnittstelle wurde entfernt und solche Objekte sind im CSSOM nicht mehr verfügbar ([Firefox Bug 1148694](https://bugzil.la/1148694)). Dies entspricht der (kürzlich angepassten) Spezifikation und dem Verhalten von Chrome.

#### WebRTC

- WebRTC: Das {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis wird nun auch für erste Verhandlungen, nicht nur für erneute Verhandlungen gesendet ([Firefox Bug 1149838](https://bugzil.la/1149838)).

#### DOM & HTML DOM

- Wenn die [`srcset`](/de/docs/Web/HTML/Element/img#srcset) nicht geparst werden kann, gibt die Methode {{domxref("HTMLImageElement.currentSrc")}} jetzt nicht mehr `null`, sondern `""` zurück, wie von der neuesten Spezifikation gefordert ([Firefox Bug 1139560](https://bugzil.la/1139560)).
- Wie bei Bildern drosselt Firefox jetzt {{domxref("Window.requestAnimationFrame()")}} für nicht sichtbare {{HTMLElement("iframe")}} ([Firefox Bug 1145439](https://bugzil.la/1145439)).
- {{domxref("Navigator.taintEnabled")}} ist für Webworker nicht mehr verfügbar ([Firefox Bug 1154878](https://bugzil.la/1154878)).

#### Web Audio API

Neue Erweiterungen der [Web Audio API](/de/docs/Web/API/Web_Audio_API):

- Die Eigenschaften {{domxref("BaseAudioContext/state", "AudioContext.state")}} und {{domxref("BaseAudioContext.statechange_event", "AudioContext.onstatechange")}} sowie die Methoden {{domxref("AudioContext.suspend()")}}, {{domxref("AudioContext.resume()")}}, und {{domxref("AudioContext.close()")}} wurden hinzugefügt ([Firefox Bug 1094764](https://bugzil.la/1094764)).
- {{domxref("AudioBufferSourceNode")}} implementiert jetzt das {{domxref("AudioBufferSourceNode.detune")}} [k-rate](/de/docs/Web/API/AudioParam#k-rate) Attribut ([Firefox Bug 1153783](https://bugzil.la/1153783)).

#### Web Workers

- Leichte Verbesserung unserer [Service Worker API](/de/docs/Web/API/Service_Worker_API): Die {{domxref("ServiceWorkerRegistration.update()", "update()")}}-Methode wurde von {{domxref("ServiceWorkerGlobalScope")}} zu {{domxref("ServiceWorkerRegistration")}} umgezogen ([Firefox Bug 1131350](https://bugzil.la/1131350)).
- {{domxref("ServiceWorkerRegistration")}} ist jetzt in Webworkern verfügbar ([Firefox Bug 1131327](https://bugzil.la/1131327)).
- {{domxref("DataStore")}} ist jetzt in Webworkern verfügbar ([Firefox Bug 916196](https://bugzil.la/916196)).

#### IndexedDB

- {{domxref("IDBTransaction")}} sind jetzt standardmäßig nicht beständig ([Firefox Bug 1112702](https://bugzil.la/1112702)). Dies favorisiert die Leistung über die Zuverlässigkeit und entspricht dem Verhalten anderer Browser. Für weitere Informationen lesen Sie unsere [Definition zur Beständigkeit](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#durable).

#### Entwicklertools

- Die Eigenschaft {{domxref("console/timeStamp_static", "console.timeStamp()")}} wurde hinzugefügt ([Firefox Bug 922221](https://bugzil.la/922221)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk

_Keine Änderung._

## Sicherheit

- Durch die Verwendung eines Sternchens (`*`) in einer {{Glossary("CSP")}} werden die Schemata `data:`, `blob:` oder `:filesystem` nicht mehr standardmäßig bei der Übereinstimmung von Quellausdrücken eingeschlossen. Diese Schemata müssen jetzt ausdrücklich innerhalb des betreffenden Headers definiert werden, um mit der CSP übereinzustimmen ([Firefox Bug 1086999](https://bugzil.la/1086999)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

- Es ist nicht mehr möglich, transparente Hauptfenster zu erstellen [Firefox Bug 1162649](https://bugzil.la/1162649).

### JavaScript-Code-Module

- Dict.jsm wurde entfernt [Firefox Bug 1123309](https://bugzil.la/1123309). Verwenden Sie stattdessen {{jsxref("Map")}}.

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

- Die Places Keywords API wurde abgeschafft und wird bald entfernt ([Firefox Bug 1140395](https://bugzil.la/1140395)).
- Das automatisierte Testsystem unterstützt jetzt das Überspringen einzelner Testfunktionen. Siehe [bedingte Tests ausführen](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) im XPCShell-Testing.

## Ältere Versionen

{{Firefox_for_developers}}
