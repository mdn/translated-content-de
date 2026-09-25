---
title: "WebTransport: Methode createUnidirectionalStream()"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 64685d67035fa6c3ad63a36e89ce8f59d670c3ac
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Methode **`createUnidirectionalStream()`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt erfüllt wird. Mit diesem Objekt können Daten zuverlässig an den Server geschrieben werden.

<!-- Note, returns a `WebTransportSendStream` according to spec, but not yet implemented -->

„Zuverlässig“ bedeutet, dass die Übertragung und die Reihenfolge der Daten garantiert sind. Dadurch ist die Übertragung langsamer als mit [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) (wenn auch schneller als mit WebSockets). Diese Zuverlässigkeit ist jedoch in Situationen erforderlich, in denen die vollständige Übertragung und die richtige Reihenfolge wichtig sind, beispielsweise bei Chat-Anwendungen.

Die relative Reihenfolge, in der Daten aus erstellten Streams gesendet werden, kann mit der Option `sendOrder` festgelegt werden. Ist sie gesetzt, werden ausstehende Daten aus Streams mit einem höheren `sendOrder`-Wert garantiert vor ausstehenden Daten aus Streams mit einem niedrigeren Wert gesendet. Ist kein Wert festgelegt, hängt die Sendereihenfolge von der Implementierung ab. Beachten Sie jedoch, dass Daten aus Streams mit einem höheren `sendOrder`-Wert nicht unbedingt zuerst ankommen, auch wenn sie zuerst gesendet werden.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `sendOrder` {{optional_inline}}
      - : Eine Ganzzahl, die die Sendepriorität dieses Streams relativ zu anderen Streams angibt, für die ein Wert festgelegt wurde. Ausstehende Daten aus Streams mit einem höheren Wert werden zuerst gesendet. Ist kein Wert festgelegt, hängt die Sendereihenfolge von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem `WebTransportSendStream`-Objekt erfüllt wird (einem [`WritableStream`](/de/docs/Web/API/WritableStream)).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während die WebTransport-Verbindung geschlossen oder fehlgeschlagen ist.

## Beispiele

Verwenden Sie die Methode `createUnidirectionalStream()`, um eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Darüber können Sie [einen Writer abrufen](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

Verwenden Sie die Methode [`close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) des resultierenden [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), um den Stream zu schließen. Der Browser versucht, vor dem Schließen des Streams alle ausstehenden Daten zu senden.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream({
    sendOrder: "596996858",
  });
  const writer = stream.getWriter();
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

Sie können auch [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) verwenden, um den Stream abrupt zu beenden. Bei Verwendung von `abort()` kann der Browser ausstehende Daten verwerfen, die noch nicht gesendet wurden.

```js
// …

const stream = await transport.createUnidirectionalStream();
const writer = stream.getWriter();

// …

writer.write(data1);
writer.write(data2);
await writer.abort();
// Not all the data may have been written.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
