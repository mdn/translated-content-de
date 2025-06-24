---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet eine moderne Aktualisierung für [WebSockets](/de/docs/Web/API/WebSockets_API) und überträgt Daten zwischen Client und Server mit [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Übertragung in ungeordneter Reihenfolge. Es ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Nutzung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Entwicklung. Es basiert auf dem QUIC-Protokoll von Google (das seinerseits auf UDP basiert) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Diese beinhalten:

- **{{Glossary("head_of_line_blocking", "Head-of-line Blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzige Verbindung mehrere Ressourcen gleichzeitig übertragen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen auf dieser Verbindung aufgehalten, bis alle fehlenden Pakete erneut übertragen werden. Bei QUIC ist nur die fehlerhafte Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht leistungsfähiger als TCP. QUIC kann Sicherheitsfunktionen eigenständig handhaben, anstatt die Verantwortung an andere Protokolle wie TLS zu übergeben, was weniger Round-Trips bedeutet. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus, was besonders in Netzwerken mit hoher Latenz einen signifikanten Unterschied machen kann.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu handhaben und sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, wodurch beispielsweise ein Download weiterlaufen kann, ohne unterbrochen zu werden, wenn Sie von Wi-Fi zu einem Mobilfunknetz wechseln. HTTP/2 hingegen verwendet IP-Adressen als Identifikatoren, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet einen Low-Level-Zugang zur bidirektionalen Kommunikation über HTTP/3. Sie nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Erste Verbindung

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie dessen URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt ist, können Sie die Verbindung nutzen.

Außerdem können Sie auf das Schließen der Verbindung reagieren, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Promise erfüllt ist. Fehler, die von WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten neben dem Standardsatz an [`DOMException`](/de/docs/Web/API/DOMException).

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

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch das Eintreffen in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und ermöglicht sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Spielstatus-Updates übertragen, bei denen jede Nachricht die zuletzt eingetroffene überschreibt und die Reihenfolge unwichtig ist.

Unzuverlässige Datenübertragung wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft gehandhabt – diese gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und sie zurückzuerhalten.

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie mit einem Writer Daten für die Übertragung zum Server schreiben können:

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

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert ist. Dies führt zu langsamerer Zustellung (wenn auch schneller als mit WebSockets) und ist in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind (beispielsweise in Chat-Anwendungen).

Bei zuverlässiger Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über denselben Transportkanal festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Damit können Sie einen [Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann der Client darauf über die [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams)-Eigenschaft zugreifen, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen, die vom Server gesendet wurden.

In diesem Fall ist der erste Schritt, eine Funktion zu erstellen, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der `ReadableStream`-Klasse und können auf die gleiche Weise verwendet werden:

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

Als nächstes rufen Sie [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten eine Referenz zum verfügbaren Reader des `ReadableStream`, den es zurückgibt. Verwenden Sie dann den Reader, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden die zuvor eingerichtete `readFrom()`-Funktion, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieses enthält die Eigenschaften `readable` und `writable`, die Referenzen zu `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurückgeben, die zum Lesen und Schreiben zum Server verwendet werden können.

> [!NOTE] > `WebTransportBidirectionalStream` ähnelt [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass in dieser Schnittstelle die Eigenschaften `readable` und `writable` `ReadableStream` respektive `WritableStream` sind.

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

Das Lesen vom `WebTransportReceiveStream` kann dann wie folgt vorgenommen werden:

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

Und das Schreiben auf den `WebTransportSendStream` kann folgendermaßen erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu übertragen und vom Client zu empfangen, kann darauf über die [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams)-Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jeder von ihnen kann verwendet werden, um `Uint8Array`-Instanzen wie oben gezeigt zu lesen und zu schreiben. Allerdings benötigen Sie, wie im unidirektionalen Beispiel, eine Anfangsfunktion, um den bidirektionalen Stream überhaupt zu lesen:

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
  - : Bietet Funktionalitäten für einen Benutzeragenten, um eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen bidirektionalen Stream, der von einem Server oder Client erstellt wurde und für den zuverlässigen Transport verwendet werden kann. Bietet Zugang zu einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einem [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugang zu einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einem [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedenen Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der durch Serverfehler, Netzwerkverbindungsprobleme oder clientinitiierte Abbruchvorgänge (z.B. durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) auftreten kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden WebTransport-uni- oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden WebTransport-uni- oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.

## Beispiele

Für vollständige Beispiele siehe:

- [WebTransport über HTTP/3 Client](https://webtransport.day/)
- [WebTransport (BYOB) Echo mit WebCodecs in Worker](https://webrtc.internaut.com/wc/wtSender4/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
