---
title: Firefox 46 für Entwickler
slug: Mozilla/Firefox/Releases/46
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 46 wurde am 26. April 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Dominators-Ansicht im Speicher-Tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [Zuweisungen-Ansicht im Leistungs-Tool](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [Ein Klick, um @media-Regelbedingungen im Stil-Editor anzuwenden](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[Alle Devtools-Fehler, die zwischen Firefox 45 und Firefox 46 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- Bei einem ungültigen `type`-Wert wird {{HTMLElement("ul")}} nicht mehr auf `decimal` abgebildet, sondern verhält sich so, als wäre kein `type`-Wert angegeben ([Firefox-Fehler 241719](https://bugzil.la/241719)).
- Das Attribut `pattern` auf {{HTMLElement("input")}} wird nun als {{jsxref("RegExp", "ein regulärer Ausdruck", "", 1)}} mit dem `u`- (Unicode-)Flag behandelt ([Firefox-Fehler 1227906](https://bugzil.la/1227906)).

### CSS

- Unsere Implementierung von CSS-Grids wurde aktualisiert:

  - Die Schlüsselwörter `auto-fill` und `auto-fit` sind jetzt in der `repeat()`-Funktion erlaubt ([Firefox-Fehler 1118820](https://bugzil.la/1118820)).
  - Der Wert `true` wurde in `unsafe` umbenannt; dies betrifft die Eigenschaften {{cssxref("justify-content")}}, {{cssxref("align-content")}}, {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} ([Firefox-Fehler 1230478](https://bugzil.la/1230478)).

- Die Eigenschaften {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} und {{cssxref("text-emphasis-position")}} sind nun standardmäßig aktiviert ([Firefox-Fehler 1231485](https://bugzil.la/1231485)).
- Gecko akzeptiert jetzt die `-webkit-`-präfixierte Version von [einigen Eigenschaften](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility); dafür muss `layout.css.prefixes.webkit` auf `true` gesetzt werden ([Firefox-Fehler 1213126](https://bugzil.la/1213126)).
- Die experimentelle Unterstützung des {{cssxref("@font-face/font-display", "font-display")}}-Descriptors (von {{cssxref("@font-face")}}; erfordert das Umschalten von `layout.css.font-display.enabled` auf `true` ([Firefox-Fehler 1157064](https://bugzil.la/1157064)).
- Unterstützung für [`@media (-webkit-transform-3d)`](/de/docs/Web/CSS/@media/-webkit-transform-3d) als Media Query für 3D-Transform-Unterstützung, wenn in about:config die Präferenz `layout.css.prefixes.webkit` auf `true` gesetzt wird ([Firefox-Fehler 1239799](https://bugzil.la/1239799)).
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Unterstützung für das Weglassen von `0deg`-Einheiten ([Firefox-Fehler 1239153](https://bugzil.la/1239153)).
- Hinzugefügt `-webkit-filter` für Web-Kompatibilität, hinter der Präferenz `layout.css.prefixes.webkit`, standardmäßig auf `false` ([Firefox-Fehler 1236506](https://bugzil.la/1236506)).
- \[css-align] "unsafe start" (früher "true start") sollte zu "start" usw. serialisieren ([Firefox-Fehler 1230398](https://bugzil.la/1230398)).

### JavaScript

- Die ES2015 {{jsxref("RegExp.prototype.unicode", "RegExp unicode (u) Flag", "", 1)}} wurde implementiert ([Firefox-Fehler 1135377](https://bugzil.la/1135377)).
- Die ES2015 Block-Level-Funktionen wurden implementiert ([Firefox-Fehler 1071646](https://bugzil.la/1071646)).
- Die ES2015 {{jsxref("TypedArray.prototype.sort()")}} Methode wurde implementiert ([Firefox-Fehler 1121937](https://bugzil.la/1121937)).
- Die ES2015 {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}} wurde implementiert ([Firefox-Fehler 1067049](https://bugzil.la/1067049)).
- Die experimentelle [ECMAScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) wurde implementiert. Siehe die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}}. Um diese experimentelle API zu verwenden, setzen Sie `javascript.options.shared_memory` auf `true` in about:config.
- Die erneute Deklaration von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Variablen wirft jetzt einen {{jsxref("SyntaxError")}} statt eines {{jsxref("TypeError")}} gemäß der ECMAScript-Spezifikation ([Firefox-Fehler 1198833](https://bugzil.la/1198833)).
- Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird das Setzen von Eigenschaften auf {{Glossary("primitive")}} Werten nun einen {{jsxref("TypeError")}} auslösen ([Firefox-Fehler 603201](https://bugzil.la/603201)).
- Die nicht standardisierten Methoden `WeakMap.prototype.clear()` und `WeakSet.prototype.clear()` wurden entfernt ([Firefox-Fehler 1101817](https://bugzil.la/1101817)).
- Die nicht standardisierte, statische Eigenschaft `RegExp.multiline` ist jetzt veraltet ([Firefox-Fehler 1220457](https://bugzil.la/1220457)).
- Eingebaute Accessor-Funktion-Namen haben jetzt den Präfix "get" oder "set" ([Firefox-Fehler 1180290](https://bugzil.la/1180290), [Firefox-Fehler 1235656](https://bugzil.la/1235656)).
- [JS1.7/JS1.8 (legacy) Array-Comprehensions und Generator-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox-Fehler 1220564](https://bugzil.la/1220564)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die veraltete Methode {{domxref("Window.showModalDialog()")}} ist nicht mehr verfügbar, wenn Firefox im Mehrprozessmodus (e10s) läuft ([Firefox-Fehler 1234700](https://bugzil.la/1234700)).
- Unterstützung für {{domxref("Document.elementsFromPoint()")}} hinzugefügt ([Firefox-Fehler 1164427](https://bugzil.la/1164427)).
- Wenn eine nicht vorhandene Option eines {{HTMLElement("select")}} Elements programmgesteuert ausgewählt wird, wird anstelle der bisherigen fälschlichen Beibehaltung der [`selectedIndex`](/de/docs/Web/HTML/Element/select#selectedindex)-Wert jetzt auf `-1` gesetzt, die [`selectedOptions`](/de/docs/Web/HTML/Element/select#selectedoptions) auf eine leere {{domxref("HTMLCollection")}} und [`value`](/de/docs/Web/HTML/Element/select#value) auf eine leere Zeichenkette ([Firefox-Fehler 1203668](https://bugzil.la/1203668)).

#### Canvas

- Die verbleibenden Teile der experimentellen {{domxref("OffscreenCanvas")}} API wurden implementiert; neue Funktionen: {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}} Konstruktor, `OffscreenCanvas.toBlob()` und {{domxref("OffscreenCanvas.transferToImageBitmap()")}}. Um diese experimentelle API zu nutzen, setzen Sie `gfx.offscreencanvas.enabled` auf `true` in about:config ([Firefox-Fehler 1172796](https://bugzil.la/1172796)).
- Die Methode {{domxref("ImageBitmap.close()")}} wird jetzt unterstützt ([Firefox-Fehler 1172796](https://bugzil.la/1172796)).
- Ein neuer {{domxref("ImageBitmapRenderingContext")}}-Rendering-Kontext wurde implementiert. Verwenden Sie `"bitmaprenderer"` mit {{domxref("OffscreenCanvas.getContext()")}} oder {{domxref("HTMLCanvasElement.getContext()")}}, um diesen Kontext zu erhalten. ([Firefox-Fehler 1172796](https://bugzil.la/1172796)).

#### WebGL

- Die {{domxref("WEBGL_compressed_texture_etc")}}-Erweiterung wurde implementiert, was die Verwendung von [ETC2-komprimierten Texturformaten](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) ermöglicht ([Firefox-Fehler 917505](https://bugzil.la/917505)). Um diese Erweiterung zu verwenden, setzen Sie die Präferenz `webgl.enable-draft-extensions` auf `true` in about:config.

#### IndexedDB

_Keine Änderung._

#### Service Workers

- {{domxref("FetchEvent.request")}} ist jetzt nicht-nullfähig (siehe [Firefox-Fehler 1238213](https://bugzil.la/1238213).)
- {{domxref("Navigator.serviceWorker")}} wurde nun als SameObject markiert (siehe [Firefox-Fehler 1238205](https://bugzil.la/1238205).)
- {{domxref("ExtendableMessageEvent.ports")}} wurde nun als SameObject markiert (siehe [Firefox-Fehler 1238225](https://bugzil.la/1238225).)

#### Fetch

- {{domxref("Request.mode")}} hat jetzt einen neuen verfügbaren Wert, `navigate`, zur Unterstützung von Anfragen, die beim Navigieren zwischen Dokumenten entstehen (siehe [Firefox-Fehler 1209081](https://bugzil.la/1209081).)

#### WebRTC

- Die Methode {{domxref("RTCPeerConnection.createOffer()")}} unterstützt jetzt den VP9-Video-Codec, obwohl dies standardmäßig deaktiviert ist. Um ihn zu aktivieren, setzen Sie die Präferenz `media.peerconnection.video.vp9_enabled` auf `true` in `about:config`. Wenn aktiviert, wird VP9 als bevorzugter Codec verwendet; zuvor wurde VP8 bevorzugt ([Firefox-Fehler 1242324](https://bugzil.la/1242324)).
- Die Methode {{domxref("RTCRtpSender.setParameters()")}} wurde hinzugefügt, um nach der anfänglichen Erstellung des {{domxref("RTCRtpSender")}} die Werte der Parameter ändern zu können.

#### Neue APIs

- In SVG implementiert jetzt das {{domxref("SVGStyleElement")}}-Schnittstellen `LinkStyle`-Mixin ([Firefox-Fehler 1239128](https://bugzil.la/1239128)).

#### Verschiedenes

- Der asynchrone {{domxref("FileReader")}} ist jetzt in Webworkern verfügbar ([Firefox-Fehler 901097](https://bugzil.la/901097)).
- Unsere experimentelle Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurde aktualisiert:

  - Das `AnimationEffectTimingReadOnly` Wörterbuch und {{domxref("AnimationEffect/getTiming", "AnimationEffectReadOnly.timing")}} wurden implementiert ([Firefox-Fehler 1214536](https://bugzil.la/1214536)).

- Die [Permissions API](/de/docs/Web/API/Permissions_API) ist nun standardmäßig für alle Release-Versionen aktiviert, nicht nur für Nightly, wie es zuvor war ([Firefox-Fehler 1221106](https://bugzil.la/1221106).)
- Die Sanitisierung von WOFF-Schriften wurde etwas gelockert ([Firefox-Fehler 1244693](https://bugzil.la/1244693)).

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## HTTP

_Keine Änderung._

## Netzwerk

- Unterstützung von {{rfc(7686)}} wurde hinzugefügt: standardmäßig wird nicht versucht, eine Domain mit der TLD `.onion` aufzulösen. Dies wird durch die Präferenz `network.dns.blockDotOnion` gesteuert. Add-ons, die Tor unterstützen, können diese Präferenz ändern. ([Firefox-Fehler 1228457](https://bugzil.la/1228457))

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
