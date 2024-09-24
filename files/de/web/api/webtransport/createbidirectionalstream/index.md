---
title: "WebTransport: createBidirectionalStream() Methode"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createBidirectionalStream()`** Methode der {{domxref("WebTransport")}} Schnittstelle öffnet asynchron und gibt einen bidirektionalen Stream zurück.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das in ein {{domxref("WebTransportBidirectionalStream")}} Objekt aufgelöst wird, welches `readable` und `writable` Eigenschaften hat, die verwendet werden können, um zuverlässig vom Server zu lesen und zu schreiben. "Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert werden. Dies bietet eine langsamere Lieferung (wenn auch schneller als mit WebSockets) als {{domxref("WebTransport.datagrams", "Datagrammen")}}, ist aber in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. bei Chat-Anwendungen.

Die relative Reihenfolge, in der die in Warteschlange stehenden Bytes aus erstellten Streams geleert werden, kann mit der `sendOrder`-Option festgelegt werden. Wenn festgelegt, werden in Warteschlange stehende Bytes in Streams mit einer höheren Sendepriorität garantiert vor den Bytes in Streams mit einer niedrigeren Sendepriorität gesendet. Wenn die Ordnungsnummer nicht festgelegt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass obwohl Bytes aus Streams höherer Sendepriorität zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createBidirectionalStream()
createBidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das möglicherweise die folgenden Eigenschaften hat:

    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams relativ zu anderen Streams, für die der Wert festgelegt wurde, angibt. In Warteschlange stehende Bytes werden zuerst für Streams mit höherem Wert gesendet. Wenn nicht festgelegt, hängt die Sendepriorität von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein {{domxref("WebTransportBidirectionalStream")}} Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn `createBidirectionalStream()` aufgerufen wird, während der `WebTransport` geschlossen oder fehlgeschlagen ist.

## Beispiele

Eine anfängliche Funktion wird verwendet, um Referenzen zu den {{domxref("WebTransportBidirectionalStream.readable")}} und {{domxref("WebTransportBidirectionalStream.writable")}} Eigenschaften zu erhalten. Dabei handelt es sich um Referenzen zu `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen, die lesbare und schreibbare Streams sind, die zum Lesen vom und Schreiben auf den Server verwendet werden können.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream({
    sendOrder: "596996858",
  });
  // stream ist ein WebTransportBidirectionalStream
  // stream.readable ist ein ReadableStream
  const readable = stream.readable;
  // stream.writable ist ein WritableStream
  const writable = stream.writable;

  // ...
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
    // value ist ein Uint8Array.
    console.log(value);
  }
}
```

Und das Schreiben in den `WebTransportSendStream` kann so aussehen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebTransport.createUnidirectionalStream()")}}
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
