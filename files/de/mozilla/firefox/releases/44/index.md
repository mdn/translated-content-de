---
title: Firefox 44 für Entwickler
slug: Mozilla/Firefox/Releases/44
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 44 wurde am 26. Januar 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Speicherwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Verbesserungen beim Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Neue Wasserfall-Markierungen: DomContentLoaded, load, worker messages](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[Alle Devtools-Fehler, die zwischen Firefox 43 und Firefox 44 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- {{Glossary("Prefetch", "`<link rel=\"prefetch\">`")}} beachtet jetzt das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin) Attribut ([Firefox-Bug 1214819](https://bugzil.la/1214819)).

### CSS

- `position: fixed;` erstellt jetzt immer einen neuen Stapelkontext ([Firefox-Bug 1179288](https://bugzil.la/1179288)).
- Die Unterstützung für {{cssxref('@font-face/unicode-range', 'unicode-range')}} wurde standardmäßig aktiviert ([Firefox-Bug 1119062](https://bugzil.la/1119062)).
- Unsere experimentelle Implementierung der CSS-Schreib-Modi wurde aktualisiert, um die neueste Spezifikation zu reflektieren:

  - Der Wert `sideways` der {{cssxref("text-orientation")}} Eigenschaft wurde implementiert und `sideways-right` wurde ein Alias davon gemacht ([Firefox-Bug 1193488](https://bugzil.la/1193488)).
  - Die Werte `sideways-rl` und `sideways-lr` der {{cssxref("writing-mode")}} Eigenschaft ([Firefox-Bug 1193488](https://bugzil.la/1193488) und [Firefox-Bug 1193519](https://bugzil.la/1193519)).

- Die nicht-standardisierten Eigenschaften `-moz-math-display` und `-moz-window-shadow` sind nicht mehr aus Web-Inhalten verfügbar ([Firefox-Bug 1207002](https://bugzil.la/1207002), [Firefox-Bug 1211040](https://bugzil.la/1211040) und [Firefox-Bug 1212607](https://bugzil.la/1212607)).
- Die {{cssxref("font-style")}} Eigenschaft unterscheidet jetzt zwischen `oblique` und `italic`, wenn beide Varianten verfügbar sind ([Firefox-Bug 543715](https://bugzil.la/543715)).
- Obwohl nicht unterstützt, wurden die Eigenschaften {{cssxref("@page/marks")}}, {{cssxref("orphans")}}, {{cssxref("page")}}, {{cssxref("size")}} und {{cssxref("widows")}} analysiert und {{cssxref("@supports")}} meldete sie fälschlicherweise als unterstützt; dies wurde behoben und die Eigenschaften werden nicht mehr analysiert oder als unterstützt markiert ([Firefox-Bug 1215702](https://bugzil.la/1215702)).
- Der interne Wert `-moz-mac-unified-toolbar` wurde aus den möglichen Werten für die {{cssxref("appearance")}} Eigenschaft entfernt ([Firefox-Bug 1206468](https://bugzil.la/1206468)).
- Mehrere `-webkit`-präfixierte Eigenschaften und Werte wurden für die Web-Kompatibilität hinzugefügt, hinter der Präferenz `layout.css.prefixes.webkit`, die standardmäßig auf `false` steht ([Firefox-Bug 837211](https://bugzil.la/837211)):

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
  - `-webkit-linear-gradient()` [Firefox-Bug 1210575](https://bugzil.la/1210575)
  - `-webkit-radial-gradient"()` [Firefox-Bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-linear-gradient()` [Firefox-Bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-radial-gradient()` [Firefox-Bug 1210575](https://bugzil.la/1210575)

### JavaScript

#### Neue APIs

- {{jsxref("Symbol.toPrimitive")}}, [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) und [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) wurden implementiert ([Firefox-Bug 1054756](https://bugzil.la/1054756)).

#### Änderungen

- Die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Bindungen auf globaler Ebene wurden den ES2015-Semantiken angepasst. Siehe [Firefox-Bug 589199](https://bugzil.la/589199) und den Blog-Beitrag ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/). Zusätzlich ist `let` jetzt im Standard-Web-JavaScript (strict und non-strict) verfügbar und erfordert keine Versionseinstellung mehr ([Firefox-Bug 932517](https://bugzil.la/932517)).
- Wenn Konstruktoren für [typisierte Arrays'](/de/docs/Web/JavaScript/Guide/Typed_arrays) (wie {{jsxref("Int8Array", "Int8Array")}}) und {{jsxref("ArrayBuffer", "ArrayBuffer")}}) als Funktion ohne den {{jsxref("Operators/new", "new")}} Operator aufgerufen werden, wird nun gemäß der ES2015-Spezifikation ein {{jsxref("TypeError")}} geworfen ([Firefox-Bug 980945](https://bugzil.la/980945), [Firefox-Bug 1214936](https://bugzil.la/1214936)).
- Das {{jsxref("RegExp")}} sticky-Flag folgt nun dem ES2015-Standard für [verankerte sticky reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag) ([Firefox-Bug 773687](https://bugzil.la/773687)).
- Das JavaScript-Shell (SpiderMonkeys REPL) verwendet jetzt standardmäßig die webkompatible JS-Version (nicht mehr JS1.7+) ([Firefox-Bug 1192329](https://bugzil.la/1192329)).

#### Entfernungen

- Unterstützung für die nicht standardisierten [`let` Blöcke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox-Bug 1167029](https://bugzil.la/1167029)).
- Die nicht standardisierte und veraltete Eigenschaft `Object.prototype.__noSuchMethod__` wurde entfernt ([Firefox-Bug 683218](https://bugzil.la/683218)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Zur Kompatibilität mit bestimmten bestehenden Seiten wurde die Eigenschaft `Document.charset` als Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) implementiert ([Firefox-Bug 647621](https://bugzil.la/647621)).
- Die Unterstützung für die Methode [`window.sidebar.addSearchEngine()`](/de/docs/Web/XML/Guides/OpenSearch#installing_sherlock_plugins), die es Web-Seiten erlaubte, eine Installation eines Sherlock-Plugins zu veranlassen, wurde entfernt und es wird nun nur noch eine Warnmeldung in der Web Console ausgegeben ([Firefox-Bug 862148](https://bugzil.la/862148)).
- Um unerwünschte Pop-ups zu bekämpfen, werden die Aufforderungen in [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignissen von Seiten, mit denen nicht interagiert wurde, nicht mehr angezeigt ([Firefox-Bug 636905](https://bugzil.la/636905)).
- Die veraltete Methode [`MessageEvent.initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) wurde aus Kompatibilitätsgründen wieder implementiert ([Firefox-Bug 949376](https://bugzil.la/949376)).
- Die veraltete Eigenschaft `DocumentType.internalSubset` wurde entfernt ([Firefox-Bug 801545](https://bugzil.la/801545)).
- Zur Kompatibilität mit bestehenden Seiten wurden die [`Window.orientation`](/de/docs/Web/API/Window/orientation) Eigenschaft und das [`orientationchange`](/de/docs/Web/API/Window/orientationchange_event) Ereignis implementiert ([Firefox-Bug 920734](https://bugzil.la/920734)).
- Ein {{HTMLElement("iframe")}} mit expliziter Fullscreen-Anforderung sollte den Vollbildmodus nicht implizit verlassen ([Firefox-Bug 1187801](https://bugzil.la/1187801)).
- Die Ereignisse [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event), [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event), [`pointerover`](/de/docs/Web/API/Element/pointerover_event), [`pointerout`](/de/docs/Web/API/Element/pointerout_event), [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) werden jetzt für deaktivierte Formularelemente ausgelöst ([Firefox-Bug 218093](https://bugzil.la/218093)).
- Die Methode [`Element.webkitMatchesSelector()`](/de/docs/Web/API/Element/matches) wurde hinzugefügt ([Firefox-Bug 1216193](https://bugzil.la/1216193)), um die Interoperabilität zu verbessern.
- Um die Spezifikation zu erfüllen, konvertiert die Methode [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute) nun die Eingabe in Kleinbuchstaben ([Firefox-Bug 1176313](https://bugzil.la/1176313)).
- Die nicht standardisierte `dialog` Funktion für [`Window.open()`](/de/docs/Web/API/Window/open) ist für Web-Inhalte nicht mehr verfügbar. Sie steht weiterhin Erweiterungen und anderem Code mit Chrome-Berechtigungen zur Verfügung ([Firefox-Bug 1095236](https://bugzil.la/1095236)).

#### Canvas

- Eine neue experimentelle [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API, die es Rendering-Kontexten (wie [WebGL](/de/docs/Web/API/WebGL_API)) ermöglicht, in [Web-Workern](/de/docs/Web/API/Web_Workers_API) zu laufen, wurde implementiert. Um diese experimentelle API zu nutzen, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox-Bug 709490](https://bugzil.la/709490)). Diese API umfasst:

  - Das [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Interface,
  - [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) und
  - [`WebGLRenderingContext.commit()`](/de/docs/Web/API/WebGLRenderingContext/commit).
  - Mehrere WebGL-Interfaces sind jetzt auch im Worker-Kontext verfügbar, wenn diese API aktiviert ist.

#### WebGL

- Uniform Buffer Objects wurden implementiert ([Firefox-Bug 1048747](https://bugzil.la/1048747)).

#### IndexedDB

- Die Methoden [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll) und [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) und ihre Gegenstücke auf [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) sind jetzt standardmäßig verfügbar ([Firefox-Bug 1196841](https://bugzil.la/1196841)).

#### Service Workers

- Die `ServiceWorkerMessageEvent` und [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) Interfaces wurden implementiert ([Firefox-Bug 1143717](https://bugzil.la/1143717) und [Firefox-Bug 1207068](https://bugzil.la/1207068)).
- [`Headers`](/de/docs/Web/API/Headers) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`Headers.entries()`](/de/docs/Web/API/Headers/entries), [`Headers.keys()`](/de/docs/Web/API/Headers/keys) und [`Headers.values()`](/de/docs/Web/API/Headers/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox-Bug 1108181](https://bugzil.la/1108181)).
- Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API wurde für Service Worker deaktiviert ([Firefox-Bug 931243](https://bugzil.la/931243)).
- Das Interface [`FetchEvent`](/de/docs/Web/API/FetchEvent) erweitert jetzt [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent), wodurch es Zugriff auf die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) erhält ([Firefox-Bug 1214772](https://bugzil.la/1214772)).
- Nach einer kürzlich erfolgten Änderung in der Spezifikation wurde `FetchEvent.client` entfernt ([Firefox-Bug 1218135](https://bugzil.la/1218135)).
- Um die neueste Spezifikation zu erfüllen, wurde der `ServiceWorkerContainer.onreloadpage` entfernt ([Firefox-Bug 1218139](https://bugzil.la/1218139)).
- Die Event-Handler `ServiceWorkerGlobalScope.onbeforeevicted` und `ServiceWorkerGlobalScope.onevicted` wurden entfernt, da sie nicht der Spezifikation entsprachen. Sie werden in Zukunft wieder eingeführt, aber ihre Entfernung ermöglicht eine funktionierende Feature-Erkennung ([Firefox-Bug 1218142](https://bugzil.la/1218142)).
- Im [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent) Konstruktor, wenn das `isReload` Mitglied im Optionen-Dictionary nicht vorhanden ist, wird es jetzt auf `false` gesetzt ([Firefox-Bug 1216401](https://bugzil.la/1216401)).
- Die [`Client.frameType`](/de/docs/Web/API/Client/frameType) Eigenschaft ist jetzt im richtigen Interface implementiert; zuvor war sie auf [`WindowClient`](/de/docs/Web/API/WindowClient) ([Firefox-Bug 1218146](https://bugzil.la/1218146)).
- Wenn AppCache zur Bereitstellung von Offline-Unterstützung für eine Seite verwendet wird, wird jetzt eine Warnmeldung in der Konsole angezeigt, die Entwicklern rät, [Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) zu verwenden ([Firefox-Bug 1204581](https://bugzil.la/1204581)).
- Service Workers wurden standardmäßig in Gecko aktiviert.

#### WebRTC

- WebRTC-Schnittstellen wurden _unpräfixiert_ ([Firefox-Bug 1155923](https://bugzil.la/1155923)). Insbesondere:

  - `mozRTCPeerConnection` ist jetzt [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
  - `mozRTCIceCandidate` ist jetzt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).
  - `mozRTCSessionDescription` ist jetzt [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription).

- Die [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) Eigenschaft sowie das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event) Ereignis und sein Event-Handler wurden implementiert ([Firefox-Bug 1178091](https://bugzil.la/1178091)).
- Der Attribut [`RTCPeerConnection.canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) wurde hinzugefügt, die nicht standardisierte Methode `RTCPeerConnection.updateIce()` wurde entfernt ([Firefox-Bug 1209744](https://bugzil.la/1209744)).
- Das [`MediaStream`](/de/docs/Web/API/MediaStream) Interface unterstützt jetzt die Methoden [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack) und [`MediaStream.removeTrack()`](/de/docs/Web/API/MediaStream/removeTrack) ([Firefox-Bug 1103188](https://bugzil.la/1103188)).
- Der Konstruktor [`MediaStream()`](/de/docs/Web/API/MediaStream/MediaStream) wurde implementiert ([Firefox-Bug 1070216](https://bugzil.la/1070216)).
- Die Unterstützung für die nicht standardisierte Zwangsoptionsliste für `RTCOfferOptions` wurde entfernt.

#### Neue APIs

- Eine experimentelle Implementierung der Canvas API in Workern wurde eingeführt: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) und [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) sind hinter der `gfx.offscreencanvas.enabled` Präferenz verfügbar, derzeit standardmäßig deaktiviert ([Firefox-Bug 709490](https://bugzil.la/709490)).
- Die Text2Speech API, Teil der Web Speech API, hat jetzt ein Backend für OS X. Dies ist jedoch standardmäßig deaktiviert ([Firefox-Bug 1003452](https://bugzil.la/1003452)).

#### Verschiedenes

- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries), [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys) und [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox-Bug 1085284](https://bugzil.la/1085284)).
- [`FormData`](/de/docs/Web/API/FormData) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`FormData.entries()`](/de/docs/Web/API/FormData/entries), [`FormData.keys`](/de/docs/Web/API/FormData/keys) und [`FormData.values()`](/de/docs/Web/API/FormData/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox-Bug 1127703](https://bugzil.la/1127703)).
- Wenn [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) mit einem HTML-Dokument verwendet wird, wird jetzt `text/html` anstelle von `application/xml` verwendet ([Firefox-Bug 918771](https://bugzil.la/918771)).
- Die Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Mac und Linux implementiert, versteckt hinter der `media.webspeech.synth.enabled` Option in `about:config` ([Firefox-Bug 1003452](https://bugzil.la/1003452), [Firefox-Bug 1003464](https://bugzil.la/1003464)). Siehe [Web Speech API](/de/docs/Web/API/Web_Speech_API) für weitere Informationen.
- Elemente in einem {{HTMLElement("frame")}} oder einem {{HTMLElement('object')}} können nicht mehr im Vollbildmodus gesetzt werden ([Firefox-Bug 1212299](https://bugzil.la/1212299)).
- Die Überprüfung von WOFF-Schriften ist etwas strenger geworden, was dazu führt, dass mehr fehlerhafte Schriften abgelehnt werden. Diese Überprüfung wird in Firefox 46 etwas weniger streng gemacht ([Firefox-Bug 1193050](https://bugzil.la/1193050) und [Firefox-Bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## HTTP

- Unterstützung für den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus wurde hinzugefügt und sowohl die [`Accept-Encoding`](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-encoding_header) als auch die [`Content-Encoding`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) Header unterstützen jetzt den `br` Wert ([Firefox-Bug 366559](https://bugzil.la/366559) und [Firefox-Bug 1211916](https://bugzil.la/1211916)).
- Falsche Unterstützung von HTTP/2 Headern mit Zeilenumbrüchen (`'/n'`) wurde entfernt, da die Spezifikation dies nicht erlaubt, im Gegensatz zu HTTP/1 ([Firefox-Bug 1197847](https://bugzil.la/1197847)).

## Netzwerk

_Keine Änderungen._

## Sicherheit

- RC4 ist nun auch in den Beta- und Release-Versionen des Browsers standardmäßig deaktiviert ([Firefox-Bug 1201025](https://bugzil.la/1201025)) und die Whitelist ist standardmäßig leer ([Firefox-Bug 1215796](https://bugzil.la/1215796)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderungen._

### XUL

_Keine Änderungen._

### JavaScript-Code-Module

- `LIKE` Unterstützung wurde zu Sqlite.jsm hinzugefügt ([Firefox-Bug 1188760](https://bugzil.la/1188760)).
- Das Modul [Snackbars.jsm](/de/docs/Mozilla/Add-ons/Firefox_for_Android/API/Snackbars.jsm) wurde zu [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) hinzugefügt ([Firefox-Bug 1215026](https://bugzil.la/1215026)).

### XPCOM

- Das `nsIDOMWindow` Interface ist jetzt leer. Sein Inhalt wurde entweder nicht mehr verwendet, an andere Stellen verschoben oder nur noch aus C++ genutzt. Die aus C++ verfügbaren Elemente befinden sich jetzt im [nsPIDOMWindow](https://searchfox.org/mozilla-central/source/dom/base/nsPIDOMWindow.h) Interface ([Firefox-Bug 1216401](https://bugzil.la/1216401)).

### Andere

- Aufgrund von Änderungen in Firefox 44 ([Bug 1202902](https://bugzil.la/1202902)), funktionieren Add-ons, die mit [cfx](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx) gepackt wurden, nicht mehr. Um Ihr Add-on wieder kompatibel zu machen, verwenden Sie bitte [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm). Schritte zur Migration von _cfx_ zu _jpm_ finden Sie [hier](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx_to_jpm).

## Ältere Versionen

{{Firefox_for_developers}}
