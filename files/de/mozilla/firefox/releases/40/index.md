---
title: Firefox 40 für Entwickler
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Firefox 40 wurde am 11. August 2015 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

Highlights:

- [Verbesserungen der Animationsansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [Hilfe von MDN für die Syntax von CSS-Eigenschaften erhalten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [Filter im Page Inspector bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [Webkonsole zeigt nun Nachrichten von Arbeitern](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [Anfragen im Netzwerkanalysator nach URL filtern](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [Viele neue Kontextmenüoptionen im Netzwerkanalysator](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [Anzeigen, wenn Netzwerkressourcen aus dem Browser-Cache abgerufen werden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Regeln im Page Inspector filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

Weitere:

- [Anhalten bei debugger; Anweisungen in unbenannten Eval-Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [URL kopieren/Im neuen Tab öffnen Kontextmenüeinträge für Debugger-Quellenliste](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [console.dirxml Unterstützung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [Stil-Editor: "Link im neuen Tab öffnen" Element zur Stylesheet-Liste hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [Inspektor Selektorsuche enthält jetzt Klassen/ID-Ergebnisse auch ohne CSS-Präfix](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Tooltips in der Box-Modell-Ansicht, die angeben, welche CSS-Regel den Wert verursacht hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [Zwischen Farbformateinheiten im Inspektor mit Umschalt+Klick wechseln](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- [Menüpunkt "In den sichtbaren Bereich scrollen" für den Inspektor implementieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [URL/ID/Resource Attribute im Inspektor verlinkbar machen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [IP-Adresstooltip im Netzwerkanalysator](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

Alles: [Alle Devtools-Bugs, die zwischen Firefox 39 und Firefox 40 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Präfixierte Regeln (`-moz-`) für {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, und {{cssxref("text-decoration-style")}} wurden entfernt ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die Eigenschaft {{cssxref("text-align")}} unterstützt jetzt den Wert `match-parent` ([Firefox-Bug 645642](https://bugzil.la/645642)).
- Im Quirks-Modus ist {{cssxref("empty-cells")}} nun standardmäßig auf `show` gesetzt, wie im Standardmodus ([Firefox-Bug 1020400](https://bugzil.la/1020400)).
- Die nicht standardmäßige Eigenschaft {{cssxref("-moz-orient")}}, die zur Gestaltung der {{HTMLElement('meter')}} und {{HTMLElement('progress')}} Elemente verwendet wird, wurde für vertikale Schreibrichtungen angepasst: der Wert `auto` wurde entfernt, und die Werte `inline` und `block` wurden hinzugefügt, wobei `inline` der neue Standardwert ist ([Firefox-Bug 1028716](https://bugzil.la/1028716)).
- Die Eigenschaft {{cssxref("font-size-adjust")}} wurde korrigiert, sodass `0` jetzt als Multiplikator behandelt wird (was zu einer Höhe von `0` für die Schriftart führt und diese daher versteckt), anstatt als `none`-Wert (was zu keiner Anpassung oder einem Wert von `1.0` führt) ([Firefox-Bug 1144885](https://bugzil.la/1144885)).
- Behebung, dass text-overflow im vertikalen Schreibmodus nicht funktioniert ([Firefox-Bug 1117227](https://bugzil.la/1117227)).

### HTML

_Keine Änderungen._

### JavaScript

- Nicht erreichbarer Code nach einer {{jsxref("Statements/return", "return")}}-Anweisung (einschließlich nicht erreichbarer Ausdrücke nach {{jsxref("Statements/return", "semikolonfreien Return-Anweisungen", "#Automatic_semicolon_insertion", 1)}}) wird nun eine Warnung in der Konsole anzeigen ([Firefox-Bug 1005110](https://bugzil.la/1005110), [Firefox-Bug 1151931](https://bugzil.la/1151931)).
- {{jsxref("Symbol.match")}} wurde hinzugefügt ([Firefox-Bug 1054755](https://bugzil.la/1054755)).
- Wenn ein Objekt, das eine Eigenschaft mit dem Namen {{jsxref("Symbol.match")}} mit einem [truthy](/de/docs/Glossary/truthy) Wert besitzt, an {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}}, und `String.prototype.contains` übergeben wird, wird jetzt ein {{jsxref("TypeError")}} ausgelöst ([Firefox-Bug 1054755](https://bugzil.la/1054755)).
- Die {{jsxref("RegExp")}}-Funktion gibt das Muster selbst zurück, wenn sie ohne {{jsxref("Operators/new", "new")}} aufgerufen wird und das Musterobjekt eine Eigenschaft mit dem Namen {{jsxref("Symbol.match")}} mit einem [truthy](/de/docs/Glossary/truthy) Wert hat, und die `constructor`-Eigenschaft des Musterobjekts gleich der {{jsxref("RegExp")}}-Funktion ist. ([Firefox-Bug 1147817](https://bugzil.la/1147817)).
- Unterstützung für das nicht standardmäßige JS1.7 Destructuring for-in wurde entfernt ([Firefox-Bug 1083498](https://bugzil.la/1083498)).
- [Nicht standardmäßige Initialisierungs-Ausdrücke](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen werden nun ignoriert und zeigen eine Warnung in der Konsole an. ([Firefox-Bug 748550](https://bugzil.la/748550) und [Firefox-Bug 1164741](https://bugzil.la/1164741)).
- [`\u{xxxxxx}`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) Unicode-Codepunkt-Escape-Sequenzen wurden hinzugefügt ([Firefox-Bug 320500](https://bugzil.la/320500)).
- {{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} wurde durch {{jsxref("String.prototype.includes")}} ersetzt, `String.prototype.contains` bleibt als Alias erhalten ([Firefox-Bug 1102219](https://bugzil.la/1102219)).
- Wenn der {{jsxref("DataView")}}-Konstruktor als Funktion ohne den {{ jsxref("Operators/new", "new") }} Operator aufgerufen wird, wird jetzt ein {{jsxref("TypeError")}} gemäß der ES2015-Spezifikation ausgelöst.
- Ein Problem, das in Firefox 21 eingeführt wurde, bei dem proxyfizierte Arrays ohne den `get`-Trap nicht richtig funktionierten, wurde behoben. Wenn der `get`-Trap in einem {{jsxref("Proxy")}} nicht definiert war, gab {{jsxref("Array.length")}} `0` zurück und der `set`-Trap wurde nicht aufgerufen. Ein Workaround bestand darin, den `get`-Trap hinzuzufügen, auch wenn er in Ihrem Code nicht erforderlich war. Dieses Problem wurde jetzt behoben ([Firefox-Bug 895223](https://bugzil.la/895223)).
- `WeakMap.prototype` und `WeakSet.prototype` wurden aktualisiert, um nur normale Objekte gemäß der ES2015-Spezifikation zu sein ([Firefox-Bug 1055473](https://bugzil.la/1055473)).

### Schnittstellen/APIs/DOM

#### Neue APIs

- Die [Push-API](/de/docs/Web/API/Push_API) wurde experimentell implementiert ([Firefox-Bug 1038811](https://bugzil.la/1038811)). Gesteuert durch die `services.push.enabled` Voreinstellung ist sie standardmäßig deaktiviert.

#### Webanimations-API

Verbesserung unserer experimentellen Webanimations-Implementierung, hauptsächlich um die neuesten Änderungen der Spezifikation nachzuvollziehen:

- [`AnimationPlayer.currentTime`](/de/docs/Web/API/Animation/currentTime) kann jetzt auch gesetzt werden ([Firefox-Bug 1072037](https://bugzil.la/1072037)).
- `Animatable.getAnimationPlayers()`, verfügbar auf [`Element`](/de/docs/Web/API/Element), wurde umbenannt zu [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) ([Firefox-Bug 1145246](https://bugzil.la/1145246)).
- `Animation` und `AnimationEffect` wurden in die neu erstellte `KeyframeEffectReadOnly` zusammengeführt ([Firefox-Bug 1153734](https://bugzil.la/1153734)).
- `AnimationPlayer` wurde umbenannt zu [`Animation`](/de/docs/Web/API/Animation) ([Firefox-Bug 1154615](https://bugzil.la/1154615)).
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) ist jetzt eine abstrakte Klasse, mit [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) als ihrer einzigen Implementierung ([Firefox-Bug 1152171](https://bugzil.la/1152171)).

#### CSSOM

- Das CSS Font Loading API ist jetzt standardmäßig in Nightly- und Developer-Edition-Versionen aktiviert ([Firefox-Bug 1088437](https://bugzil.la/1088437)). Es ist in Beta- und Release-Browsern noch standardmäßig deaktiviert.
- Die `CSSCharsetRule`-Schnittstelle wurde entfernt und solche Objekte sind im CSSOM nicht mehr verfügbar ([Firefox-Bug 1148694](https://bugzil.la/1148694)). Dies stimmt mit der Anpassung der Spezifikation (kürzlich aktualisiert) und dem Verhalten von Chrome überein.

#### WebRTC

- WebRTC: Das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis wird jetzt auch für erste Verhandlungen gesendet, nicht nur für Neuverhandlungen ([Firefox-Bug 1149838](https://bugzil.la/1149838)).

#### DOM & HTML DOM

- Wenn [`srcset`](/de/docs/Web/HTML/Element/img#srcset) nicht geparst werden kann, gibt die [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Methode nicht mehr `null` zurück, sondern `""`, wie es in der neuesten Spezifikation gefordert wird ([Firefox-Bug 1139560](https://bugzil.la/1139560)).
- Wie bei Bildern drosselt Firefox jetzt auch [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) für nicht sichtbare {{HTMLElement("iframe")}} ([Firefox-Bug 1145439](https://bugzil.la/1145439)).
- [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ist für Webworker nicht mehr verfügbar ([Firefox-Bug 1154878](https://bugzil.la/1154878)).

#### Web Audio API

Neue Erweiterungen zur [Web Audio API](/de/docs/Web/API/Web_Audio_API):

- Die Eigenschaften [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) und [`AudioContext.onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event) sowie die Methoden [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume), und [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close) wurden hinzugefügt ([Firefox-Bug 1094764](https://bugzil.la/1094764)).
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) implementiert jetzt das [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune) [k-rate](/de/docs/Web/API/AudioParam#k-rate)-Attribut ([Firefox-Bug 1153783](https://bugzil.la/1153783)).

#### Web Worker

- Leichte Verbesserung unserer [Service Worker API](/de/docs/Web/API/Service_Worker_API): Die [`update()`](/de/docs/Web/API/ServiceWorkerRegistration/update)-Methode wurde von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zu [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) verschoben ([Firefox-Bug 1131350](https://bugzil.la/1131350)).
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) ist jetzt in Webworkern verfügbar ([Firefox-Bug 1131327](https://bugzil.la/1131327)).
- [`DataStore`](/de/docs/Web/API/DataStore) ist jetzt in Webworkern verfügbar ([Firefox-Bug 916196](https://bugzil.la/916196)).

#### IndexedDB

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) sind jetzt standardmäßig nicht-durable ([Firefox-Bug 1112702](https://bugzil.la/1112702)). Dies favorisiert die Leistung gegenüber der Zuverlässigkeit und entspricht dem Verhalten anderer Browser. Weitere Informationen finden Sie in unserer [Definition der Haltbarkeit](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#durable).

#### Dev Tools

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

- Die Verwendung eines Sternchens (`*`) in einem [CSP](/de/docs/Glossary/CSP) schließt die Schemas `data:`, `blob:` oder `:filesystem` bei der Übereinstimmung mit Quellenausdrücken nicht mehr ein. Diese Schemas müssen nun explizit im entsprechenden Header definiert werden, um der CSP zu entsprechen ([Firefox-Bug 1086999](https://bugzil.la/1086999)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL

- Es ist nicht mehr möglich, transparente Fenster auf oberster Ebene zu erstellen [Firefox-Bug 1162649](https://bugzil.la/1162649).

### JavaScript-Code-Module

- Dict.jsm wurde entfernt [Firefox-Bug 1123309](https://bugzil.la/1123309). Verwenden Sie {{jsxref("Map")}} stattdessen.

### XPCOM

- Das Attribut `nsIClassInfo.implementationLanguage` wurde zusammen mit der Funktion `nsClassInfo::GetImplementationLanguage()` entfernt.
- Die folgenden XPCOM-Schnittstellen wurden entfernt; verwenden Sie stattdessen die standardmäßigen HTML-Schnittstellen:

  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### Sonstiges

- Die Places Keywords API wurde als veraltet markiert und wird bald entfernt ([Firefox-Bug 1140395](https://bugzil.la/1140395)).
- Das automatisierte Testsystem unterstützt jetzt das Überspringen einzelner Testfunktionen. Siehe [bedingte Tests ausführen](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) im XPCShell-Testing.

## Ältere Versionen

{{Firefox_for_developers}}
