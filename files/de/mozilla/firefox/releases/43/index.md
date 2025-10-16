---
title: Firefox 43 Versionshinweise für Entwickler
short-title: Firefox 43
slug: Mozilla/Firefox/Releases/43
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 43 wurde am 15. Dezember 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Serverprotokollierung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Schnelles Auffinden der Regel, die eine CSS-Deklaration überschrieben hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- [Menüeintrag "Use in Console" (In Konsole verwenden) im Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Option "Strict" (Streng) zum Filtern in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Netzwerkeinträge in der Konsole verlinken jetzt mit dem Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- [Die Markup-Ansicht zeigt Indikatoren für pseudoklassengeblockte Elemente](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#setting-hover-active-focus)
- Neues Seitenleisten-UI für WebIDE

[Alle Devtools-Bugs, die zwischen Firefox 42 und Firefox 43 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Die Unterstützung für die standardmäßige, unveränderte Version von {{Cssxref("hyphens")}} wurde hinzugefügt ([Firefox Bug 953408](https://bugzil.la/953408)).
- Die Kurzform-Eigenschaft {{cssxref("font")}} wurde aktualisiert, um {{cssxref("font-stretch")}}-Werte zu akzeptieren ([Firefox Bug 1057680](https://bugzil.la/1057680)).
- Um die neueste Entwicklung der Spezifikation zu entsprechen, wählt die Pseudoklasse {{cssxref(":fullscreen")}} nun den gesamten Stapel von Elementen im Vollbild aus und nicht nur das oberste Element ([Firefox Bug 1199522](https://bugzil.la/1199522)).
- Die veralteten SVG-Werte für {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb` und `tb-rl` wurden in CSS als Aliase zu Standard-Eigenschaften hinzugefügt ([Firefox Bug 1205787](https://bugzil.la/1205787)).

### HTML

- Für {{htmlelement("img")}} mit ICO-Bild, das mehrere Frames enthält, wird die intrinsische Dimension des Bildes auf die des größten Frames festgelegt und nicht mehr auf die des kleinsten Frames [Firefox Bug 1201796](https://bugzil.la/1201796).
- Der Wert des Viewports des Dokuments (definiert mit `<meta name="viewport">`) kann nun über JavaScript dynamisch geändert werden ([Firefox Bug 976616](https://bugzil.la/976616)).

### JavaScript

#### Neue APIs

- Die neuen ES2016-Methoden {{jsxref("Array.prototype.includes()")}} und {{jsxref("TypedArray.prototype.includes()")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1070767](https://bugzil.la/1070767)).

#### Änderungen bezüglich des `arguments`-Objekts

- Um der ES2015-Spezifikation zu entsprechen, haben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt mehr. Das `arguments`-Objekt ist jetzt lexikalisch gebunden (von der äußeren Funktion geerbt). In den meisten Fällen sind [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative `(...args) => args[i]`, siehe [Firefox Bug 889158](https://bugzil.la/889158).
- Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist jetzt in Verbindung mit [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt ([Firefox Bug 1133298](https://bugzil.la/1133298)).
- Ab jetzt wird ein gemapptes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt in nicht-strikten Funktionen nur bereitgestellt, wenn die Funktion **keine** [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), keine [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder keine [destrukturierten Parameter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) enthält ([Firefox Bug 1175394](https://bugzil.la/1175394)).

#### Weitere Änderungen

- [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) und [Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind gemäß ES2016 nicht mehr konstruierbar ([Firefox Bug 1191486](https://bugzil.la/1191486)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

_Keine Änderung._

#### IndexedDB

- Ein neues Feature namens sprachsensitives Sortieren wurde hinzugefügt, das die Erstellung von Indizes mit einer angegebenen Sprache ermöglicht, die dann zur Sortierung von Daten gemäß den Regeln dieser Sprache verwendet werden können ([Firefox Bug 871846](https://bugzil.la/871846)). Dies ist ein nicht standardmäßiges, Firefox-spezifisches Feature.

#### Service Workers

- Entsprechend der Spezifikation wird Firefox jetzt einen `InvalidStateError` auslösen, wenn [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Handlers aufgerufen wird; zudem werden mehrfache Aufrufe von [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) jetzt aufgestapelt, und die resultierenden Versprechen werden zur Liste der [erweiterten Lebenszeitversprechen](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) hinzugefügt ([Firefox Bug 1180274](https://bugzil.la/1180274)).
- [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Methoden wurden implementiert ([Firefox Bug 1149195](https://bugzil.la/1149195)).

#### WebRTC

- Die Methode [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) wurde standardmäßig aktiviert ([Firefox Bug 1177276](https://bugzil.la/1177276)).
- Die nicht standardmäßige Constraints-Stilliste für `RTCOfferOptions` wurde veraltet und wird vollständig in Firefox 44 entfernt.

#### Verschiedenes

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) verwendet jetzt die neue Promise-Syntax für [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery), wie in der jüngsten Entwicklung der Spezifikation festgelegt ([Firefox Bug 1050749](https://bugzil.la/1050749)).
- Der `User-Agent`-Header befindet sich nicht mehr in der Liste der {{Glossary("Forbidden_request_header", "forbidden request headers")}}, sodass er jetzt in einem [Fetch](/de/docs/Web/API/Fetch_API)-[`Headers`](/de/docs/Web/API/Headers)-Objekt gesetzt werden kann, via XHR [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader),... ([Firefox Bug 1188932](https://bugzil.la/1188932)).
- Der Konstruktor [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder) kann jetzt ein Options-Dictionary als Parameter akzeptieren, das es ermöglicht, benutzerdefinierte Bitraten für die aufzuzeichnenden Audio-/Video-Medien festzulegen ([Firefox Bug 1161276](https://bugzil.la/1161276)).
- Das [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interface, das zu den [Performance APIs](/de/docs/Web/API/Performance_API) gehört, wurde implementiert ([Firefox Bug 1165796](https://bugzil.la/1165796)).
- Die Frame Timing API wurde hinzugefügt: Die Schnittstellen `PerformanceRenderTiming` und `PerformanceCompositeTiming` sind jetzt verfügbar ([Firefox Bug 1191178](https://bugzil.la/1191178)).
- Die moderne [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) wurde implementiert: das unveränderte [`Screen.orientation`](/de/docs/Web/API/Screen/orientation) und das [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Interface sind jetzt verfügbar ([Firefox Bug 1131470](https://bugzil.la/1131470)). Die nicht standardmäßigen `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()` und `Screen.mozUnlockOrientation()` werden in Zukunft entfernt.
- Unter Linux, wie unter Windows, gibt [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) jetzt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück ([Firefox Bug 1026803](https://bugzil.la/1026803)).
- Experimentelle Unterstützung für [`Selection`](/de/docs/Web/API/Selection)-Ereignisse [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event) sowie die Eigenschaft der Ereignishandler [`Document.onselectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`HTMLInputElement.onselectstart`](/de/docs/Web/API/Node/selectstart_event) wurde hinzugefügt ([Firefox Bug 571294](https://bugzil.la/571294)). Das `selectionchange`-Ereignis wird auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wenn das zugehörige `Selection`-Objekt betroffen ist, oder speziell auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ([Firefox Bug 1196479](https://bugzil.la/1196479)). Dieses Feature wird durch die `dom.select_events.enabled`-Voreinstellung gesteuert, die standardmäßig auf `false` gesetzt ist, außer auf Nightly.
- Unterstützung für [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurde auf Firefox für Android und Firefox OS aktiviert ([Firefox Bug 1204841](https://bugzil.la/1204841)).
- Die Methode `HTMLCanvasElement.mozFetchAsStream()` wurde entfernt ([Firefox Bug 1206030](https://bugzil.la/1206030)).
- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) sowie [`fetch()`](/de/docs/Web/API/Window/fetch) werden jetzt eine {{jsxref("TypeError")}}-Ausnahme auslösen, wenn sie mit einer URL verwendet werden, die einen Benutzernamen und ein Passwort enthält ([Firefox Bug 1195820](https://bugzil.la/1195820)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

_Keine Änderung._

## Netzwerke

_Keine Änderung._

## Sicherheit

- Der Zugriff auf Web Storage (d.h. `localStorage` und `sessionStorage`) von Drittanbieter-IFrames ist jetzt untersagt, wenn der Benutzer [Cookies von Drittanbietern deaktiviert hat](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) ([Firefox Bug 536509](https://bugzil.la/536509)).
- Diese Whitelist wurde sogar in den Nightly- und Aurora-/Dev-Editionen des Browsers entfernt ([Firefox Bug 1201023](https://bugzil.la/1201023)). Es ist geplant, dass diese Entfernung auch für Beta- und Release-Versionen in der nächsten Version (Firefox 44) erfolgt.
- Subressourcenintegrität wurde für {{htmlelement("script")}} und {{htmlelement("link")}}, die auf Stylesheets verlinkt, implementiert ([Firefox Bug 992096](https://bugzil.la/992096)).

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

- Zur Vorbereitung auf zukünftige Versionen, die auf Multi-Prozess-Inhalt umstellen werden, können {{Glossary("Plugin", "NPAPI")}}-Plugins nicht mehr im selben Prozess wie der Seiteninhalt ausgeführt werden. Die Präferenzen, die mit `dom.ipc.plugins` beginnen, werden nicht mehr verwendet.

### Sonstiges

_Keine Änderung._
