---
title: Firefox 42 für Entwickler
slug: Mozilla/Firefox/Releases/42
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Firefox 42 wurde am 3. November 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Debugging von Firefox für Android über WLAN](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-over-the-network)
- _Konfiguration des Firefox OS Simulators in WebIDE_
- [CSS-Filter-Voreinstellungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving-filter-presets)

[Alle zwischen Firefox 41 und Firefox 42 behobenen Entwicklerwerkzeuge-Fehler](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Vertikaler {{cssxref('writing-mode')}} wird jetzt mit rtl-Skripten unterstützt ([Firefox-Fehler 1131451](https://bugzil.la/1131451)).
- Die Werte von {{cssxref("caption-side")}} sind jetzt relativ zur Tabelle und ändern die tatsächliche Bedeutung entsprechend ihrem {{cssxref("writing-mode")}}-Wert [Firefox-Fehler 1202993](https://bugzil.la/1202993).
- Nicht-standardisierte Eigenschaften wie `-moz-margin-start` sind jetzt Aliase ihres Standardgegenstücks ({{cssxref('margin-inline-start')}}, …). Bisher war es umgekehrt. Dies wirkt sich auf den von [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) zurückgegebenen Wert und die Iteration der Eigenschaften in einer Stilregel aus, die beide die kanonische Form verwenden ([Firefox-Fehler 1118103](https://bugzil.la/1118103)).
- Die vorangestellte Version von CSS-Gradients kann ausgeschaltet werden, indem die `layout.css.prefixes.gradients`-Einstellung auf `false` gesetzt wird.
- Mehrere alte Fehler mit {{cssxref("float")}} und dem Verhalten von Margin-Zusammenstoß wurden behoben ([Firefox-Fehler 478834](https://bugzil.la/478834), [Firefox-Fehler 538194](https://bugzil.la/538194) und [Firefox-Fehler 451791](https://bugzil.la/451791)).

### HTML

- Experimenteller Support für das [`referrer`](/de/docs/Web/HTML/Element/input#referrer)-Attribut von {{HTMLElement("img")}} ([Firefox-Fehler 1166910](https://bugzil.la/1166910)), {{htmlElement("iframe")}} ([Firefox-Fehler 1175736](https://bugzil.la/1175736)), {{HTMLElement("a")}} und {{HTMLElement("area")}} ([Firefox-Fehler 1174913](https://bugzil.la/1174913)) wurde hinzugefügt. Es hat standardmäßig keine Auswirkung, da `network.http.enablePerElementReferrer` standardmäßig auf `false` steht.

### JavaScript

- Das Objekt {{jsxref("Reflect")}} wurde implementiert ([Firefox-Fehler 987514](https://bugzil.la/987514)).
- Die Implementierung der {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}-Falle wurde aktualisiert, um der finalen ES2015-Spezifikation zu entsprechen ([Firefox-Fehler 1049662](https://bugzil.la/1049662)).
- Der Aufruf von {{jsxref("Map")}}, {{jsxref("Set")}} oder {{jsxref("WeakMap")}} ohne {{jsxref('Operators', 'new')}} löst jetzt einen {{jsxref("TypeError")}} aus ([Firefox-Fehler 1083752](https://bugzil.la/1083752)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Bilder mit einer [`id`](/de/docs/Web/HTML/Element/img#id) werden nicht mehr als Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle aufgeführt: `<img id="login">` ist nicht mehr als `window.login` zugänglich. Dieses Verhalten wurde in Firefox 26 eingeführt und wurde entfernt, um einer späteren Änderung in der Spezifikation zu entsprechen. ([Firefox-Fehler 959992](https://bugzil.la/959992))
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurden hinzugefügt ([Firefox-Fehler 69787](https://bugzil.la/69787)).
- Die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle wurde experimentell erweitert, um das Hochladen von Verzeichnissen zu behandeln ([Firefox-Fehler 1164310](https://bugzil.la/1164310)). Diese vier Mitglieder können durch Setzen der `dom.input.dirpicker`-Einstellung auf `true` verfügbar gemacht werden:

  - [`HTMLInputElement.directory`](/de/docs/Web/API/HTMLInputElement/directory)
  - [`HTMLInputElement.isFilesAndDirectoriesSupported`](/de/docs/Web/API/HTMLInputElement/isFilesAndDirectoriesSupported)
  - [`HTMLInputElement.getFilesAndDirectories()`](/de/docs/Web/API/HTMLInputElement/getFilesAndDirectories)
  - [`HTMLInputElement.chooseDirectory()`](/de/docs/Web/API/HTMLInputElement/chooseDirectory)

- Die [`Directory`](/de/docs/Web/API/Directory)-Schnittstelle wurde experimentell erweitert ([Firefox-Fehler 1177688](https://bugzil.la/1177688)). Die beiden Mitglieder [`Directory.path`](/de/docs/Web/API/Directory/path) und [`Directory.getContents`](/de/docs/Web/API/Directory/getContents) können durch Setzen der `dom.input.dirpicker`-Einstellung auf `true` verfügbar gemacht werden.
- Das `HTMLMediaElement.mozSrcObject` wurde in [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) umbenannt ([Firefox-Fehler 1175523](https://bugzil.la/1175523)).

#### Service Workers

- `Request.context` wurde entfernt ([Firefox-Fehler 1188062](https://bugzil.la/1188062)).
- Die [Push API](/de/docs/Web/API/Push_API) wurde standardmäßig auf Firefox für Desktop aktiviert ([Firefox-Fehler 1153499](https://bugzil.la/1153499)), jedoch nur auf Nightly/Dev Edition/Beta-Kanälen. Sie wird standardmäßig im Release-Kanal deaktiviert, bis die Benutzererfahrung und die Debugging-Funktionen ordnungsgemäß implementiert sind ([Firefox-Fehler 1207875](https://bugzil.la/1207875)). Sie können sie weiterhin aktivieren, indem Sie die `dom.push.enabled`-Einstellung in `about:config` aktivieren.
- Die Methode [`PushManager.hasPermission()`](/de/docs/Web/API/PushManager/hasPermission) wurde in der Spezifikation veraltet und durch die Methode [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState) ersetzt. Firefox hat seine Implementierung entsprechend aktualisiert ([Firefox-Fehler 1183853](https://bugzil.la/1183853)).
- Service-Worker-bezogene Ergänzungen zur [Notifications API](/de/docs/Web/API/Notifications_API) wurden implementiert ([Firefox-Fehler 1114554](https://bugzil.la/1114554)), sind aber in dieser Version deaktiviert.

#### Web Animations API

Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde erweitert, um folgende Funktionen zu unterstützen:

- Die Eigenschaft [`AnimationPlayer.playbackRate`](/de/docs/Web/API/Animation/playbackRate) ([Firefox-Fehler 1127380](https://bugzil.la/1127380)).
- Die Schnittstellen [`CSSAnimation`](/de/docs/Web/API/CSSAnimation) und [`CSSTransition`](/de/docs/Web/API/CSSTransition) ([Firefox-Fehler 1178186](https://bugzil.la/1178186)).
- Die Methode [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) ([Firefox-Fehler 1150808](https://bugzil.la/1150808)).
- Die Schnittstelle [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent) wurde hinzugefügt und [`cancel`](/de/docs/Web/API/Animation/cancel_event) sowie [`finish`](/de/docs/Web/API/Animation/finish_event) werden jetzt auf [`Animation`](/de/docs/Web/API/Animation) ausgelöst ([Firefox-Fehler 1178664](https://bugzil.la/1178664)).

#### Web Components

Unsere experimentelle Implementierung des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) wurde geändert:

- Beim Versuch, [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) auf einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) aufzurufen, wird eine `DataCloneError`-Ausnahme ausgelöst ([Firefox-Fehler 1176757](https://bugzil.la/1176757)).
- Beim Aufrufen von [`Document.importNode()`](/de/docs/Web/API/Document/importNode) mit einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Argument wird nun eine `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst ([Firefox-Fehler 1177914](https://bugzil.la/1177914)).
- Beim Aufrufen von [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) mit einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Argument wird nun eine `HierarchyRequestError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst ([Firefox-Fehler 1177991](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) wurde implementiert ([Firefox-Fehler 1048724](https://bugzil.la/1048724)).
- Um einen WebGL2-Kontext zu erhalten, nimmt [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) jetzt `webgl2` statt `experimental-webgl2` ([Firefox-Fehler 1187174](https://bugzil.la/1187174)).

#### WebRTC

- Die options-Datenstruktur von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), `RTCOfferOptions`, wurde aktualisiert, um die Spezifikation besser zu reflektieren. Unter anderen Änderungen basiert sie jetzt auf dem `RTCOfferAnswerOptions`-Wörterbuch, das die `voiceActivityDetection`-Option bereitstellt.
- Das Wörterbuch `RTCAnswerOptions` wurde hinzugefügt. Dies ist der Typ, der für den `options`-Parameter von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) verwendet wird.
- `RTCICECandidatePairStats.mozPriority` wurde in [`RTCICECandidatePairStats.priority`](/de/docs/Web/API/RTCICECandidatePairStats/priority) umbenannt ([Firefox-Fehler 1184426](https://bugzil.la/1184426)).

#### Neue APIs

- Die [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Schnittstelle und die Methode [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap) wurden implementiert. Sie sind in regulären Fensterskripten und in Web-Workern verfügbar und ermöglichen das effiziente Übertragen von Bildern zwischen Fenster- und Worker-Kontexten ([Firefox-Fehler 1044102](https://bugzil.la/1044102)).

#### Verschiedenes

- Die [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Schnittstelle ist jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Fehler 1188115](https://bugzil.la/1188115)).
- Fehlerereignisse, die in [Web-Workern](/de/docs/Web/API/Web_Workers_API) gesendet werden, propagieren nicht mehr ([Firefox-Fehler 1188141](https://bugzil.la/1188141)).
- [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) (MSE) wurde für alle Websites aktiviert und nicht mehr für eine Whitelist von Websites ([Firefox-Fehler 1185611](https://bugzil.la/1185611)).
- Die nicht standardmäßige und veraltete `Window.mozRequestAnimationFrame()` wurde entfernt ([Firefox-Fehler 909154](https://bugzil.la/909154)). Verwenden Sie stattdessen die standardmäßige [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- Die Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Windows implementiert, versteckt hinter dem `media.webspeech.synth.enabled`-Flag in `about:config` ([Firefox-Fehler 1003457](https://bugzil.la/1003457)). Weitere Informationen finden Sie in der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

- Firefox 41 und frühere Versionen akzeptierten fälschlicherweise undefinierte oder ungültige Pseudo-Header-Felder in HTTP/2-Antworten. Dies ist jetzt behoben, und ab Firefox 42 wird nur noch das _:status_-Pseudo-Header-Feld gemäß der Spezifikation akzeptiert. Antwort-Header, die willkürliche Felder enthalten, werden als fehlerhaft betrachtet. ([Firefox-Fehler 1136727](https://bugzil.la/1136727))

## Netzwerk

- Die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#upgrade-insecure-requests) wurde implementiert ([Firefox-Fehler 1139297](https://bugzil.la/1139297)).

## Sicherheit

- EV-Zertifikate mit einer Gültigkeit von mehr als 39 Monaten werden nun als DV-Zertifikate behandelt ([Firefox-Fehler 1145679](https://bugzil.la/1145679)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

#### nsIContentPolicy

- Die Konstante `TYPE_EMBED` wurde zu `nsIContentPolicy` hinzugefügt, um es der Gecko-Interna und Add-on-Code zu ermöglichen, verschiedene Anfragetypen besser zu unterscheiden. Bisher wurde `TYPE_OBJECT` für diese Fälle verwendet ([Firefox-Fehler 1148030](https://bugzil.la/1148030)).
- Ebenso wurde die Konstante `TYPE_SUBDOCUMENT` in `TYPE_FRAME` und `TYPE_IFRAME` aufgesplittet ([Firefox-Fehler 1148044](https://bugzil.la/1148044)).

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
