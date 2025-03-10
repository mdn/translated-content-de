---
title: Firefox 43 für Entwickler
slug: Mozilla/Firefox/Releases/43
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 43 wurde am 15. Dezember 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Serverprotokollierung in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Finden Sie schnell die Regel, die eine CSS-Deklaration übergangen hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- [Kontextmenüeintrag "Verwenden in Konsole" im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- ["Strikte" Option zum Filtern in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Netzwerkeinträge in der Konsole verlinken jetzt zum Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- Die Markup-Ansicht zeigt Indikatoren für Pseudo-Klassen an, die für Elemente gesperrt sind](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#setting-hover-active-focus)
- Neue Seitenleisten-Benutzeroberfläche für WebIDE

[Alle Devtools-Bugs, die zwischen Firefox 42 und Firefox 43 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Unterstützung für die standardisierte, unpräfixte Version von {{Cssxref("hyphens")}} wurde hinzugefügt ([Firefox Bug 953408](https://bugzil.la/953408)).
- Die Kurzform-Eigenschaft {{cssxref("font")}} wurde aktualisiert, um {{cssxref("font-stretch")}}-Werte zu akzeptieren ([Firefox Bug 1057680](https://bugzil.la/1057680)).
- Um der neuesten Entwicklung der Spezifikation zu entsprechen, wählt die {{cssxref(":fullscreen")}} Pseudo-Klasse jetzt den gesamten Stapel der Elemente im Vollbildmodus aus, nicht nur das oberste Element ([Firefox Bug 1199522](https://bugzil.la/1199522)).
- Die veralteten SVG-Werte für {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb` und `tb-rl`, wurden in CSS als Aliase für Standard-Eigenschaften hinzugefügt ([Firefox Bug 1205787](https://bugzil.la/1205787)).

### HTML

- Bei {{htmlelement("img")}} mit einem ICO-Bild, das mehrere Frames enthält, wird die intrinsische Bilddimension jetzt auf die des größten Frames und nicht mehr auf die des kleinsten Frames gesetzt ([Firefox Bug 1201796](https://bugzil.la/1201796)).
- Der Wert des Viewports des Dokuments (definiert mit `<meta name="viewport>`) kann nun dynamisch über JavaScript geändert werden ([Firefox Bug 976616](https://bugzil.la/976616)).

### JavaScript

#### Neue APIs

- Die neuen ES2016-Methoden {{jsxref("Array.prototype.includes()")}} und {{jsxref("TypedArray.prototype.includes()")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1070767](https://bugzil.la/1070767)).

#### Änderungen bezüglich des `arguments` Objekts

- Um der ES2015-Spezifikation zu entsprechen, haben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt mehr. Das `arguments` Objekt ist jetzt lexikalisch gebunden (vom äußeren Funktionsbereich geerbt). In den meisten Fällen sind [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative `(...args) => args[i]`, siehe [Firefox Bug 889158](https://bugzil.la/889158).
- Das [arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt ist jetzt in Verbindung mit [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt ([Firefox Bug 1133298](https://bugzil.la/1133298)).
- Von nun an wird ein zugeordnetes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt in nicht-strikten Funktionen nur bereitgestellt, wenn die Funktion **keine** [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte Parameter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) enthält ([Firefox Bug 1175394](https://bugzil.la/1175394)).

#### Andere Änderungen

- [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) und [Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind gemäß ES2016 nicht mehr konstruierbar ([Firefox Bug 1191486](https://bugzil.la/1191486)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

_Keine Änderung._

#### IndexedDB

- Ein neues Merkmal namens [lokalisierungsspezifische Sortierung](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) wurde hinzugefügt, mit dem Sie Indizes mit einer angegebenen Lokalisierung erstellen können, die dann verwendet werden können, um Daten nach den Regeln dieser Lokalisierung zu sortieren ([Firefox Bug 871846](https://bugzil.la/871846)). Dies ist eine nicht standardmäßige, Firefox-spezifische Funktion.

#### Service Workers

- Gemäß der Spezifikation wirft Firefox jetzt einen `InvalidStateError`, wenn [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) Handlers aufgerufen wird; außerdem werden mehrere Aufrufe von [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) jetzt gestapelt, und die resultierenden Versprechen werden zur Liste der [Erweiterungslebensdauer-Versprechungen](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) hinzugefügt ([Firefox Bug 1180274](https://bugzil.la/1180274)).
- [`PushMessageData`](/de/docs/Web/API/PushMessageData) Methoden wurden implementiert ([Firefox Bug 1149195](https://bugzil.la/1149195)).

#### WebRTC

- Die Methode [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) wurde standardmäßig aktiviert ([Firefox Bug 1177276](https://bugzil.la/1177276)).
- Die nicht standardmäßige Einschränkungsstil-Optionenliste für `RTCOfferOptions` wurde veraltet und wird in Firefox 44 vollständig entfernt.

#### Sonstiges

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) verwendet jetzt die neue Promises-Syntax für [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery), wie in der jüngsten Entwicklung der Spezifikation festgelegt ([Firefox Bug 1050749](https://bugzil.la/1050749)).
- Der `User-Agent` Header ist nicht mehr in der Liste der {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}} enthalten, sodass er in einem [Fetch](/de/docs/Web/API/Fetch_API) [`Headers`](/de/docs/Web/API/Headers) Objekt gesetzt werden kann, über XHR [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader),… ([Firefox Bug 1188932](https://bugzil.la/1188932)).
- Der [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder) Konstruktor kann jetzt ein Optionswörterbuch als Parameter akzeptieren, mit dem Sie benutzerdefinierte Bitraten für das aufzunehmende Audio/Video festlegen können ([Firefox Bug 1161276](https://bugzil.la/1161276)).
- Die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), gehört zu den [Performance APIs](/de/docs/Web/API/Performance_API) und wurde implementiert ([Firefox Bug 1165796](https://bugzil.la/1165796)).
- Die Frame Timing API wurde hinzugefügt: Die Schnittstellen `PerformanceRenderTiming` und `PerformanceCompositeTiming` sind jetzt verfügbar ([Firefox Bug 1191178](https://bugzil.la/1191178)).
- Die moderne [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) wurde implementiert: Unpräfixierte [`Screen.orientation`](/de/docs/Web/API/Screen/orientation) und die [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle sind jetzt verfügbar ([Firefox Bug 1131470](https://bugzil.la/1131470)). Die nicht standardmäßigen `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()`, und `Screen.mozUnlockOrientation()` werden in Zukunft entfernt.
- Unter Linux, wie unter Windows, gibt [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) jetzt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück ([Firefox Bug 1026803](https://bugzil.la/1026803)).
- Experimentelle Unterstützung für [`Selection`](/de/docs/Web/API/Selection) Ereignisse [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event), sowie die Eigenschaften [`Document.onselectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`HTMLInputElement.onselectstart`](/de/docs/Web/API/Node/selectstart_event) wurde hinzugefügt ([Firefox Bug 571294](https://bugzil.la/571294)). Das `selectionchange` Event wird auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wenn das zugehörige `Selection` Objekt betroffen ist, oder auf dem spezifischen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ([Firefox Bug 1196479](https://bugzil.la/1196479)). Dieses Feature wird über die `dom.select_events.enabled` Voreinstellung gesteuert, die standardmäßig auf `false` gesetzt ist, außer in Nightly Builds.
- Unterstützung für [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurde in Firefox für Android und Firefox OS aktiviert ([Firefox Bug 1204841](https://bugzil.la/1204841)).
- Die Methode `HTMLCanvasElement.mozFetchAsStream()` wurde entfernt ([Firefox Bug 1206030](https://bugzil.la/1206030)).
- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) sowie [`fetch()`](/de/docs/Web/API/Window/fetch) werden jetzt eine {{jsxref("TypeError")}} Ausnahme auslösen, wenn sie mit einer URL verwendet werden, die einen Benutzernamen und ein Passwort enthält ([Firefox Bug 1195820](https://bugzil.la/1195820)).

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

- Der Zugriff auf Webspeicher (d. h. `localStorage` und `sessionStorage`) aus Drittanbieter-IFrames wird jetzt verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat ([Firefox Bug 536509](https://bugzil.la/536509)).
- Diese Whitelist wurde sogar in den Nightly- und Aurora/Dev Edition-Versionen des Browsers entfernt ([Firefox Bug 1201023](https://bugzil.la/1201023)). Es ist derzeit geplant, dass diese Entfernung bei der nächsten Version auch für Beta- und Release-Versionen erfolgt (Firefox 44).
- Subressourcen-Integrität wurde für {{htmlelement("script")}} und {{htmlelement("link")}} implementiert, die auf Stylesheets verlinken ([Firefox Bug 992096](https://bugzil.la/992096)).

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

- Zur Vorbereitung auf zukünftige Versionen, die auf Multi-Prozess-Inhalte umstellen, können {{Glossary("Plugin", "NPAPI")}} Plugins nicht mehr im selben Prozess wie der Seiteninhalt ausgeführt werden. Die Einstellungen, die mit `dom.ipc.plugins` beginnen, werden nicht mehr verwendet.

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
