---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet ein modernes Update der [WebSockets](/de/docs/Web/API/WebSockets_API) und überträgt Daten zwischen Client und Server unter Nutzung von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Zustellung außerhalb der Reihenfolge. Es ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Bearbeitung. Es basiert auf Googles QUIC-Protokoll (das seinerseits auf UDP basiert) und behebt mehrere Probleme rund um das klassische TCP-Protokoll, auf dem HTTP und WebSockets basieren.

Diese umfassen:

- **Head-of-line Blocking**
  - : HTTP/2 erlaubt Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen auf dieser Verbindung blockiert, bis fehlende Pakete erneut gesendet werden. Mit QUIC ist nur die fehlerhafte Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht performanter als TCP. QUIC kann Sicherheitsfunktionen selbst handhaben, anstatt die Verantwortung an andere Protokolle wie TLS abzutreten — das bedeutet weniger Round-Trips. Und Streams bieten bessere Transporteffizienz als der ältere Paketmechanismus. Das kann einen signifikanten Unterschied machen, besonders in hochlatenz Netzwerken.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu verwalten — um sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, bedeutet beispielsweise, dass ein Download fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von WLAN zu einem mobilen Netzwerk wechseln. HTTP/2 hingegen verwendet IP-Adressen als Identifikatoren, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet einen niedrigstufigen Zugang zu einer Zwei-Wege-Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragungen.

### Initiale Verbindung

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie dessen URL dem Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das Versprechen [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt wird, können Sie die Verbindung nutzen.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie auf das Versprechen [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) warten. Fehler, die von WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zu den standardmäßigen [`DOMException`](/de/docs/Web/API/DOMException)-Einstellungen.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // ...
}

// ...

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

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch ihre Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen akzeptabel und bietet eine sehr schnelle Lieferung. Zum Beispiel möchten Sie möglicherweise regelmäßige Spielstatusaktualisierungen übertragen, bei denen jede Nachricht die letzte, die ankommt, überschreibt und die Reihenfolge nicht wichtig ist.

Unzuverlässige Datenübertragung wird über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) gehandhabt — dies gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und diese zurückzuerhalten.

Die Eigenschaft [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie Daten mit einem Writer schreiben können, um sie an den Server zu übertragen:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, mit dem Sie Daten vom Server empfangen können:

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

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge von Daten garantiert sind. Das führt zu langsamerer Lieferung (wenn auch schneller als bei WebSockets) und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind (zum Beispiel bei Chat-Anwendungen).

Bei der Verwendung von zuverlässiger Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über demselben Transport einstellen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von diesem können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Beachten Sie zudem die Verwendung der Methode [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close), um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu senden, kann darauf auf dem Client über die Eigenschaft [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) zugegriffen werden, die ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen, die vom Server gesendet werden.

In diesem Fall ist das erste, was zu tun ist, eine Funktion einzurichten, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der `ReadableStream`-Klasse, sodass sie auf die gleiche Weise verwendet werden können:

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

Rufen Sie anschließend [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten Sie eine Referenz zu dem auf dem zurückgegebenen `ReadableStream` verfügbaren Reader, und verwenden Sie dann den Reader, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um diese zu lesen:

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
Dieser enthält `readable` und `writable` Eigenschaften, die Referenzen auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurückgeben, die zum Lesen vom und Schreiben zum Server verwendet werden können.

> **Note:** `WebTransportBidirectionalStream` ist ähnlich wie [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), mit der Ausnahme, dass in dieser Schnittstelle die `readable` und `writable` Eigenschaften `ReadableStream` und `WritableStream` sind.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable is a WebTransportSendStream
  const writable = stream.writable;

  ...
}
```

Das Lesen aus dem `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

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

Und das Schreiben in den `WebTransportSendStream` kann so ausgeführt werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu senden und vom Client zu empfangen, kann darauf über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) zugegriffen werden, die ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jeder kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen wie oben gezeigt zu lesen und zu schreiben. Allerdings benötigen Sie, wie beim unidirektionalen Beispiel, eine anfängliche Funktion, um den bidirektionalen Stream überhaupt zu lesen:

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
  - : Bietet Funktionalität, die es einem User-Agent ermöglicht, eine Verbindung zu einem HTTP/3-Server herzustellen, einen zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen von einem Server oder einem Client erstellten bidirektionalen Stream, der für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme und verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der durch Serverfehler, Netzwerkverbindungsprobleme oder clientinitiierte Abbruchoperationen entstehen kann (zum Beispiel bei einem Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)).
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen WebTransport-Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen WebTransport-Stream.

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
