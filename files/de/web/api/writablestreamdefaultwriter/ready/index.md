---
title: "WritableStreamDefaultWriter: ready-Eigenschaft"
short-title: ready
slug: Web/API/WritableStreamDefaultWriter/ready
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ready`**-Eigenschaft der {{domxref("WritableStreamDefaultWriter")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück. Dieses Promise wird aufgelöst, wenn die gewünschte Größe der internen Warteschlange des Streams von nicht-positiv zu positiv wechselt, was signalisiert, dass kein Backpressure mehr angewendet wird.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

Das folgende Beispiel zeigt zwei Anwendungsfälle der `ready`-Eigenschaft. Das erste Beispiel nutzt `ready`, um sicherzustellen, dass der `WritableStream` mit dem Schreiben fertig ist und somit in der Lage ist, Daten zu empfangen, bevor ein binärer Block gesendet wird. Das zweite Beispiel überprüft ebenfalls, ob der `WritableStream` mit dem Schreiben fertig ist, jedoch dieses Mal, weil das Schreiben abgeschlossen sein muss, bevor der Schreiber geschlossen werden kann.

```js
function sendMessage(message, writableStream) {
  // defaultWriter ist vom Typ WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    // Stellen Sie sicher, dass der Stream und sein Schreiber
    //   Daten empfangen können.
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk wurde in das Ziel geschrieben.");
      })
      .catch((err) => {
        console.error(`Chunk-Fehler: ${err}`);
      });
    // Rufen Sie ready erneut auf, um sicherzustellen, dass alle Chunks geschrieben sind,
    //   bevor der Schreiber geschlossen wird.
    defaultWriter.ready
      .then(() => defaultWriter.close())
      .then(() => {
        console.log("Alle Chunks wurden geschrieben");
      })
      .catch((err) => {
        console.error(`Stream-Fehler: ${err}`);
      });
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
