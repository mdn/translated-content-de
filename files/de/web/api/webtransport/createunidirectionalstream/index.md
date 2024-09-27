---
title: "WebTransport: createUnidirectionalStream()-Methode"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createUnidirectionalStream()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt aufgelöst wird, welches genutzt werden kann, um Daten zuverlässig zum Server zu schreiben.

<!-- Hinweis: Gibt gemäß Spezifikation einen `WebTransportSendStream` zurück, aber noch nicht implementiert -->

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Übermittlung (wenn auch schneller als mit `WebSockets`) als [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist aber in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie bei Chat-Anwendungen.

Die relative Reihenfolge, in der aus erstellten Streams gequeued Bytes geleert werden, kann mit der `sendOrder`-Option angegeben werden. Falls gesetzt, werden gequeued Bytes in Streams mit höherem Sendevorrang garantiert vor gequeued Bytes in Streams mit niedrigerem Sendevorrang gesendet. Falls die Ordnungszahl nicht gesetzt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass auch wenn Bytes aus Streams mit höherem Sendevorrang zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein Integer-Wert, der die Sendepriorität dieses Streams relativ zu anderen Streams angibt, für die der Wert gesetzt wurde. Gequeued Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben. Falls nicht gesetzt, hängt die Sendeordnung von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem `WebTransportSendStream`-Objekt aufgelöst wird (dies ist ein [`WritableStream`](/de/docs/Web/API/WritableStream)).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während das `WebTransport` geschlossen oder fehlerhaft ist.

## Beispiele

Verwenden Sie die Methode `createUnidirectionalStream()`, um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von dort können Sie einen [Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

Verwenden Sie die [`close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close)-Methode des resultierenden [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), um die zugehörige HTTP/3-Verbindung zu schließen. Der Browser versucht, alle ausstehenden Daten zu senden, bevor er die zugehörige Verbindung tatsächlich schließt.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream({
    sendOrder: "596996858",
  });
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

Sie können auch [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) verwenden, um den Stream abrupt zu beenden. Wenn Sie `abort()` verwenden, kann der Browser anstehende Daten verwerfen, die noch nicht gesendet wurden.

```js
// ...

const stream = await transport.createUnidirectionalStream();
const writer = ws.getWriter();

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

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
