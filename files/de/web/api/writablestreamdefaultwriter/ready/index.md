---
title: "WritableStreamDefaultWriter: ready-Eigenschaft"
short-title: ready
slug: Web/API/WritableStreamDefaultWriter/ready
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ready`**-Eigenschaft der
[`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle gibt ein {{jsxref("Promise")}}
zurück, das aufgelöst wird, wenn sich die gewünschte Größe der internen Warteschlange des Streams von
nicht-positiv zu positiv ändert. Dies signalisiert, dass der Stream keinen Rückstau mehr anwendet.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

Das folgende Beispiel zeigt zwei Verwendungen der `ready`-Eigenschaft. Die erste Verwendung nutzt
`ready`, um sicherzustellen, dass der `WritableStream` mit dem Schreiben fertig ist und
somit in der Lage ist, Daten zu empfangen, bevor ein binäres Chunk gesendet wird. Die zweite Überprüfung stellt ebenfalls fest, ob
der `WritableStream` mit dem Schreiben fertig ist, dieses Mal jedoch, weil das Schreiben abgeschlossen sein muss, bevor der Schreiber geschlossen werden kann.

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    // Make sure the stream and its writer are able to
    //   receive data.
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.error(`Chunk error: ${err}`);
      });
    // Call ready again to ensure that all chunks are written
    //   before closing the writer.
    defaultWriter.ready
      .then(() => defaultWriter.close())
      .then(() => {
        console.log("All chunks written");
      })
      .catch((err) => {
        console.error(`Stream error: ${err}`);
      });
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
