---
title: "WebTransport: Methode createUnidirectionalStream()"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createUnidirectionalStream()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das in ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt aufgelöst wird, welches verwendet werden kann, um zuverlässig Daten an den Server zu schreiben.

<!-- Hinweis, gibt gemäß Spezifikation einen `WebTransportSendStream` zurück, aber noch nicht implementiert -->

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies sorgt für eine langsamere Übertragung (wenn auch schneller als mit WebSockets) als [`Datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. bei Chat-Anwendungen.

Die relative Reihenfolge, in der die in die Warteschlange gestellten Bytes aus den erstellten Streams geleert werden, kann mit der `sendOrder`-Option spezifiziert werden. Wenn gesetzt, werden die in der Warteschlange befindlichen Bytes in Streams mit einer höheren Sendepriorität garantiert vor den in der Warteschlange befindlichen Bytes für Streams mit einer niedrigeren Sendepriorität gesendet. Wenn die Ordnungsnummer nicht gesetzt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass selbst wenn Bytes aus Streams mit höherer Sendeordnung zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein Ganzzahlwert, der die Sendepriorität dieses Streams relativ zu anderen Streams angibt, für die der Wert gesetzt wurde. In Warteschlangen befindliche Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben. Wenn nicht gesetzt, hängt die Sendeordnung von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in ein `WebTransportSendStream`-Objekt auflöst (dies ist ein [`WritableStream`](/de/docs/Web/API/WritableStream)).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während der WebTransport geschlossen oder fehlgeschlagen ist.

## Beispiele

Verwenden Sie die `createUnidirectionalStream()`-Methode, um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von hier aus können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um das Schreiben von Daten in den Stream zu ermöglichen und diese an den Server zu senden.

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

Sie können auch [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) verwenden, um den Stream abrupt zu beenden. Bei der Verwendung von `abort()` kann der Browser alle ausstehenden Daten, die noch nicht gesendet wurden, verwerfen.

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
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
