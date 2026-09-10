---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 3100645fa08ae52995bb32423088433cfa6d9cca
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet eine moderne Weiterentwicklung von [WebSockets](/de/docs/Web/API/WebSockets_API) und überträgt Daten zwischen Client und Server mithilfe von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Zustellung außerhalb der Reihenfolge. Sie ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) wurde 2022 nach mehreren Jahren der Entwicklung standardisiert.
Es basiert auf dem {{Glossary("QUIC", "QUIC")}}-Protokoll (das wiederum auf UDP basiert und 2021 standardisiert wurde) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Dazu gehören:

- **{{Glossary("head_of_line_blocking", "Head-of-line blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen auf dieser Verbindung aufgehalten, bis fehlende Pakete erneut übertragen wurden. Mit QUIC ist nur die fehlschlagende Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist TCP in vielerlei Hinsicht leistungsfähiger. QUIC kann Sicherheitsfunktionen selbst handhaben, anstatt die Verantwortung an andere Protokolle wie TLS zu übergeben – was weniger Roundtrips bedeutet. Außerdem bieten Streams eine bessere Transporteizienz als der ältere Paketmechanismus. Das kann insbesondere in Netzwerken mit hoher Latenz einen erheblichen Unterschied ausmachen.
- **Bessere Netzwerkwechsel**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um Quelle und Ziel jeder Anfrage zu verarbeiten und sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, sodass beispielsweise ein Download ohne Unterbrechung fortgesetzt werden kann, wenn Sie von WLAN zu einem Mobilfunknetz wechseln. HTTP/2 verwendet hingegen IP-Adressen als Kennungen, sodass Netzwerkwechsel problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet Zugriff auf niedriger Ebene auf die bidirektionale Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Erste Verbindung

Um eine Verbindung zu einem HTTP/3-Server zu öffnen, übergeben Sie dessen URL an den Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss. Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung verwenden.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}
```

### Verbindung schließen

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt wird. Von WebTransport-Operationen zurückgegebene Fehler haben den Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zu der standardmäßigen Menge von [`DOMException`](/de/docs/Web/API/DOMException).

```js
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

Der Server kann auch angeben, dass er die Verbindung vor dem Schließen leeren möchte, möglicherweise aufgrund der Verwaltung des zugrunde liegenden Transports.
Wenn dies geschieht, sollte der Client damit beginnen, Streams zu schließen, und eine neue Sitzung erstellen, wenn er seine Arbeit fortsetzen muss.
Sie können dies mithilfe des Promise [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) erkennen, das erfüllt wird, sobald der Server signalisiert, dass die Sitzung in den Drainage-Zustand wechselt:

````js
async function watchForDraining(transport) {
  // Fulfills when the server signals that the session is draining
  await transport.draining;

  console.log("The session is draining: avoid opening new streams.");

### Negotiating an application protocol

A WebTransport server can support multiple applications, each using its own "custom" communication protocol.
To support this, the client can offer a list of candidate protocol names in preference order via the [`protocols`](/en-US/docs/Web/API/WebTransport/WebTransport#protocols) option of the `WebTransport()` constructor.
The server can then choose to select one of these during connection establishment.

Once the {{domxref("WebTransport.ready")}} promise fulfills, the negotiated protocol (if any) is available via the {{domxref("WebTransport.protocol")}} property.
This is the empty string if `protocols` was not used, or if the server did not select any of the offered protocols.
A server that supports none of the offered protocols may instead reject the connection outright, causing `ready` to reject.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    protocols: ["chat", "file-transfer"],
  });

  try {
    await transport.ready;
    console.log(transport.protocol); // e.g. "chat", or "" if none was selected
    return transport;
  } catch (error) {
    console.error(`Connection failed: ${error}`);
  }
}
````

### Unzuverlässige Übertragung über Datagramme

„Unzuverlässig“ bedeutet, dass die Übertragung von Daten nicht garantiert ist und auch keine Ankunft in einer bestimmten Reihenfolge garantiert wird. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Aktualisierungen des Spielzustands übertragen, bei denen jede Nachricht die zuletzt eingetroffene ersetzt und die Reihenfolge nicht wichtig ist.

Die unzuverlässige Datenübertragung wird über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) verarbeitet. Diese gibt ein Objekt [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und sie von diesem zu empfangen.

Die Eigenschaft [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) gibt ein Objekt [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, in das Sie mithilfe eines Writers Daten zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein Objekt [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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

„Zuverlässig“ bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind. Dies führt zu einer langsameren Zustellung (wenn auch schneller als mit WebSockets) und ist in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, beispielsweise bei Chat-Anwendungen.

Bei der Verwendung zuverlässiger Übertragung über Streams können Sie außerdem die relative Priorität verschiedener Streams über denselben Transport festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User Agent aus zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Daraus können Sie [einen Writer abrufen](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Beachten Sie außerdem die Verwendung der Methode [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close), um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann auf diesen auf dem Client über die Eigenschaft [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um vom Server gesendete {{jsxref("Uint8Array")}}-Instanzen zu lesen.

In diesem Fall muss zunächst eine Funktion eingerichtet werden, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der Klasse `ReadableStream` und können daher auf genau dieselbe Weise verwendet werden:

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

Rufen Sie als Nächstes [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten Sie eine Referenz auf den Reader, der für den zurückgegebenen `ReadableStream` verfügbar ist. Verwenden Sie dann den Reader, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem User Agent aus zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz auf einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieser enthält die Eigenschaften `readable` und `writable`, die Referenzen auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurückgeben, mit denen Daten vom Server gelesen und auf den Server geschrieben werden können.

> [!NOTE]
> `WebTransportBidirectionalStream` ähnelt [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), mit dem Unterschied, dass die Eigenschaften `readable` und `writable` in dieser Schnittstelle jeweils `ReadableStream` und `WritableStream` sind.

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

Das Lesen aus dem `WebTransportReceiveStream` kann anschließend wie folgt erfolgen:

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

Und das Schreiben in den `WebTransportSendStream` kann so erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu übertragen und von ihm zu empfangen, kann auf diesen über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) zugegriffen werden. Diese gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurück. Jedes davon kann verwendet werden, um wie oben gezeigt {{jsxref("Uint8Array")}}-Instanzen zu lesen und zu schreiben. Wie beim unidirektionalen Beispiel benötigen Sie jedoch zunächst eine Funktion, um den bidirektionalen Stream überhaupt zu lesen:

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
  - : Stellt Funktionen bereit, mit denen ein User Agent eine Verbindung zu einem HTTP/3-Server herstellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen initiieren und die Verbindung schließen kann, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen von einem Server oder Client erstellten bidirektionalen Stream, der für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für die unzuverlässige Übertragung von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken zum Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der durch Serverfehler, Probleme mit der Netzwerkverbindung oder vom Client initiierte Abbruchvorgänge entstehen kann, beispielsweise durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort).
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Stellt Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream bereit.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Stellt Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream bereit.

## Beispiele

Vollständige Beispiele finden Sie unter:

- [WebTransport über HTTP/3-Client](https://webtransport.day/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
