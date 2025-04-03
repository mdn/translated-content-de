---
title: Firefox 43 für Entwickler
slug: Mozilla/Firefox/Releases/43
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 43 wurde am 15. Dezember 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Serverprotokollierung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Schnell die Regel finden, die eine CSS-Deklaration übersteuert hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- [„Im Konsolenkontext verwenden“-Menüpunkt im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- ["Strikt"-Option zum Filtern in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Netzwerkeinträge in der Konsole verlinken nun zum Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- Die Markup-Ansicht zeigt Indikatoren für Pseudo-Klassen, die für Elemente gesperrt sind ([setting-hover-active-focus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#setting-hover-active-focus))
- Neue Sidebar-Benutzeroberfläche für WebIDE

[Alle Devtools-Bugs, die zwischen Firefox 42 und Firefox 43 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Die Unterstützung für die standardisierte, unpräfixte Version von {{Cssxref("hyphens")}} wurde implementiert ([Firefox-Bug 953408](https://bugzil.la/953408)).
- Die Kurzschreibweiseigenschaft {{cssxref("font")}} wurde aktualisiert, um {{cssxref("font-stretch")}}-Werte zu akzeptieren ([Firefox-Bug 1057680](https://bugzil.la/1057680)).
- Um der neuesten Entwicklung der Spezifikation zu entsprechen, wählt die Pseudo-Klasse {{cssxref(":fullscreen")}} nun den gesamten Stapel von Elementen im Vollbild aus und nicht nur das oberste ([Firefox-Bug 1199522](https://bugzil.la/1199522)).
- Die veralteten SVG-Werte für {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb` und `tb-rl` wurden in CSS als Aliase zu Standardwerten hinzugefügt ([Firefox-Bug 1205787](https://bugzil.la/1205787)).

### HTML

- Für {{htmlelement("img")}} mit ICO-Bild, das mehrere Frames enthält, wird die intrinsische Dimension des Bildes auf die des größten Frames festgelegt, und nicht mehr auf die des kleinsten Frames ([Firefox-Bug 1201796](https://bugzil.la/1201796)).
- Der Wert des Viewports des Dokuments (definiert mit `<meta name="viewport">`) kann nun dynamisch über JavaScript geändert werden ([Firefox-Bug 976616](https://bugzil.la/976616)).

### JavaScript

#### Neue APIs

- Die neuen ES2016-Methoden {{jsxref("Array.prototype.includes()")}} und {{jsxref("TypedArray.prototype.includes()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1070767](https://bugzil.la/1070767)).

#### Änderungen bezüglich des `arguments`-Objekts

- Um die ES2015-Spezifikation zu erfüllen, haben [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) nicht mehr ihr eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt. Das `arguments`-Objekt wird jetzt lexikalisch gebunden (vom äußeren Funktionskontext geerbt). In den meisten Fällen sind [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative `(...args) => args[i]`, siehe [Firefox-Bug 889158](https://bugzil.la/889158).
- Das [arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist nun in Verbindung mit [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt ([Firefox-Bug 1133298](https://bugzil.la/1133298)).
- Ab sofort wird ein abgebildetes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt in nicht-strikten Funktionen nur bereitgestellt, wenn die Funktion **keine** [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte Parameter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) enthält ([Firefox-Bug 1175394](https://bugzil.la/1175394)).

#### Andere Änderungen

- [Generatorkonstrukte](/de/docs/Web/JavaScript/Reference/Statements/function*) und [Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind gemäß ES2016 nicht mehr konstruierbar ([Firefox-Bug 1191486](https://bugzil.la/1191486)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

_Keine Änderung._

#### IndexedDB

- Ein neues Feature namens [Sprachabhängiges Sortieren](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) wurde hinzugefügt, das es ermöglicht, Indizes mit einer angegebenen Sprache zu erstellen, die dann verwendet werden können, um Daten gemäß den Regeln dieser Sprache zu sortieren ([Firefox-Bug 871846](https://bugzil.la/871846)). Dies ist ein nicht-standardmäßiges, Firefox-spezifisches Feature.

#### Service Workers

- Gemäß der Spezifikation wirft Firefox nun einen `InvalidStateError`, wenn [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Handlers aufgerufen wird; zudem werden bei mehrfachen Aufrufen von [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) die resultierenden Versprechen zur Liste der [Versprechen zur Lebenszeitverlängerung](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) hinzugefügt ([Firefox-Bug 1180274](https://bugzil.la/1180274)).
- Die Methoden [`PushMessageData`](/de/docs/Web/API/PushMessageData) wurden implementiert ([Firefox-Bug 1149195](https://bugzil.la/1149195)).

#### WebRTC

- Die Methode [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) wurde standardmäßig aktiviert ([Firefox-Bug 1177276](https://bugzil.la/1177276)).
- Die nicht-standardmäßige Constraint-Stillistenoption für `RTCOfferOptions` wurde für veraltet erklärt und wird in Firefox 44 vollständig entfernt.

#### Sonstige

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) verwendet jetzt die neue Promise-Syntax für [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery), wie in der jüngsten Spezifikationsentwicklung festgelegt ([Firefox-Bug 1050749](https://bugzil.la/1050749)).
- Der `User-Agent`-Header gehört nicht mehr zur Liste der {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}}, sodass er nun in einem [Fetch](/de/docs/Web/API/Fetch_API) `Headers`-Objekt, via XHR [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt werden kann, … ([Firefox-Bug 1188932](https://bugzil.la/1188932)).
- Der Konstruktor [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder) kann nun ein Optionswörterbuch als Parameter akzeptieren, das es Ihnen ermöglicht, benutzerdefinierte Bitraten für das aufzuzeichnende Audio/Video festzulegen ([Firefox-Bug 1161276](https://bugzil.la/1161276)).
- Die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), die zu den [Performance-APIs](/de/docs/Web/API/Performance_API) gehört, wurde implementiert ([Firefox-Bug 1165796](https://bugzil.la/1165796)).
- Die Frame-Timing-API wurde hinzugefügt: die Schnittstellen `PerformanceRenderTiming` und `PerformanceCompositeTiming` sind nun verfügbar ([Firefox-Bug 1191178](https://bugzil.la/1191178)).
- Die moderne [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) wurde implementiert: der unpräfixierte [`Screen.orientation`](/de/docs/Web/API/Screen/orientation) und die Schnittstelle [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) sind nun verfügbar ([Firefox-Bug 1131470](https://bugzil.la/1131470)). Die nicht-standardmäßigen Methoden `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()` und `Screen.mozUnlockOrientation()` werden in Zukunft entfernt.
- Unter Linux, wie unter Windows, gibt [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) nun einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück ([Firefox-Bug 1026803](https://bugzil.la/1026803)).
- Experimentelle Unterstützung für [`Selection`](/de/docs/Web/API/Selection)-Events [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event), sowie die Eigenschaften der Event-Handler [`Document.onselectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`HTMLInputElement.onselectstart`](/de/docs/Web/API/Node/selectstart_event) wurde hinzugefügt ([Firefox-Bug 571294](https://bugzil.la/571294)). Das `selectionchange`-Ereignis wird auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wenn das zugehörige `Selection`-Objekt betroffen ist, oder auf dem spezifischen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ([Firefox-Bug 1196479](https://bugzil.la/1196479)). Diese Funktion wird durch die Voreinstellung `dom.select_events.enabled` gesteuert, die standardmäßig `false` ist, außer in Nightly.
- Unterstützung für [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurde auf Firefox für Android und Firefox OS aktiviert ([Firefox-Bug 1204841](https://bugzil.la/1204841)).
- Die Methode `HTMLCanvasElement.mozFetchAsStream()` wurde entfernt ([Firefox-Bug 1206030](https://bugzil.la/1206030)).
- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) sowie [`fetch()`](/de/docs/Web/API/Window/fetch) werfen nun eine {{jsxref("TypeError")}}-Ausnahme, wenn sie mit einer URL verwendet werden, die einen Benutzernamen und ein Passwort enthält ([Firefox-Bug 1195820](https://bugzil.la/1195820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

_Keine Änderung._

## Netzwerk

_Keine Änderung._

## Sicherheit

- Der Zugriff auf Web Storage (d.h. `localStorage` und `sessionStorage`) von Drittanbieter-IFrames wird nun verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat ([Firefox-Bug 536509](https://bugzil.la/536509)).
- Diese Whitelist wurde sogar in den Nightly- und Aurora/Dev-Edition des Browsers entfernt ([Firefox-Bug 1201023](https://bugzil.la/1201023)). Es ist derzeit geplant, dass diese Entfernung auch für Beta- und Release-Versionen in der nächsten Version (Firefox 44) erfolgt.
- Subresource Integrity wurde für {{htmlelement("script")}} und {{htmlelement("link")}} implementiert, die auf Stylesheets verweisen ([Firefox-Bug 992096](https://bugzil.la/992096)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderung._

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Plugins

- Zur Vorbereitung auf zukünftige Versionen, die auf Multi-Prozess-Inhalte umstellen werden, können {{Glossary("Plugin", "NPAPI")}}-Plugins nicht mehr im selben Prozess wie die Seiteninhalte ausgeführt werden. Die Präferenzen, die mit `dom.ipc.plugins` beginnen, werden nicht mehr verwendet.

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
