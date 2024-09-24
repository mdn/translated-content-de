---
title: WebTransportBidirectionalStream
slug: Web/API/WebTransportBidirectionalStream
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportBidirectionalStream`**-Schnittstelle der {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} repräsentiert einen bidirektionalen Stream, der von einem Server oder einem Client erstellt wird und für den zuverlässigen Transport genutzt werden kann. Sie bietet Zugriff auf einen {{domxref("WebTransportReceiveStream")}} zum Lesen eingehender Daten und einen {{domxref("WebTransportSendStream")}} zum Schreiben ausgehender Daten.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("WebTransportBidirectionalStream.readable", "readable")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("WebTransportReceiveStream")}}-Instanz zurück, die verwendet werden kann, um eingehende Daten zu lesen.
- {{domxref("WebTransportBidirectionalStream.writable", "writable")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("WebTransportSendStream")}}-Instanz zurück, die verwendet werden kann, um ausgehende Daten zu schreiben.

## Beispiele

### Bidirektionale Übertragung initiiert durch den Benutzeragenten

Um einen bidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode {{domxref("WebTransport.createBidirectionalStream()")}}, um eine Referenz auf einen `WebTransportBidirectionalStream` zu erhalten. Die Eigenschaften `readable` und `writable` geben Referenzen zu `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurück. Diese erben jeweils von `ReadableStream` und `WritableStream` und können zum Lesen vom und Schreiben auf den Server verwendet werden.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream ist ein WebTransportBidirectionalStream
  // stream.readable ist ein WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable ist ein WebTransportSendStream
  const writable = stream.writable;

  ...
}
```

Das Lesen vom `WebTransportReceiveStream` kann auf die gleiche Weise erfolgen wie das Lesen eines `ReadableStream`:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value ist ein Uint8Array.
    console.log(value);
  }
}
```

Und das Schreiben auf den `WebTransportSendStream` kann so erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

### Bidirektionale Übertragung initiiert durch den Server

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu senden und von diesem zu empfangen, kann darauf über die Eigenschaft {{domxref("WebTransport.incomingBidirectionalStreams")}} zugegriffen werden, die einen {{domxref("ReadableStream")}} von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen gemäß dem oben gezeigten Beispiel zu lesen und zu schreiben. Allerdings benötigen Sie zunächst eine Funktion, um den bidirektionalen Stream überhaupt lesen zu können:

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value ist eine Instanz von WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
