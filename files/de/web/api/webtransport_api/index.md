---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet ein modernes Update zu [WebSockets](/de/docs/Web/API/WebSockets_API) und überträgt Daten zwischen Client und Server mithilfe von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die außerordentliche Bereitstellung. Es ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Arbeit. Es basiert auf dem QUIC-Protokoll von Google (das selbst auf UDP basiert) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Diese beinhalten:

- **Head-of-line Blocking**
  - : HTTP/2 erlaubt Multiplexing, sodass eine einzige Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen auf dieser Verbindung zurückgehalten, bis alle fehlenden Pakete erneut übertragen werden. Mit QUIC ist nur die fehlerhafte Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht performanter als TCP. QUIC kann Sicherheitsfunktionen selbst verwalten, anstatt die Verantwortung an andere Protokolle wie TLS abzugeben — was weniger Roundtrips bedeutet. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Das kann einen signifikanten Unterschied machen, insbesondere bei Netzwerken mit hoher Latenz.
- **Bessere Netzwerkübertragungen**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu handhaben — um sicherzustellen, dass Pakete korrekt geliefert werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, was zum Beispiel bedeutet, dass ein Download fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von WLAN zu einem Mobilfunknetz wechseln. HTTP/2 hingegen verwendet IP-Adressen als Bezeichner, sodass Netzwerkübertragungen problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet einen Low-Level-Zugriff auf die bidirektionale Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Erster Verbindungsaufbau

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie dessen URL dem [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Versprechen erfüllt ist, können Sie die Verbindung nutzen.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie auf das Erfüllen des [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) Versprechens warten. Fehler, die durch WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zum Standardset von [`DOMException`](/de/docs/Web/API/DOMException).

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

### Unzuverlässige Übertragung via Datagramme

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch das Eintreffen in einer bestimmten Reihenfolge. Dies ist in manchen Situationen akzeptabel und bietet eine sehr schnelle Lieferung. Beispielsweise könnten Sie regelmäßige Aktualisierungen des Spielzustands übertragen möchten, wobei jede Nachricht die letzte, die eintrifft, übertrumpft, und die Reihenfolge nicht wichtig ist.

Die unzuverlässige Datenübertragung wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) Eigenschaft gehandhabt — dies gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme zum Server zu senden und zurückzuempfangen.

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream) Objekt zurück, auf das Sie mittels eines Schreibers Daten schreiben können, um sie an den Server zu übertragen:

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

### Zuverlässige Übertragung via Streams

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert ist. Dies bietet eine langsamere Lieferung (wenngleich schneller als bei WebSockets) und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind (wie zum Beispiel bei Chat-Anwendungen).

Wenn Sie die zuverlässige Übertragung über Streams verwenden, können Sie auch die relative Priorität unterschiedlicher Streams über denselben Transport setzen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) Methode, um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Daraus können Sie einen [Writer bekommen](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Beachten Sie auch die Verwendung der [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) Methode, um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann dieser auf dem Client durch die [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream) Objekten zurückgibt. Diese können verwendet werden, um gesendete {{jsxref("Uint8Array")}} Instanzen vom Server zu lesen.

In diesem Fall muss zunächst eine Funktion eingerichtet werden, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der `ReadableStream` Klasse, sodass sie auf die gleiche Weise verwendet werden können:

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

Nächster Schritt ist den Aufruf von [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) zu tätigen und eine Referenz zu dem Leser auf den `ReadableStream` zu erhalten, den es zurückgibt, und dann den Leser zu verwenden, um die Daten vom Server zu lesen. Jedes Stück ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) Methode, um eine Referenz zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Diese enthält `readable` und `writable` Eigenschaften, die Referenzen zu `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen zurückgeben, die zum Lesen und Schreiben auf den Server verwendet werden können.

> **Note:** `WebTransportBidirectionalStream` ist ähnlich der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass in dieser Schnittstelle die `readable` und `writable` Eigenschaften `ReadableStream` und `WritableStream` sind.

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

Das Lesen vom `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

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

Und das Schreiben auf den `WebTransportSendStream` kann so durchgeführt werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu übertragen und von diesem zu empfangen, kann auf diesen über die [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) Eigenschaft zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream` Objekten zurückgibt. Jeder kann verwendet werden, um {{jsxref("Uint8Array")}} Instanzen wie oben gezeigt zu lesen und zu schreiben. Aber wie beim unidirektionalen Beispiel benötigt man zuerst eine Funktion, um den bidirektionalen Stream überhaupt zu lesen:

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
  - : Bietet Funktionalität, um einem Benutzeragenten zu ermöglichen, sich mit einem HTTP/3-Server zu verbinden, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen einzuleiten und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen bidirektionalen Stream, der von einem Server oder einem Client erstellt wurde und für den zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) für das Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) für das Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) für das Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) für das Schreiben ausgehender Datagramme und verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der aufgrund von Serverfehlern, Netzwerkverbindungsproblemen oder vom Client initiierten Abbruchvorgängen auftreten kann (zum Beispiel aufgrund eines Aufrufs von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)).
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport) Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport) Stream.

## Beispiele

Für vollständige Beispiele, siehe:

- [WebTransport über HTTP/3 Client](https://webtransport.day/)
- [WebTransport (BYOB) Echo mit WebCodecs im Worker](https://webrtc.internaut.com/wc/wtSender4/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
