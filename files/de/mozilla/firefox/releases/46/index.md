---
title: Firefox 46 für Entwickler
slug: Mozilla/Firefox/Releases/46
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 46 wurde am 26. April 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Dominators-Ansicht im Memory-Tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [Zuordnungen-Ansicht im Performance-Tool](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [Ein Klick, um `@media`-Regelbedingungen im Stil-Editor anzuwenden](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[Alle behobenen Devtools-Fehler zwischen Firefox 45 und Firefox 46.](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- Bei einem ungültigen `type`-Wert wird {{HTMLElement("ul")}} nicht mehr zu `decimal` zugeordnet, sondern verhält sich jetzt so, als wäre kein `type`-Wert angegeben ([Firefox Fehler 241719](https://bugzil.la/241719)).
- Das Attribut `pattern` auf {{HTMLElement("input")}} wird jetzt als {{jsxref("RegExp", "regulärer Ausdruck", "", 1)}} mit der `"u"` (unicode) Flag behandelt ([Firefox Fehler 1227906](https://bugzil.la/1227906)).

### CSS

- Unsere Implementierung von CSS Grids wurde aktualisiert:

  - Die Schlüsselwörter `auto-fill` und `auto-fit` sind jetzt in der `repeat()`-Funktion erlaubt ([Firefox Fehler 1118820](https://bugzil.la/1118820)).
  - Der Wert `true` wurde in `unsafe` umbenannt; dies betrifft die Eigenschaften {{cssxref("justify-content")}}, {{cssxref("align-content")}}, {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} ([Firefox Fehler 1230478](https://bugzil.la/1230478)).

- Die Eigenschaften {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} und {{cssxref("text-emphasis-position")}} sind jetzt standardmäßig aktiviert ([Firefox Fehler 1231485](https://bugzil.la/1231485)).
- Gecko akzeptiert nun die `-webkit-`-präfixierte Version [einiger Eigenschaften](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility); hierfür muss `layout.css.prefixes.webkit` auf `true` gesetzt werden ([Firefox Fehler 1213126](https://bugzil.la/1213126)).
- Die experimentelle Unterstützung des {{cssxref("@font-face/font-display", "font-display")}} Deskriptors (von {{cssxref("@font-face")}}; hierfür muss `layout.css.font-display.enabled` auf `true` gesetzt werden ([Firefox Fehler 1157064](https://bugzil.la/1157064)).
- Unterstützung für [`@media (-webkit-transform-3d)`](/de/docs/Web/CSS/@media/-webkit-transform-3d) als Media-Query für 3D-Transform-Unterstützung, wenn die about:config-Einstellung `layout.css.prefixes.webkit` auf `true` gesetzt ist ([Firefox Fehler 1239799](https://bugzil.la/1239799)).
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Unterstützung für das Weglassen von `0deg` Einheiten ([Firefox Fehler 1239153](https://bugzil.la/1239153)).
- `-webkit-filter` wurde aus Gründen der Webkompatibilität hinzugefügt, hinter der Voreinstellung `layout.css.prefixes.webkit`, standardmäßig `false` ([Firefox Fehler 1236506](https://bugzil.la/1236506)).
- \[css-align] "unsafe start" (früher "true start") sollte zu "start" usw. serialisiert werden ([Firefox Fehler 1230398](https://bugzil.la/1230398)).

### JavaScript

- Das ES2015 {{jsxref("RegExp.prototype.unicode", "RegExp unicode (u) Flag", "", 1)}} wurde implementiert ([Firefox Fehler 1135377](https://bugzil.la/1135377)).
- Die Block-Level-Funktionen von ES2015 wurden implementiert ([Firefox Fehler 1071646](https://bugzil.la/1071646)).
- Die ES2015 {{jsxref("TypedArray.prototype.sort()")}} Methode wurde implementiert ([Firefox Fehler 1121937](https://bugzil.la/1121937)).
- Die ES2015 {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}} wurde implementiert ([Firefox Fehler 1067049](https://bugzil.la/1067049)).
- Die experimentelle [ECMAScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) wurde implementiert. Siehe die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}}. Um diese experimentelle API zu verwenden, setzen Sie `javascript.options.shared_memory` in about:config auf `true`.
- Die Neudeklaration von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Variablen wirft nun einen {{jsxref("SyntaxError")}} anstelle eines {{jsxref("TypeError")}}, entsprechend der ECMAScript-Spezifikation ([Firefox Fehler 1198833](https://bugzil.la/1198833)).
- Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird das Setzen von Eigenschaften auf [primitiven](/de/docs/Glossary/primitive) Werten jetzt einen {{jsxref("TypeError")}} auslösen ([Firefox Fehler 603201](https://bugzil.la/603201)).
- Die nicht standardisierten Methoden `WeakMap.prototype.clear()` und `WeakSet.prototype.clear()` wurden entfernt ([Firefox Fehler 1101817](https://bugzil.la/1101817)).
- Die nicht standardisierte, statische `RegExp.multiline` Eigenschaft ist jetzt veraltet ([Firefox Fehler 1220457](https://bugzil.la/1220457)).
- Eingebaute Accessor-Funktionsnamen haben jetzt ein "get"- oder "set"-Präfix ([Firefox Fehler 1180290](https://bugzil.la/1180290), [Firefox Fehler 1235656](https://bugzil.la/1235656)).
- [JS1.7/JS1.8 (Legacy) Array-Comprehensions und Generator-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox Fehler 1220564](https://bugzil.la/1220564)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die veraltete [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) Methode ist nicht mehr verfügbar, wenn Firefox im Mehrprozessmodus (e10s) läuft ([Firefox Fehler 1234700](https://bugzil.la/1234700)).
- Unterstützung für [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint) hinzugefügt ([Firefox Fehler 1164427](https://bugzil.la/1164427)).
- Wenn ein nicht existierendes Element eines {{HTMLElement("select")}} Elements programmgesteuert ausgewählt wird, wird der [`selectedIndex`](/de/docs/Web/HTML/Element/select#selectedindex) Wert statt falsch beibehalten nun auf `-1` gesetzt, die [`selectedOptions`](/de/docs/Web/HTML/Element/select#selectedoptions) auf ein leeres [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), und [`value`](/de/docs/Web/HTML/Element/select#value) auf einen leeren String ([Firefox Fehler 1203668](https://bugzil.la/1203668)).

#### Canvas

- Die restlichen Teile der experimentellen [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API wurden implementiert; neue Funktionen: [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas) Konstruktor, `OffscreenCanvas.toBlob()`, und [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap). Um diese experimentelle API zu verwenden, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox Fehler 1172796](https://bugzil.la/1172796)).
- Die Methode [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) wird jetzt unterstützt ([Firefox Fehler 1172796](https://bugzil.la/1172796)).
- Ein neuer [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) Rendering-Kontext ist jetzt implementiert. Verwenden Sie `"bitmaprenderer"` mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) oder [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), um diesen Kontext zu erhalten. ([Firefox Fehler 1172796](https://bugzil.la/1172796)).

#### WebGL

- Die [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) Erweiterung wurde implementiert, die die Verwendung von [ETC2 komprimierten Texturformaten](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) ermöglicht ([Firefox Fehler 917505](https://bugzil.la/917505)). Um diese Erweiterung zu verwenden, setzen Sie die Voreinstellung `webgl.enable-draft-extensions` auf `true` in about:config.

#### IndexedDB

_Keine Änderung._

#### Service Workers

- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) ist jetzt nicht mehr nullable (siehe [Firefox Fehler 1238213](https://bugzil.la/1238213).)
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) wurde jetzt als SameObject markiert (siehe [Firefox Fehler 1238205](https://bugzil.la/1238205).)
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) wurde jetzt als SameObject markiert (siehe [Firefox Fehler 1238225](https://bugzil.la/1238225).)

#### Fetch

- [`Request.mode`](/de/docs/Web/API/Request/mode) hat jetzt einen neuen Wert verfügbar, `navigate`, um Anfragen zu unterstützen, die beim Navigieren zwischen Dokumenten erzeugt werden (siehe [Firefox Fehler 1209081](https://bugzil.la/1209081).)

#### WebRTC

- Die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt jetzt den VP9-Videocodec, obwohl dieser standardmäßig deaktiviert ist. Um ihn zu aktivieren, setzen Sie die Voreinstellung `media.peerconnection.video.vp9_enabled` auf `true` in `about:config`. Bei Aktivierung ist VP9 der bevorzugte Codec; zuvor war VP8 bevorzugt ([Firefox Fehler 1242324](https://bugzil.la/1242324)).
- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) wurde hinzugefügt, um die Werte von Parametern zu ändern, nachdem der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) initial erstellt wurde.

#### Neue APIs

- Im SVG implementiert das Interface [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement) jetzt das `LinkStyle` Mixin ([Firefox Fehler 1239128](https://bugzil.la/1239128)).

#### Verschiedenes

- Die asynchrone [`FileReader`](/de/docs/Web/API/FileReader) ist jetzt in Web-Workern verfügbar ([Firefox Fehler 901097](https://bugzil.la/901097)).
- Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde aktualisiert:

  - Das `AnimationEffectTimingReadOnly`-Wörterbuch und [`AnimationEffectReadOnly.timing`](/de/docs/Web/API/AnimationEffect/getTiming) wurden implementiert ([Firefox Fehler 1214536](https://bugzil.la/1214536)).

- Die [Permissions API](/de/docs/Web/API/Permissions_API) ist jetzt standardmäßig für alle freigegebenen Versionen, nicht nur für Nightly, aktiviert ([Firefox Fehler 1221106](https://bugzil.la/1221106).)
- Die Überprüfung von WOFF-Schriftarten wurde etwas gelockert ([Firefox Fehler 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

_Keine Änderung._

## Netzwerke

- Unterstützung von {{rfc(7686)}} wurde hinzugefügt: Standardmäßig wird nicht versucht, Domänen mit der TLD `.onion` zu lösen. Dies wird durch die Voreinstellung `network.dns.blockDotOnion` gesteuert. Erweiterungen, die Tor unterstützen, können diese Voreinstellung ändern ([Firefox Fehler 1228457](https://bugzil.la/1228457)).

## Sicherheit

_Keine Änderung._

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderung._

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
