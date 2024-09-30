---
title: "WebTransport: createUnidirectionalStream() Methode"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createUnidirectionalStream()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das in ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt aufgelöst wird, welches verwendet werden kann, um Daten zuverlässig an den Server zu schreiben.

<!-- Note, returns a `WebTransportSendStream` according to spec, but not yet implemented -->

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Bereitstellung (obwohl schneller als mit WebSockets) als [`Datagramme`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. in Chat-Anwendungen.

Die relative Reihenfolge, in der die in den erstellten Streams aufgestauten Bytes geleert werden, kann mit der `sendOrder`-Option angegeben werden. Wenn festgelegt, werden aufgestaute Bytes in Streams mit einer höheren Sendepriorität garantiert vor den aufgestauten Bytes für Streams mit niedrigerer Sendepriorität gesendet. Ist die Ordnungsnummer nicht gesetzt, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass selbst wenn Bytes aus Streams mit höherer Sendepriorität zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams im Verhältnis zu anderen Streams angibt, für die der Wert festgelegt wurde. Aufgestaute Bytes werden zuerst für Streams geschickt, die einen höheren Wert haben. Ist der Wert nicht gesetzt, hängt die Sendepriorität von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein `WebTransportSendStream`-Objekt aufgelöst wird (dies ist ein [`WritableStream`](/de/docs/Web/API/WritableStream)).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während der WebTransport geschlossen oder fehlgeschlagen ist.

## Beispiele

Verwenden Sie die `createUnidirectionalStream()`-Methode, um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von diesem können Sie [einen Writer abrufen](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Sie können auch [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) verwenden, um den Stream abrupt zu beenden. Bei der Verwendung von `abort()` kann der Browser alle ausstehenden Daten verwerfen, die noch nicht gesendet wurden.

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
