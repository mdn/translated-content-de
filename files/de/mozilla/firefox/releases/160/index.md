---
title: Firefox 160 – Versionshinweise für Entwickler (Stable)
short-title: Firefox 160 (Stable)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 4bf4746470a4d0bd53e4ae7d320849d0c912bb10
---

Dieser Artikel informiert über Änderungen in Firefox 160, die für Entwickler relevant sind.
Firefox 160 wurde am [10. November 2026](https://whattrainisitnow.com/release/?version=160) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das Pseudoelement `::-webkit-input-placeholder` wird jetzt als Alias für {{cssxref("::placeholder")}} unterstützt. Dies verbessert die Kompatibilität mit Websites, die es verwenden, um den Platzhaltertext von {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen zu gestalten. ([Firefox-Bug 2083700](https://bugzil.la/2083700)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit werden der [erweiterten `CONNECT`-Anfrage](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect), mit der die Sitzung eingerichtet wird, benutzerdefinierte HTTP-Header hinzugefügt.
  Die Header, die der Server in seiner Antwort sendet, sind nach dem Einrichten der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich. Das neue Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) legt fest, wie viele Bytes Schlüsselmaterial abgeleitet werden sollen.
  Zuvor gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente auslässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).
- Die Eigenschaften [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) und [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) werden jetzt unterstützt.
  Sie ersetzen die nicht standardisierten Eigenschaften [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) und [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark), die entfernt wurden.
  Diese Eigenschaften geben an, wie viele eingehende Datagramme höchstens in eine Warteschlange gestellt werden können, während sie auf das Lesen warten, beziehungsweise wie viele ausgehende Datagramme höchstens zum Senden in eine Warteschlange gestellt werden können, bevor Gegendruck angewendet wird.
  ([Firefox-Bug 2023587](https://bugzil.la/2023587)).
- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) unterstützt jetzt die Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  Wenn sie auf `bytes` gesetzt wird, wird der Stream eingehender Datagramme des Transports, [`transport.datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable), zu einem [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Sie können dann mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) jedes Datagramm in einen von Ihnen bereitgestellten und wiederverwendbaren Puffer lesen, statt für jedes Datagramm ein neues {{jsxref("Uint8Array")}} zu erhalten.
  ([Firefox-Bug 2007755](https://bugzil.la/2007755)).
- Die Eigenschaften [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) und [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) der Schnittstelle `WebTransport` werden jetzt unterstützt. Das gilt auch für die entsprechenden `options`-Eigenschaften, mit denen sie im Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) festgelegt werden können.
  Diese Eigenschaften geben an, wie viele eingehende unidirektionale beziehungsweise bidirektionale Streams die Anwendung höchstens gleichzeitig vom Server geöffnet erwartet.
  ([Firefox-Bug 2007825](https://bugzil.la/2007825)).
- Die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) mit der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist jetzt auf Desktopgeräten verfügbar und ermöglicht die Umwandlung von Sprache in Text in Echtzeit für 40 Sprachen.
  Unter Android wird die Spracherkennung nicht unterstützt; auch eine entfernte Spracherkennung über die Cloud wird nicht unterstützt.
  ([Firefox-Bug 2080908](https://bugzil.la/2080908)).

#### Entfernungen

- Das nicht standardisierte Ereignis `MozScrolledAreaChanged` wird nicht mehr an Webseiten gesendet. Bisher wurde es auf dem Dokument ausgelöst, wenn sich die Größe des scrollbaren Bereichs der Seite änderte. Es steht jetzt nur noch der Firefox-Benutzeroberfläche zur Verfügung. Sie können das Ereignis für Webseiten wieder aktivieren, indem Sie die Einstellung `layout.scrolled-area-changed.content.enabled` auf `true` setzen. ([Firefox-Bug 2079865](https://bugzil.la/2079865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt für ARM64-Plattformen jetzt `arm64` als `arch` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit entspricht der von Firefox für ARM64-Plattformen zurückgegebene Wert dem von Chrome. ([Firefox-Bug 2080310](https://bugzil.la/2080310)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Blockieren des Renderings**: `dom.element.blocking.enabled`

  Das Attribut `blocking="render"` wird jetzt für die HTML-Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} unterstützt. Damit kann das Rendering blockiert werden, bis das Stylesheet des Elements geladen oder sein Skript ausgeführt wurde. Das gilt auch für Elemente, die das Rendering standardmäßig nicht blockieren, etwa Skripte und Stylesheets, die mit JavaScript hinzugefügt wurden. ([Firefox-Bug 1751383](https://bugzil.la/1751383)).

- **Lazy Loading für Video und Audio**: `media.lazy_loading.enabled`

  Das Attribut `loading` der Elemente {{HTMLElement("video", "", "#loading")}} und {{HTMLElement("audio", "", "#loading")}} sowie die es widerspiegelnde Eigenschaft [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) werden jetzt unterstützt. Bei `loading="lazy"` verschiebt der Browser das Laden der Medien, das Laden des Posterbilds des Videos und den Beginn der `autoplay`-Wiedergabe, bis sich das Element in der Nähe des Viewports befindet. ([Firefox-Bug 2005072](https://bugzil.la/2005072)).

- **Spekulationsregeln: `Speculation-Rules`-Header**: `dom.speculation_rules.enabled`

  Die Unterstützung für den HTTP-Antwort-Header {{httpheader("Speculation-Rules")}} ist in Nightly standardmäßig aktiviert. Er listet die URLs externer Dateien mit [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) auf und bietet damit eine Alternative zu einem Inline-Element [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules). Der Header gilt nur für Dokumente der obersten Ebene, und jede Datei muss mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden. ([Firefox-Bug 2020709](https://bugzil.la/2020709)).

- **Arithmetische Methoden von `CSSNumericValue`**: `layout.css.typed-om.enabled`

  Die Methoden [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub), [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) und [`div()`](/de/docs/Web/API/CSSNumericValue/div) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) werden jetzt in Nightly unterstützt.
  Sie addieren, subtrahieren, multiplizieren beziehungsweise dividieren numerische Werte. Beispielsweise addiert `CSS.px(10).add(CSS.px(5))` zwei Pixelwerte.
  Wenn sich das Ergebnis auf eine einzelne Einheit vereinfachen lässt, ist es ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (in diesem Beispiel `15px`). Andernfalls ist es ein mathematischer Ausdruck wie [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), etwa wenn `px` und `%` addiert werden. ([Firefox-Bug 2081689](https://bugzil.la/2081689)).

- **Canvas-2D-Farbraum**: `gfx.canvas.colorspace.enabled`

  Die Option [`colorSpace`](/de/docs/Web/API/HTMLCanvasElement/getContext#colorspace) von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) und [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird jetzt für `2d`-Kontexte unterstützt. [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) gibt den ausgewählten Farbraum zurück. Auch Bilddaten haben einen Farbraum, den die Eigenschaft [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) zurückgibt. Er wird über die Einstellung `colorSpace` des Konstruktors [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) sowie der Methoden [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) festgelegt. Unterstützt werden die Werte `"srgb"` und `"display-p3"`. Pixeldaten werden noch nicht zwischen Farbräumen konvertiert. Daher gibt `getImageData()` unabhängig vom angeforderten Farbraum dieselben Pixel zurück. ([Firefox-Bug 1841326](https://bugzil.la/1841326)).
