---
title: Firefox 44 für Entwickler
slug: Mozilla/Firefox/Releases/44
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 44 wurde am 26. Januar 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

Höhepunkte:

- [Memory tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Verbesserungen des Animationsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Neue Wasserfallmarker: DomContentLoaded, load, worker messages](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[Alle Devtools-Bugs, die zwischen Firefox 43 und Firefox 44 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- [`<link rel="prefetch">`](/de/docs/Glossary/Prefetch) beachtet nun das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut ([Firefox bug 1214819](https://bugzil.la/1214819)).

### CSS

- `position: fixed;` erzeugt nun immer einen neuen Stapelkontext ([Firefox bug 1179288](https://bugzil.la/1179288)).
- Die Unterstützung von {{cssxref('@font-face/unicode-range', 'unicode-range')}} wurde standardmäßig aktiviert ([Firefox bug 1119062](https://bugzil.la/1119062)).
- Unsere experimentelle Implementierung von CSS-Schreibmodi wurde aktualisiert, um die neueste Spezifikation zu widerspiegeln:

  - Der Wert `sideways` der {{cssxref("text-orientation")}}-Eigenschaft wurde implementiert und `sideways-right` wurde als Alias dafür festgelegt ([Firefox bug 1193488](https://bugzil.la/1193488)).
  - Die Werte `sideways-rl` und `sideways-lr` der {{cssxref("writing-mode")}}-Eigenschaft ([Firefox bug 1193488](https://bugzil.la/1193488) und [Firefox bug 1193519](https://bugzil.la/1193519)).

- Die nicht standardmäßigen Eigenschaften `-moz-math-display` und `-moz-window-shadow` sind nicht mehr aus Webinhalten verfügbar ([Firefox bug 1207002](https://bugzil.la/1207002), [Firefox bug 1211040](https://bugzil.la/1211040), und [Firefox bug 1212607](https://bugzil.la/1212607)).
- Die {{cssxref("font-style")}}-Eigenschaft unterscheidet nun zwischen `oblique` und `italic`, wenn beide Varianten verfügbar sind ([Firefox bug 543715](https://bugzil.la/543715)).
- Obwohl nicht unterstützt, wurden die Eigenschaften {{cssxref("@page/marks")}}, {{cssxref("orphans")}}, {{cssxref("page")}}, {{cssxref("size")}}, und {{cssxref("widows")}} analysiert und {{cssxref("@supports")}} meldete sie fälschlicherweise als unterstützt; dies wurde behoben und die Eigenschaften werden nicht mehr analysiert noch als unterstützt markiert ([Firefox bug 1215702](https://bugzil.la/1215702)).
- Der interne Wert `-moz-mac-unified-toolbar` wurde aus den möglichen Werten für die {{cssxref("appearance")}}-Eigenschaft entfernt ([Firefox bug 1206468](https://bugzil.la/1206468)).
- Mehrere `-webkit`-präfixierte Eigenschaften und Werte wurden aus Webkompatibilitätsgründen hinzugefügt, hinter der Präferenz `layout.css.prefixes.webkit`, die standardmäßig auf `false` gesetzt ist ([Firefox bug 837211](https://bugzil.la/837211)):

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
  - `-webkit-radial-gradient"()` [Firefox bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-linear-gradient()` [Firefox bug 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-radial-gradient()` [Firefox bug 1210575](https://bugzil.la/1210575)

### JavaScript

#### Neue APIs

- {{jsxref("Symbol.toPrimitive")}}, {{jsxref("Symbol.prototype.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}, und {{jsxref("Date.prototype.@@toPrimitive", "Date.prototype[@@toPrimitive]")}} wurden implementiert ([Firefox bug 1054756](https://bugzil.la/1054756)).

#### Änderungen

- Die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Bindungen auf globaler Ebene entsprechen nun den ES2015-Semantiken. Siehe [Firefox bug 589199](https://bugzil.la/589199) und den Blogpost ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/). Zusätzlich ist `let` nun im normalen Web-JavaScript (strict und non-strict) verfügbar und erfordert keinen Versions-Opt-In mehr ([Firefox bug 932517](https://bugzil.la/932517)).
- Wenn [typisierte Arrays'](/de/docs/Web/JavaScript/Guide/Typed_arrays) (wie {{jsxref("Int8Array")}}) und {{jsxref("ArrayBuffer")}}) Konstruktoren als Funktion ohne den {{jsxref("Operators/new", "new")}}-Operator aufgerufen werden, wird nun gemäß der ES2015-Spezifikation ein {{jsxref("TypeError")}} geworfen ([Firefox bug 980945](https://bugzil.la/980945), [Firefox bug 1214936](https://bugzil.la/1214936)).
- Das {{jsxref("RegExp")}}-Sticky-Flag folgt nun dem ES2015-Standard für [verankerte sticky reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag) ([Firefox bug 773687](https://bugzil.la/773687)).
- Die JavaScript-Shell (SpiderMonkey's REPL) verwendet nun standardmäßig die normale, webkompatible JS-Version (und nicht mehr JS1.7+) ([Firefox bug 1192329](https://bugzil.la/1192329)).

#### Entfernungen

- Unterstützung für die nicht standardisierten [`let`-Blöcke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox bug 1167029](https://bugzil.la/1167029).
- Die nicht standardisierte und veraltete Eigenschaft `Object.prototype.__noSuchMethod__` wurde entfernt ([Firefox bug 683218](https://bugzil.la/683218)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Zur Kompatibilität mit bestimmten bestehenden Websites wurde die Eigenschaft `Document.charset` als Alias von {{domxref("Document.characterSet")}} implementiert ([Firefox bug 647621](https://bugzil.la/647621)).
- Die Unterstützung für die Methode [`window.sidebar.addSearchEngine()`](/de/docs/Web/OpenSearch#installing_sherlock_plugins), die es Webseiten ermöglichte, eine Installation eines Sherlock-Plugins auszulösen, wurde eingestellt und protokolliert nun lediglich eine Warnung in der Web-Konsole ([Firefox bug 862148](https://bugzil.la/862148)).
- Um unerwünschte Pop-ups zu bekämpfen, werden Aufforderungen, die in {{domxref("Window/beforeunload_event", "beforeunload")}}-Ereignissen von Seiten angefordert werden, mit denen nicht interagiert wurde, nicht mehr angezeigt ([Firefox bug 636905](https://bugzil.la/636905)).
- Die veraltete Methode {{domxref("MessageEvent.initMessageEvent()")}} wurde aus Gründen der Abwärtskompatibilität erneut implementiert ([Firefox bug 949376](https://bugzil.la/949376)).
- Die veraltete Eigenschaft `DocumentType.internalSubset` wurde entfernt ([Firefox bug 801545](https://bugzil.la/801545)).
- Zur Kompatibilität mit bestehenden Sites wurden die Eigenschaften {{domxref("Window.orientation")}} und {{domxref("Window.onorientationchange")}}, sowie das {{domxref("Window.orientationchange_event", "orientationchange")}}-Ereignis implementiert ([Firefox bug 920734](https://bugzil.la/920734)).
- Ein {{HTMLElement("iframe")}} mit expliziter Anforderung für Vollbild sollte nicht implizit Vollbild beenden ([Firefox bug 1187801](https://bugzil.la/1187801)).
- Die Ereignisse {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/pointermove_event", "pointermove")}}, {{domxref("Element/pointerover_event", "pointerover")}}, {{domxref("Element/pointerout_event", "pointerout")}}, {{domxref("Element/pointerenter_event", "pointerenter")}} und {{domxref("Element/pointerleave_event", "pointerleave")}} werden nun für deaktivierte Formularelemente ausgelöst ([Firefox bug 218093](https://bugzil.la/218093)).
- Die Methode {{domxref("Element.webkitMatchesSelector()")}} wurde hinzugefügt ([Firefox bug 1216193](https://bugzil.la/1216193)), um die Interoperabilität zu verbessern.
- Um die Spezifikation zu erfüllen, konvertiert die Methode {{domxref("Document.createAttribute()")}} nun die Eingabe in Kleinbuchstaben ([Firefox bug 1176313](https://bugzil.la/1176313)).
- Das nicht standardisierte `dialog`-Feature für {{domxref("Window.open()")}} ist für Webinhalte nicht mehr verfügbar. Es ist nur noch für Erweiterungen und anderen Code mit Chrome-Berechtigungen verfügbar ([Firefox bug 1095236](https://bugzil.la/1095236).

#### Canvas

- Eine neue experimentelle {{domxref("OffscreenCanvas")}}-API, die es ermöglicht, dass Rendering-Kontexte (wie [WebGL](/de/docs/Web/API/WebGL_API)) in [Web Workers](/de/docs/Web/API/Web_Workers_API) ausgeführt werden, wurde implementiert. Um diese experimentelle API zu verwenden, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox bug 709490](https://bugzil.la/709490)). Diese API beinhaltet:

  - Das {{domxref("OffscreenCanvas")}}-Interface,
  - {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}, und
  - {{domxref("WebGLRenderingContext.commit()")}}.
  - Mehrere WebGL-Schnittstellen sind nun auch im Worker-Kontext verfügbar, wenn diese API aktiviert ist.

#### WebGL

- Uniform Buffer Objects wurden implementiert ([Firefox bug 1048747](https://bugzil.la/1048747)).

#### IndexedDB

- Die {{domxref("IDBIndex.getAll()")}} und {{domxref("IDBIndex.getAllKeys()")}} und ihre Gegenstücke auf {{domxref("IDBObjectStore")}} sind nun standardmäßig verfügbar ([Firefox bug 1196841](https://bugzil.la/1196841)).

#### Service Workers

- Die `ServiceWorkerMessageEvent` und {{domxref("ExtendableMessageEvent")}} Schnittstellen wurden implementiert ([Firefox bug 1143717](https://bugzil.la/1143717) und [Firefox bug 1207068](https://bugzil.la/1207068)).
- {{domxref("Headers")}}-Objekte unterstützen nun einen Paar-Iterator, was bedeutet, dass die Methoden {{domxref("Headers.entries()")}}, {{domxref("Headers.keys()")}}, und {{domxref("Headers.values()")}} nun verfügbar sind; {{jsxref("Symbol.iterator")}} gibt nun auch den Standard-Iterator für sie zurück ([Firefox bug 1108181](https://bugzil.la/1108181)).
- Die {{domxref('XMLHttpRequest')}}-API wurde in Service Workers deaktiviert ([Firefox bug 931243](https://bugzil.la/931243)).
- Die Schnittstelle {{domxref("FetchEvent")}} erweitert nun {{domxref("ExtendableEvent")}}, wodurch sie Zugriff auf die Methode {{domxref("ExtendableEvent.waitUntil()")}} erhält. ([Firefox bug 1214772](https://bugzil.la/1214772)).
- Nach einer kürzlichen Änderung der Spezifikation wurde `FetchEvent.client` entfernt ([Firefox bug 1218135](https://bugzil.la/1218135)).
- Um der neuesten Spezifikation zu entsprechen, wurde die {{domxref("ServiceWorkerContainer.onreloadpage")}} entfernt ([Firefox bug 1218139](https://bugzil.la/1218139)).
- Die Ereignishandler {{domxref("ServiceWorkerGlobalScope.beforeevicted_event", "onbeforeevicted")}} und {{domxref("ServiceWorkerGlobalScope.evicted_event", "onevicted")}} wurden entfernt, da sie nicht die Spezifikation befolgten. Sie werden in der Zukunft wieder eingeführt, aber ihr Entfernen ermöglicht es, dass die Funktionsdetektion wie erwartet funktioniert ([Firefox bug 1218142](https://bugzil.la/1218142)).
- Im {{domxref("FetchEvent.FetchEvent", "FetchEvent()")}}-Konstruktor, wenn das `isReload`-Element im Optionswörterbuch nicht vorhanden ist, wird es jetzt auf `false` gesetzt ([Firefox bug 1216401](https://bugzil.la/1216401)).
- Die {{domxref("Client.frameType")}}-Eigenschaft wird nun auf der richtigen Schnittstelle implementiert; sie war zuvor auf {{domxref("WindowClient")}} ([Firefox bug 1218146](https://bugzil.la/1218146)).
- Wenn AppCache verwendet wird, um Offline-Unterstützung für eine Seite bereitzustellen, wird nun eine Warnmeldung in der Konsole angezeigt, die Entwicklern empfiehlt, stattdessen [Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) zu verwenden ([Firefox bug 1204581](https://bugzil.la/1204581).)
- Service Workers wurden standardmäßig in Gecko aktiviert.

#### WebRTC

- WebRTC-Schnittstellen wurden _unpräfixiert_ ([Firefox bug 1155923](https://bugzil.la/1155923)). Insbesondere:

  - `mozRTCPeerConnection` ist nun {{domxref("RTCPeerConnection")}}.
  - `mozRTCIceCandidate` ist nun {{domxref("RTCIceCandidate")}}.
  - `mozRTCSessionDescription` ist nun {{domxref("RTCSessionDescription")}}.

- Die {{domxref("RTCDataChannel.bufferedAmountLowThreshold")}}-Eigenschaft sowie das {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}-Ereignis und dessen Ereignishandler wurden implementiert ([Firefox bug 1178091](https://bugzil.la/1178091)).
- Die Eigenschaft {{domxref("RTCPeerConnection.canTrickleIceCandidates")}} wurde hinzugefügt, die nicht standardmäßige Methode {{domxref("RTCPeerConnection.updateIce()")}} entfernt ([Firefox bug 1209744](https://bugzil.la/1209744)).
- Die {{domxref("MediaStream")}}-Schnittstelle unterstützt nun die Methoden {{domxref("MediaStream.addTrack()")}} und {{domxref("MediaStream.removeTrack()")}} ([Firefox bug 1103188](https://bugzil.la/1103188)).
- Der Konstruktor {{domxref("MediaStream.MediaStream", "MediaStream()")}} wurde implementiert ([Firefox bug 1070216](https://bugzil.la/1070216)).
- Die Unterstützung für die nicht standardisierte Constraint-Styles-Optionenliste für `RTCOfferOptions` wurde entfernt.

#### Neue APIs

- Eine experimentelle Implementierung der Canvas-API in Workern wurde eingeführt: {{domxref("OfflineCanvas")}} und {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} sind hinter der `gfx.offscreencanvas.enabled`-Präferenz verfügbar, die derzeit standardmäßig deaktiviert ist ([Firefox bug 709490](https://bugzil.la/709490)).
- Die Text2Speech-API, Teil der Web Speech API, hat jetzt ein OS X-Backend. Dies ist jedoch standardmäßig deaktiviert ([Firefox bug 1003452](https://bugzil.la/1003452)).

#### Verschiedenes

- {{domxref("URLSearchParams")}}-Objekte unterstützen nun einen Paar-Iterator, was bedeutet, dass die Methoden {{domxref("URLSearchParams.entries()")}}, {{domxref("URLSearchParams.keys()")}}, und {{domxref("URLSearchParams.values()")}} nun verfügbar sind; {{jsxref("Symbol.iterator")}} gibt nun auch den Standard-Iterator für sie zurück ([Firefox bug 1085284](https://bugzil.la/1085284)).
- {{domxref("FormData")}}-Objekte unterstützen nun einen Paar-Iterator, was bedeutet, dass die Methoden {{domxref("FormData.entries()")}}, {{domxref("FormData.keys")}}, und {{domxref("FormData.values()")}} nun verfügbar sind; {{jsxref("Symbol.iterator")}} gibt nun auch den Standard-Iterator für sie zurück ([Firefox bug 1127703](https://bugzil.la/1127703)).
- Wenn {{domxref("XMLHttpRequest.send()")}} mit einem HTML-Dokument verwendet wird, verwendet es nun `text/html` anstelle von `application/xml` ([Firefox bug 918771](https://bugzil.la/918771)).
- Die Sprachsynthese (Text-zu-Sprache) wurde in Firefox Desktop für Mac und Linux implementiert, hinter dem `media.webspeech.synth.enabled`-Flag in `about:config` versteckt ([Firefox bug 1003452](https://bugzil.la/1003452), [Firefox bug 1003464](https://bugzil.la/1003464).) Siehe [Web Speech API](/de/docs/Web/API/Web_Speech_API) für weitere Informationen.
- Elemente innerhalb eines {{HTMLElement("frame")}} oder eines {{HTMLElement('object')}} können nicht mehr auf Vollbild gesetzt werden ([Firefox bug 1212299](https://bugzil.la/1212299)).
- Die Bereinigung von WOFF-Schriften ist etwas strenger, was dazu führt, dass mehr fehlerhafte Schriften abgelehnt werden. Diese Bereinigung wird in Firefox 46 etwas weniger streng durchgeführt ([Firefox bug 1193050](https://bugzil.la/1193050) und [Firefox bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

- Unterstützung für den [Brotli](https://de.wikipedia.org/wiki/Brotli)-Algorithmus wurde hinzugefügt, und sowohl der [`Accept-Encoding`](/de/docs/Web/HTTP/Content_negotiation#the_accept-encoding_header)- als auch der [`Content-Encoding`](/de/docs/Web/HTTP/Headers/Content-Encoding)-Header unterstützen jetzt den `br`-Wert ([Firefox bug 366559](https://bugzil.la/366559) und [Firefox bug 1211916](https://bugzil.la/1211916)).
- Falsche Unterstützung von HTTP/2-Headern mit Zeilenumbrüchen (`'/n'`) wurden entfernt, da dies in der Spezifikation nicht erlaubt ist, im Gegensatz zu HTTP/1 ([Firefox bug 1197847](https://bugzil.la/1197847)).

## Netzwerke

_Keine Änderung._

## Sicherheit

- RC4 ist nun auch standardmäßig in den Beta- und Release-Versionen des Browsers deaktiviert ([Firefox bug 1201025](https://bugzil.la/1201025)) und die Whitelist ist nun standardmäßig leer ([Firefox bug 1215796](https://bugzil.la/1215796)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderung._

### XUL

_Keine Änderung._

### JavaScript-Code-Module

- `LIKE`-Unterstützung wurde zu Sqlite.jsm hinzugefügt ([Firefox bug 1188760](https://bugzil.la/1188760)).
- Das Modul [Snackbars.jsm](/de/docs/Mozilla/Add-ons/Firefox_for_Android/API/Snackbars.jsm) wurde zu [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) hinzugefügt ([Firefox bug 1215026](https://bugzil.la/1215026))

### XPCOM

- Die `nsIDOMWindow`-Schnittstelle ist jetzt leer. Ihr Inhalt wurde entweder nicht mehr verwendet, woanders hin verschoben oder nur von C++ verwendet. Die für C++-Code verfügbaren Elemente befinden sich jetzt in der Schnittstelle [nsPIDOMWindow](https://searchfox.org/mozilla-central/source/dom/base/nsPIDOMWindow.h) ([Firefox bug 1216401](https://bugzil.la/1216401)).

### Sonstiges

- Aufgrund von Änderungen in Firefox 44 ([bug 1202902](https://bugzil.la/1202902)) funktionieren Add-ons, die mit [cfx](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx) gepackt wurden, nicht mehr. Um Ihr Add-on wieder kompatibel zu machen, verwenden Sie bitte [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm). Schritte zur Migration von _cfx_ zu _jpm_ finden Sie [hier](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx_to_jpm).

## Ältere Versionen

{{Firefox_for_developers}}
