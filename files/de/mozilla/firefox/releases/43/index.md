---
title: Firefox 43 für Entwickler
slug: Mozilla/Firefox/Releases/43
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 43 wurde am 15. Dezember 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Server-Logging in der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Schnelles Auffinden der Regel, die eine CSS-Deklaration überschrieben hat](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- [„Use in Console“-Kontextmenüpunkt im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [„Streng“-Option zum Filtern in der Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Netzwerkeinträge in der Konsole verlinken jetzt zum Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- Die Markup-Ansicht zeigt Indikatoren für gesperrte Pseudoklassen für Elemente an](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#setting-hover-active-focus)
- Neue Seitenleisten-Benutzeroberfläche für WebIDE

[Alle zwischen Firefox 42 und Firefox 43 behobenen Devtools-Probleme](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Die Unterstützung für die standardmäßige, unpräfixte Version von {{Cssxref("hyphens")}} wurde implementiert ([Firefox-Bug 953408](https://bugzil.la/953408)).
- Die Kurzschreibweise {{cssxref("font")}} wurde aktualisiert, um {{cssxref("font-stretch")}}-Werte zu akzeptieren ([Firefox-Bug 1057680](https://bugzil.la/1057680)).
- Um die neueste Entwicklung der Spezifikation zu erfüllen, selektiert die Pseudoklasse {{cssxref(":fullscreen")}} jetzt den gesamten Stapel von Elementen im Vollbildmodus und nicht nur das oberste Element ([Firefox-Bug 1199522](https://bugzil.la/1199522)).
- Die veralteten SVG-Werte für die {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb` und `tb-rl`, wurden in CSS als Aliase zu Standardwerten hinzugefügt ([Firefox-Bug 1205787](https://bugzil.la/1205787)).

### HTML

- Für {{htmlelement("img")}} mit ICO-Bild, das mehrere Frames enthält, wird die intrinsische Dimension des Bildes auf die des größten Frames gesetzt und nicht mehr auf den kleinsten Frame [Firefox-Bug 1201796](https://bugzil.la/1201796).
- Der Wert des Viewports des Dokuments (definiert mit `<meta name="viewport>`) kann jetzt dynamisch über JavaScript geändert werden ([Firefox-Bug 976616](https://bugzil.la/976616)).

### JavaScript

#### Neue APIs

- Die neuen ES2016-Methoden {{jsxref("Array.prototype.includes()")}} und {{jsxref("TypedArray.prototype.includes()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1070767](https://bugzil.la/1070767)).

#### Änderungen bezüglich des `arguments`-Objekts

- Um der ES2015-Spezifikation zu entsprechen, haben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt mehr. Das `arguments`-Objekt ist jetzt lexikalisch gebunden (geerbt von der äußeren Funktion). In den meisten Fällen sind [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative `(...args) => args[i]`, siehe [Firefox-Bug 889158](https://bugzil.la/889158).
- Das [arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist jetzt in Verbindung mit [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt ([Firefox-Bug 1133298](https://bugzil.la/1133298)).
- Von nun an wird ein gemapptes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt in nicht-strikten Funktionen nur bereitgestellt, wenn die Funktion **keine** [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte Parameter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) enthält ([Firefox-Bug 1175394](https://bugzil.la/1175394)).

#### Andere Änderungen

- [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) und [Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sind gemäß ES2016 nicht mehr konstruierbar ([Firefox-Bug 1191486](https://bugzil.la/1191486)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

_Keine Änderung._

#### IndexedDB

- Eine neue Funktion namens [länderabhängige Sortierung](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) wurde hinzugefügt. Sie ermöglicht die Erstellung von Indizes mit einer bestimmten Region, die dann zur Sortierung von Daten nach den Regeln dieser Region verwendet werden können ([Firefox-Bug 871846](https://bugzil.la/871846)). Dies ist eine nicht standardisierte, Firefox-spezifische Funktion.

#### Service Workers

- Wie in der Spezifikation festgelegt, wirft Firefox jetzt einen `InvalidStateError`, wenn {{domxref("ExtendableEvent.waitUntil()")}} außerhalb des {{domxref("ExtendableEvent")}}-Handlers aufgerufen wird; außerdem werden bei mehrfachen Aufrufen von {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} die resultierenden Versprechen aufgestapelt und zur Liste der [Lebensdauer erweiternden Versprechen](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) hinzugefügt ([Firefox-Bug 1180274](https://bugzil.la/1180274)).
- {{domxref("PushMessageData")}}-Methoden wurden implementiert ([Firefox-Bug 1149195](https://bugzil.la/1149195)).

#### WebRTC

- Die Methode {{domxref("HTMLCanvasElement.captureStream()")}} wurde standardmäßig aktiviert ([Firefox-Bug 1177276](https://bugzil.la/1177276)).
- Die nicht standardkonforme Einschränkungsstiloptionenliste für `RTCOfferOptions` wurde veraltet und soll in Firefox 44 vollständig entfernt werden.

#### Verschiedenes

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) verwendet jetzt die neue Syntax für Versprechen für {{domxref("Navigator.getBattery()")}}, wie in der neueren Spezifikation beschrieben ([Firefox-Bug 1050749](https://bugzil.la/1050749)).
- Der `User-Agent`-Header ist nicht mehr in der Liste der {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}}, sodass er jetzt in einem [Fetch](/de/docs/Web/API/Fetch_API) {{domxref("Headers")}}-Objekt festgelegt werden kann, über XHR {{domxref("XMLHttpRequest.setRequestHeader()")}},… ([Firefox-Bug 1188932](https://bugzil.la/1188932)).
- Der Konstruktor {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} kann jetzt ein Optionswörterbuch als Parameter akzeptieren, das es ermöglicht, benutzerdefinierte Bitraten für das aufzuzeichnende Audio/Video festzulegen ([Firefox-Bug 1161276](https://bugzil.la/1161276)).
- Die {{domxref("PerformanceObserver")}}-Schnittstelle, die zu den [Performance APIs](/de/docs/Web/API/Performance_API) gehört, wurde implementiert ([Firefox-Bug 1165796](https://bugzil.la/1165796)).
- Die Frame Timing API wurde hinzugefügt: die `PerformanceRenderTiming`- und `PerformanceCompositeTiming`-Schnittstellen sind jetzt verfügbar ([Firefox-Bug 1191178](https://bugzil.la/1191178)).
- Die moderne [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) wurde implementiert: unpräfixiertes {{domxref("Screen.orientation")}} und die {{domxref("ScreenOrientation")}}-Schnittstelle sind jetzt verfügbar ([Firefox-Bug 1131470](https://bugzil.la/1131470)). Die nicht standardisierten `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()`, und `Screen.mozUnlockOrientation()` werden in Zukunft entfernt.
- Unter Linux gibt {{domxref("Event.timeStamp")}} jetzt, wie unter Windows, einen {{domxref("DOMHighResTimeStamp")}} zurück ([Firefox-Bug 1026803](https://bugzil.la/1026803)).
- Experimentelle Unterstützung für {{domxref("Selection")}}-Ereignisse {{domxref("Document/selectionchange_event", "selectionchange")}} und {{domxref("Node/selectstart_event", "selectstart")}}, sowie die Ereignishandlereigenschaft {{domxref("Document.selectionchange_event", "Document.onselectionchange")}} und {{domxref("Node/selectstart_event", "HTMLInputElement.onselectstart")}} wurde hinzugefügt ([Firefox-Bug 571294](https://bugzil.la/571294)). Das `selectionchange`-Ereignis wird auf dem {{domxref("Document")}} ausgelöst, wenn das zugehörige `Selection`-Objekt betroffen ist, oder auf dem spezifischen {{domxref("HTMLInputElement")}} oder {{domxref("HTMLTextAreaElement")}} ([Firefox-Bug 1196479](https://bugzil.la/1196479)). Diese Funktion wird durch die Präferenz `dom.select_events.enabled` gesteuert, die standardmäßig auf `false` gesetzt ist, außer bei Nightly.
- Die Unterstützung für {{domxref("MouseEvent.offsetX")}} und {{domxref("MouseEvent.offsetY")}} wurde in Firefox für Android und Firefox OS aktiviert ([Firefox-Bug 1204841](https://bugzil.la/1204841)).
- Die Methode `HTMLCanvasElement.mozFetchAsStream()` wurde entfernt ([Firefox-Bug 1206030](https://bugzil.la/1206030)).
- Der Konstruktor {{domxref("Request.Request", "Request()")}} sowie {{domxref("Window/fetch", "fetch()")}} werfen jetzt eine {{jsxref("TypeError")}}-Ausnahme, wenn sie mit einer URL verwendet werden, die einen Benutzernamen und ein Passwort enthält ([Firefox-Bug 1195820](https://bugzil.la/1195820)).

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

- Der Zugriff auf den Web-Speicher (d.h. `localStorage` und `sessionStorage`) von Drittanbieter-IFrames wird jetzt verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat ([Firefox-Bug 536509](https://bugzil.la/536509)).
- Diese Whitelist wurde sogar in der Nightly-Version und der Aurora-/Dev-Edition des Browsers entfernt ([Firefox-Bug 1201023](https://bugzil.la/1201023)). Es ist derzeit geplant, dass diese Entfernung auch für Beta- und Release-Versionen in der nächsten Version (Firefox 44) erfolgt.
- Die Subressourcen-Integrität wurde für {{htmlelement("script")}} und {{htmlelement("link")}}, die auf Stylesheets verlinken, implementiert ([Firefox-Bug 992096](https://bugzil.la/992096)).

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

- Zur Vorbereitung für zukünftige Versionen, die auf Multiprozess-Inhalte umschalten, können [NPAPI](/de/docs/Glossary/Plugin)-Plugins nicht mehr im selben Prozess wie der Seiteninhalt ausgeführt werden. Die mit `dom.ipc.plugins` beginnenden Präferenzen werden nicht mehr verwendet.

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
