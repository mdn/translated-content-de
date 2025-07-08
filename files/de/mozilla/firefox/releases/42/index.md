---
title: Firefox 42 für Entwickler
slug: Mozilla/Firefox/Releases/42
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 42 wurde am 3. November 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Debuggen von Firefox für Android über Wi-Fi](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-over-the-network)
- _Firefox OS Simulator Konfiguration in WebIDE_
- [Voreinstellungen für CSS-Filter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving-filter-presets)

[Alle zwischen Firefox 41 und Firefox 42 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Vertikaler {{cssxref('writing-mode')}} wird jetzt mit rtl-Skripten unterstützt ([Firefox bug 1131451](https://bugzil.la/1131451)).
- Die Werte von {{cssxref("caption-side")}} beziehen sich nun relativ auf die Tabelle und ändern die tatsächliche Bedeutung entsprechend ihrem {{cssxref("writing-mode")}} Wert [Firefox bug 1202993](https://bugzil.la/1202993).
- Nicht-standardisierte Eigenschaften wie `-moz-margin-start` sind jetzt Aliase ihrer standardisierten Gegenstücke ({{cssxref('margin-inline-start')}}, …). Zuvor war es umgekehrt. Dies betrifft den Wert, der von [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) zurückgegeben wird, und die Iteration der Eigenschaften in einer Stilregel, die beide die kanonische Form verwenden ([Firefox bug 1118103](https://bugzil.la/1118103)).
- Die vorfixierte Version von CSS-Gradienten kann deaktiviert werden, indem die `layout.css.prefixes.gradients` Präferenz auf `false` gesetzt wird.
- Mehrere alte Bugs mit {{cssxref("float")}} und dem Verhalten beim Margin-Kollaps wurden behoben ([Firefox bug 478834](https://bugzil.la/478834), [Firefox bug 538194](https://bugzil.la/538194) und [Firefox bug 451791](https://bugzil.la/451791)).

### HTML

- Experimentelle Unterstützung für das `referrer` Attribut der {{HTMLElement("img")}} ([Firefox bug 1166910](https://bugzil.la/1166910)), {{htmlElement("iframe")}} ([Firefox bug 1175736](https://bugzil.la/1175736)), {{HTMLElement("a")}} und {{HTMLElement("area")}} ([Firefox bug 1174913](https://bugzil.la/1174913)) wurde hinzugefügt. Es gibt standardmäßig keinen Effekt, da `network.http.enablePerElementReferrer` standardmäßig auf `false` gesetzt ist.

### JavaScript

- Das {{jsxref("Reflect")}} Objekt wurde implementiert ([Firefox bug 987514](https://bugzil.la/987514)).
- Die Implementierung des {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}} Traps wurde aktualisiert, um der endgültigen ES2015 Spezifikation zu entsprechen ([Firefox bug 1049662](https://bugzil.la/1049662)).
- Wenn {{jsxref("Map")}}, {{jsxref("Set")}} oder {{jsxref("WeakMap")}} ohne {{jsxref('Operators', 'new')}} aufgerufen werden, wird jetzt ein {{jsxref("TypeError")}} ausgelöst ([Firefox bug 1083752](https://bugzil.la/1083752)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Bilder mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) werden nicht mehr als Eigenschaft der [`Window`](/de/docs/Web/API/Window) Schnittstelle aufgeführt: `<img id="login">` ist nicht mehr als `window.login` zugänglich. Dieses Verhalten wurde in Firefox 26 eingeführt und wurde entfernt, um einer späteren Änderung in der Spezifikation zu entsprechen ([Firefox bug 959992](https://bugzil.la/959992)).
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) wurden hinzugefügt ([Firefox bug 69787](https://bugzil.la/69787)).
- Die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle wurde experimentell erweitert, um das Hochladen von Verzeichnissen zu unterstützen ([Firefox bug 1164310](https://bugzil.la/1164310)). Diese vier Mitglieder können durch Setzen der `dom.input.dirpicker` Präferenz auf `true` freigelegt werden:
  - `HTMLInputElement.directory`
  - `HTMLInputElement.isFilesAndDirectoriesSupported`
  - `HTMLInputElement.getFilesAndDirectories()`
  - `HTMLInputElement.chooseDirectory()`

- Die [`Directory`](/de/docs/Web/API/Directory) Schnittstelle wurde experimentell erweitert ([Firefox bug 1177688](https://bugzil.la/1177688)). Die beiden Mitglieder [`Directory.path`](/de/docs/Web/API/Directory/path) und [`Directory.getContents`](/de/docs/Web/API/Directory/getContents) können durch Setzen der `dom.input.dirpicker` Präferenz auf `true` freigelegt werden.
- Das `HTMLMediaElement.mozSrcObject` wurde in [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) umbenannt ([Firefox bug 1175523](https://bugzil.la/1175523)).

#### Service Workers

- `Request.context` wurde entfernt ([Firefox bug 1188062](https://bugzil.la/1188062)).
- Die [Push API](/de/docs/Web/API/Push_API) wurde standardmäßig in Firefox für Desktop aktiviert ([Firefox bug 1153499](https://bugzil.la/1153499)), aber nur auf den Nightly-/Dev Edition/Beta-Kanälen. Sie wird standardmäßig auf dem Release-Kanal deaktiviert, bis Benutzererfahrung und Debugging-Funktionen ordnungsgemäß implementiert sind ([Firefox bug 1207875](https://bugzil.la/1207875).) Sie können sie dennoch aktivieren, indem Sie die `dom.push.enabled` Präferenz in `about:config` aktivieren.
- Die [`PushManager.hasPermission()`](/de/docs/Web/API/PushManager/hasPermission) Methode wurde in der Spezifikation veraltet und durch die [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState) Methode ersetzt. Firefox hat seine Implementierung entsprechend aktualisiert ([Firefox bug 1183853](https://bugzil.la/1183853).)
- Service-worker-bezogene Ergänzungen zur [Notifications API](/de/docs/Web/API/Notifications_API) wurden implementiert ([Firefox bug 1114554](https://bugzil.la/1114554)), sind aber in dieser Version deaktiviert.

#### Web Animations API

Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde erweitert, um Unterstützung für folgende Features zu bieten:

- Die [`AnimationPlayer.playbackRate`](/de/docs/Web/API/Animation/playbackRate) Eigenschaft ([Firefox bug 1127380](https://bugzil.la/1127380)).
- Die Schnittstellen [`CSSAnimation`](/de/docs/Web/API/CSSAnimation) und [`CSSTransition`](/de/docs/Web/API/CSSTransition) ([Firefox bug 1178186](https://bugzil.la/1178186)).
- Die Methode [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) ([Firefox bug 1150808](https://bugzil.la/1150808)).
- Die [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent) Schnittstelle wurde hinzugefügt und die Ereignisse [`cancel`](/de/docs/Web/API/Animation/cancel_event) und [`finish`](/de/docs/Web/API/Animation/finish_event) werden nun auf [`Animation`](/de/docs/Web/API/Animation) ausgelöst ([Firefox bug 1178664](https://bugzil.la/1178664)).

#### Web Components

Unsere experimentelle Implementierung des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) wurde modifiziert:

- Beim Versuch, [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) auf einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) aufzurufen, wird nun eine `DataCloneError` Ausnahme ausgelöst ([Firefox bug 1176757](https://bugzil.la/1176757)).
- Beim Aufrufen von [`Document.importNode()`](/de/docs/Web/API/Document/importNode) mit einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Argument wird nun eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst ([Firefox bug 1177914](https://bugzil.la/1177914)).
- Beim Aufrufen von [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) mit einem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Argument wird nun eine `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst ([Firefox bug 1177991](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) wurde implementiert ([Firefox bug 1048724](https://bugzil.la/1048724)).
- Um einen WebGL2-Kontext zu erhalten, nimmt [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) jetzt `webgl2` anstelle von `experimental-webgl2` ([Firefox bug 1187174](https://bugzil.la/1187174)).

#### WebRTC

- Der Options-Datentyp `RTCOfferOptions` für [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) wurde aktualisiert, um besser mit der Spezifikation übereinzustimmen. Unter anderem basiert er jetzt auf dem `RTCOfferAnswerOptions` Wörterbuch, das die `voiceActivityDetection` Option bietet.
- Das `RTCAnswerOptions` Wörterbuch wurde hinzugefügt. Dies ist der Typ, der für den `options` Parameter zu [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) verwendet wird.
- Das `RTCICECandidatePairStats.mozPriority` wurde umbenannt in [`RTCICECandidatePairStats.priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) ([Firefox bug 1184426](https://bugzil.la/1184426)).

#### Neue APIs

- Das [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Interface, die [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) Methode wurden implementiert. Sie sind in regulären Fensterskripten und in Web-Workern verfügbar und ermöglichen das effiziente Übertragen von Bildern zwischen Fenster- und Worker-Kontexten ([Firefox bug 1044102](https://bugzil.la/1044102)).

#### Verschiedenes

- Das [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) Interface ist jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox bug 1188115](https://bugzil.la/1188115)).
- Fehlerereignisse in [Web-Workern](/de/docs/Web/API/Web_Workers_API) werden nicht mehr weitergeleitet ([Firefox bug 1188141](https://bugzil.la/1188141)).
- Die [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) (MSE) wurden für alle Websites aktiviert und nicht mehr nur für eine Whitelist von Sites ([Firefox bug 1185611](https://bugzil.la/1185611)).
- Die nicht standardisierte und veraltete `Window.mozRequestAnimationFrame()` wurde entfernt ([Firefox bug 909154](https://bugzil.la/909154)). Verwenden Sie stattdessen die standardisierte [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).
- Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Windows implementiert, versteckt hinter der `media.webspeech.synth.enabled` Flag in `about:config` ([Firefox bug 1003457](https://bugzil.la/1003457).) Weitere Informationen finden Sie in der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## HTTP

- Firefox 41 und frühere Versionen akzeptierten fälschlicherweise undefinierte oder ungültige Pseudo-Header-Felder in HTTP/2-Antworten. Dies wurde nun behoben und das einzige Pseudo-Header-Feld, das von Firefox 42 akzeptiert wird, ist das _:status_ gemäß der Spezifikation. Antwortheader mit beliebigen Feldern werden als fehlerhaft angesehen. ([Firefox bug 1136727](https://bugzil.la/1136727))

## Netzwerk

- Die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) wurde implementiert ([Firefox bug 1139297](https://bugzil.la/1139297)).

## Sicherheit

- EV-Zertifikate mit einer Gültigkeit von mehr als 39 Monaten werden nun als DV-Zertifikate betrachtet und behandelt ([Firefox bug 1145679](https://bugzil.la/1145679)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

#### nsIContentPolicy

- Die Konstante `TYPE_EMBED` wurde zu `nsIContentPolicy` hinzugefügt, um den Gecko-Interna und Add-on-Code zu ermöglichen, verschiedene Anforderungstypen besser zu unterscheiden. Zuvor wurde `TYPE_OBJECT` für diese Fälle verwendet ([Firefox bug 1148030](https://bugzil.la/1148030)).
- Ähnlich wurde die Konstante `TYPE_SUBDOCUMENT` in `TYPE_FRAME` und `TYPE_IFRAME` aufgeteilt ([Firefox bug 1148044](https://bugzil.la/1148044)).

### XUL

_Keine Änderungen._

### JavaScript-Code-Module

_Keine Änderungen._

### XPCOM

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
