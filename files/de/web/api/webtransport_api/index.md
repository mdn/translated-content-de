---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet ein modernes Update der [WebSockets](/de/docs/Web/API/WebSockets_API), indem sie Daten zwischen Client und Server über [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/) überträgt. WebTransport unterstützt mehrere Streams, unidirektionale Streams und außerordentliche Lieferung. Sie ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Nutzung

[HTTP/3](https://de.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Arbeit. Es basiert auf Googles QUIC-Protokoll (das selbst auf UDP basiert) und behebt mehrere Probleme im Zusammenhang mit dem klassischen TCP-Protokoll, auf dem HTTP und WebSockets basieren.

Dazu gehören:

- **{{Glossary("head_of_line_blocking", "Head-of-line Blocking")}}**
  - : HTTP/2 erlaubt Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource scheitert, werden alle anderen Ressourcen auf dieser Verbindung zurückgehalten, bis fehlende Pakete neu übertragen werden. Bei QUIC wird nur die fehlgeschlagene Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht leistungsfähiger als TCP. QUIC kann Sicherheitsfunktionen eigenständig verwalten, anstatt die Verantwortung an andere Protokolle wie TLS zu delegieren – was weniger Rundreisen bedeutet. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Das kann einen wesentlichen Unterschied ausmachen, insbesondere in Hochlatenz-Netzwerken.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu verwalten — um sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, was bedeutet, dass zum Beispiel ein Download ohne Unterbrechung fortgesetzt werden kann, wenn Sie von Wi-Fi zu einem mobilen Netzwerk wechseln. HTTP/2 hingegen verwendet IP-Adressen als Kennungen, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet niedrigstufigen Zugriff auf die bidirektionale Kommunikation über HTTP/3, nutzt die vorgenannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Initiale Verbindung

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie dessen URL dem [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist, können Sie die Verbindung verwenden.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechen erfüllt ist. Fehler, die von WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den Standardsatz von [`DOMException`](/de/docs/Web/API/DOMException) hinaus.

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

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch deren Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Zum Beispiel könnte man regelmäßige Spielstatus-Updates übertragen wollen, bei denen jede Nachricht die letzte eingetroffene Nachricht ersetzt und die Reihenfolge keine Rolle spielt.

Die unzuverlässige Datenübertragung wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft gehandhabt — diese gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was zum Senden von Datagrammen an den Server und deren Empfang zurück benötigt wird.

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, zu dem Sie Daten über einen Writer zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, mit dem Sie Daten vom Server empfangen können:

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

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies sorgt für eine langsamere Lieferung (wenn auch schneller als bei WebSockets) und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind (zum Beispiel bei Chat-Anwendungen).

Bei der Verwendung zuverlässiger Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über denselben Transport einstellen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von diesem können Sie einen [Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann darauf auf der Clientseite über die [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams)-Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um von dem Server gesendete {{jsxref("Uint8Array")}}-Instanzen zu lesen.

In diesem Fall ist es zunächst erforderlich, eine Funktion zum Lesen eines `WebTransportReceiveStream` einzurichten. Diese Objekte erben von der `ReadableStream`-Klasse, so dass sie auf die gleiche Weise verwendet werden können:

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

Als Nächstes rufen Sie [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten eine Referenz zum verfügbaren Leser auf dem vom `ReadableStream` zurückgegebenen Objekt, und verwenden dann den Leser, um die Daten vom Server zu lesen. Jedes Segment ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten. Dieser enthält `readable` und `writable` Eigenschaften, die Referenzen zu `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen zurückgeben, mit denen Sie vom Server lesen und auf den Server schreiben können.

> **Hinweis:** `WebTransportBidirectionalStream` ist ähnlich wie [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass die `readable` und `writable` Eigenschaften in dieser Schnittstelle jeweils `ReadableStream` und `WritableStream` sind.

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

Das Lesen aus dem `WebTransportReceiveStream` kann dann wie folgt erfolgen:

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

Und das Schreiben in den `WebTransportSendStream` kann so gemacht werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu senden und vom Client zu empfangen, kann darauf über die [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams)-Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes davon kann wie oben gezeigt verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen und zu schreiben. Allerdings benötigen Sie, wie im Fall des unidirektionalen Beispiels, eine anfängliche Funktion, um den bidirektionalen Stream überhaupt erst lesen zu können:

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
  - : Bietet Funktionalität, um einem User-Agent zu ermöglichen, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Stellt einen vom Server oder Client erstellten bidirektionalen Stream dar, der für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Stellt einen Duplex-Stream dar, der für unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme und verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Stellt einen Fehler im Zusammenhang mit der WebTransport API dar, der durch Serverfehler, Netzwerkverbindungsprobleme oder vom Client initiierte Abbruchoperationen (z. B. durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) entstehen kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.

## Beispiele

Für vollständige Beispiele siehe:

- [WebTransport über HTTP/3-Client](https://webtransport.day/)
- [WebTransport (BYOB) Echo mit WebCodecs im Worker](https://webrtc.internaut.com/wc/wtSender4/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
