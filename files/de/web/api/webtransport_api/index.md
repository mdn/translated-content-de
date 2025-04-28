---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet eine moderne Aktualisierung zu [WebSockets](/de/docs/Web/API/WebSockets_API), indem Daten zwischen Client und Server unter Verwendung von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/) übertragen werden. WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Reihenfolge-unabhängige Lieferung. Es ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Arbeit. Es basiert auf Googles QUIC-Protokoll (das selbst auf UDP basiert) und behebt mehrere Probleme im Zusammenhang mit dem klassischen TCP-Protokoll, auf dem HTTP und WebSockets basieren.

Diese beinhalten:

- **{{Glossary("head_of_line_blocking", "Head-of-line Blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Tritt jedoch bei einer Ressource ein Fehler auf, werden alle anderen Ressourcen auf dieser Verbindung aufgehalten, bis alle fehlenden Pakete erneut übertragen werden. Bei QUIC ist nur die fehlerhafte Ressource betroffen.
- **Höhere Leistung**
  - : QUIC ist auf viele Arten leistungsfähiger als TCP. QUIC kann Sicherheitsfunktionen selbst verwalten, anstatt die Verantwortung an andere Protokolle wie TLS abzugeben – was weniger Roundtrips bedeutet. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Das kann einen erheblichen Unterschied machen, insbesondere in Netzwerken mit hoher Latenz.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu verwalten – um sicherzustellen, dass Pakete korrekt ausgeliefert werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, was bedeutet, dass zum Beispiel ein Download fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von Wi-Fi zu einem mobilen Netzwerk wechseln. HTTP/2 dagegen verwendet IP-Adressen als Identifikatoren, daher können Netzwerkübergänge problematisch sein.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet niedrigschwelligen Zugang zu bidirektionaler Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Initiale Verbindung

Um eine Verbindung zu einem HTTP/3-Server zu öffnen, übergeben Sie dessen URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Versprechen erfüllt ist, können Sie beginnen, die Verbindung zu nutzen.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) Versprechen erfüllt ist. Fehler, die von WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zu den Standardsets von [`DOMException`](/de/docs/Web/API/DOMException).

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

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch deren Ankunft in einer bestimmten Reihenfolge. Das ist in manchen Situationen akzeptabel und ermöglicht sehr schnelle Zustellung. Zum Beispiel möchten Sie möglicherweise regelmäßige Spielzustandsaktualisierungen übertragen, bei denen jede Nachricht die vorherige ersetzt, und die Reihenfolge unwichtig ist.

Die unzuverlässige Datenübertragung wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) Eigenschaft behandelt – diese gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und zurückzuempfangen.

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream) Objekt zurück, an das Sie Daten mit einem Writer zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind. Das bietet eine langsamere Lieferung (wenn auch schneller als mit WebSockets) und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind (wie zum Beispiel Chat-Anwendungen).

Wenn Sie zuverlässige Übertragung über Streams verwenden, können Sie auch die relative Priorität verschiedener Streams über den gleichen Transport festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von diesem können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann dies auf dem Client über die [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream) Objekten zurückgibt. Diese können verwendet werden, um {{jsxref("Uint8Array")}} Instanzen zu lesen, die vom Server gesendet werden.

In diesem Fall ist der erste Schritt, eine Funktion zum Lesen eines `WebTransportReceiveStream` zu erstellen. Diese Objekte erben von der `ReadableStream` Klasse und können daher auf die gleiche Weise verwendet werden:

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

Als Nächstes rufen Sie [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten eine Referenz auf den Leser, der auf dem von ihm zurückgegebenen `ReadableStream` verfügbar ist, und verwenden dann den Leser, um die Daten vom Server zu lesen. Jeder Teil ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz auf einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieser enthält `readable` und `writable` Eigenschaften, die Referenzen auf `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen zurückgeben, die verwendet werden können, um vom Server zu lesen und an diesen zu schreiben.

> **Note:** `WebTransportBidirectionalStream` ist ähnlich wie [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass in dieser Schnittstelle die `readable` und `writable` Eigenschaften jeweils `ReadableStream` und `WritableStream` sind.

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

Vom `WebTransportReceiveStream` zu lesen kann dann wie folgt durchgeführt werden:

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

Und in den `WebTransportSendStream` zu schreiben kann so durchgeführt werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu übertragen und von diesem zu empfangen, kann dies über die [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream` Objekten zurückgibt. Jeder kann verwendet werden, um wie oben gezeigt {{jsxref("Uint8Array")}} Instanzen zu lesen und zu schreiben. Wie im unidirektionalen Beispiel benötigen Sie jedoch eine anfängliche Funktion, um den bidirektionalen Stream überhaupt zu lesen:

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
  - : Bietet Funktionalität, um einem User-Agent zu ermöglichen, sich mit einem HTTP/3-Server zu verbinden, zuverlässigen und unzuverlässigen Transport in einer oder beiden Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen bidirektionalen Stream, der von einem Server oder einem Client erstellt wird und für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der aus Serverfehlern, Netzwerkverbindungsproblemen oder vom Client initiierten Abbruch-Operationen (zum Beispiel aufgrund eines [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort) Aufrufs) entstehen kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden WebTransport-unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport) Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden WebTransport-unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport) Stream.

## Beispiele

Für vollständige Beispiele, siehe:

- [WebTransport über HTTP/3 Client](https://webtransport.day/)
- [WebTransport (BYOB) Echo mit WebCodecs in Worker](https://webrtc.internaut.com/wc/wtSender4/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
