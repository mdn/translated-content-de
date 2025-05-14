---
title: Firefox 44 für Entwickler
slug: Mozilla/Firefox/Releases/44
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 44 wurde am 26. Januar 2016 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Memory tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Verbesserungen im Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Neue Wasserfall-Markierungen: DomContentLoaded, load, worker messages](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[Alle DevTools-Bugs, die zwischen Firefox 43 und Firefox 44 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- {{Glossary("Prefetch", "`<link rel=\"prefetch\">`")}} berücksichtigt jetzt das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) Attribut ([Firefox-Bug 1214819](https://bugzil.la/1214819)).

### CSS

- `position: fixed;` erstellt jetzt immer einen neuen Stacking-Kontext ([Firefox-Bug 1179288](https://bugzil.la/1179288)).
- Die Unterstützung von {{cssxref('@font-face/unicode-range', 'unicode-range')}} ist standardmäßig aktiviert worden ([Firefox-Bug 1119062](https://bugzil.la/1119062)).
- Unsere experimentelle Implementierung der CSS-Schreibmodi wurde aktualisiert, um die neueste Spezifikation zu reflektieren:

  - Der Wert `sideways` der {{cssxref("text-orientation")}} Eigenschaft wurde implementiert und `sideways-right` wurde zum Alias dafür ([Firefox-Bug 1193488](https://bugzil.la/1193488)).
  - Die Werte `sideways-rl` und `sideways-lr` der {{cssxref("writing-mode")}} Eigenschaft ([Firefox-Bug 1193488](https://bugzil.la/1193488) und [Firefox-Bug 1193519](https://bugzil.la/1193519)).

- Die nicht standardisierten Eigenschaften `-moz-math-display` und `-moz-window-shadow` sind aus Web-Inhalten nicht mehr verfügbar ([Firefox-Bug 1207002](https://bugzil.la/1207002), [Firefox-Bug 1211040](https://bugzil.la/1211040) und [Firefox-Bug 1212607](https://bugzil.la/1212607)).
- Die {{cssxref("font-style")}} Eigenschaft unterscheidet jetzt zwischen `oblique` und `italic`, wenn beide Varianten verfügbar sind ([Firefox-Bug 543715](https://bugzil.la/543715)).
- Obwohl nicht unterstützt, wurden die Eigenschaften {{cssxref("@page/marks")}}, {{cssxref("orphans")}}, {{cssxref("page")}}, {{cssxref("size")}} und {{cssxref("widows")}} geparst und {{cssxref("@supports")}} meldete fälschlicherweise ihre Unterstützung; dies wurde behoben und die Eigenschaften werden nicht mehr geparst, noch als unterstützt markiert ([Firefox-Bug 1215702](https://bugzil.la/1215702)).

### JavaScript

#### Neue APIs

- {{jsxref("Symbol.toPrimitive")}}, [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) und [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) wurden implementiert ([Firefox-Bug 1054756](https://bugzil.la/1054756)).

#### Änderungen

- Die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Bindungen auf globaler Ebene wurden an die ES2015 Semantik angepasst. Siehe [Firefox-Bug 589199](https://bugzil.la/589199) und den Blogbeitrag ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/). Zusätzlich ist `let` jetzt für Standard-Web-JavaScript (strikt und nicht-strikt) verfügbar und erfordert keinen Versions-Opt-in mehr ([Firefox-Bug 932517](https://bugzil.la/932517)).

#### Entfernte Funktionen

- Die Unterstützung für die nicht standardmäßigen [`let` Blöcke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox-Bug 1167029](https://bugzil.la/1167029)).
- Die nicht standardmäßige und veraltete Eigenschaft `Object.prototype.__noSuchMethod__` wurde entfernt ([Firefox-Bug 683218](https://bugzil.la/683218)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Für die Kompatibilität mit bestimmten bestehenden Seiten wurde die Eigenschaft `Document.charset` als Alias für [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) implementiert ([Firefox-Bug 647621](https://bugzil.la/647621)).
- Die Unterstützung für die Methode [`window.sidebar.addSearchEngine()`](/de/docs/Web/XML/Guides/OpenSearch#installing_sherlock_plugins), die es Webseiten erlaubte, die Installation eines Sherlock-Plugins anzustoßen, wurde eingestellt und sie gibt nun lediglich eine Warnung in der Webkonsole aus ([Firefox-Bug 862148](https://bugzil.la/862148)).
- Um unerwünschte Pop-ups zu verhindern, werden Prompts, die in [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignissen von Seiten, mit denen nicht interagiert wurde, angefordert werden, nicht mehr angezeigt ([Firefox-Bug 636905](https://bugzil.la/636905)).

#### Canvas

- Eine neue experimentelle [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API, die es erlaubt, Rendering-Kontexte (wie [WebGL](/de/docs/Web/API/WebGL_API)) in [Web Workern](/de/docs/Web/API/Web_Workers_API) auszuführen, wurde implementiert. Um diese experimentelle API zu nutzen, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox-Bug 709490](https://bugzil.la/709490)).

#### IndexedDB

- Die Methoden [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll) und [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys), sowie deren Gegenstücke auf [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) sind jetzt standardmäßig verfügbar ([Firefox-Bug 1196841](https://bugzil.la/1196841)).

#### Service Workers

- Die Schnittstellen `ServiceWorkerMessageEvent` und [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) wurden implementiert ([Firefox-Bug 1143717](https://bugzil.la/1143717) und [Firefox-Bug 1207068](https://bugzil.la/1207068)).
- [`Headers`](/de/docs/Web/API/Headers) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`Headers.entries()`](/de/docs/Web/API/Headers/entries), [`Headers.keys()`](/de/docs/Web/API/Headers/keys) und [`Headers.values()`](/de/docs/Web/API/Headers/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox-Bug 1108181](https://bugzil.la/1108181)).
- Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API wurde in Service Workers deaktiviert ([Firefox-Bug 931243](https://bugzil.la/931243)).

#### WebRTC

- Die WebRTC-Schnittstellen wurden _unprefixed_ ([Firefox-Bug 1155923](https://bugzil.la/1155923)). Insbesondere:

  - `mozRTCPeerConnection` ist jetzt [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
  - `mozRTCIceCandidate` ist jetzt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).
  - `mozRTCSessionDescription` ist jetzt [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription).

- Die Eigenschaft [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) sowie das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event) Ereignis und sein Ereignishandler wurden implementiert ([Firefox-Bug 1178091](https://bugzil.la/1178091)).

#### Neue APIs

- Eine experimentelle Implementierung der Canvas-API in Workern wurde eingepflegt: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) und [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) sind verfügbar hinter der `gfx.offscreencanvas.enabled` Präferenz, derzeit standardmäßig deaktiviert ([Firefox-Bug 709490](https://bugzil.la/709490)).

#### Verschiedenes

- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries), [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys) und [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox-Bug 1085284](https://bugzil.la/1085284)).
- [`FormData`](/de/docs/Web/API/FormData) Objekte unterstützen jetzt einen Paar-Iterator, was bedeutet, dass die Methoden [`FormData.entries()`](/de/docs/Web/API/FormData/entries), [`FormData.keys`](/de/docs/Web/API/FormData/keys) und [`FormData.values()`](/de/docs/Web/API/FormData/values) jetzt verfügbar sind; {{jsxref("Symbol.iterator")}} gibt jetzt auch den Standard-Iterator für sie zurück ([Firefox-Bug 1127703](https://bugzil.la/1127703)).
- Wenn [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) mit einem HTML-Dokument verwendet wird, wird jetzt `text/html` anstelle von `application/xml` verwendet ([Firefox-Bug 918771](https://bugzil.la/918771)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

- Unterstützung für den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus wurde hinzugefügt und sowohl [`Accept-Encoding`](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-encoding_header) als auch [`Content-Encoding`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) Header unterstützen jetzt den `br` Wert ([Firefox-Bug 366559](https://bugzil.la/366559) und [Firefox-Bug 1211916](https://bugzil.la/1211916)).
- Die inkorrekte Unterstützung von HTTP/2-Headers, die Zeilenumbrüche (`'/n'`) enthalten, wurde entfernt, da die Spezifikation dies nicht erlaubt, im Gegensatz zu HTTP/1 ([Firefox-Bug 1197847](https://bugzil.la/1197847)).

## Netzwerktechnik

_Keine Änderung._

## Sicherheit

- RC4 ist jetzt auch in den Beta- und Release-Versionen des Browsers standardmäßig deaktiviert ([Firefox-Bug 1201025](https://bugzil.la/1201025)) und die Whitelist ist jetzt standardmäßig leer ([Firefox-Bug 1215796](https://bugzil.la/1215796)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderung._

### XUL

_Keine Änderung._

### JavaScript-Code-Module

- `LIKE` Unterstützung wurde zu Sqlite.jsm hinzugefügt ([Firefox-Bug 1188760](https://bugzil.la/1188760)).
- Modul [Snackbars.jsm](/de/docs/Mozilla/Add-ons/Firefox_for_Android/API/Snackbars.jsm) wurde zu [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) hinzugefügt ([Firefox-Bug 1215026](https://bugzil.la/1215026))

### XPCOM

- Das `nsIDOMWindow` Interface ist jetzt leer. Dessen Inhalte wurden entweder nicht mehr verwendet, sind an andere Orte verschoben worden oder wurden nur von C++ genutzt. Die Elemente, die vom C++-Code verfügbar sind, befinden sich jetzt im [nsPIDOMWindow](https://searchfox.org/mozilla-central/source/dom/base/nsPIDOMWindow.h) Interface ([Firefox-Bug 1216401](https://bugzil.la/1216401)).

### Sonstiges

- Aufgrund von Änderungen in Firefox 44 ([Bug 1202902](https://bugzil.la/1202902)) funktionieren Add-ons, die mit [cfx](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx) gepackt sind, nicht mehr. Um Ihr Add-on wieder kompatibel zu machen, verwenden Sie bitte [jpm](/de/docs/Mozilla/Add-ons/SDK/Tools/jpm). Siehe den [_cfx_ zu _jpm_ Migrationsleitfaden](/de/docs/Mozilla/Add-ons/SDK/Tools/cfx_to_jpm).

## Ältere Versionen

{{Firefox_for_developers}}
