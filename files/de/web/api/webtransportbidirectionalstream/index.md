---
title: WebTransportBidirectionalStream
slug: Web/API/WebTransportBidirectionalStream
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportBidirectionalStream`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert einen bidirektionalen Stream, der von einem Server oder einem Client erstellt wurde und für zuverlässigen Transport verwendet werden kann. Sie bietet Zugriff auf einen [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream) zum Lesen eingehender Daten und einen [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) zum Schreiben ausgehender Daten.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`readable`](/de/docs/Web/API/WebTransportBidirectionalStream/readable) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream) zurück, die zum Lesen eingehender Daten verwendet werden kann.
- [`writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) zurück, die zum Schreiben ausgehender Daten verwendet werden kann.

## Beispiele

### Bidirektionale Übertragung initiiert vom Benutzeragenten

Um einen bidirektionalen Stream von einem Benutzeragenten zu öffnen, nutzen Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz auf einen `WebTransportBidirectionalStream` zu erhalten. Die `readable`- und `writable`-Eigenschaften geben Referenzen auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurück.
Diese erben jeweils von `ReadableStream` und `WritableStream` und können verwendet werden, um vom Server zu lesen und an ihn zu schreiben.

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

Das Lesen von einem `WebTransportReceiveStream` kann genauso erfolgen wie das Lesen eines `ReadableStream`:

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

Und das Schreiben in einen `WebTransportSendStream` kann so erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

### Bidirektionale Übertragung initiiert vom Server

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu übertragen und von ihm zu empfangen, kann auf diesen über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jeder kann verwendet werden, um wie oben beschrieben {{jsxref("Uint8Array")}}-Instanzen zu lesen und zu schreiben. Sie benötigen jedoch zunächst eine Funktion, um den bidirektionalen Stream überhaupt zu lesen:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
