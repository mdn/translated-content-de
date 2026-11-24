---
title: "Firefox 160: Versionshinweise für Entwickler"
short-title: Firefox 160
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 5b678632840c829c7f0ac157372e46cfcb60bc91
---

Dieser Artikel informiert über die Änderungen in Firefox 160, die für Entwickler relevant sind.
Firefox 160 wurde am [10. November 2026](https://whattrainisitnow.com/release/?version=160) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das Pseudoelement `::-webkit-input-placeholder` wird jetzt als Alias für {{cssxref("::placeholder")}} unterstützt. Dies dient der Kompatibilität mit Websites, die damit den Platzhaltertext von {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen gestalten. ([Firefox-Bug 2083700](https://bugzil.la/2083700)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit lassen sich dem [erweiterten `CONNECT`-Request](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect), der die Sitzung aufbaut, benutzerdefinierte HTTP-Header hinzufügen.
  Die Header, die der Server in seiner Antwort sendet, sind nach dem Aufbau der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich. Das neue Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) gibt an, wie viele Bytes Schlüsselmaterial abgeleitet werden sollen.
  Zuvor gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente auslässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).
- Die Eigenschaften [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) und [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) werden jetzt unterstützt.
  Sie ersetzen die nicht standardisierten Eigenschaften [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) und [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark), die entfernt wurden.
  Die Eigenschaften geben an, wie viele eingehende Datagramme maximal in der Warteschlange auf das Lesen warten können beziehungsweise wie viele ausgehende Datagramme maximal zum Senden in der Warteschlange stehen können, bevor Gegendruck ausgeübt wird.
  ([Firefox-Bug 2023587](https://bugzil.la/2023587)).
- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) unterstützt jetzt die Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  Wird sie auf `bytes` gesetzt, ist der Stream eingehender Datagramme des Transports, [`transport.datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable), ein [lesbarer Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Sie können dann mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) jedes Datagramm in einen von Ihnen bereitgestellten und wiederverwendeten Puffer einlesen, statt für jedes Datagramm ein neues {{jsxref("Uint8Array")}} zu erhalten.
  ([Firefox-Bug 2007755](https://bugzil.la/2007755)).
- Die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) mit der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist jetzt auf Desktop-Geräten verfügbar und ermöglicht die Echtzeitumwandlung von Sprache in Text in 40 Sprachen direkt auf dem Gerät.
  Unter Android wird weder die Erkennung auf dem Gerät noch die entfernte Erkennung (in der Cloud) unterstützt.
  ([Firefox-Bug 2080908](https://bugzil.la/2080908)).

#### Entfernungen

- Das nicht standardisierte Ereignis `MozScrolledAreaChanged` wird nicht mehr an Webseiten gesendet. Zuvor wurde es am Dokument ausgelöst, wenn sich die Größe des scrollbaren Bereichs der Seite änderte. Es steht jetzt nur noch der Firefox-Benutzeroberfläche zur Verfügung. Sie können das Ereignis für Webseiten wieder aktivieren, indem Sie die Einstellung `layout.scrolled-area-changed.content.enabled` auf `true` setzen. ([Firefox-Bug 2079865](https://bugzil.la/2079865)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Maschinenlesbares CDDL für alle Firefox-spezifischen WebDriver-BiDi-Erweiterungen (`moz:`-Befehle, Ereignisse, Parameter, Fähigkeiten usw.) hinzugefügt. ([Firefox-Bug 2057588](https://bugzil.la/2057588)).
- Das Feld `context` im Ereignis `script.message` wurde korrigiert, sodass es die richtige Browsing-Context-ID zurückgibt, wenn das Ereignis von einem durch `window.open` ausgelösten Preload-Skript gesendet wird. ([Firefox-Bug 2079905](https://bugzil.la/2079905)).
- Die Verarbeitung von `Set-Cookie`-Antwort-Headern wurde korrigiert: Durch `\n` getrennte Werte erscheinen jetzt als einzelne Einträge statt als ein zusammengeführter Wert. Dies gilt auch für die anderen durch Zeilenumbrüche zusammengeführten Header `proxy-authenticate` und `www-authenticate`. ([Firefox-Bug 1940389](https://bugzil.la/1940389)).
- Die Überwachung von Netzwerkereignissen wurde so angepasst, dass ungenutzte Sicherheitsdetails nicht mehr berechnet werden. Dies kann sich beispielsweise beim Laden einer Seite spürbar auf die Leistung auswirken. ([Firefox-Bug 2075175](https://bugzil.la/2075175)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt für ARM64-Plattformen bei `arch` jetzt `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit entspricht der von Firefox für ARM64-Plattformen zurückgegebene Wert dem von Chrome. ([Firefox-Bug 2080310](https://bugzil.la/2080310)).
- {{WebExtAPIRef("runtime.MessageSender")}} enthält jetzt die Eigenschaft `windowId` mit der ID des Fensters, in dem sich der Absender befindet. Anders als `tab.windowId` wird sie auch für Absender gesetzt, die sich nicht in einem Tab befinden, etwa in einem Popup oder einer Seitenleiste. ([Firefox-Bug 2072133](https://bugzil.la/2072133)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Wenn Sie sie ausprobieren möchten, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Render-Blocking**: `dom.element.blocking.enabled`

  Das Attribut `blocking="render"` wird jetzt für die HTML-Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} unterstützt. Damit lässt sich das Rendering blockieren, bis das Stylesheet des Elements geladen oder sein Skript ausgeführt wurde. Das gilt auch für Elemente, die das Rendering standardmäßig nicht blockieren, etwa mit JavaScript hinzugefügte Skripte und Stylesheets. ([Firefox-Bug 1751383](https://bugzil.la/1751383)).

- **Lazy Loading für Video und Audio**: `media.lazy_loading.enabled`

  Das Attribut `loading` der Elemente {{HTMLElement("video", "", "#loading")}} und {{HTMLElement("audio", "", "#loading")}} sowie die entsprechende Eigenschaft [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) werden jetzt unterstützt. Bei `loading="lazy"` verschiebt der Browser das Laden der Medien, das Laden des Vorschaubilds des Videos und den Start der `autoplay`-Wiedergabe, bis sich das Element in der Nähe des Viewports befindet. ([Firefox-Bug 2005072](https://bugzil.la/2005072)).

- **Spekulationsregeln: `Speculation-Rules`-Header**: `dom.speculation_rules.enabled`

  Der HTTP-Antwort-Header {{httpheader("Speculation-Rules")}} wird in Nightly standardmäßig unterstützt. Er listet die URLs externer Dateien mit [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) auf und bietet damit eine Alternative zu einem eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Element. Der Header gilt nur für Dokumente auf oberster Ebene. Jede Datei muss mit dem MIME-Typ `application/speculationrules+json` ausgeliefert werden. ([Firefox-Bug 2020709](https://bugzil.la/2020709)).

- **Arithmetische Methoden von `CSSNumericValue`**: `layout.css.typed-om.enabled`

  Die Methoden [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub), [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) und [`div()`](/de/docs/Web/API/CSSNumericValue/div) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) werden jetzt in Nightly unterstützt.
  Sie addieren, subtrahieren, multiplizieren beziehungsweise dividieren numerische Werte. Beispielsweise addiert `CSS.px(10).add(CSS.px(5))` zwei Pixelwerte.
  Wenn sich das Ergebnis auf eine einzelne Einheit vereinfachen lässt, ist es ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (in diesem Beispiel `15px`). Andernfalls ist es ein mathematischer Ausdruck wie [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), etwa wenn `px` und `%` addiert werden. ([Firefox-Bug 2081689](https://bugzil.la/2081689)).

- **Canvas-2D-Farbraum**: `gfx.canvas.colorspace.enabled`

  Die Option [`colorSpace`](/de/docs/Web/API/HTMLCanvasElement/getContext#colorspace) von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) und [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird jetzt für `2d`-Kontexte unterstützt. [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) gibt den ausgewählten Farbraum zurück. Auch Bilddaten haben einen Farbraum, den die Eigenschaft [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) zurückgibt. Die Einstellung `colorSpace` des Konstruktors [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) sowie der Methoden [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) legt ihn fest. Unterstützt werden die Werte `"srgb"` und `"display-p3"`. Pixeldaten werden noch nicht zwischen Farbräumen konvertiert. Daher gibt `getImageData()` unabhängig vom angeforderten Farbraum dieselben Pixel zurück. ([Firefox-Bug 1841326](https://bugzil.la/1841326)).
