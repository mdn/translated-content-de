---
title: Firefox 46 für Entwickler
short-title: Firefox 46
slug: Mozilla/Firefox/Releases/46
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/).
Firefox 46 wurde am 26. April 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

Highlights:

- [Dominators-Ansicht im Speicher-Tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [Zuweisungsansicht im Performance-Tool](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [Ein Klick, um Bedingungen von @media-Regeln im Style-Editor anzuwenden](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[Alle Developer-Tools-Bugs, die zwischen Firefox 45 und Firefox 46 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- Wenn ein ungültiger `type`-Wert vorliegt, wird {{HTMLElement("ul")}} nicht mehr zu `decimal` abgebildet, sondern verhält sich jetzt so, als wäre kein `type`-Wert angegeben ([Firefox-Bug 241719](https://bugzil.la/241719)).
- Das Attribut `pattern` auf {{HTMLElement("input")}} wird jetzt als {{jsxref("RegExp", "ein regulärer Ausdruck", "", 1)}} mit dem `"u"` (Unicode)-Flag behandelt ([Firefox-Bug 1227906](https://bugzil.la/1227906)).

### CSS

- Unsere Implementierung von CSS Grids wurde aktualisiert:
  - Die Schlüsselwörter `auto-fill` und `auto-fit` sind jetzt in der `repeat()`-Funktion erlaubt ([Firefox-Bug 1118820](https://bugzil.la/1118820)).
  - Der Wert `true` wurde in `unsafe` umbenannt; dies betrifft die Eigenschaften {{cssxref("justify-content")}}, {{cssxref("align-content")}}, {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} ([Firefox-Bug 1230478](https://bugzil.la/1230478)).

- Die Eigenschaften {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} und {{cssxref("text-emphasis-position")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1231485](https://bugzil.la/1231485)).
- Gecko akzeptiert jetzt die `-webkit-`-präfixierte Version einiger [Eigenschaften](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility); es erfordert das Umschalten von `layout.css.prefixes.webkit` auf `true` ([Firefox-Bug 1213126](https://bugzil.la/1213126)).
- Der experimentelle Support des {{cssxref("@font-face/font-display", "font-display")}}-Descriptors (von {{cssxref("@font-face")}}; es erfordert das Umschalten von `layout.css.font-display.enabled` auf `true` ([Firefox-Bug 1157064](https://bugzil.la/1157064)).
- Unterstützung für [`@media (-webkit-transform-3d)`](/de/docs/Web/CSS/@media/-webkit-transform-3d) als Media Query für 3D-Transform-Support hinzugefügt, wenn about:config-Pref `layout.css.prefixes.webkit` auf `true` gesetzt ist ([Firefox-Bug 1239799](https://bugzil.la/1239799)).
- Unterstützung für das Weglassen von `0deg`-Einheiten in {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ([Firefox-Bug 1239153](https://bugzil.la/1239153)).
- `-webkit-filter` wurde für die Web-Kompatibilität hinzugefügt, hinter dem Präfix `layout.css.prefixes.webkit`, standardmäßig auf `false` ([Firefox-Bug 1236506](https://bugzil.la/1236506)).
- \[css-align] "unsafe start" (ehemals "true start") soll zu "start" usw. serialisiert werden ([Firefox-Bug 1230398](https://bugzil.la/1230398)).

### JavaScript

- Das ES2015 {{jsxref("RegExp.prototype.unicode", "RegExp unicode (u) flag", "", 1)}} wurde implementiert ([Firefox-Bug 1135377](https://bugzil.la/1135377)).
- Die ES2015 Block-Level-Funktionen wurden implementiert ([Firefox-Bug 1071646](https://bugzil.la/1071646)).
- Die ES2015 {{jsxref("TypedArray.prototype.sort()")}}-Methode wurde implementiert ([Firefox-Bug 1121937](https://bugzil.la/1121937)).
- Die ES2015 [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) wurde implementiert ([Firefox-Bug 1067049](https://bugzil.la/1067049)).
- Das experimentelle [ECMAScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) wurde implementiert. Siehe die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}}. Um dieses experimentelle API zu verwenden, setzen Sie `javascript.options.shared_memory` in about:config auf `true`.
- Die Neudeklaration von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Variablen wirft jetzt einen {{jsxref("SyntaxError")}} anstelle eines {{jsxref("TypeError")}}, wie in der ECMAScript-Spezifikation ([Firefox-Bug 1198833](https://bugzil.la/1198833)).
- Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt das Setzen von Eigenschaften auf {{Glossary("primitive", "primitiven")}} Werten jetzt zu einem {{jsxref("TypeError")}} ([Firefox-Bug 603201](https://bugzil.la/603201)).
- Die nicht standardmäßigen Methoden `WeakMap.prototype.clear()` und `WeakSet.prototype.clear()` wurden entfernt ([Firefox-Bug 1101817](https://bugzil.la/1101817)).
- Die nicht standardmäßige, statische Eigenschaft `RegExp.multiline` ist jetzt veraltet ([Firefox-Bug 1220457](https://bugzil.la/1220457)).
- Namen von eingebauten Zugriffsfunktionen haben jetzt ein "get"- oder "set"-Präfix ([Firefox-Bug 1180290](https://bugzil.la/1180290), [Firefox-Bug 1235656](https://bugzil.la/1235656)).
- [JS1.7/JS1.8 (legacy) Array-Comprehensions und Generator-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox-Bug 1220564](https://bugzil.la/1220564)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die veraltete Methode `Window.showModalDialog()` ist nicht mehr verfügbar, wenn Firefox im Mehrprozessmodus (e10s) ausgeführt wird ([Firefox-Bug 1234700](https://bugzil.la/1234700)).
- Unterstützung für [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint) hinzugefügt ([Firefox-Bug 1164427](https://bugzil.la/1164427)).
- Wenn eine nicht vorhandene Option eines {{HTMLElement("select")}}-Elements programmgesteuert ausgewählt wird, wird der Wert von [`selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex) jetzt auf `-1`, die [`selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) auf eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), und [`value`](/de/docs/Web/API/HTMLSelectElement/value) auf eine leere Zeichenkette gesetzt ([Firefox-Bug 1203668](https://bugzil.la/1203668)).

#### Canvas

- Die verbleibenden Teile der experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API wurden implementiert; neue Features: [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas) Konstruktor, `OffscreenCanvas.toBlob()`, und [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap). Um diese experimentelle API zu nutzen, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox-Bug 1172796](https://bugzil.la/1172796)).
- Die Methode [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) wird jetzt unterstützt ([Firefox-Bug 1172796](https://bugzil.la/1172796)).
- Ein neuer [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) Renderkontext ist nun implementiert. Verwenden Sie `"bitmaprenderer"` mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) oder [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), um diesen Kontext zu erhalten. ([Firefox-Bug 1172796](https://bugzil.la/1172796)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) wurde implementiert, wodurch die Verwendung von [ETC2-komprimierten Texturformaten](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) ermöglicht wird ([Firefox-Bug 917505](https://bugzil.la/917505)). Um diese Erweiterung zu verwenden, setzen Sie die Einstellung `webgl.enable-draft-extensions` auf `true` in about:config.

#### IndexedDB

_Keine Veränderung._

#### Service Workers

- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) ist jetzt nicht nullifizierbar (siehe [Firefox-Bug 1238213](https://bugzil.la/1238213).)
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) wurde jetzt als SameObject markiert (siehe [Firefox-Bug 1238205](https://bugzil.la/1238205).)
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) wurde jetzt als SameObject markiert (siehe [Firefox-Bug 1238225](https://bugzil.la/1238225).)

#### Fetch

- [`Request.mode`](/de/docs/Web/API/Request/mode) hat nun einen neuen verfügbaren Wert, `navigate`, zur Unterstützung von Anfragen, die beim Navigieren zwischen Dokumenten generiert werden (siehe [Firefox-Bug 1209081](https://bugzil.la/1209081).)

#### WebRTC

- Die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt jetzt den VP9-Video-Codec, obwohl dieser standardmäßig deaktiviert ist. Um ihn zu aktivieren, setzen Sie die Einstellung `media.peerconnection.video.vp9_enabled` auf `true` in `about:config`. Bei Aktivierung ist VP9 der bevorzugte Codec; zuvor war VP8 bevorzugt ([Firefox-Bug 1242324](https://bugzil.la/1242324)).
- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) wurde hinzugefügt, um die Werte von Parametern nach der anfänglichen Erstellung des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zu ändern.

#### Neue APIs

- In SVG implementiert das [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement) Interface nun das `LinkStyle` Mixin ([Firefox-Bug 1239128](https://bugzil.la/1239128)).

#### Sonstiges

- Der asynchrone [`FileReader`](/de/docs/Web/API/FileReader) ist jetzt in Webarbeitern verfügbar ([Firefox-Bug 901097](https://bugzil.la/901097)).
- Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde aktualisiert:
  - Das Dictionary `AnimationEffectTimingReadOnly` und [`AnimationEffectReadOnly.timing`](/de/docs/Web/API/AnimationEffect/getTiming) wurden implementiert ([Firefox-Bug 1214536](https://bugzil.la/1214536)).

- Die [Permissions API](/de/docs/Web/API/Permissions_API) ist jetzt standardmäßig für alle Release-Versionen aktiviert, nicht nur für Nightly, wie es zuvor war ([Firefox-Bug 1221106](https://bugzil.la/1221106).)
- Die Überprüfung von WOFF-Schriftarten wurde etwas gelockert ([Firefox-Bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Veränderung._

### SVG

_Keine Veränderung._

### Audio/Video

_Keine Veränderung._

## HTTP

_Keine Veränderung._

## Networking

Die Unterstützung von {{rfc(7686)}} wurde hinzugefügt: standardmäßig wird nicht versucht, eine Domain mit der TLD `.onion` aufzulösen. Dies wird durch die Einstellung `network.dns.blockDotOnion` gesteuert. Add-ons, die Tor unterstützen, können diese Einstellung ändern. ([Firefox-Bug 1228457](https://bugzil.la/1228457))

## Sicherheit

_Keine Veränderung._

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Veränderung._

### XUL

_Keine Veränderung._

### JavaScript-Code-Module

_Keine Veränderung._

### XPCOM

_Keine Veränderung._

### Sonstiges

_Keine Veränderung._
