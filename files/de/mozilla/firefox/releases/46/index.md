---
title: Firefox 46 Versionshinweise für Entwickler
short-title: Firefox 46
slug: Mozilla/Firefox/Releases/46
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/).
Firefox 46 wurde am 26. April 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

Highlights:

- [Dominators-Ansicht im Memory-Tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [Zuweisungsansicht im Performance-Tool](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [Ein-Klick, um Bedingungen von @media-Regeln im Style Editor anzuwenden](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[Alle behobenen DevTools-Bugs zwischen Firefox 45 und Firefox 46.](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- Bei einem ungültigen `type`-Wert wird {{HTMLElement("ul")}} nicht mehr zu `decimal` zugeordnet, sondern verhält sich so, als wäre kein `type`-Wert angegeben ([Firefox-Bug 241719](https://bugzil.la/241719)).
- Das Attribut `pattern` auf {{HTMLElement("input")}} wird jetzt als {{jsxref("RegExp", "ein regulärer Ausdruck", "", 1)}} mit dem `"u"` (unicode) Flag behandelt ([Firefox-Bug 1227906](https://bugzil.la/1227906)).

### CSS

- Unsere Implementierung von CSS Grids wurde aktualisiert:
  - Die Schlüsselwörter `auto-fill` und `auto-fit` sind jetzt in der Funktion `repeat()` erlaubt ([Firefox-Bug 1118820](https://bugzil.la/1118820)).
  - Der Wert `true` wurde zu `unsafe` umbenannt; dies betrifft die Eigenschaften {{cssxref("justify-content")}}, {{cssxref("align-content")}}, {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} ([Firefox-Bug 1230478](https://bugzil.la/1230478)).

- Die Eigenschaften {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} und {{cssxref("text-emphasis-position")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1231485](https://bugzil.la/1231485)).
- Gecko akzeptiert jetzt die `-webkit-`-präsentierte Version von [einigen Eigenschaften](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility); es erfordert, dass `layout.css.prefixes.webkit` auf `true` gesetzt wird ([Firefox-Bug 1213126](https://bugzil.la/1213126)).
- Der experimentelle Support für den {{cssxref("@font-face/font-display", "font-display")}} Deskriptor (von {{cssxref("@font-face")}} erfordert, dass `layout.css.font-display.enabled` auf `true` gesetzt wird ([Firefox-Bug 1157064](https://bugzil.la/1157064)).
- Unterstützung hinzugefügt für [`@media (-webkit-transform-3d)`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d) als eine Media-Abfrage für 3D-Transformations-Unterstützung, wenn about:config Pref `layout.css.prefixes.webkit` auf `true` gesetzt ist ([Firefox-Bug 1239799](https://bugzil.la/1239799)).
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Unterstützung für das Weglassen von `0deg` Einheiten ([Firefox-Bug 1239153](https://bugzil.la/1239153)).
- `-webkit-filter` für Web-Kompatibilität hinzugefügt, hinter der Präferenz `layout.css.prefixes.webkit`, standardmäßig `false` ([Firefox-Bug 1236506](https://bugzil.la/1236506)).
- \[css-align] "unsafe start" (früher "true start") sollte zu "start" usw. serialisiert werden ([Firefox-Bug 1230398](https://bugzil.la/1230398)).

### JavaScript

- Das ES2015 {{jsxref("RegExp.prototype.unicode", "RegExp unicode (u) Flag", "", 1)}} wurde implementiert ([Firefox-Bug 1135377](https://bugzil.la/1135377)).
- Die ES2015 block-level Funktionen wurden implementiert ([Firefox-Bug 1071646](https://bugzil.la/1071646)).
- Die ES2015 {{jsxref("TypedArray.prototype.sort()")}} Methode wurde implementiert ([Firefox-Bug 1121937](https://bugzil.la/1121937)).
- Das ES2015 [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) wurde implementiert ([Firefox-Bug 1067049](https://bugzil.la/1067049)).
- Das experimentelle [ECMAScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) wurde implementiert. Siehe die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}}. Um dieses experimentelle API zu nutzen, setzen Sie `javascript.options.shared_memory` auf `true` in about:config.
- Die Neudeklaration von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Variablen löst jetzt einen {{jsxref("SyntaxError")}} anstelle eines {{jsxref("TypeError")}} aus, gemäß der ECMAScript-Spezifikation ([Firefox-Bug 1198833](https://bugzil.la/1198833)).
- Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird das Setzen von Eigenschaften auf {{Glossary("primitive", "primitive")}} Werte jetzt einen {{jsxref("TypeError")}} auslösen ([Firefox-Bug 603201](https://bugzil.la/603201)).
- Die nicht-standardisierten `WeakMap.prototype.clear()` und `WeakSet.prototype.clear()` Methoden wurden entfernt ([Firefox-Bug 1101817](https://bugzil.la/1101817)).
- Die nicht-standardisierte, statische `RegExp.multiline` Eigenschaft ist jetzt veraltet ([Firefox-Bug 1220457](https://bugzil.la/1220457)).
- Eingebaute Zugriffsfunktion-Namen haben jetzt ein "get" oder "set" Präfix ([Firefox-Bug 1180290](https://bugzil.la/1180290), [Firefox-Bug 1235656](https://bugzil.la/1235656)).
- [JS1.7/JS1.8 (veraltete) Array-Comprehensions und Generator-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox-Bug 1220564](https://bugzil.la/1220564)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die veraltete Methode `Window.showModalDialog()` ist nicht mehr verfügbar, wenn Firefox im Mehrprozessmodus (e10s) ausgeführt wird ([Firefox-Bug 1234700](https://bugzil.la/1234700)).
- Unterstützung hinzugefügt für [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint) ([Firefox-Bug 1164427](https://bugzil.la/1164427)).
- Wenn eine nicht existierende Option eines {{HTMLElement("select")}} Elements programmatisch ausgewählt wird, wird der [`selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex) Wert jetzt auf `-1` gesetzt, die [`selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) auf eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), und der [`value`](/de/docs/Web/API/HTMLSelectElement/value) auf einen leeren String ([Firefox-Bug 1203668](https://bugzil.la/1203668)).

#### Canvas

- Die verbleibenden Teile des experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API wurden implementiert; neue Funktionen: Konstruktor [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas), `OffscreenCanvas.toBlob()`, und [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap). Um dieses experimentelle API zu verwenden, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox-Bug 1172796](https://bugzil.la/1172796)).
- Die Methode [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) wird jetzt unterstützt ([Firefox-Bug 1172796](https://bugzil.la/1172796)).
- Ein neues [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) Rendering-Kontext ist jetzt implementiert. Verwenden Sie `"bitmaprenderer"` mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) oder [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) um diesen Kontext zu erhalten. ([Firefox-Bug 1172796](https://bugzil.la/1172796)).

#### WebGL

- Die [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) Erweiterung wurde implementiert, wodurch die Verwendung von [ETC2 komprimierten Texturformaten](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) ermöglicht wird ([Firefox-Bug 917505](https://bugzil.la/917505)). Um diese Erweiterung zu verwenden setzen Sie die Präferenz `webgl.enable-draft-extensions` auf `true` in about:config.

#### IndexedDB

_Keine Änderung._

#### Service Workers

- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) ist jetzt nicht-nullbar (siehe [Firefox-Bug 1238213](https://bugzil.la/1238213).)
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) wurde jetzt als SameObject markiert (siehe [Firefox-Bug 1238205](https://bugzil.la/1238205).)
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) wurde jetzt als SameObject markiert (siehe [Firefox-Bug 1238225](https://bugzil.la/1238225).)

#### Fetch

- [`Request.mode`](/de/docs/Web/API/Request/mode) hat jetzt einen neuen Wert verfügbar, `navigate`, für die Unterstützung von Anfragen, die bei der Navigation zwischen Dokumenten generiert wurden (siehe [Firefox-Bug 1209081](https://bugzil.la/1209081).)

#### WebRTC

- Die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt jetzt den VP9 Video-Codec, obwohl dieser standardmäßig deaktiviert ist. Um ihn zu aktivieren, setzen Sie die Präferenz `media.peerconnection.video.vp9_enabled` auf `true` in `about:config`. Wenn aktiviert, ist VP9 der bevorzugte Codec; vorher war VP8 bevorzugt ([Firefox-Bug 1242324](https://bugzil.la/1242324)).
- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) wurde hinzugefügt, um die Werte von Parametern nach der initialen Erstellung des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zu ändern.

#### Neue APIs

- In SVG implementiert das [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement) Interface jetzt das `LinkStyle` Mixin ([Firefox-Bug 1239128](https://bugzil.la/1239128)).

#### Verschiedenes

- Der asynchrone [`FileReader`](/de/docs/Web/API/FileReader) ist jetzt in Web-Workern verfügbar ([Firefox-Bug 901097](https://bugzil.la/901097)).
- Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde aktualisiert:
  - Das `AnimationEffectTimingReadOnly` Wörterbuch und [`AnimationEffectReadOnly.timing`](/de/docs/Web/API/AnimationEffect/getTiming) wurden implementiert ([Firefox-Bug 1214536](https://bugzil.la/1214536)).

- Die [Permissions API](/de/docs/Web/API/Permissions_API) wurde jetzt standardmäßig für alle Veröffentlichungs-Versionen aktiviert und nicht nur für Nightly, wie es zuvor war ([Firefox-Bug 1221106](https://bugzil.la/1221106).)
- Die Bereinigung von WOFF-Schriftarten wurde etwas gelockert ([Firefox-Bug 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

_Keine Änderung._

## Netzwerk

- Unterstützung von {{rfc(7686)}} wurde hinzugefügt: Standardmäßig gibt es keinen Versuch, eine Domain mit der TLD `.onion` aufzulösen. Dies wird durch die Präferenz `network.dns.blockDotOnion` gesteuert. Add-ons, die Tor unterstützen, können diese Präferenz ändern. ([Firefox-Bug 1228457](https://bugzil.la/1228457))

## Sicherheit

_Keine Änderung._

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderung._

### XUL

_Keine Änderung._

### JavaScript Code Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Sonstiges

_Keine Änderung._
