---
title: Firefox 44 für Entwickler
slug: Mozilla/Firefox/Releases/44
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 44 wurde am 26. Januar 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Speicherwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Verbesserungen des Animationsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Neue Wasserfallmarker: DomContentLoaded, load, worker messages](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[Alle DevTools-Bugs, die zwischen Firefox 43 und Firefox 44 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- {{Glossary("Prefetch", "`<link rel=\"prefetch\">`")}} beachtet jetzt das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) ([Firefox bug 1214819](https://bugzil.la/1214819)).

### CSS

- `position: fixed;` erzeugt nun immer einen neuen Stapelkontext ([Firefox bug 1179288](https://bugzil.la/1179288)).
- Die Unterstützung von {{cssxref('@font-face/unicode-range', 'unicode-range')}} wurde standardmäßig aktiviert ([Firefox bug 1119062](https://bugzil.la/1119062)).
- Unsere experimentelle Implementierung der CSS-Schreibmodi wurde aktualisiert, um der neuesten Spezifikation zu entsprechen:
  - Der Wert `sideways` der {{cssxref("text-orientation")}}-Eigenschaft wurde implementiert und `sideways-right` wurde als Alias davon gesetzt ([Firefox bug 1193488](https://bugzil.la/1193488)).
  - Die Werte `sideways-rl` und `sideways-lr` der {{cssxref("writing-mode")}}-Eigenschaft ([Firefox bug 1193488](https://bugzil.la/1193488) und [Firefox bug 1193519](https://bugzil.la/1193519)).

- Die nicht standardisierten Eigenschaften `-moz-math-display` und `-moz-window-shadow` sind nicht mehr im Webinhalt verfügbar ([Firefox bug 1207002](https://bugzil.la/1207002), [Firefox bug 1211040](https://bugzil.la/1211040) und [Firefox bug 1212607](https://bugzil.la/1212607)).
- Die {{cssxref("font-style")}}-Eigenschaft unterscheidet jetzt zwischen `oblique` und `italic`, wenn beide Varianten verfügbar sind ([Firefox bug 543715](https://bugzil.la/543715)).
- Obwohl nicht unterstützt, wurden die Eigenschaften {{cssxref("@page/marks")}}, {{cssxref("orphans")}}, {{cssxref("page")}}, {{cssxref("size")}} und {{cssxref("widows")}} analysiert und {{cssxref("@supports")}} hat sie fälschlicherweise als unterstützt gemeldet; dies wurde behoben und die Eigenschaften werden nicht mehr analysiert oder als unterstützt markiert ([Firefox bug 1215702](https://bugzil.la/1215702)).
- Der interne Wert `-moz-mac-unified-toolbar` wurde aus den möglichen Werten für die {{cssxref("appearance")}}-Eigenschaft entfernt ([Firefox bug 1206468](https://bugzil.la/1206468)).
- Mehrere `-webkit` präfixierte Eigenschaften und Werte wurden für die Web-Kompatibilität hinzugefügt, hinter der Voreinstellung `layout.css.prefixes.webkit`, die standardmäßig auf `false` gesetzt ist ([Firefox bug 837211](https://bugzil.la/837211)):
  - `-webkit-animation`
  - `-webkit-animation-delay`
  - `-webkit-animation-direction`
  - `-webkit-animation-duration`
  - `-webkit-animation-fill-mode`
  - `-webkit-animation-iteration-count`
  - `-webkit-animation-name`
  - `-webkit-animation-play-state`
  - `-webkit-animation-timing-function`
  - `-webkit-text-size-adjust`
  - `-webkit-transform`
  - `-webkit-transform-origin`
  - `-webkit-transform-style`
  - `-webkit-transition`
  - `-webkit-transition-delay`
  - `-webkit-transition-duration`
  - `-webkit-transition-property`
  - `-webkit-transition-timing-function`
  - `-webkit-border-radius`
  - `-webkit-border-top-left-radius`
  - `-webkit-border-top-right-radius`
  - `-webkit-border-bottom-left-radius`
  - `-webkit-border-bottom-right-radius`
  - `-webkit-appearance`
  - `-webkit-background-clip`
  - `-webkit-background-origin`
  - `-webkit-background-size`
  - `-webkit-border-image`
  - `-webkit-box-shadow`
  - `-webkit-box-sizing`
  - `-webkit-user-select`
  - `-webkit-linear-gradient()` [Firefox bug 1210575](https://bugzil.la/1210575)
  - `-webkit-radial-gradient()"` [Firefox bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-linear-gradient()` [Firefox bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-radial-gradient()` [Firefox bug 1210575](https://bugzil.la/1210575)

### JavaScript

#### Neue APIs

- {{jsxref("Symbol.toPrimitive")}}, [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive), und [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) wurden implementiert ([Firefox bug 1054756](https://bugzil.la/1054756)).

#### Änderungen

- Die Bindungen [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) auf globaler Ebene wurden angepasst, um den ES2015-Semantiken zu entsprechen. Siehe [Firefox bug 589199](https://bugzil.la/589199) und den Blogbeitrag ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/). Zusätzlich ist `let` jetzt im standardmäßigen Web-JavaScript (strict und non-strict) verfügbar und erfordert keine Versionsopt-in mehr ([Firefox bug 932517](https://bugzil.la/932517)).
- Wenn Konstruktoren von [typierten Arrays'](/de/docs/Web/JavaScript/Guide/Typed_arrays) (wie {{jsxref("Int8Array", "Int8Array")}}) und {{jsxref("ArrayBuffer", "ArrayBuffer")}}) als Funktion ohne den {{jsxref("Operators/new", "new")}}-Operator aufgerufen werden, wird nun gemäß der ES2015-Spezifikation ein {{jsxref("TypeError")}} ausgelöst ([Firefox bug 980945](https://bugzil.la/980945), [Firefox bug 1214936](https://bugzil.la/1214936)).
- Das {{jsxref("RegExp")}} sticky-Flag folgt jetzt dem ES2015-Standard für [verankerte sticky-regular expressions](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag) ([Firefox bug 773687](https://bugzil.la/773687)).
- Die JavaScript-Shell (SpiderMonkeys REPL) verwendet jetzt standardmäßig die web-kompatible JS-Version (und nicht mehr JS1.7+) ([Firefox bug 1192329](https://bugzil.la/1192329)).

#### Entfernungen

- Die Unterstützung für die nicht-standardisierten [`let` blocks](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox bug 1167029](https://bugzil.la/1167029)).
- Die nicht-standardisierte und veraltete Eigenschaft `Object.prototype.__noSuchMethod__` wurde entfernt ([Firefox bug 683218](https://bugzil.la/683218)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Für die Kompatibilität mit bestimmten bestehenden Websites wurde die Eigenschaft `Document.charset` als Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) implementiert ([Firefox bug 647621](https://bugzil.la/647621)).
- Die Unterstützung für die Methode [`window.sidebar.addSearchEngine()`](/de/docs/Web/XML/Guides/OpenSearch#installing_sherlock_plugins), die Webseiten ermöglichte, die Installation eines Sherlock-Plugins zu initiieren, wurde entfernt und es wird jetzt nur eine Warnung in der Web-Konsole ausgegeben ([Firefox bug 862148](https://bugzil.la/862148)).
- Um unerwünschte Pop-ups zu verhindern, werden Eingabeaufforderungen, die in [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignissen von nicht interagierten Seiten angefordert werden, nicht mehr angezeigt ([Firefox bug 636905](https://bugzil.la/636905)).
- Die veraltete Methode [`MessageEvent.initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) wurde aus Gründen der Rückwärtskompatibilität erneut implementiert ([Firefox bug 949376](https://bugzil.la/949376)).
- Die veraltete Eigenschaft `DocumentType.internalSubset` wurde entfernt ([Firefox bug 801545](https://bugzil.la/801545)).
- Zur Kompatibilität mit bestehenden Websites wurden die [`Window.orientation`](/de/docs/Web/API/Window/orientation) Eigenschaft und das [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) Ereignis implementiert ([Firefox bug 920734](https://bugzil.la/920734)).
- Ein {{HTMLElement("iframe")}} mit expliziter Anfrage nach Vollbild sollte nicht implizit das Vollbild verlassen ([Firefox bug 1187801](https://bugzil.la/1187801)).
- Die Ereignisse [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event), [`pointerover`](/de/docs/Web/API/Element/pointerover_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event), [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) werden nun auch für deaktivierte Formularelemente ausgelöst ([Firefox bug 218093](https://bugzil.la/218093)).
- Die Methode [`Element.webkitMatchesSelector()`](/de/docs/Web/API/Element/matches) wurde hinzugefügt ([Firefox bug 1216193](https://bugzil.la/1216193)), um die Interoperabilität zu verbessern.
- Um die Spezifikation zu erfüllen, konvertiert die Methode [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute) nun die Eingabe in Kleinbuchstaben ([Firefox bug 1176313](https://bugzil.la/1176313)).
- Das nicht-standardisierte `dialog`-Feature für [`Window.open()`](/de/docs/Web/API/Window/open) ist im Webinhalt nicht mehr verfügbar. Es ist weiterhin für Erweiterungen und andere Codes mit Chrome-Berechtigungen verfügbar ([Firefox bug 1095236](https://bugzil.la/1095236)).

#### Canvas

- Eine neue experimentelle [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API, die es ermöglicht, dass Rendering-Kontexte (wie [WebGL](/de/docs/Web/API/WebGL_API)) in [Web Workers](/de/docs/Web/API/Web_Workers_API) ausgeführt werden, wurde implementiert. Um diese experimentelle API zu nutzen, setzen Sie in about:config `gfx.offscreencanvas.enabled` auf `true` ([Firefox bug 709490](https://bugzil.la/709490)). Diese API umfasst:
  - Das [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interface,
  - [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen), und
  - [`WebGLRenderingContext.commit()`](/de/docs/Web/API/WebGLRenderingContext/commit).
  - Mehrere WebGL-Interfaces sind jetzt auch verfügbar, wenn diese API im Worker-Kontext aktiviert ist.

#### WebGL

- Uniform Buffer Objects wurden implementiert ([Firefox bug 1048747](https://bugzil.la/1048747)).

#### IndexedDB

- Die [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll) und [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys), sowie ihre Gegenstücke auf [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) sind jetzt standardmäßig verfügbar ([Firefox bug 1196841](https://bugzil.la/1196841)).

#### Service Workers

- Die `ServiceWorkerMessageEvent` und [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) Interfaces wurden implementiert ([Firefox bug 1143717](https://bugzil.la/1143717) und [Firefox bug 1207068](https://bugzil.la/1207068)).
- [`Headers`](/de/docs/Web/API/Headers) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`Headers.entries()`](/de/docs/Web/API/Headers/entries), [`Headers.keys()`](/de/docs/Web/API/Headers/keys) und [`Headers.values()`](/de/docs/Web/API/Headers/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox bug 1108181](https://bugzil.la/1108181)).
- Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API wurde in Service Workern deaktiviert ([Firefox bug 931243](https://bugzil.la/931243)).
- Das Interface [`FetchEvent`](/de/docs/Web/API/FetchEvent) erweitert jetzt [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent), was ihm Zugriff auf die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) gibt ([Firefox bug 1214772](https://bugzil.la/1214772)).
- Nach einer kürzlichen Änderung in der Spezifikation wurde `FetchEvent.client` entfernt ([Firefox bug 1218135](https://bugzil.la/1218135)).
- Um der neuesten Spezifikation zu entsprechen, wurde `ServiceWorkerContainer.onreloadpage` entfernt ([Firefox bug 1218139](https://bugzil.la/1218139)).
- Die Ereignishandler `ServiceWorkerGlobalScope.onbeforeevicted` und `ServiceWorkerGlobalScope.onevicted` wurden entfernt, da sie nicht den Spezifikationen entsprachen. Sie werden in Zukunft wieder eingeführt, aber ihre Entfernung ermöglicht es, Feature-Detection wie erwartet funktionieren zu lassen ([Firefox bug 1218142](https://bugzil.la/1218142)).
- Im Konstruktor [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent) wird, wenn das `isReload`-Element im Optionsdictionary nicht vorhanden ist, nun standardmäßig auf `false` gesetzt ([Firefox bug 1216401](https://bugzil.la/1216401)).
- Die [`Client.frameType`](/de/docs/Web/API/Client/frameType)-Eigenschaft ist jetzt im richtigen Interface implementiert; zuvor war sie auf [`WindowClient`](/de/docs/Web/API/WindowClient) ([Firefox bug 1218146](https://bugzil.la/1218146)).
- Wenn AppCache verwendet wird, um Offline-Unterstützung für eine Seite bereitzustellen, wird im Konsolenprotokoll nun eine Warnmeldung angezeigt, die Entwickler darauf hinweist, stattdessen [Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) zu verwenden ([Firefox bug 1204581](https://bugzil.la/1204581)).
- Service Workers wurden standardmäßig in Gecko aktiviert.

#### WebRTC

- WebRTC-Interfaces wurden _unprefixed_ ([Firefox bug 1155923](https://bugzil.la/1155923)). Insbesondere:
  - `mozRTCPeerConnection` ist jetzt [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
  - `mozRTCIceCandidate` ist jetzt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).
  - `mozRTCSessionDescription` ist jetzt [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription).

- Die [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)-Eigenschaft sowie das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis und dessen Ereignishandler wurden implementiert ([Firefox bug 1178091](https://bugzil.la/1178091)).
- Das Attribut [`RTCPeerConnection.canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) wurde hinzugefügt, die nicht standardisierte Methode `RTCPeerConnection.updateIce()` entfernt ([Firefox bug 1209744](https://bugzil.la/1209744)).
- Das [`MediaStream`](/de/docs/Web/API/MediaStream)-Interface unterstützt jetzt die Methoden [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack) und [`MediaStream.removeTrack()`](/de/docs/Web/API/MediaStream/removeTrack) ([Firefox bug 1103188](https://bugzil.la/1103188)).
- Der Konstruktor [`MediaStream()`](/de/docs/Web/API/MediaStream/MediaStream) wurde implementiert ([Firefox bug 1070216](https://bugzil.la/1070216)).
- Die Unterstützung für die nicht standardisierte Constraint-Stil-Optionsliste für `RTCOfferOptions` wurde entfernt.

#### Neue APIs

- Eine experimentelle Implementierung der Canvas API in Workern wurde hinzugefügt: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) und [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) sind hinter der Präferenz `gfx.offscreencanvas.enabled` verfügbar, derzeit standardmäßig deaktiviert ([Firefox bug 709490](https://bugzil.la/709490)).
- Die Text-zu-Sprache-API, Teil der Web Speech API, hat jetzt ein OS X-Backend. Aber dies ist standardmäßig deaktiviert ([Firefox bug 1003452](https://bugzil.la/1003452)).

#### Verschiedenes

- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries), [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys) und [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox bug 1085284](https://bugzil.la/1085284)).
- [`FormData`](/de/docs/Web/API/FormData)-Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`FormData.entries()`](/de/docs/Web/API/FormData/entries), [`FormData.keys`](/de/docs/Web/API/FormData/keys) und [`FormData.values()`](/de/docs/Web/API/FormData/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox bug 1127703](https://bugzil.la/1127703)).
- Wenn [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) mit einem HTML-Dokument verwendet wird, wird jetzt `text/html` anstelle von `application/xml` verwendet ([Firefox bug 918771](https://bugzil.la/918771)).
- Die Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Mac und Linux implementiert, hinter der `media.webspeech.synth.enabled`-Flag in `about:config` verborgen ([Firefox bug 1003452](https://bugzil.la/1003452), [Firefox bug 1003464](https://bugzil.la/1003464)). Siehe [Web Speech API](/de/docs/Web/API/Web_Speech_API) für weitere Informationen.
- Elemente innerhalb eines {{HTMLElement("frame")}} oder eines {{HTMLElement('object')}} können nicht mehr im Vollbildmodus gesetzt werden ([Firefox bug 1212299](https://bugzil.la/1212299)).
- Die Sanitisierung von WOFF-Schriften ist etwas strenger geworden, was dazu führt, dass mehr fehlerhafte Schriften abgelehnt werden. Diese Sanitisierung wird in Firefox 46 wieder etwas lockerer ([Firefox bug 1193050](https://bugzil.la/1193050) und [Firefox bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## HTTP

- Die Unterstützung für den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus wurde hinzugefügt und sowohl die [`Accept-Encoding`](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-encoding_header) als auch die [`Content-Encoding`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) Header unterstützen jetzt den `br` Wert ([Firefox bug 366559](https://bugzil.la/366559) und [Firefox bug 1211916](https://bugzil.la/1211916)).
- Falsche Unterstützung von HTTP/2-Headern, die Zeilenumbrüche (`'/n'`) enthalten, wurde entfernt, da die Spezifikation dies nicht erlaubt, im Gegensatz zu HTTP/1 ([Firefox bug 1197847](https://bugzil.la/1197847)).

## Netzwerk

_Keine Änderungen._

## Sicherheit

- RC4 ist jetzt auch in den Beta- und Release-Versionen des Browsers standardmäßig deaktiviert ([Firefox bug 1201025](https://bugzil.la/1201025)) und die Whitelist ist standardmäßig leer ([Firefox bug 1215796](https://bugzil.la/1215796)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderungen._

### XUL

_Keine Änderungen._

### JavaScript-Code-Module

- `LIKE`-Unterstützung wurde zu Sqlite.jsm hinzugefügt ([Firefox bug 1188760](https://bugzil.la/1188760)).
- Das [Snackbars.jsm](/de/docs/Mozilla/Add-ons/Firefox_for_Android/API/Snackbars.jsm)-Modul wurde zu [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) hinzugefügt ([Firefox bug 1215026](https://bugzil.la/1215026)).

### XPCOM

- Das Interface `nsIDOMWindow` ist jetzt leer. Seine Inhalte wurden entweder nicht mehr verwendet, sind woandershin verschoben worden oder wurden nur von C++ verwendet. Die von C++ Code verfügbaren Elemente befinden sich jetzt im [nsPIDOMWindow](https://searchfox.org/mozilla-central/source/dom/base/nsPIDOMWindow.h)-Interface ([Firefox bug 1216401](https://bugzil.la/1216401)).

### Sonstiges

- Aufgrund von breaking changes in Firefox 44 ([bug 1202902](https://bugzil.la/1202902)) funktionieren Add-ons, die mit [cfx](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx) gepackt wurden, nicht mehr. Um Ihr Add-on wieder kompatibel zu machen, verwenden Sie bitte [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm). Siehe den [_cfx_ zu _jpm_ Migrationsleitfaden](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx_to_jpm).

## Ältere Versionen

{{Firefox_for_developers}}
