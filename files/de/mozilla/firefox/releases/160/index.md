---
title: Firefox 160 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 86e6a39c09408844137f307b83d35eca43d5cfda
---

Dieser Artikel informiert über die Änderungen in Firefox 160, die für Entwickler relevant sind.
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

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit lassen sich benutzerdefinierte HTTP-Header zum [erweiterten `CONNECT`-Request](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) hinzufügen, der die Sitzung einrichtet.
  Die Header, die der Server in seiner Antwort sendet, sind nach dem Aufbau der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich, und mit dem neuen Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) wird festgelegt, wie viele Bytes Schlüsselmaterial abgeleitet werden sollen.
  Zuvor gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente auslässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).
- Die Eigenschaften [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) und [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) werden jetzt unterstützt.
  Sie ersetzen die nicht standardisierten Eigenschaften [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) und [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark), die entfernt wurden.
  Diese Eigenschaften geben an, wie viele eingehende Datagramme maximal in der Warteschlange auf das Lesen warten können und wie viele ausgehende Datagramme maximal für das Senden in die Warteschlange gestellt werden können, bevor Gegendruck ausgeübt wird.
  ([Firefox-Bug 2023587](https://bugzil.la/2023587)).
- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) unterstützt jetzt die Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  Wird sie auf `bytes` gesetzt, wird der Stream eingehender Datagramme des Transports, [`transport.datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable), zu einem [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Sie können dann einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwenden, um jedes Datagramm in einen von Ihnen bereitgestellten und wiederverwendbaren Puffer zu lesen, statt für jedes Datagramm ein neues {{jsxref("Uint8Array")}} zu erhalten.
  ([Firefox-Bug 2007755](https://bugzil.la/2007755)).

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

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt auf ARM64-Plattformen für `arch` jetzt `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit entspricht der von Firefox auf ARM64-Plattformen zurückgegebene Wert dem von Chrome. ([Firefox-Bug 2080310](https://bugzil.la/2080310))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Render-Blocking**: `dom.element.blocking.enabled`

  Das Attribut und der Wert `blocking="render"` werden jetzt für die HTML-Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} unterstützt. Dadurch kann das Rendering blockiert werden, bis das Stylesheet des Elements geladen oder sein Skript ausgeführt wurde. Das gilt auch für Elemente, die das Rendering standardmäßig nicht blockieren, beispielsweise mit JavaScript hinzugefügte Skripte und Stylesheets. ([Firefox-Bug 1751383](https://bugzil.la/1751383)).

- **Arithmetische Methoden von `CSSNumericValue`**: `layout.css.typed-om.enabled`

  Die Methoden [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub), [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) und [`div()`](/de/docs/Web/API/CSSNumericValue/div) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) in der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) werden jetzt in Nightly unterstützt.
  Sie addieren, subtrahieren, multiplizieren beziehungsweise dividieren numerische Werte. Beispielsweise addiert `CSS.px(10).add(CSS.px(5))` zwei Pixelwerte.
  Das Ergebnis ist ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (in diesem Beispiel `15px`), wenn es sich auf eine einzelne Einheit vereinfachen lässt. Andernfalls ist es ein mathematischer Ausdruck wie [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) – beispielsweise beim Addieren von `px` und `%`. ([Firefox-Bug 2081689](https://bugzil.la/2081689)).
