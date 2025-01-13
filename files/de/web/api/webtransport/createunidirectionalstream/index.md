---
title: "WebTransport: Methode createUnidirectionalStream()"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 5e4aa22f2c162dd05aea0245a9fb97ed6b3a5e77
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createUnidirectionalStream()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt aufgelöst wird, welches verwendet werden kann, um zuverlässig Daten an den Server zu schreiben.

<!-- Hinweis: Gibt gemäß Spezifikation einen `WebTransportSendStream` zurück, aber noch nicht implementiert -->

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies führt zu einer langsameren Übertragung (wenn auch schneller als mit WebSockets) als bei [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist aber erforderlich in Situationen, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. in Chat-Anwendungen.

Die relative Reihenfolge, in der die in Warteschlange stehenden Bytes von den erstellten Streams geleert werden, kann über die `sendOrder`-Option angegeben werden.
Wenn sie gesetzt ist, werden in Streams mit einer höheren Sendepriorität die in Warteschlange stehenden Bytes garantiert vor denen von Streams mit niedrigerer Sendepriorität gesendet.
Wenn die Ordnungsnummer nicht festgelegt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab.
Es ist jedoch zu beachten, dass selbst wenn Bytes von Streams mit höherer Sendepriorität zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams im Vergleich zu anderen Streams für die der Wert gesetzt wurde, angibt.
        In Warteschlange stehende Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben.
        Wenn nicht gesetzt, hängt die Sendereihenfolge von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein `WebTransportSendStream`-Objekt aufgelöst wird (dies ist ein [`WritableStream`](/de/docs/Web/API/WritableStream)).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während der WebTransport geschlossen oder fehlgeschlagen ist.

## Beispiele

Verwenden Sie die `createUnidirectionalStream()`-Methode, um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Daraus können Sie einen [Schreiber](/de/docs/Web/API/WritableStream/getWriter) erhalten, um das Schreiben von Daten in den Stream und das Senden an den Server zu ermöglichen.

Verwenden Sie die [`close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close)-Methode des resultierenden [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), um die zugehörige HTTP/3-Verbindung zu schließen. Der Browser versucht, alle ausstehenden Daten zu senden, bevor die zugehörige Verbindung tatsächlich geschlossen wird.

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

Sie können auch [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) verwenden, um den Stream abrupt zu beenden. Bei Verwendung von `abort()` kann es sein, dass der Browser alle ausstehenden Daten verwirft, die noch nicht gesendet wurden.

```js
// ...

const stream = await transport.createUnidirectionalStream();
const writer = stream.getWriter();

// ...

writer.write(...);
writer.write(...);
await writer.abort();
// Not all the data may have been written.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
