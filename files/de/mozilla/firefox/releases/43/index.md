---
title: Firefox 43 Versionshinweise für Entwickler
short-title: Firefox 43
slug: Mozilla/Firefox/Releases/43
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Firefox 43 wurde am 15. Dezember 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Serverprotokollierung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Schnelles finden der Regel, die eine CSS-Deklaration überschrieben hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- ["In Konsole verwenden" Kontextmenüeintrag im Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- ["Striktes" Filteroption in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Netzwerkeinträge in der Konsole verlinken nun zum Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- Die Strukturanzeige zeigt Indikatoren für gesperrte Pseudoklassen für Elemente an
- Neues Seitenleisten-UI für WebIDE

[Alle behobenen Entwicklerwerkzeug-Bugs zwischen Firefox 42 und Firefox 43](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Unterstützung für die standardisierte, nicht-prefixed Version von {{Cssxref("hyphens")}} wurde implementiert ([Firefox-Bug 953408](https://bugzil.la/953408)).
- Die Kurzschreibweise {{cssxref("font")}} wurde aktualisiert, um {{cssxref("font-stretch")}}-Werte zu akzeptieren ([Firefox-Bug 1057680](https://bugzil.la/1057680)).
- Um die neueste Entwicklung der Spezifikation zu erfüllen, wählt die {{cssxref(":fullscreen")}}-Pseudoklasse jetzt den gesamten Stapel von Elementen im Vollbildmodus aus, nicht nur das oberste Element ([Firefox-Bug 1199522](https://bugzil.la/1199522)).
- Die veralteten SVG-Werte für {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb` und `tb-rl` wurden in CSS als Aliase für Standard-Eigenschaften hinzugefügt ([Firefox-Bug 1205787](https://bugzil.la/1205787)).

### HTML

- Für {{htmlelement("img")}} mit ICO-Bild, das mehrere Frames enthält, wird die inhärente Dimension des Bildes auf die des größten Frames und nicht mehr auf die des kleinsten Frames gesetzt [Firefox-Bug 1201796](https://bugzil.la/1201796).
- Der Wert des Viewports des Dokuments (definiert mit `<meta name="viewport>`) kann nun dynamisch via JavaScript geändert werden ([Firefox-Bug 976616](https://bugzil.la/976616)).

### JavaScript

#### Neue APIs

- Die neuen ES2016-Methoden {{jsxref("Array.prototype.includes()")}} und {{jsxref("TypedArray.prototype.includes()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1070767](https://bugzil.la/1070767)).

#### Änderungen im Zusammenhang mit dem `arguments`-Objekt

- Um die ES2015-Spezifikation zu erfüllen, haben [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt mehr. Das `arguments`-Objekt ist nun lexikalisch gebunden (geerbt von der äußeren Funktion). In den meisten Fällen sind [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative `(...args) => args[i]`, siehe [Firefox-Bug 889158](https://bugzil.la/889158).
- Das [arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist nun in Verbindung mit [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt ([Firefox-Bug 1133298](https://bugzil.la/1133298)).
- Von nun an wird ein abgebildetes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt in nicht-strikten Funktionen nur bereitgestellt, wenn die Funktion **keine** [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte Parameter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) enthält ([Firefox-Bug 1175394](https://bugzil.la/1175394)).

#### Weitere Änderungen

- [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) und [Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind gemäß ES2016 nicht mehr konstruierbar ([Firefox-Bug 1191486](https://bugzil.la/1191486)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

_Keine Änderung._

#### IndexedDB

- Ein neues Feature namens locale-aware-Sortierung wurde hinzugefügt, das die Erstellung von Indizes mit einer spezifizierten Locale ermöglicht, die dann verwendet werden können, um Daten gemäß den Regeln dieser Locale zu sortieren ([Firefox-Bug 871846](https://bugzil.la/871846)). Dies ist ein nicht-standardisiertes Firefox-spezifisches Feature.

#### Service Workers

- Gemäß der Spezifikation wird Firefox jetzt einen `InvalidStateError` werfen, wenn [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Handlers aufgerufen wird; zudem werden mehrere Aufrufe von [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) jetzt gestapelt, und die resultierenden Promises werden zur Liste der [Lebensdauer verlängernden Promises](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) hinzugefügt ([Firefox-Bug 1180274](https://bugzil.la/1180274)).
- [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Methoden wurden implementiert ([Firefox-Bug 1149195](https://bugzil.la/1149195)).

#### WebRTC

- Die Methode [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) wurde standardmäßig aktiviert ([Firefox-Bug 1177276](https://bugzil.la/1177276)).
- Die nicht-standardisierte Constraint Style Option List für `RTCOfferOptions` wurde als veraltet markiert und wird in Firefox 44 vollständig entfernt.

#### Verschiedenes

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) verwendet jetzt die neue Promise-Syntax für [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery), wie in der jüngsten Entwicklung der Spezifikation spezifiziert ([Firefox-Bug 1050749](https://bugzil.la/1050749)).
- Der `User-Agent`-Header steht nicht mehr auf der Liste der {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}}, sodass er jetzt in einem [Fetch](/de/docs/Web/API/Fetch_API) [`Headers`](/de/docs/Web/API/Headers)-Objekt, via XHR [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader),… gesetzt werden kann ([Firefox-Bug 1188932](https://bugzil.la/1188932)).
- Der [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)-Konstruktor kann jetzt ein Options-Wörterbuch als Parameter akzeptieren, das es Ihnen erlaubt, benutzerdefinierte Bitraten für die aufzuzeichnenden Audio-/Videoaufnahmen festzulegen ([Firefox-Bug 1161276](https://bugzil.la/1161276)).
- Das [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interface, das zu den [Performance APIs](/de/docs/Web/API/Performance_API) gehört, wurde implementiert ([Firefox-Bug 1165796](https://bugzil.la/1165796)).
- Die Frame Timing API wurde hinzugefügt: Die `PerformanceRenderTiming`- und `PerformanceCompositeTiming`-Schnittstellen sind jetzt verfügbar ([Firefox-Bug 1191178](https://bugzil.la/1191178)).
- Die moderne [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) wurde implementiert: Ungeprätztes [`Screen.orientation`](/de/docs/Web/API/Screen/orientation) und die [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle sind jetzt verfügbar ([Firefox-Bug 1131470](https://bugzil.la/1131470)). Die nicht-standardmäßigen `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()`, und `Screen.mozUnlockOrientation()` werden in Zukunft entfernt.
- Unter Linux, wie unter Windows, gibt [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) jetzt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück ([Firefox-Bug 1026803](https://bugzil.la/1026803)).
- Experimenteller Support für [`Selection`](/de/docs/Web/API/Selection)-Ereignisse [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event), sowie die [`Document.onselectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`HTMLInputElement.onselectstart`](/de/docs/Web/API/Node/selectstart_event)-Ereignishandler-Eigenschaft wurde hinzugefügt ([Firefox-Bug 571294](https://bugzil.la/571294)). Das `selectionchange`-Ereignis wird auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wenn das zugehörige `Selection`-Objekt betroffen ist, oder auf dem spezifischen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ([Firefox-Bug 1196479](https://bugzil.la/1196479)). Diese Funktion wird durch die `dom.select_events.enabled`-Einstellung gesteuert, die standardmäßig auf `false` gesetzt ist, außer in Nightly.
- Unterstützung für [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurde auf Firefox für Android und Firefox OS aktiviert ([Firefox-Bug 1204841](https://bugzil.la/1204841)).
- Die Methode `HTMLCanvasElement.mozFetchAsStream()` wurde entfernt ([Firefox-Bug 1206030](https://bugzil.la/1206030)).
- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) sowie [`fetch()`](/de/docs/Web/API/Window/fetch) werden nun eine {{jsxref("TypeError")}}-Ausnahme auslösen, wenn sie mit einer URL verwendet werden, die einen Benutzernamen und ein Passwort enthält ([Firefox-Bug 1195820](https://bugzil.la/1195820)).

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

- Der Zugriff auf Web Storage (d.h. `localStorage` und `sessionStorage`) aus Drittanbieter-IFrames wird nun verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert hat](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) ([Firefox-Bug 536509](https://bugzil.la/536509)).
- Diese Whitelist wurde sogar in der Nightly und Aurora/Dev Edition des Browsers entfernt ([Firefox-Bug 1201023](https://bugzil.la/1201023)). Es ist derzeit geplant, dass diese Entfernung auch für Beta- und Release-Versionen in der nächsten Version (Firefox 44) erfolgt.
- Subresource Integrity wurde für {{htmlelement("script")}} und {{htmlelement("link")}}, die auf Stylesheets verlinken, implementiert ([Firefox-Bug 992096](https://bugzil.la/992096)).

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

- In Vorbereitung auf zukünftige Versionen, die auf Multi-Prozess-Inhalte umstellen, können {{Glossary("Plugin", "NPAPI")}}-Plugins nicht mehr im selben Prozess wie die Seiteninhalte ausgeführt werden. Die Präferenzen, die mit `dom.ipc.plugins` beginnen, werden nicht mehr verwendet.

### Sonstiges

_Keine Änderung._
