---
title: "Firefox 160: Versionshinweise für Entwickler (Beta)"
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 72ef05df2a84b01b5c6c9d53b8fe011d51555621
---

Dieser Artikel informiert über Änderungen in Firefox 160, die für Entwickler relevant sind.
Firefox 160 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [10. November 2026](https://whattrainisitnow.com/release/?version=160).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit lassen sich benutzerdefinierte HTTP-Header zur [erweiterten `CONNECT`-Anfrage](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) hinzufügen, mit der die Sitzung eingerichtet wird.
  Die Header, die der Server in seiner Antwort sendet, sind nach dem Aufbau der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich. Das neue Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) gibt an, wie viele Bytes an Schlüsselmaterial abgeleitet werden sollen.
  Zuvor gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente weglässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).
- Die Eigenschaften [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) und [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) werden jetzt unterstützt.
  Sie ersetzen die nicht standardisierten Eigenschaften [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) und [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark), die entfernt wurden.
  Diese Eigenschaften geben die maximale Anzahl eingehender Datagramme an, die bis zum Lesen in eine Warteschlange gestellt werden können, beziehungsweise die maximale Anzahl ausgehender Datagramme, die vor dem Einsetzen von Gegendruck zum Senden in eine Warteschlange gestellt werden können.
  ([Firefox-Bug 2023587](https://bugzil.la/2023587)).
- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) unterstützt jetzt die Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  Wird sie auf `bytes` gesetzt, wird der Stream eingehender Datagramme des Transports, [`transport.datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable), zu einem [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Sie können dann einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwenden, um jedes Datagramm in einen von Ihnen bereitgestellten und wiederverwendeten Puffer einzulesen, statt für jedes Datagramm ein neues {{jsxref("Uint8Array")}} zu erhalten.
  ([Firefox-Bug 2007755](https://bugzil.la/2007755)).
- Die Eigenschaften [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) und [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) der Schnittstelle `WebTransport` werden jetzt unterstützt. Das gilt auch für die entsprechenden `options`-Eigenschaften, mit denen sie im Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) gesetzt werden können.
  Diese Eigenschaften geben an, wie viele eingehende unidirektionale beziehungsweise bidirektionale Streams die Anwendung maximal gleichzeitig vom Server erwartet.
  ([Firefox-Bug 2007825](https://bugzil.la/2007825)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt auf ARM64-Plattformen für `arch` jetzt `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit stimmt der von Firefox für ARM64-Plattformen zurückgegebene Wert mit dem von Chrome überein. ([Firefox-Bug 2080310](https://bugzil.la/2080310))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Render-Blocking**: `dom.element.blocking.enabled`

  Das Attribut und der Wert `blocking="render"` werden jetzt für die HTML-Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} unterstützt. Damit kann das Rendering blockiert werden, bis das Stylesheet des Elements geladen oder sein Skript ausgeführt wurde. Das gilt auch für Elemente, die das Rendering standardmäßig nicht blockieren, etwa Skripte und Stylesheets, die mit JavaScript hinzugefügt wurden. ([Firefox-Bug 1751383](https://bugzil.la/1751383)).

- **Arithmetische Methoden von `CSSNumericValue`**: `layout.css.typed-om.enabled`

  Die Methoden [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub), [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) und [`div()`](/de/docs/Web/API/CSSNumericValue/div) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) werden jetzt in Nightly unterstützt.
  Sie addieren, subtrahieren, multiplizieren beziehungsweise dividieren numerische Werte. Beispielsweise addiert `CSS.px(10).add(CSS.px(5))` zwei Pixelwerte.
  Lässt sich das Ergebnis auf eine einzelne Einheit vereinfachen, ist es ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (in diesem Beispiel `15px`). Andernfalls ist es ein mathematischer Ausdruck wie [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), etwa wenn `px` und `%` addiert werden. ([Firefox-Bug 2081689](https://bugzil.la/2081689)).
