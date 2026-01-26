---
title: Firefox 40 Versionshinweise für Entwickler
short-title: Firefox 40
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Um die neuesten Entwickler-Features von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 40 wurde am 11. August 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

Höhepunkte:

- [Verbesserungen der Animationsansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [Hilfe von MDN für CSS-Property-Syntax erhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [Filter im Seiteninspektor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [Web-Konsole zeigt jetzt Nachrichten von Arbeitern an](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [Anfragen im Netzwerkmonitor nach URL filtern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [Viele neue Kontextmenüoptionen im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [Anzeigen, wann Netzwerkressourcen aus dem Browser-Cache geholt werden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Regeln im Seiteninspektor filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

Weiteres:

- [Unterbrechen bei debugger;-Anweisungen in unbenannten eval-Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [URL kopieren/In neuem Tab öffnen Kontextmenüeinträge für Debugger-Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [console.dirxml-Support in der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [Style-Editor: "Link in neuem Tab öffnen"-Eintrag zur Stylesheet-Liste hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [Inspector-Selektorsuche enthält jetzt Klassen-/ID-Ergebnisse auch ohne CSS-Präfix](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Tooltipps in der Box-Modell-Ansicht, welche CSS-Regel den Wert verursacht hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [Wechsel zwischen Farbformateinheiten im Inspektor mit Shift+Klick](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- [Implementierung des "In Ansicht scrollen"-Menüeintrags für den Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Verlinken von URL-/ID-/Ressourcenattributen im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [IP-Adressen-Tooltip im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

Alles: [alle Devtools-Bugs, die zwischen Firefox 39 und Firefox 40 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Die vorangestellten Regeln (`-moz-`) für {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, und {{cssxref("text-decoration-style")}} wurden entfernt ([Firefox Bug 1097922](https://bugzil.la/1097922)).
- Die Eigenschaft {{cssxref("text-align")}} unterstützt jetzt den Wert `match-parent` ([Firefox Bug 645642](https://bugzil.la/645642)).
- Im Quirks-Modus setzt {{cssxref("empty-cells")}} nun standardmäßig auf `show`, wie im Standardmodus ([Firefox Bug 1020400](https://bugzil.la/1020400)).
- Die nicht-standardisierte Eigenschaft {{cssxref("-moz-orient")}}, die zur Gestaltung der Elemente {{HTMLElement('meter')}} und {{HTMLElement('progress')}} verwendet wird, wurde für vertikale Schreibmodi angepasst: Der Wert `auto` wurde entfernt und die Werte `inline` und `block` hinzugefügt, wobei `inline` der neue Standardwert ist ([Firefox Bug 1028716](https://bugzil.la/1028716)).
- Die Eigenschaft {{cssxref("font-size-adjust")}} wurde korrigiert, sodass `0` jetzt als Multiplikator behandelt wird (was zu einer `0` Höhe für die Schriftart führt und diese somit ausblendet), anstatt als `none`-Wert (was zu keiner Anpassung oder einem `1.0`-Wert führt) ([Firefox Bug 1144885](https://bugzil.la/1144885)).
- Der Fehler, dass text-overflow im vertikalen Schreibmodus nicht funktioniert, wurde behoben ([Firefox Bug 1117227](https://bugzil.la/1117227)).

### HTML

_Keine Änderung._

### JavaScript

- Unerreichbarer Code nach der {{jsxref("Statements/return", "return")}}-Anweisung (einschließlich unerreichbarer Ausdrücke nach {{jsxref("Statements/return", "Return-Anweisungen ohne Semikolon", "#Automatic_semicolon_insertion", 1)}}) wird jetzt in der Konsole eine Warnung anzeigen ([Firefox Bug 1005110](https://bugzil.la/1005110), [Firefox Bug 1151931](https://bugzil.la/1151931)).
- {{jsxref("Symbol.match")}} wurde hinzugefügt ([Firefox Bug 1054755](https://bugzil.la/1054755)).
- Wird ein Objekt übergeben, das eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy", "truthy")}} Wert besitzt, wird jetzt ein {{jsxref("TypeError")}} beim Aufruf von {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}} und `String.prototype.contains` ausgelöst ([Firefox Bug 1054755](https://bugzil.la/1054755)).
- Die Funktion {{jsxref("RegExp")}} gibt das Muster selbst zurück, wenn sie ohne {{jsxref("Operators/new", "new")}} und ein Musterobjekt aufgerufen wird, das eine Eigenschaft namens {{jsxref("Symbol.match")}} mit einem {{Glossary("truthy", "truthy")}} Wert besitzt und dessen `constructor`-Eigenschaft der {{jsxref("RegExp")}}-Funktion entspricht. ([Firefox Bug 1147817](https://bugzil.la/1147817)).
- Unterstützung für das nicht standardisierte JS1.7 Destructuring for-in wurde entfernt ([Firefox Bug 1083498](https://bugzil.la/1083498)).
- [Nicht standardisierte Initialisierungs-Ausdrücke](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen werden jetzt ignoriert und zeigen eine Warnung in der Konsole. ([Firefox Bug 748550](https://bugzil.la/748550) und [Firefox Bug 1164741](https://bugzil.la/1164741)).
- [`\u{xxxxxx}`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) Unicode-Code-Punkt-Escapes wurden hinzugefügt ([Firefox Bug 320500](https://bugzil.la/320500)).
- `String.prototype.contains` wurde durch {{jsxref("String.prototype.includes")}} ersetzt, `String.prototype.contains` bleibt als Alias bestehen ([Firefox Bug 1102219](https://bugzil.la/1102219)).
- Wird der {{jsxref("DataView")}}-Konstruktor als Funktion ohne den {{ jsxref("Operators/new", "new") }} Operator aufgerufen, wird jetzt gemäß der ES2015-Spezifikation ein {{jsxref("TypeError")}} ausgelöst.
- Ein Problem, das in Firefox 21 auftrat, bei dem proxifizierte Arrays ohne `get`-Falle nicht richtig funktionierten, wurde behoben. Wenn die `get`-Falle in einem {{jsxref("Proxy")}} nicht definiert war, gab {{jsxref("Array.length")}} `0` zurück und die `set`-Falle wurde nicht aufgerufen. Ein Workaround bestand darin, die `get`-Falle hinzuzufügen, auch wenn sie im Code nicht nötig war. Dieses Problem wurde nun behoben ([Firefox Bug 895223](https://bugzil.la/895223)).
- `WeakMap.prototype` und `WeakSet.prototype` wurden so aktualisiert, dass sie nur noch gewöhnliche Objekte sind, gemäß der ES2015-Spezifikation ([Firefox Bug 1055473](https://bugzil.la/1055473)).

### Schnittstellen/APIs/DOM

#### Neue APIs

- Die [Push-API](/de/docs/Web/API/Push_API) wurde experimentell implementiert ([Firefox Bug 1038811](https://bugzil.la/1038811)). Gesteuert durch die `services.push.enabled`-Einstellung, ist sie standardmäßig deaktiviert.

#### Web-Animations-API

Verbesserung unserer experimentellen Implementierung der Web-Animations, hauptsächlich um die neuesten Spezifikationsänderungen zu übernehmen:

- [`AnimationPlayer.currentTime`](/de/docs/Web/API/Animation/currentTime) kann jetzt auch gesetzt werden ([Firefox Bug 1072037](https://bugzil.la/1072037)).
- `Animatable.getAnimationPlayers()`, verfügbar auf [`Element`](/de/docs/Web/API/Element), wurde in [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) umbenannt ([Firefox Bug 1145246](https://bugzil.la/1145246)).
- `Animation` und `AnimationEffect` wurden in das neu erstellte `KeyframeEffectReadOnly` zusammengeführt ([Firefox Bug 1153734](https://bugzil.la/1153734)).
- `AnimationPlayer` wurde in [`Animation`](/de/docs/Web/API/Animation) umbenannt ([Firefox Bug 1154615](https://bugzil.la/1154615)).
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) ist jetzt eine abstrakte Klasse, mit [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) als ihre einzige Implementierung ([Firefox Bug 1152171](https://bugzil.la/1152171)).

#### CSSOM

- Die CSS-Schriftladungs-API ist jetzt standardmäßig in Nightly- und Developer-Editionen aktiviert ([Firefox Bug 1088437](https://bugzil.la/1088437)). Sie ist in Beta- und Release-Browsern weiterhin standardmäßig deaktiviert.
- Die `CSSCharsetRule`-Schnittstelle wurde entfernt und solche Objekte sind im CSSOM nicht mehr verfügbar ([Firefox Bug 1148694](https://bugzil.la/1148694)). Dies entspricht der (vor kurzem angepassten) Spezifikation und dem Verhalten von Chrome.

#### WebRTC

- WebRTC: Das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis wird jetzt auch für Erstverhandlungen gesendet, nicht nur für Neuverhandlungen ([Firefox Bug 1149838](https://bugzil.la/1149838)).

#### DOM & HTML DOM

- Wenn [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) nicht geparst werden kann, gibt die Methode [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) nicht mehr `null`, sondern `""` zurück, wie es die neuesten Spezifikationen fordern ([Firefox Bug 1139560](https://bugzil.la/1139560)).
- Wie bei Bildern, drosselt Firefox jetzt auch [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) für nicht sichtbare {{HTMLElement("iframe")}} ([Firefox Bug 1145439](https://bugzil.la/1145439)).
- [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ist für Webarbeiter nicht mehr verfügbar ([Firefox Bug 1154878](https://bugzil.la/1154878)).

#### Web-Audio-API

Neue Erweiterungen für die [Web-Audio-API](/de/docs/Web/API/Web_Audio_API):

- Die Eigenschaften [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) und [`AudioContext.onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event) sowie die Methoden [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume), und [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close) wurden hinzugefügt ([Firefox Bug 1094764](https://bugzil.la/1094764)).
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) implementiert jetzt das [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune) [k-rate](/de/docs/Web/API/AudioParam#k-rate) Attribut ([Firefox Bug 1153783](https://bugzil.la/1153783)).

#### Web Worker

- Leichte Verbesserung in unserer [Service Worker API](/de/docs/Web/API/Service_Worker_API): Die Methode [`update()`](/de/docs/Web/API/ServiceWorkerRegistration/update) wurde von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zu [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) verschoben ([Firefox Bug 1131350](https://bugzil.la/1131350)).
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) ist jetzt in Web Workern verfügbar ([Firefox Bug 1131327](https://bugzil.la/1131327)).
- `DataStore` ist jetzt in Web Workern verfügbar ([Firefox Bug 916196](https://bugzil.la/916196)).

#### IndexedDB

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) sind jetzt standardmäßig nicht-durable ([Firefox Bug 1112702](https://bugzil.la/1112702)). Dies begünstigt die Performance gegenüber der Zuverlässigkeit und entspricht dem Verhalten anderer Browser. Für weitere Informationen lesen Sie unsere [Definition der Haltbarkeit](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#durable).

#### Developer Tools

- Die Eigenschaft [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static) wurde hinzugefügt ([Firefox Bug 922221](https://bugzil.la/922221)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk

_Keine Änderung._

## Sicherheit

- Die Verwendung eines Sternchens (`*`) in einer {{Glossary("CSP", "CSP")}} schließt nicht mehr die Schemen `data:`, `blob:` oder `:filesystem` ein, wenn Quellenausdrücke abgeglichen werden. Diese Schemen müssen nun innerhalb des entsprechenden Headers explizit definiert werden, um der CSP zu entsprechen ([Firefox Bug 1086999](https://bugzil.la/1086999)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

- Es ist nicht mehr möglich, transparente Top-Level-Fenster zu erstellen [Firefox Bug 1162649](https://bugzil.la/1162649).

### JavaScript-Code-Module

- Dict.jsm wurde entfernt [Firefox Bug 1123309](https://bugzil.la/1123309). Verwenden Sie {{jsxref("Map")}} stattdessen.

### XPCOM

- Das `nsIClassInfo.implementationLanguage`-Attribut wurde entfernt, ebenso wie die Funktion `nsClassInfo::GetImplementationLanguage()`.
- Die folgenden XPCOM-Schnittstellen wurden entfernt; Sie sollten stattdessen die Standard-HTML-Schnittstellen verwenden:
  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### Sonstiges

- Die Places Keywords API wurde als veraltet markiert und wird bald entfernt werden ([Firefox Bug 1140395](https://bugzil.la/1140395)).
- Das automatisierte Testsystem unterstützt nun das Überspringen einzelner Testfunktionen. Siehe [Bedingtes Ausführen von Tests](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) in der XPCShell-Testumgebung.
