---
title: "WebTransport: Methode createUnidirectionalStream()"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createUnidirectionalStream()`**-Methode des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt auflöst, welches verwendet werden kann, um zuverlässig Daten an den Server zu schreiben.

<!-- Note, returns a `WebTransportSendStream` according to spec, but not yet implemented -->

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert werden. Dies führt zu einer langsameren Zustellung (obwohl schneller als mit WebSockets) als bei [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch in Situationen erforderlich, in denen Zuverlässigkeit und Ordnung wichtig sind, wie z.B. bei Chat-Anwendungen.

Die relative Reihenfolge, in der die angestellten Bytes aus erstellten Streams geleert werden, kann mit der `sendOrder`-Option spezifiziert werden.
Wenn gesetzt, werden angestellte Bytes in Streams mit einer höheren Sendepriorität garantiert vor den angestellten Bytes für Streams mit einer niedrigeren Sendepriorität gesendet.
Wenn die Ordnungsnummer nicht gesetzt ist, dann hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab.
Beachten Sie jedoch, dass selbst wenn Bytes aus Streams mit höherer Sendepriorität zuerst gesendet werden, sie möglicherweise nicht als erstes ankommen.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams relativ zu anderen Streams, für die der Wert gesetzt wurde, angibt.
        Angestellte Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben.
        Wenn nicht gesetzt, hängt die Sendepriorität von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem `WebTransportSendStream`-Objekt auflöst (dies ist ein [`WritableStream`](/de/docs/Web/API/WritableStream)).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während die WebTransport-Verbindung geschlossen oder fehlgeschlagen ist.

## Beispiele

Verwenden Sie die `createUnidirectionalStream()`-Methode, um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Daraus können Sie einen [Schreiber erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

Verwenden Sie die [`close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close)-Methode des resultierenden [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), um die zugehörige HTTP/3-Verbindung zu schließen. Der Browser versucht, alle anstehenden Daten zu senden, bevor die zugehörige Verbindung tatsächlich geschlossen wird.

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

Sie können auch [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) verwenden, um den Stream abrupt zu beenden. Beim Verwenden von `abort()` kann der Browser alle anstehenden Daten verwerfen, die noch nicht gesendet wurden.

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

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams-API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
