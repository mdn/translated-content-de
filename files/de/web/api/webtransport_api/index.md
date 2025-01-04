---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: a0a4a3a87561e731449a6e85efcb66c99a746e9b
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet eine moderne Aktualisierung zu [WebSockets](/de/docs/Web/API/WebSockets_API) und überträgt Daten zwischen Client und Server mithilfe von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Zustellung außer der Reihenfolge. Sie ermöglicht zuverlässigen Transport über [streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datenpakete.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Bearbeitung. Es basiert auf Googles QUIC-Protokoll (das seinerseits auf UDP basiert) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Diese beinhalten:

- **{{Glossary("head_of_line_blocking", "Head-of-line-Blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource ausfällt, werden alle anderen Ressourcen in dieser Verbindung aufgehalten, bis fehlende Pakete erneut übertragen werden. Mit QUIC ist nur die fehlerhafte Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht leistungsfähiger als TCP. QUIC kann Sicherheitsfunktionen selbst handhaben, anstatt die Verantwortung an andere Protokolle wie TLS zu übergeben — das bedeutet weniger Rundreisen. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Dies kann insbesondere in Netzwerken mit hoher Latenz einen deutlichen Unterschied machen.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu bearbeiten — um sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken beibehalten werden, was bedeutet, dass z. B. ein Download ohne Unterbrechung fortgesetzt werden kann, wenn Sie von Wi-Fi zu einem mobilen Netzwerk wechseln. HTTP/2 hingegen verwendet IP-Adressen als Identifikatoren, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt die unzuverlässige Datenübertragung über Datenpakete.

Die WebTransport API bietet einen Low-Level-Zugriff auf die bidirektionale Kommunikation über HTTP/3 und nutzt die oben genannten Vorteile, während sie sowohl zuverlässige als auch unzuverlässige Datenübertragung unterstützt.

### Initiale Verbindung

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie seine URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist, können Sie die Verbindung nutzen.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechen erfüllt ist. Fehler, die durch WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den Standard-Fehlersatz von [`DOMException`](/de/docs/Web/API/DOMException).

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

### Unzuverlässige Übertragung über Datenpakete

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, ebenso wenig wie die Ankunft in einer bestimmten Reihenfolge. Dies ist in bestimmten Situationen in Ordnung und bietet eine sehr schnelle Zustellung. Zum Beispiel könnten Sie regelmäßige Statusaktualisierungen eines Spiels übertragen wollen, bei denen jede Nachricht die letzte überschreibt, die ankommt, und die Reihenfolge nicht wichtig ist.

Die unzuverlässige Datenübertragung wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft gehandhabt — diese gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datenpakete an den Server zu senden und zurückzuerhalten.

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, zu dem Sie Daten mithilfe eines Writers zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies sorgt für langsamere Lieferung (allerdings schneller als bei WebSockets) und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind (wie z. B. bei Chat-Anwendungen).

Bei Verwendung der zuverlässigen Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über denselben Transport einstellen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von dort können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann dieser auf dem Client über die [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams)-Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um von dem Server gesendete {{jsxref("Uint8Array")}}-Instanzen zu lesen.

In diesem Fall ist das Erste, was zu tun ist, eine Funktion einzurichten, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der `ReadableStream`-Klasse und können daher auf dieselbe Weise verwendet werden:

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

Rufen Sie als Nächstes [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten Sie eine Referenz auf den auf dem zurückgegebenen `ReadableStream` verfügbaren Reader, und verwenden Sie dann den Reader, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz auf einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieser enthält `readable`- und `writable`-Eigenschaften, die Referenzen auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurückgeben, die zum Lesen vom und Schreiben an den Server verwendet werden können.

> **Hinweis:** `WebTransportBidirectionalStream` ähnelt dem [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), mit dem Unterschied, dass in diesem Interface die `readable`- und `writable`-Eigenschaften `ReadableStream` und `WritableStream` sind.

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

Der Lesevorgang aus dem `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

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

Und das Schreiben in den `WebTransportSendStream` kann so vorgenommen werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu übertragen und vom Client zu empfangen, kann darauf über die [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams)-Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen und zu schreiben, wie oben gezeigt. Allerdings benötigen Sie, wie beim unidirektionalen Beispiel, eine Anfangsfunktion, um den bidirektionalen Stream überhaupt zu lesen:

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
  - : Bietet Funktionalität, um einem Benutzeragenten zu ermöglichen, sich mit einem HTTP/3-Server zu verbinden, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Stellt einen vom Server oder Client erstellten bidirektionalen Stream dar, der für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Stellt einen Duplex-Stream dar, der für unzuverlässigen Transport von Datenpaketen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datenpakete, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datenpakete sowie verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Stellt einen Fehler im Zusammenhang mit der WebTransport API dar, der durch Serverfehler, Netzwerkverbindungsprobleme oder durch den Client initiierte Abbruchvorgänge (zum Beispiel durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) auftreten kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream von WebTransport.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.

## Beispiele

Für vollständige Beispiele siehe:

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
