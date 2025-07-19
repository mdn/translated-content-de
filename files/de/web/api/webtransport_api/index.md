---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet eine moderne Aktualisierung für [WebSockets](/de/docs/Web/API/WebSockets_API), indem sie Daten zwischen Client und Server über das [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/) überträgt. WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Lieferung außerhalb der Reihenfolge. Es ermöglicht einen zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und einen unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Nutzung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Arbeit. Es basiert auf Googles QUIC-Protokoll (welches seinerseits auf UDP basiert) und behebt einige Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Diese beinhalten:

- **{{Glossary("head_of_line_blocking", "Head-of-line blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen dieser Verbindung zurückgehalten, bis alle fehlenden Pakete erneut gesendet werden. Mit QUIC ist nur die fehlerhafte Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist auf vielerlei Weise performanter als TCP. QUIC kann Sicherheitsfunktionen selbst handhaben, anstatt die Verantwortung an andere Protokolle wie TLS abzugeben – das bedeutet weniger Round-Trips. Und Streams bieten eine bessere Transporteffizienz als der ältere Packet-Mechanismus. Das kann einen signifikanten Unterschied machen, insbesondere in Hochlatenz-Netzwerken.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anforderung zu bearbeiten – damit die Pakete korrekt geliefert werden. Diese ID kann in verschiedenen Netzwerken bestehen bleiben, was bedeutet, dass zum Beispiel ein Download fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von WLAN zu einem mobilen Netzwerk wechseln. HTTP/2 hingegen verwendet IP-Adressen als Kennzeichen, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet einen Low-Level-Zugriff auf die bidirektionale Kommunikation über HTTP/3 und nutzt die oben genannten Vorteile sowie die Unterstützung für zuverlässige und unzuverlässige Datenübertragung.

### Erstverbindung

Um eine Verbindung zu einem HTTP/3-Server zu öffnen, übergeben Sie dessen URL dem Konstruktor von [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Beachten Sie, dass das Schema HTTPS sein muss, und die Portnummer explizit angegeben werden muss. Sobald das Versprechen [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung nutzen.

Beachten Sie außerdem, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie darauf warten, dass das Versprechen [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt ist. Fehler, die durch WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zur Standardmenge von [`DOMException`](/de/docs/Web/API/DOMException).

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }
}
```

### Unzuverlässige Übertragung über Datagramme

„Unzuverlässig“ bedeutet, dass die Übertragung von Daten nicht garantiert wird, noch die Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Sie könnten beispielsweise regelmäßige Aktualisierungen des Spielzustands übertragen wollen, bei denen jede Nachricht die letzte überlagernde ersetzt und die Reihenfolge unbedeutend ist.

Unzuverlässige Datenübertragung wird über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) gehandhabt – dies gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und von diesem zurückzuerhalten.

Die Eigenschaft [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, an das Sie mithilfe eines Schreibers Daten zum Server übertragen können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie zum Empfangen von Daten vom Server verwenden können:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

### Zuverlässige Übertragung über Streams

„Zuverlässig“ bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind. Das sorgt für eine langsamere Lieferung (obwohl schneller als mit WebSockets) und ist in Situationen erforderlich, in denen Zuverlässigkeit und Ordnung wichtig sind (wie zum Beispiel in Chat-Anwendungen).

Bei der Verwendung von zuverlässiger Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über denselben Transport festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von diesem können Sie [einen Schreiber erhalten](/de/docs/Web/API/WritableStream/getWriter), um das Schreiben von Daten in den Stream und das Senden an den Server zu ermöglichen.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream();
  const writer = stream.writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);

  try {
    await writer.close();
    console.log("All data has been sent.");
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}
```

Beachten Sie auch die Verwendung der Methode [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close), um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu senden, kann dies auf der Clientseite über die Eigenschaft [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) erfolgen, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen, die vom Server gesendet werden.

In diesem Fall ist der erste Schritt, eine Funktion zum Lesen eines `WebTransportReceiveStream` einzurichten. Diese Objekte erben von der `ReadableStream`-Klasse und können auf die gleiche Weise verwendet werden:

```js
async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array
    console.log(value);
  }
}
```

Rufen Sie anschließend [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf, und erhalten Sie eine Referenz auf den Leser, der im `ReadableStream` verfügbar ist, den es zurückgibt. Verwenden Sie dann den Leser, um die Daten vom Server zu lesen. Jeder Abschnitt ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportReceiveStream
    await readData(value);
  }
}
```

#### Bidirektionale Übertragung

Um einen bidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz auf einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten. Dieser enthält `readable`- und `writable`-Eigenschaften, die Referenzen auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurückgeben, die verwendet werden können, um vom Server zu lesen und darauf zu schreiben.

> [!NOTE]
> `WebTransportBidirectionalStream` ähnelt [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass in dieser Schnittstelle die Eigenschaften `readable` und `writable` als `ReadableStream` bzw. `WritableStream` bereitgestellt werden.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable is a WebTransportSendStream
  const writable = stream.writable;

  // …
}
```

Das Lesen vom `WebTransportReceiveStream` kann dann wie folgt erfolgen:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

Und das Schreiben zum `WebTransportSendStream` kann wie folgt geschehen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu senden und vom Client zu empfangen, kann dieser über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen wie oben gezeigt zu lesen und zu schreiben. Wie beim unidirektionalen Beispiel benötigen Sie jedoch eine erste Funktion, um den bidirektionalen Stream zu lesen:

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## Schnittstellen

- [`WebTransport`](/de/docs/Web/API/WebTransport)
  - : Bietet Funktionalitäten, um einem User-Agent zu erlauben, sich mit einem HTTP/3-Server zu verbinden, sowohl zuverlässigen als auch unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen bidirektionalen Stream, der von einem Server oder Client erstellt wurde und für zuverlässigen Transport verwendet werden kann. Bietet Zugang zu einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einem [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugang zu einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einem [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme, und verschiedenen Einstellungen und Statistiken in Bezug auf den Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Stellt einen Fehler in Bezug auf die WebTransport API dar, der durch Serverfehler, Netzwerkverbindungsprobleme oder vom Client ausgelöste Abbruchvorgänge (z. B. durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) entstehen kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden WebTransport unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport) Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden WebTransport unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport) Stream.

## Beispiele

Für vollständige Beispiele, siehe:

- [WebTransport über HTTP/3 Client](https://webtransport.day/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
