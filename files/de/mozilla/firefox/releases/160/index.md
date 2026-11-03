---
title: Versionshinweise für Firefox 160 für Entwickler (Beta)
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: d3598d4a3f6b9e2a99c18a7cecdf745d745a4aa6
---

Dieser Artikel informiert über Änderungen in Firefox 160, die Entwickler betreffen.
Firefox 160 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [10. November 2026](https://whattrainisitnow.com/release/?version=160).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei den Überschriften, zu denen Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit werden der [erweiterten `CONNECT`-Anfrage](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect), die die Sitzung aufbaut, benutzerdefinierte HTTP-Header hinzugefügt.
  Die vom Server in seiner Antwort gesendeten Header sind nach dem Aufbau der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich. Das neue Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) gibt an, wie viele Bytes Schlüsselmaterial abgeleitet werden sollen.
  Bisher gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente weglässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).
- Die Eigenschaften [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) und [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) werden jetzt unterstützt.
  Sie ersetzen die nicht standardisierten Eigenschaften [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) und [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark), die entfernt wurden.
  Diese Eigenschaften geben an, wie viele eingehende Datagramme höchstens in die Warteschlange gestellt werden können, während sie darauf warten, gelesen zu werden, beziehungsweise wie viele ausgehende Datagramme höchstens zum Senden in die Warteschlange gestellt werden können, bevor Gegendruck ausgeübt wird.
  ([Firefox-Bug 2023587](https://bugzil.la/2023587)).
- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) unterstützt jetzt die Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  Wird sie auf `bytes` gesetzt, wird der Stream für eingehende Datagramme des Transports, [`transport.datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable), zu einem [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Sie können dann einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwenden, um jedes Datagramm in einen von Ihnen bereitgestellten und wiederverwendeten Puffer einzulesen, statt für jedes Datagramm ein neues {{jsxref("Uint8Array")}} zu erhalten.
  ([Firefox-Bug 2007755](https://bugzil.la/2007755)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt für ARM64-Plattformen bei `arch` jetzt `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit entspricht der von Firefox für ARM64-Plattformen zurückgegebene Wert dem von Chrome. ([Firefox-Bug 2080310](https://bugzil.la/2080310))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Arithmetische Methoden von `CSSNumericValue`**: `layout.css.typed-om.enabled`

  Die Methoden [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub), [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) und [`div()`](/de/docs/Web/API/CSSNumericValue/div) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) werden jetzt in Nightly unterstützt.
  Sie addieren, subtrahieren, multiplizieren beziehungsweise dividieren numerische Werte. Beispielsweise addiert `CSS.px(10).add(CSS.px(5))` zwei Pixelwerte.
  Das Ergebnis ist ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (in diesem Beispiel `15px`), wenn es sich auf eine einzelne Einheit vereinfachen lässt. Andernfalls ist es ein mathematischer Ausdruck wie [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) (beispielsweise beim Addieren von `px` und `%`). ([Firefox-Bug 2081689](https://bugzil.la/2081689)).
