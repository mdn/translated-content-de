---
title: Firefox 42 für Entwickler
slug: Mozilla/Firefox/Releases/42
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 42 wurde am 3. November 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

Höhepunkte:

- [Debugging von Firefox für Android über WLAN](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-over-the-network)
- _Konfiguration des Firefox OS Simulators in WebIDE_
- [CSS-Filter-Voreinstellungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving-filter-presets)

[Alle zwischen Firefox 41 und Firefox 42 behobenen Devtools-Fehler](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Vertikale {{cssxref('writing-mode')}} wird jetzt mit rtl-Skripten unterstützt ([Firefox-Bug 1131451](https://bugzil.la/1131451)).
- Die Werte von {{cssxref("caption-side")}} beziehen sich jetzt relativ auf die Tabelle und ändern ihre tatsächliche Bedeutung gemäß ihrem {{cssxref("writing-mode")}}-Wert ([Firefox-Bug 1202993](https://bugzil.la/1202993)).
- Nicht-standardmäßige Eigenschaften wie `-moz-margin-start` sind nun Aliase ihrer standardmäßigen Entsprechungen ({{cssxref('margin-inline-start')}}, …). Zuvor war es umgekehrt. Dies wirkt sich auf den von [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) zurückgegebenen Wert und die Iteration der Eigenschaften in einer Stilregel aus, die beide die kanonische Form verwenden ([Firefox-Bug 1118103](https://bugzil.la/1118103)).
- Die präfixierte Version von CSS-Gradienten kann deaktiviert werden, indem die Präferenz `layout.css.prefixes.gradients` auf `false` gesetzt wird.
- Mehrere alte Fehler mit {{cssxref("float")}} und dem Verhalten von Margen-Kollaps wurden behoben ([Firefox-Bug 478834](https://bugzil.la/478834), [Firefox-Bug 538194](https://bugzil.la/538194) und [Firefox-Bug 451791](https://bugzil.la/451791)).

### HTML

- Experimentelle Unterstützung für das [`referrer`](/de/docs/Web/HTML/Element/input#referrer)-Attribut von {{HTMLElement("img")}} ([Firefox-Bug 1166910](https://bugzil.la/1166910)), {{htmlElement("iframe")}} ([Firefox-Bug 1175736](https://bugzil.la/1175736)), {{HTMLElement("a")}} und {{HTMLElement("area")}} ([Firefox-Bug 1174913](https://bugzil.la/1174913)) wurde hinzugefügt. Es gibt standardmäßig keinen Effekt, da `network.http.enablePerElementReferrer` standardmäßig auf `false` steht.

### JavaScript

- Das {{jsxref("Reflect")}}-Objekt wurde implementiert ([Firefox-Bug 987514](https://bugzil.la/987514)).
- Die Implementierung der {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}-Falle wurde aktualisiert, um der finalen ES2015-Spezifikation zu entsprechen ([Firefox-Bug 1049662](https://bugzil.la/1049662)).
- Aufrufe von {{jsxref("Map")}}, {{jsxref("Set")}}, oder {{jsxref("WeakMap")}} ohne {{jsxref('Operators', 'new')}} werfen nun einen {{jsxref("TypeError")}} ([Firefox-Bug 1083752](https://bugzil.la/1083752)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Bilder mit einer [`id`](/de/docs/Web/HTML/Element/img#id) werden nicht mehr als Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle aufgeführt: `<img id="login">` ist nicht mehr als `window.login` zugänglich. Dieses Verhalten wurde in Firefox 26 eingeführt und wurde entfernt, um einer späteren Änderung in der Spezifikation zu entsprechen ([Firefox-Bug 959992](https://bugzil.la/959992)).
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurden hinzugefügt ([Firefox-Bug 69787](https://bugzil.la/69787)).
- Die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle wurde experimentell erweitert, um das Hochladen von Verzeichnissen zu verwalten ([Firefox-Bug 1164310](https://bugzil.la/1164310)). Diese vier Mitglieder können sichtbar gemacht werden, indem die `dom.input.dirpicker` Präferenz auf `true` gesetzt wird:

  - `HTMLInputElement.directory`
  - `HTMLInputElement.isFilesAndDirectoriesSupported`
  - `HTMLInputElement.getFilesAndDirectories()`
  - `HTMLInputElement.chooseDirectory()`

- Die [`Directory`](/de/docs/Web/API/Directory)-Schnittstelle wurde experimentell erweitert ([Firefox-Bug 1177688](https://bugzil.la/1177688)). Die beiden Mitglieder [`Directory.path`](/de/docs/Web/API/Directory/path) und [`Directory.getContents`](/de/docs/Web/API/Directory/getContents) können sichtbar gemacht werden, indem die `dom.input.dirpicker` Präferenz auf `true` gesetzt wird.
- Das `HTMLMediaElement.mozSrcObject` wurde in [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) umbenannt ([Firefox-Bug 1175523](https://bugzil.la/1175523)).

#### Service Workers

- `Request.context` wurde entfernt ([Firefox-Bug 1188062](https://bugzil.la/1188062)).
- Die [Push API](/de/docs/Web/API/Push_API) wurde standardmäßig auf Firefox für Desktop aktiviert ([Firefox-Bug 1153499](https://bugzil.la/1153499)), aber nur in den Kanälen Nightly/Dev Edition/Beta. Sie ist im Release-Kanal standardmäßig deaktiviert, bis die Benutzeroberfläche und Debugging-Funktionen vollständig implementiert sind ([Firefox-Bug 1207875](https://bugzil.la/1207875)). Sie können sie dennoch aktivieren, indem Sie die `dom.push.enabled` Präferenz in `about:config` einschalten.
- Die Methode [`PushManager.hasPermission()`](/de/docs/Web/API/PushManager/hasPermission) wurde in der Spezifikation als veraltet erklärt und durch die [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState) Methode ersetzt. Firefox hat seine Implementierung dahingehend aktualisiert ([Firefox-Bug 1183853](https://bugzil.la/1183853)).
- Änderungen in Bezug auf Service Worker für die [Notifications API](/de/docs/Web/API/Notifications_API) wurden implementiert ([Firefox-Bug 1114554](https://bugzil.la/1114554)), sind aber in dieser Version deaktiviert.

#### Web Animations API

Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde erweitert, um Folgendes zu unterstützen:

- Die [`AnimationPlayer.playbackRate`](/de/docs/Web/API/Animation/playbackRate) Eigenschaft ([Firefox-Bug 1127380](https://bugzil.la/1127380)).
- Die [`CSSAnimation`](/de/docs/Web/API/CSSAnimation) und [`CSSTransition`](/de/docs/Web/API/CSSTransition) Schnittstellen ([Firefox-Bug 1178186](https://bugzil.la/1178186)).
- Die [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) Methode ([Firefox-Bug 1150808](https://bugzil.la/1150808)).
- Die [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent) Schnittstelle wurde hinzugefügt. Zudem werden [`cancel`](/de/docs/Web/API/Animation/cancel_event) und [`finish`](/de/docs/Web/API/Animation/finish_event) jetzt auf [`Animation`](/de/docs/Web/API/Animation) ausgelöst ([Firefox-Bug 1178664](https://bugzil.la/1178664)).

#### Web Components

Unsere experimentelle Implementierung von [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) wurde modifiziert:

- Beim Versuch, [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) auf einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) aufzurufen, wird jetzt eine `DataCloneError`-Ausnahme ausgelöst ([Firefox-Bug 1176757](https://bugzil.la/1176757)).
- Beim Aufruf von [`Document.importNode()`](/de/docs/Web/API/Document/importNode) mit einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Argument wird jetzt eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst ([Firefox-Bug 1177914](https://bugzil.la/1177914)).
- Beim Aufruf von [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) mit einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Argument wird jetzt eine `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst ([Firefox-Bug 1177991](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) wurde implementiert ([Firefox-Bug 1048724](https://bugzil.la/1048724)).
- Um einen WebGL2-Kontext zu erhalten, nimmt [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) jetzt `webgl2` anstelle von `experimental-webgl2` ([Firefox-Bug 1187174](https://bugzil.la/1187174)).

#### WebRTC

- Der `options`-Datentyp von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), `RTCOfferOptions`, wurde aktualisiert, um die Spezifikation näher zu erfüllen. Unter anderem basiert er jetzt auf dem `RTCOfferAnswerOptions`-Wörterbuch, das die `voiceActivityDetection`-Option bietet.
- Das `RTCAnswerOptions`-Wörterbuch wurde hinzugefügt. Dies ist der Typ, der für den `options`-Parameter von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) verwendet wird.
- Der `RTCICECandidatePairStats.mozPriority` wurde in [`RTCICECandidatePairStats.priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) umbenannt ([Firefox-Bug 1184426](https://bugzil.la/1184426)).

#### Neue APIs

- Das [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Interface, die Methoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) wurden implementiert. Sie sind in normalen Fensterskripten und in Webworkern verfügbar und erlauben eine effiziente Übertragung von Bildern zwischen Fenster- und Worker-Kontexten ([Firefox-Bug 1044102](https://bugzil.la/1044102)).

#### Verschiedenes

- Das [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Interface ist jetzt in [Webworkern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1188115](https://bugzil.la/1188115)).
- Error-Events, die in [Webworkern](/de/docs/Web/API/Web_Workers_API) gesendet werden, sprudeln nicht mehr ([Firefox-Bug 1188141](https://bugzil.la/1188141)).
- [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) (MSE) wurden für alle Webseiten aktiviert und nicht mehr nur für eine weiße Liste von Seiten ([Firefox-Bug 1185611](https://bugzil.la/1185611)).
- Der nicht standardisierte und veraltete `Window.mozRequestAnimationFrame()` wurde entfernt ([Firefox-Bug 909154](https://bugzil.la/909154)). Verwenden Sie stattdessen die standardmäßige [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Windows implementiert und ist hinter der `media.webspeech.synth.enabled`-Flagge in `about:config` versteckt ([Firefox-Bug 1003457](https://bugzil.la/1003457)). Weitere Informationen finden Sie in der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

- Firefox 41 und frühere Versionen akzeptierten fälschlicherweise undefinierte oder ungültige Pseudo-Header-Felder in HTTP/2-Antworten. Dies wurde behoben, und das einzige Pseudo-Header-Feld, das ab Firefox 42 akzeptiert wird, ist das _:status_ entsprechend der Spezifikation. Antwort-Header, die willkürliche Felder enthalten, gelten als fehlerhaft ([Firefox-Bug 1136727](https://bugzil.la/1136727)).

## Netzwerk

- Die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#upgrade-insecure-requests) wurde implementiert ([Firefox-Bug 1139297](https://bugzil.la/1139297)).

## Sicherheit

- EV-Zertifikate mit einer Gültigkeit von mehr als 39 Monaten werden nun als DV-Zertifikate betrachtet und behandelt ([Firefox-Bug 1145679](https://bugzil.la/1145679)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

#### nsIContentPolicy

- Die Konstante `TYPE_EMBED` wurde `nsIContentPolicy` hinzugefügt, um es Gecko-Interna und Add-on-Code zu ermöglichen, verschiedene Arten von Anfragen besser zu unterscheiden. Zuvor wurde `TYPE_OBJECT` für diese Fälle verwendet ([Firefox-Bug 1148030](https://bugzil.la/1148030)).
- Ebenso wurde die Konstante `TYPE_SUBDOCUMENT` in `TYPE_FRAME` und `TYPE_IFRAME` aufgeteilt ([Firefox-Bug 1148044](https://bugzil.la/1148044)).

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
