---
title: Firefox 44 für Entwickler
short-title: Firefox 44
slug: Mozilla/Firefox/Releases/44
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/).
Firefox 44 wurde am 26. Januar 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-On-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

Highlights:

- [Werkzeug für Speicheranalyse](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Verbesserungen des Animationsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Neue Wasserfall-Markierungen: DomContentLoaded, load, worker messages](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[Alle zwischen Firefox 43 und Firefox 44 behobenen Entwickler-Tool-Bugs.](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- `<link rel="prefetch">` folgt jetzt dem `crossorigin`-Attribut ([Firefox Bug 1214819](https://bugzil.la/1214819)).

### CSS

- `position: fixed;` erzeugt jetzt immer einen neuen Stacking-Kontext ([Firefox Bug 1179288](https://bugzil.la/1179288)).
- Die Unterstützung von {{cssxref('@font-face/unicode-range', 'unicode-range')}} ist standardmäßig aktiviert ([Firefox Bug 1119062](https://bugzil.la/1119062)).
- Unsere experimentelle Implementierung der CSS Writing Modes wurde aktualisiert, um die neuesten Spezifikationen widerzuspiegeln:
  - Der Wert `sideways` der {{cssxref("text-orientation")}}-Eigenschaft wurde implementiert und `sideways-right` wurde ein Alias dafür ([Firefox Bug 1193488](https://bugzil.la/1193488)).
  - Die Werte `sideways-rl` und `sideways-lr` der {{cssxref("writing-mode")}}-Eigenschaft ([Firefox Bug 1193488](https://bugzil.la/1193488) und [Firefox Bug 1193519](https://bugzil.la/1193519)).

- Die nicht standardisierten Eigenschaften `-moz-math-display` und `-moz-window-shadow` sind nicht mehr aus Web-Inhalten erreichbar ([Firefox Bug 1207002](https://bugzil.la/1207002), [Firefox Bug 1211040](https://bugzil.la/1211040) und [Firefox Bug 1212607](https://bugzil.la/1212607)).
- Die {{cssxref("font-style")}}-Eigenschaft unterscheidet jetzt zwischen `oblique` und `italic`, wenn beide Varianten verfügbar sind ([Firefox Bug 543715](https://bugzil.la/543715)).
- Obwohl nicht unterstützt, wurden die Eigenschaften {{cssxref("@page/marks", "marks")}}, {{cssxref("orphans")}}, {{cssxref("page")}}, {{cssxref("@page/size", "size")}} und {{cssxref("widows")}} analysiert und {{cssxref("@supports")}} hat sie fälschlicherweise als unterstützt angezeigt; dies wurde behoben und die Eigenschaften werden nicht mehr analysiert oder als unterstützt markiert ([Firefox Bug 1215702](https://bugzil.la/1215702)).
- Der interne Wert `-moz-mac-unified-toolbar` wurde aus den möglichen Werten für die {{cssxref("appearance")}}-Eigenschaft entfernt ([Firefox Bug 1206468](https://bugzil.la/1206468)).
- Mehrere mit `-webkit`-Präfixen versehene Eigenschaften und Werte wurden für die Web-Kompatibilität hinzugefügt, hinter der Voreinstellung `layout.css.prefixes.webkit`, die standardmäßig auf `false` steht ([Firefox Bug 837211](https://bugzil.la/837211)):
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
  - `-webkit-linear-gradient()` [Firefox Bug 1210575](https://bugzil.la/1210575)
  - `-webkit-radial-gradient"()` [Firefox Bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-linear-gradient()` [Firefox Bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-radial-gradient()` [Firefox Bug 1210575](https://bugzil.la/1210575)

### JavaScript

#### Neue APIs

- {{jsxref("Symbol.toPrimitive")}}, [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) und [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) wurden implementiert ([Firefox Bug 1054756](https://bugzil.la/1054756)).

#### Änderungen

- Die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Bindungen auf globaler Ebene entsprechen jetzt den ES2015-Semantiken. Siehe [Firefox Bug 589199](https://bugzil.la/589199) und den Blogbeitrag ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/). Zusätzlich ist `let` jetzt für Standard-Web-JavaScript verfügbar (streng und nicht-streng) und erfordert keine Versionseinstellung mehr ([Firefox Bug 932517](https://bugzil.la/932517)).
- Wenn Konstruktoren von [getypteten Arrays'](/de/docs/Web/JavaScript/Guide/Typed_arrays) (wie {{jsxref("Int8Array", "Int8Array")}}) und {{jsxref("ArrayBuffer", "ArrayBuffer")}}) als Funktion ohne den Operator {{jsxref("Operators/new", "new")}} aufgerufen werden, wird jetzt ein {{jsxref("TypeError")}} gemäß der ES2015-Spezifikation ausgelöst ([Firefox Bug 980945](https://bugzil.la/980945), [Firefox Bug 1214936](https://bugzil.la/1214936)).
- Das {{jsxref("RegExp")}}-Flag sticky folgt jetzt dem ES2015-Standard für [verankerte sticky Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag) ([Firefox Bug 773687](https://bugzil.la/773687)).
- Die JavaScript-Shell (REPL von SpiderMonkey) verwendet jetzt standardmäßig die, mit dem Web kompatible JS-Version (und nicht mehr JS1.7+) ([Firefox Bug 1192329](https://bugzil.la/1192329)).

#### Entfernungen

- Die Unterstützung für die nicht standardisierten [`let` Blöcke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde eingestellt ([Firefox Bug 1167029](https://bugzil.la/1167029)).
- Die nicht standardisierte und veraltete Eigenschaft `Object.prototype.__noSuchMethod__` wurde entfernt ([Firefox Bug 683218](https://bugzil.la/683218)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Für die Kompatibilität mit bestimmten bestehenden Websites wurde die Eigenschaft `Document.charset` als Alias für [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) implementiert ([Firefox Bug 647621](https://bugzil.la/647621)).
- Die Unterstützung der Methode `window.sidebar.addSearchEngine()`, die es Websites ermöglichte, die Installation eines Sherlock-Plugins zu initiieren, wurde entfernt und stattdessen wird jetzt lediglich eine Warnung in der Web-Konsole angezeigt ([Firefox Bug 862148](https://bugzil.la/862148)).
- Zur Vermeidung unerwünschter Pop-Ups werden Aufforderungen in [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignissen von Seiten, mit denen nicht interagiert wurde, nicht mehr angezeigt ([Firefox Bug 636905](https://bugzil.la/636905)).
- Die veraltete Methode [`MessageEvent.initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) wurde für die Rückwärtskompatibilität wieder implementiert ([Firefox Bug 949376](https://bugzil.la/949376)).
- Die veraltete Eigenschaft `DocumentType.internalSubset` wurde entfernt ([Firefox Bug 801545](https://bugzil.la/801545)).
- Zur Kompatibilität mit bestehenden Websites wurden die [`Window.orientation`](/de/docs/Web/API/Window/orientation) Eigenschaft und das [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) Ereignis implementiert ([Firefox Bug 920734](https://bugzil.la/920734)).
- Ein {{HTMLElement("iframe")}} mit einer expliziten Fullscreen-Anforderung sollte den Fullscreen-Modus nicht implizit verlassen ([Firefox Bug 1187801](https://bugzil.la/1187801)).
- Die Ereignisse [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event), [`pointerover`](/de/docs/Web/API/Element/pointerover_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event), [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) werden jetzt auch für deaktivierte Formularelemente ausgelöst ([Firefox Bug 218093](https://bugzil.la/218093)).
- Die Methode [`Element.webkitMatchesSelector()`](/de/docs/Web/API/Element/matches) wurde hinzugefügt ([Firefox Bug 1216193](https://bugzil.la/1216193)) um die Interoperabilität zu verbessern.
- Um die Spezifikationen zu erfüllen, konvertiert die Methode [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute) jetzt die Eingabe in Kleinbuchstaben ([Firefox Bug 1176313](https://bugzil.la/1176313)).
- Das nicht standardmäßige `dialog`-Merkmal für [`Window.open()`](/de/docs/Web/API/Window/open) ist für Web-Inhalte nicht mehr verfügbar. Es ist jedoch weiterhin für Erweiterungen und anderen Code mit Chrome-Berechtigungen verfügbar ([Firefox Bug 1095236](https://bugzil.la/1095236)).

#### Canvas

- Eine neue experimentelle [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API, die es Rendering-Kontexten (wie [WebGL](/de/docs/Web/API/WebGL_API)) ermöglicht, in [Web Workern](/de/docs/Web/API/Web_Workers_API) zu laufen, wurde implementiert. Um diese experimentelle API zu nutzen, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox Bug 709490](https://bugzil.la/709490)). Diese API umfasst:
  - Die [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle,
  - [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen), und
  - `WebGLRenderingContext.commit()`.
  - Mehrere WebGL-Schnittstellen sind jetzt auch im Worker-Kontext verfügbar, wenn diese API aktiviert ist.

#### WebGL

- Uniform Buffer Objects wurden implementiert ([Firefox Bug 1048747](https://bugzil.la/1048747)).

#### IndexedDB

- Die Methoden [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll) und [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) sowie ihre Gegenstücke auf [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) sind jetzt standardmäßig verfügbar ([Firefox Bug 1196841](https://bugzil.la/1196841)).

#### Service Workers

- Die Schnittstellen `ServiceWorkerMessageEvent` und [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) wurden implementiert ([Firefox Bug 1143717](https://bugzil.la/1143717) und [Firefox Bug 1207068](https://bugzil.la/1207068)).
- [`Headers`](/de/docs/Web/API/Headers)-Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`Headers.entries()`](/de/docs/Web/API/Headers/entries), [`Headers.keys()`](/de/docs/Web/API/Headers/keys), und [`Headers.values()`](/de/docs/Web/API/Headers/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator zurück ([Firefox Bug 1108181](https://bugzil.la/1108181)).
- Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API wurde auf Service Workern deaktiviert ([Firefox Bug 931243](https://bugzil.la/931243)).
- Die Schnittstelle [`FetchEvent`](/de/docs/Web/API/FetchEvent) erweitert jetzt [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent), was ihr Zugriff auf die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) ermöglicht ([Firefox Bug 1214772](https://bugzil.la/1214772)).
- Nach einer kürzlichen Änderung der Spezifikation wurde `FetchEvent.client` entfernt ([Firefox Bug 1218135](https://bugzil.la/1218135)).
- Um die neueste Spezifikation zu entsprechen, wurde `ServiceWorkerContainer.onreloadpage` entfernt ([Firefox Bug 1218139](https://bugzil.la/1218139)).
- Die Event-Handler `ServiceWorkerGlobalScope.onbeforeevicted` und `ServiceWorkerGlobalScope.onevicted` wurden entfernt, da sie nicht der Spezifikation entsprachen. Sie werden in Zukunft wieder eingeführt, aber ihre Entfernung ermöglicht, dass Feature Detection wie erwartet funktioniert ([Firefox Bug 1218142](https://bugzil.la/1218142)).
- Im Konstruktor [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent), wenn das Mitglied `isReload` nicht im Optionswörterbuch vorhanden ist, wird es jetzt standardmäßig auf `false` gesetzt ([Firefox Bug 1216401](https://bugzil.la/1216401)).
- Die Eigenschaft [`Client.frameType`](/de/docs/Web/API/Client/frameType) ist jetzt auf der richtigen Schnittstelle implementiert; sie war vorher auf [`WindowClient`](/de/docs/Web/API/WindowClient) ([Firefox Bug 1218146](https://bugzil.la/1218146)).
- Wenn AppCache zur Bereitstellung von Offlineunterstützung für eine Seite verwendet wird, wird jetzt eine Warnmeldung in der Konsole angezeigt, die Entwicklern rät, stattdessen [Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) zu verwenden ([Firefox Bug 1204581](https://bugzil.la/1204581)).
- Service Workers sind standardmäßig in Gecko aktiviert.

#### WebRTC

- WebRTC-Schnittstellen wurden _unprefixed_ ([Firefox Bug 1155923](https://bugzil.la/1155923)). Insbesondere:
  - `mozRTCPeerConnection` ist jetzt [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
  - `mozRTCIceCandidate` ist jetzt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).
  - `mozRTCSessionDescription` ist jetzt [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription).

- Die [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)-Eigenschaft sowie das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis und dessen Event-Handler wurden implementiert ([Firefox Bug 1178091](https://bugzil.la/1178091)).
- Das Attribut [`RTCPeerConnection.canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) wurde hinzugefügt, die nicht-standardmäßige Methode `RTCPeerConnection.updateIce()` entfernt ([Firefox Bug 1209744](https://bugzil.la/1209744)).
- Die [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle unterstützt jetzt die Methoden [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack) und [`MediaStream.removeTrack()`](/de/docs/Web/API/MediaStream/removeTrack) ([Firefox Bug 1103188](https://bugzil.la/1103188)).
- Der Konstruktor [`MediaStream()`](/de/docs/Web/API/MediaStream/MediaStream) wurde implementiert ([Firefox Bug 1070216](https://bugzil.la/1070216)).
- Die Unterstützung für die nicht-standardmäßige Constraints-Optionenliste für `RTCOfferOptions` wurde entfernt.

#### Neue APIs

- Eine experimentelle Implementierung der Canvas API in Workern wurde eingeführt: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) und [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) sind verfügbar hinter der `gfx.offscreencanvas.enabled` Präferenz, die derzeit standardmäßig deaktiviert ist ([Firefox Bug 709490](https://bugzil.la/709490)).
- Die Text2Speech API, Teil der Web Speech API, hat jetzt ein OS X-Backend. Dies ist jedoch standardmäßig deaktiviert ([Firefox Bug 1003452](https://bugzil.la/1003452)).

#### Verschiedenes

- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries), [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys) und [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox Bug 1085284](https://bugzil.la/1085284)).
- [`FormData`](/de/docs/Web/API/FormData)-Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`FormData.entries()`](/de/docs/Web/API/FormData/entries), [`FormData.keys`](/de/docs/Web/API/FormData/keys) und [`FormData.values()`](/de/docs/Web/API/FormData/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox Bug 1127703](https://bugzil.la/1127703)).
- Wenn [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) mit einem HTML-Dokument verwendet wird, wird jetzt `text/html` anstelle von `application/xml` verwendet ([Firefox Bug 918771](https://bugzil.la/918771)).
- Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Mac und Linux implementiert, versteckt hinter der `media.webspeech.synth.enabled`-Einstellung in `about:config` ([Firefox Bug 1003452](https://bugzil.la/1003452), [Firefox Bug 1003464](https://bugzil.la/1003464)). Siehe [Web Speech API](/de/docs/Web/API/Web_Speech_API) für mehr Informationen.
- Elemente innerhalb eines {{HTMLElement("frame")}} oder eines {{HTMLElement('object')}} können nicht mehr auf Vollbild gesetzt werden ([Firefox Bug 1212299](https://bugzil.la/1212299)).
- Die Sanitierung von WOFF-Fonts ist etwas strenger geworden, wodurch mehr fehlerhafte Schriften abgelehnt werden. Diese Sanitierung wird in Firefox 46 etwas weniger streng gemacht ([Firefox Bug 1193050](https://bugzil.la/1193050) und [Firefox Bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## HTTP

- Unterstützung für den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus wurde hinzugefügt und sowohl die Header [`Accept-Encoding`](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-encoding_header) und [`Content-Encoding`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) unterstützen jetzt den Wert `br` ([Firefox Bug 366559](https://bugzil.la/366559) und [Firefox Bug 1211916](https://bugzil.la/1211916)).
- Unkorrekte Unterstützung von HTTP/2-Headern mit Zeilenumbrüchen (`'/n'`) wurde entfernt, da die Spezifikation es nicht zulässt, im Gegensatz zu HTTP/1 ([Firefox Bug 1197847](https://bugzil.la/1197847)).

## Netzwerk

_Keine Änderungen._

## Sicherheit

- RC4 ist jetzt auch in der Beta- und Release-Version des Browsers standardmäßig deaktiviert ([Firefox Bug 1201025](https://bugzil.la/1201025)) und die Whitelist ist jetzt standardmäßig leer ([Firefox Bug 1215796](https://bugzil.la/1215796)).

## Änderungen für Add-On- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderungen._

### XUL

_Keine Änderungen._

### JavaScript Code Module

- `LIKE`-Unterstützung wurde zu Sqlite.jsm hinzugefügt ([Firefox Bug 1188760](https://bugzil.la/1188760)).
- Das [Snackbars.jsm](https://web.archive.org/web/20160423072423/https://developer.mozilla.org/en-US/Add-ons/Firefox_for_Android/API/Snackbars.jsm) Modul wurde zu [Firefox für Android](https://web.archive.org/web/20210518020027/https://developer.mozilla.org/de/docs/Mozilla/Firefox_for_Android) hinzugefügt ([Firefox Bug 1215026](https://bugzil.la/1215026)).

### XPCOM

- Die `nsIDOMWindow`-Schnittstelle ist jetzt leer. Ihre Inhalte wurden entweder nicht mehr benötigt, wurden woanders hin verlegt oder waren nur von C++ aus verfügbar. Die aus C++-Code verfügbaren Elemente befinden sich jetzt in der [nsPIDOMWindow](https://searchfox.org/mozilla-central/source/dom/base/nsPIDOMWindow.h)-Schnittstelle ([Firefox Bug 1216401](https://bugzil.la/1216401)).

### Sonstiges

- Aufgrund von Änderungen in Firefox 44 ([Bug 1202902](https://bugzil.la/1202902)), werden Add-Ons, die mit [cfx](https://web.archive.org/web/20201201072958/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/Tools/cfx) verpackt sind, nicht mehr funktionieren. Um Ihr Add-On wieder kompatibel zu machen, verwenden Sie bitte [jpm](https://web.archive.org/web/20210221222338/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/Tools/jpm). Siehe den [_cfx_ zu _jpm_ Migrationsleitfaden](https://web.archive.org/web/20181116093809/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/Tools/cfx_to_jpm).
