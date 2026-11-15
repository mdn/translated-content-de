---
title: Firefox 160 – Versionshinweise für Entwickler (Stable)
short-title: Firefox 160 (Stable)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: df256997a92b09d7ec4f76702d99850582a56869
---

Dieser Artikel informiert über Änderungen in Firefox 160, die Entwickler betreffen.
Firefox 160 wurde am [10. November 2026](https://whattrainisitnow.com/release/?version=160) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das Pseudoelement `::-webkit-input-placeholder` wird jetzt als Alias für {{cssxref("::placeholder")}} unterstützt. Dies verbessert die Kompatibilität mit Websites, die damit den Platzhaltertext von {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen gestalten. ([Firefox-Bug 2083700](https://bugzil.la/2083700)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit werden der [erweiterten `CONNECT`-Anfrage](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect), mit der die Sitzung eingerichtet wird, benutzerdefinierte HTTP-Header hinzugefügt.
  Die Header, die der Server in seiner Antwort sendet, sind nach dem Aufbau der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich. Ein neues Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) gibt an, wie viele Bytes Schlüsselmaterial abgeleitet werden sollen.
  Zuvor gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente auslässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).
- Die Eigenschaften [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) und [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) werden jetzt unterstützt.
  Sie ersetzen die nicht standardisierten Eigenschaften [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) und [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark), die entfernt wurden.
  Diese Eigenschaften geben an, wie viele eingehende Datagramme höchstens in der Warteschlange auf das Lesen warten können und wie viele ausgehende Datagramme höchstens für den Versand in die Warteschlange gestellt werden können, bevor Rückdruck ausgeübt wird.
  ([Firefox-Bug 2023587](https://bugzil.la/2023587)).
- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) unterstützt jetzt die Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  Wenn Sie diese auf `bytes` setzen, wird der Stream für eingehende Datagramme des Transports, [`transport.datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable), zu einem [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Sie können dann einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwenden, um jedes Datagramm in einen von Ihnen bereitgestellten, wiederverwendbaren Puffer einzulesen, statt für jedes Datagramm ein neues {{jsxref("Uint8Array")}} zu erhalten.
  ([Firefox-Bug 2007755](https://bugzil.la/2007755)).
- Die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) mit der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist jetzt auf Desktop-Geräten verfügbar. Sie ermöglicht die Umwandlung von Sprache in Text in Echtzeit auf dem Gerät für 40 Sprachen.
  Unter Android wird die Spracherkennung nicht unterstützt; auch eine entfernte Spracherkennung über die Cloud wird nicht unterstützt.
  ([Firefox-Bug 2080908](https://bugzil.la/2080908)).

#### Entfernungen

- Das nicht standardisierte Ereignis `MozScrolledAreaChanged` wird nicht mehr an Webseiten ausgelöst. Es wurde bisher am Dokument ausgelöst, wenn sich die Größe des scrollbaren Bereichs einer Seite änderte. Jetzt steht es nur noch der Firefox-Benutzeroberfläche zur Verfügung. Sie können das Ereignis für Webseiten wieder aktivieren, indem Sie die Einstellung `layout.scrolled-area-changed.content.enabled` auf `true` setzen. ([Firefox-Bug 2079865](https://bugzil.la/2079865)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Maschinenlesbare CDDL für alle Firefox-Herstellererweiterungen von WebDriver BiDi hinzugefügt (`moz:`-Befehle, Ereignisse, Parameter, Fähigkeiten …). ([Firefox-Bug 2057588](https://bugzil.la/2057588)).
- Das Feld `context` im Ereignis `script.message` wurde korrigiert, sodass es die richtige Browsing-Context-ID zurückgibt, wenn das Ereignis von einem durch `window.open` ausgelösten Preload-Skript gesendet wird. ([Firefox-Bug 2079905](https://bugzil.la/2079905)).
- Die Verarbeitung von `Set-Cookie`-Antwort-Headern wurde korrigiert: Durch `\n` getrennte Werte erscheinen jetzt als einzelne Einträge statt als ein zusammengeführter Wert. Dies gilt auch für die anderen durch Zeilenumbrüche zusammengeführten Header `proxy-authenticate` und `www-authenticate`. ([Firefox-Bug 1940389](https://bugzil.la/1940389)).
- Die Überwachung von Netzwerkereignissen wurde aktualisiert, sodass nicht verwendete Sicherheitsdetails nicht mehr berechnet werden. Dies kann sich spürbar auf die Leistung auswirken, beispielsweise beim Laden einer Seite. ([Firefox-Bug 2075175](https://bugzil.la/2075175)).
- Die Befehle `script.evaluate` und `script.callFunction` wurden so geändert, dass sie ein bereits gesetztes Benutzeraktivierungs-Flag nicht mehr zurücksetzen, wenn sie mit `userActivation: false` aufgerufen werden. ([Firefox-Bug 2084107](https://bugzil.la/2084107)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt für ARM64-Plattformen als `arch` jetzt `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit stimmt der von Firefox für ARM64-Plattformen zurückgegebene Wert mit dem von Chrome überein. ([Firefox-Bug 2080310](https://bugzil.la/2080310)).
- {{WebExtAPIRef("runtime.MessageSender")}} erhält die Eigenschaft `windowId`, die die ID des Fensters enthält, in dem sich der Absender befindet. Anders als `tab.windowId` ist sie auch bei Absendern gesetzt, die sich nicht in einem Tab befinden, etwa in einem Popup oder einer Seitenleiste. ([Firefox-Bug 2072133](https://bugzil.la/2072133)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Blockieren des Renderings**: `dom.element.blocking.enabled`

  Das Attribut `blocking="render"` und sein Wert werden jetzt für die HTML-Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} unterstützt. Dadurch kann das Rendering blockiert werden, bis das Stylesheet des Elements geladen oder sein Skript ausgeführt wurde. Das gilt auch für Elemente, die das Rendering standardmäßig nicht blockieren, beispielsweise mit JavaScript hinzugefügte Skripte und Stylesheets. ([Firefox-Bug 1751383](https://bugzil.la/1751383)).

- **Lazy Loading für Video und Audio**: `media.lazy_loading.enabled`

  Das Attribut `loading` der Elemente {{HTMLElement("video", "", "#loading")}} und {{HTMLElement("audio", "", "#loading")}} sowie die entsprechende Eigenschaft [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) werden jetzt unterstützt. Bei `loading="lazy"` verschiebt der Browser das Laden des Mediums und des Vorschaubilds des Videos sowie den Beginn der `autoplay`-Wiedergabe, bis sich das Element in der Nähe des Viewports befindet. ([Firefox-Bug 2005072](https://bugzil.la/2005072)).

- **Speculation Rules: `Speculation-Rules`-Header**: `dom.speculation_rules.enabled`

  Die Unterstützung für den HTTP-Antwort-Header {{httpheader("Speculation-Rules")}} ist in Nightly standardmäßig aktiviert. Als Alternative zu einem Inline-Element [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) listet der Header die URLs externer Dateien auf, die [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API) enthalten. Der Header gilt nur für Dokumente der obersten Ebene, und jede Datei muss mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden. ([Firefox-Bug 2020709](https://bugzil.la/2020709)).

- **Arithmetische Methoden von `CSSNumericValue`**: `layout.css.typed-om.enabled`

  Die Methoden [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub), [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) und [`div()`](/de/docs/Web/API/CSSNumericValue/div) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) werden jetzt in Nightly unterstützt.
  Sie addieren, subtrahieren, multiplizieren beziehungsweise dividieren numerische Werte. Beispielsweise addiert `CSS.px(10).add(CSS.px(5))` zwei Pixelwerte.
  Das Ergebnis ist ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (in diesem Beispiel `15px`), wenn es sich auf eine einzelne Einheit vereinfachen lässt. Andernfalls ist es ein mathematischer Ausdruck wie [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), beispielsweise beim Addieren von `px` und `%`. ([Firefox-Bug 2081689](https://bugzil.la/2081689)).

- **Farbraum für Canvas 2D**: `gfx.canvas.colorspace.enabled`

  Die Option [`colorSpace`](/de/docs/Web/API/HTMLCanvasElement/getContext#colorspace) von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) und [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird jetzt für `2d`-Kontexte unterstützt. [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) gibt den ausgewählten Farbraum zurück. Auch Bilddaten haben einen Farbraum, den die Eigenschaft [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) zurückgibt. Über die Einstellung `colorSpace` des Konstruktors [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) sowie der Methoden [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) wird dieser festgelegt. Unterstützte Werte sind `"srgb"` und `"display-p3"`. Pixeldaten werden noch nicht zwischen Farbräumen konvertiert. Daher gibt `getImageData()` unabhängig vom angeforderten Farbraum dieselben Pixel zurück. ([Firefox-Bug 1841326](https://bugzil.la/1841326)).
