---
title: "Firefox 46: Versionshinweise für Entwickler"
short-title: Firefox 46
slug: Mozilla/Firefox/Releases/46
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

[Installieren Sie Firefox Developer Edition, um die neuesten Entwicklerfunktionen von Firefox zu testen](https://www.firefox.com/en-US/channel/desktop/developer/).
Firefox 46 wurde am 26. April 2016 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die für Webentwickler ebenso nützlich sind wie für Firefox-, Gecko- und Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Dominatorenansicht im Memory-Werkzeug](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [Ansicht der Speicherzuweisungen im Performance-Werkzeug](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [Bedingungen von @media-Regeln im Style Editor mit einem Klick anwenden](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[Alle zwischen Firefox 45 und Firefox 46 behobenen Fehler in den Entwicklerwerkzeugen.](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- Bei einem ungültigen `type`-Wert wird {{HTMLElement("ul")}} nicht mehr als `decimal` interpretiert, sondern verhält sich nun so, als wäre kein `type`-Wert angegeben worden ([Firefox-Bug 241719](https://bugzil.la/241719)).
- Das Attribut `pattern` von {{HTMLElement("input")}} wird nun als {{jsxref("RegExp", "a regular expression", "", 1)}} mit dem `"u"`-Flag (Unicode) behandelt ([Firefox-Bug 1227906](https://bugzil.la/1227906)).

### CSS

- Unsere Implementierung von CSS Grid wurde aktualisiert:
  - Die Schlüsselwörter `auto-fill` und `auto-fit` sind nun in der Funktion `repeat()` zulässig ([Firefox-Bug 1118820](https://bugzil.la/1118820)).
  - Der Wert `true` wurde in `unsafe` umbenannt; dies betrifft die Eigenschaften {{cssxref("justify-content")}}, {{cssxref("align-content")}}, {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} ([Firefox-Bug 1230478](https://bugzil.la/1230478)).

- Die Eigenschaften {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} und {{cssxref("text-emphasis-position")}} sind nun standardmäßig aktiviert ([Firefox-Bug 1231485](https://bugzil.la/1231485)).
- Gecko akzeptiert nun die mit `-webkit-` präfixierten Versionen [einiger Eigenschaften](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility). Dazu muss `layout.css.prefixes.webkit` auf `true` gesetzt werden ([Firefox-Bug 1213126](https://bugzil.la/1213126)).
- Experimentelle Unterstützung für den Deskriptor {{cssxref("@font-face/font-display", "font-display")}} von {{cssxref("@font-face")}}; dazu muss `layout.css.font-display.enabled` auf `true` gesetzt werden ([Firefox-Bug 1157064](https://bugzil.la/1157064)).
- Unterstützung für [`@media (-webkit-transform-3d)`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d) als Media Query für die Unterstützung von 3D-Transformationen hinzugefügt, sofern die about:config-Einstellung `layout.css.prefixes.webkit` auf `true` gesetzt ist ([Firefox-Bug 1239799](https://bugzil.la/1239799)).
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}} unterstützt nun das Weglassen der Einheit bei `0deg` ([Firefox-Bug 1239153](https://bugzil.la/1239153)).
- `-webkit-filter` wurde für die Webkompatibilität hinzugefügt. Die Unterstützung wird über die Einstellung `layout.css.prefixes.webkit` gesteuert, die standardmäßig auf `false` gesetzt ist ([Firefox-Bug 1236506](https://bugzil.la/1236506)).
- \[css-align] „unsafe start“ (zuvor „true start“) sollte als „start“ serialisiert werden usw. ([Firefox-Bug 1230398](https://bugzil.la/1230398)).

### JavaScript

- Das ES2015-{{jsxref("RegExp.prototype.unicode", "RegExp unicode (u) flag", "", 1)}} wurde implementiert ([Firefox-Bug 1135377](https://bugzil.la/1135377)).
- Funktionen auf Blockebene gemäß ES2015 wurden implementiert ([Firefox-Bug 1071646](https://bugzil.la/1071646)).
- Die ES2015-Methode {{jsxref("TypedArray.prototype.sort()")}} wurde implementiert ([Firefox-Bug 1121937](https://bugzil.la/1121937)).
- Das ES2015-[`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) wurde implementiert ([Firefox-Bug 1067049](https://bugzil.la/1067049)).
- Die experimentelle [ECMAScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) wurde implementiert. Siehe die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}}. Um diese experimentelle API zu verwenden, setzen Sie `javascript.options.shared_memory` in about:config auf `true`.
- Die erneute Deklaration von Variablen mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) löst nun gemäß der ECMAScript-Spezifikation einen {{jsxref("SyntaxError")}} statt eines {{jsxref("TypeError")}} aus ([Firefox-Bug 1198833](https://bugzil.la/1198833)).
- Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) löst das Setzen von Eigenschaften auf {{Glossary("primitive", "primitiven")}} Werten nun einen {{jsxref("TypeError")}} aus ([Firefox-Bug 603201](https://bugzil.la/603201)).
- Die nicht standardisierten Methoden `WeakMap.prototype.clear()` und `WeakSet.prototype.clear()` wurden entfernt ([Firefox-Bug 1101817](https://bugzil.la/1101817)).
- Die nicht standardisierte statische Eigenschaft `RegExp.multiline` ist nun als veraltet gekennzeichnet ([Firefox-Bug 1220457](https://bugzil.la/1220457)).
- Die Namen integrierter Zugriffsfunktionen haben nun ein „get“- oder „set“-Präfix ([Firefox-Bug 1180290](https://bugzil.la/1180290), [Firefox-Bug 1235656](https://bugzil.la/1235656)).
- [Veraltete Array- und Generator-Comprehensions aus JS1.7/JS1.8](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox-Bug 1220564](https://bugzil.la/1220564)).

### Schnittstellen/APIs/DOM

#### DOM und HTML-DOM

- Die veraltete Methode `Window.showModalDialog()` ist nicht mehr verfügbar, wenn Firefox im Mehrprozessmodus (e10s) ausgeführt wird ([Firefox-Bug 1234700](https://bugzil.la/1234700)).
- Unterstützung für [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint) hinzugefügt ([Firefox-Bug 1164427](https://bugzil.la/1164427)).
- Wenn eine nicht vorhandene Option eines {{HTMLElement("select")}}-Elements programmatisch ausgewählt wird, bleiben die Werte nicht mehr fälschlicherweise unverändert: [`selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex) wird nun auf `-1` gesetzt, [`selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) auf eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) und [`value`](/de/docs/Web/API/HTMLSelectElement/value) auf eine leere Zeichenfolge ([Firefox-Bug 1203668](https://bugzil.la/1203668)).

#### Canvas

- Die verbleibenden Teile der experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API wurden implementiert. Neue Funktionen sind der Konstruktor [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas), `OffscreenCanvas.toBlob()` und [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap). Um diese experimentelle API zu verwenden, setzen Sie `gfx.offscreencanvas.enabled` in about:config auf `true` ([Firefox-Bug 1172796](https://bugzil.la/1172796)).
- Die Methode [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) wird nun unterstützt ([Firefox-Bug 1172796](https://bugzil.la/1172796)).
- Der neue Rendering-Kontext [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) wurde implementiert. Verwenden Sie `"bitmaprenderer"` mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) oder [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), um diesen Kontext abzurufen ([Firefox-Bug 1172796](https://bugzil.la/1172796)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) wurde implementiert und ermöglicht die Verwendung [komprimierter ETC2-Texturformate](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) ([Firefox-Bug 917505](https://bugzil.la/917505)). Um diese Erweiterung zu verwenden, setzen Sie die Einstellung `webgl.enable-draft-extensions` in about:config auf `true`.

#### IndexedDB

_Keine Änderungen._

#### Service Workers

- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) kann nun nicht mehr `null` sein (siehe [Firefox-Bug 1238213](https://bugzil.la/1238213)).
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) ist nun als SameObject gekennzeichnet (siehe [Firefox-Bug 1238205](https://bugzil.la/1238205)).
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) ist nun als SameObject gekennzeichnet (siehe [Firefox-Bug 1238225](https://bugzil.la/1238225)).

#### Fetch

- Für [`Request.mode`](/de/docs/Web/API/Request/mode) steht nun der neue Wert `navigate` zur Verfügung. Er unterstützt Anfragen, die beim Navigieren zwischen Dokumenten entstehen (siehe [Firefox-Bug 1209081](https://bugzil.la/1209081)).

#### WebRTC

- Die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt nun den Videocodec VP9, der allerdings standardmäßig deaktiviert ist. Um ihn zu aktivieren, setzen Sie die Einstellung `media.peerconnection.video.vp9_enabled` in `about:config` auf `true`. Wenn VP9 aktiviert ist, wird dieser Codec bevorzugt; zuvor wurde VP8 bevorzugt ([Firefox-Bug 1242324](https://bugzil.la/1242324)).
- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) wurde hinzugefügt. Mit ihr können Parameterwerte geändert werden, nachdem der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) erstellt wurde.

#### Neue APIs

- In SVG implementiert die Schnittstelle [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement) nun das Mixin `LinkStyle` ([Firefox-Bug 1239128](https://bugzil.la/1239128)).

#### Sonstiges

- Der asynchrone [`FileReader`](/de/docs/Web/API/FileReader) ist nun in Web Workern verfügbar ([Firefox-Bug 901097](https://bugzil.la/901097)).
- Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde aktualisiert:
  - Das Dictionary `AnimationEffectTimingReadOnly` und [`AnimationEffectReadOnly.timing`](/de/docs/Web/API/AnimationEffect/getTiming) wurden implementiert ([Firefox-Bug 1214536](https://bugzil.la/1214536)).

- Die [Permissions API](/de/docs/Web/API/Permissions_API) ist nun standardmäßig in allen Release-Versionen aktiviert und nicht mehr nur in Nightly ([Firefox-Bug 1221106](https://bugzil.la/1221106)).
- Die Bereinigung von WOFF-Schriftarten wurde etwas gelockert ([Firefox-Bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## HTTP

_Keine Änderungen._

## Netzwerk

- Unterstützung für {{rfc(7686)}} wurde hinzugefügt: Standardmäßig wird nicht versucht, Domains mit der TLD `.onion` aufzulösen. Dies wird über die Einstellung `network.dns.blockDotOnion` gesteuert. Add-ons mit Tor-Unterstützung können diese Einstellung ändern ([Firefox-Bug 1228457](https://bugzil.la/1228457)).

## Sicherheit

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderungen._

### XUL

_Keine Änderungen._

### JavaScript-Codemodule

_Keine Änderungen._

### XPCOM

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._
