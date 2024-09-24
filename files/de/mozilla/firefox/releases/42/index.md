---
title: Firefox 42 für Entwickler
slug: Mozilla/Firefox/Releases/42
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 42 wurde am 3. November 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Debuggen von Firefox für Android über Wi-Fi](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-over-the-network)
- _Konfiguration des Firefox OS Simulators in WebIDE_
- [CSS-Filter-Voreinstellungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving-filter-presets)

[Alle behobenen Bugs in DevTools zwischen Firefox 41 und Firefox 42](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Vertikale {{cssxref('writing-mode')}} wird jetzt mit rtl-Skripten unterstützt ([Firefox-Bug 1131451](https://bugzil.la/1131451)).
- Die Werte von {{cssxref("caption-side")}} sind nun relativ zur Tabelle und ändern ihre tatsächliche Bedeutung gemäß ihrem {{cssxref("writing-mode")}}-Wert [Firefox-Bug 1202993](https://bugzil.la/1202993).
- Nicht standardisierte Eigenschaften wie `-moz-margin-start` sind jetzt Aliase ihrer standardisierten Gegenstücke ({{cssxref('margin-inline-start')}}, …). Zuvor war es umgekehrt. Dies wirkt sich auf den Wert aus, der durch {{domxref('CSSStyleDeclaration.cssText')}} zurückgegeben wird, und die Iteration der Eigenschaften in einer Stilregel, die beide die kanonische Form verwenden ([Firefox-Bug 1118103](https://bugzil.la/1118103)).
- Die vorgefertigte Version von CSS-Verläufen kann deaktiviert werden, indem die `layout.css.prefixes.gradients`-Präferenz auf `false` gesetzt wird.
- Mehrere alte Bugs mit {{cssxref("float")}} und dem Verhalten von Margen-Kollaps wurden behoben ([Firefox-Bug 478834](https://bugzil.la/478834), [Firefox-Bug 538194](https://bugzil.la/538194), und [Firefox-Bug 451791](https://bugzil.la/451791)).

### HTML

- Experimentelle Unterstützung für das [`referrer`](/de/docs/Web/HTML/Element/input#referrer)-Attribut von {{HTMLElement("img")}} ([Firefox-Bug 1166910](https://bugzil.la/1166910)), {{htmlElement("iframe")}} ([Firefox-Bug 1175736](https://bugzil.la/1175736)), {{HTMLElement("a")}} und {{HTMLElement("area")}} ([Firefox-Bug 1174913](https://bugzil.la/1174913)) wurde hinzugefügt. Es gibt keinen Effekt standardmäßig, da `network.http.enablePerElementReferrer` standardmäßig `false` ist.

### JavaScript

- Das {{jsxref("Reflect")}}-Objekt wurde implementiert ([Firefox-Bug 987514](https://bugzil.la/987514)).
- Die Implementation der {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}-Falle wurde aktualisiert, um der endgültigen ES2015-Spezifikation zu entsprechen ([Firefox-Bug 1049662](https://bugzil.la/1049662)).
- Das Aufrufen von {{jsxref("Map")}}, {{jsxref("Set")}}, oder {{jsxref("WeakMap")}} ohne {{jsxref('Operators', 'new')}}, wird nun einen {{jsxref("TypeError")}} auslösen ([Firefox-Bug 1083752](https://bugzil.la/1083752)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Bilder mit einer [`id`](/de/docs/Web/HTML/Element/img#id) sind nicht mehr als Eigenschaft des {{domxref("Window")}}-Interfaces aufgelistet: `<img id="login">` ist nicht mehr als `window.login` zugänglich. Dieses Verhalten wurde in Firefox 26 eingeführt und wurde entfernt, um einer späteren Änderung in der Spezifikation zu entsprechen ([Firefox-Bug 959992](https://bugzil.la/959992)).
- {{domxref('MouseEvent.offsetX')}} und {{domxref('MouseEvent.offsetY')}} wurden hinzugefügt ([Firefox-Bug 69787](https://bugzil.la/69787)).
- Das {{domxref("HTMLInputElement")}}-Interface wurde experimentell erweitert, um den Upload von Verzeichnissen zu verarbeiten ([Firefox-Bug 1164310](https://bugzil.la/1164310)). Diese vier Mitglieder können durch Setzen der `dom.input.dirpicker`-Präferenz auf `true` freigelegt werden:

  - {{domxref("HTMLInputElement.directory")}}
  - {{domxref("HTMLInputElement.isFilesAndDirectoriesSupported")}}
  - {{domxref("HTMLInputElement.getFilesAndDirectories()")}}
  - {{domxref("HTMLInputElement.chooseDirectory()")}}

- Das {{domxref("Directory")}}-Interface wurde experimentell erweitert ([Firefox-Bug 1177688](https://bugzil.la/1177688)). Die zwei Mitglieder {{domxref("Directory.path")}} und {{domxref("Directory.getContents")}} können durch Setzen der `dom.input.dirpicker`-Präferenz auf `true` freigelegt werden.
- Das `HTMLMediaElement.mozSrcObject` wurde umbenannt in {{domxref('HTMLMediaElement.srcObject')}} ([Firefox-Bug 1175523](https://bugzil.la/1175523)).

#### Service-Arbeiter

- `Request.context` wurde entfernt ([Firefox-Bug 1188062](https://bugzil.la/1188062)).
- Die [Push-API](/de/docs/Web/API/Push_API) wurde standardmäßig für Firefox für Desktop aktiviert ([Firefox-Bug 1153499](https://bugzil.la/1153499)), jedoch nur auf den Nightly/Dev Edition/Beta-Kanälen. Sie wird in der Release-Version standardmäßig deaktiviert, bis die Benutzeroberfläche und Debug-Funktionen für Verbraucher richtig implementiert sind ([Firefox-Bug 1207875](https://bugzil.la/1207875).) Sie können sie trotzdem aktivieren, indem Sie die `dom.push.enabled`-Einstellung in `about:config` aktivieren.
- Die {{domxref("PushManager.hasPermission()")}}-Methode wurde in der Spezifikation veraltet und durch die {{domxref("PushManager.permissionState()")}}-Methode ersetzt. Firefox hat seine Implementierung entsprechend aktualisiert ([Firefox-Bug 1183853](https://bugzil.la/1183853).)
- Service-worker-bezogene Ergänzungen zur [Notifications API](/de/docs/Web/API/Notifications_API) wurden implementiert ([Firefox-Bug 1114554](https://bugzil.la/1114554)), sind aber in dieser Version deaktiviert.

#### Web-Animationen-API

Unsere experimentelle Implementierung der [Web Animationen-API](/de/docs/Web/API/Web_Animations_API) wurde erweitert, um zu unterstützen:

- Die {{domxref('Animation/playbackRate', 'AnimationPlayer.playbackRate')}}-Eigenschaft ([Firefox-Bug 1127380](https://bugzil.la/1127380)).
- Die {{domxref('CSSAnimation')}} und {{domxref('CSSTransition')}}-Schnittstellen ([Firefox-Bug 1178186](https://bugzil.la/1178186)).
- Die {{domxref('Animation.reverse()')}}-Methode ([Firefox-Bug 1150808](https://bugzil.la/1150808)).
- Das {{domxref('AnimationPlaybackEvent')}}-Interface wurde hinzugefügt und {{domxref("Animation/cancel_event", "cancel")}} und {{domxref("Animation/finish_event", "finish")}} werden nun auf {{domxref('Animation')}} ausgelöst ([Firefox-Bug 1178664](https://bugzil.la/1178664)).

#### Webkomponenten

Unsere experimentelle Implementierung des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) wurde geändert:

- Beim Versuch, {{domxref('Node.cloneNode()')}} auf einem {{domxref('ShadowRoot')}} auszuführen, wird eine `DataCloneError`-Ausnahme ausgelöst ([Firefox-Bug 1176757](https://bugzil.la/1176757)).
- Beim Aufrufen von {{domxref('Document.importNode()')}} mit einem {{domxref('ShadowRoot')}} als Argument wird jetzt eine `NotSupportedError` {{domxref("DOMException")}} ausgelöst ([Firefox-Bug 1177914](https://bugzil.la/1177914)).
- Beim Aufrufen von {{domxref('Document.adoptNode()')}} mit einem {{domxref('ShadowRoot')}}-Argument wird jetzt eine `HierarchyRequestError` {{domxref("DOMException")}} ausgelöst ([Firefox-Bug 1177991](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 {{domxref('WebGLTransformFeedback')}} wurde implementiert ([Firefox-Bug 1048724](https://bugzil.la/1048724)).
- Um einen WebGL2-Kontext zu erhalten, nimmt {{domxref('HTMLCanvasElement.getContext()')}} jetzt `webgl2` statt `experimental-webgl2` ([Firefox-Bug 1187174](https://bugzil.la/1187174)).

#### WebRTC

- Der Optionen-Datentyp von {{domxref("RTCPeerConnection.createOffer()")}}, `RTCOfferOptions`, wurde aktualisiert, um enger an die Spezifikation angeglichen zu werden. Unter anderem basiert er jetzt auf dem `RTCOfferAnswerOptions`-Wörterbuch, das die Option `voiceActivityDetection` bietet.
- Das `RTCAnswerOptions`-Wörterbuch wurde hinzugefügt. Dies ist der Typ, der für den `options`-Parameter von {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}} verwendet wird.
- `RTCICECandidatePairStats.mozPriority` wurde in {{domxref('RTCICECandidatePairStats.priority')}} umbenannt ([Firefox-Bug 1184426](https://bugzil.la/1184426)).

#### Neue APIs

- Das {{domxref("ImageBitmap")}}-Interface und die {{domxref("createImageBitmap()")}}-Methode wurden implementiert. Sie sind in regulären Fensterskripten und in Web-Workern verfügbar und ermöglichen das effiziente Posten von Bildern zwischen Fenster- und Worker-Kontexten ([Firefox-Bug 1044102](https://bugzil.la/1044102)).

#### Verschiedenes

- Das {{domxref('IDBCursorWithValue')}}-Interface ist jetzt in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1188115](https://bugzil.la/1188115)).
- Fehlerereignisse, die in [Web-Workern](/de/docs/Web/API/Web_Workers_API) gesendet werden, blubbern nicht mehr ([Firefox-Bug 1188141](https://bugzil.la/1188141)).
- [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) (MSE) wurden für alle Websites aktiviert und nicht mehr für eine Liste weißer Seiten ([Firefox-Bug 1185611](https://bugzil.la/1185611)).
- Der nicht standardisierte und veraltete `Window.mozRequestAnimationFrame()` wurde entfernt ([Firefox-Bug 909154](https://bugzil.la/909154)). Verwenden Sie stattdessen den Standard {{domxref('Window.requestAnimationFrame()')}}.
- Sprachausgabe (Text-zu-Sprache) wurde in Firefox Desktop für Windows implementiert, verborgen hinter der `media.webspeech.synth.enabled`-Einstellung in `about:config` ([Firefox-Bug 1003457](https://bugzil.la/1003457).) Weitere Informationen finden Sie in der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## HTTP

- Firefox 41 und frühere Versionen akzeptierten fälschlicherweise undefinierte oder ungültige Pseudo-Header-Felder in HTTP/2-Antworten. Dies ist nun behoben und das einzige Pseudo-Header-Feld, das von Firefox 42 akzeptiert wird, ist das _:status_ gemäß der Spezifikation. Antwortheader, die beliebige Felder enthalten, gelten als fehlerhaft. ([Firefox-Bug 1136727](https://bugzil.la/1136727))

## Netzwerk

- Die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#upgrade-insecure-requests) wurde implementiert ([Firefox-Bug 1139297](https://bugzil.la/1139297)).

## Sicherheit

- EV-Zertifikate mit einer Gültigkeit von mehr als 39 Monaten werden jetzt als DV-Zertifikate betrachtet und behandelt ([Firefox-Bug 1145679](https://bugzil.la/1145679)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

#### nsIContentPolicy

- Die Konstante `TYPE_EMBED` wurde zu `nsIContentPolicy` hinzugefügt, um es den Gecko-Interna und Add-on-Code zu ermöglichen, verschiedene Arten von Anfragen besser zu differenzieren. Zuvor wurde `TYPE_OBJECT` für diese Fälle verwendet ([Firefox-Bug 1148030](https://bugzil.la/1148030)).
- Ebenso wurde die Konstante `TYPE_SUBDOCUMENT` in `TYPE_FRAME` und `TYPE_IFRAME` aufgeteilt ([Firefox-Bug 1148044](https://bugzil.la/1148044)).

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
