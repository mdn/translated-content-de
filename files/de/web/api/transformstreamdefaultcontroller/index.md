---
title: TransformStreamDefaultController
slug: Web/API/TransformStreamDefaultController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`TransformStreamDefaultController`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) bietet Methoden zur Manipulation des zugehörigen {{domxref("ReadableStream")}} und {{domxref("WritableStream")}}.

Bei der Konstruktion eines {{domxref("TransformStream")}} wird der `TransformStreamDefaultController` erstellt. Daher hat er keinen Konstruktor. Eine Instanz von `TransformStreamDefaultController` erhält man über die Callback-Methoden von {{domxref("TransformStream.TransformStream", "TransformStream()")}}.

## Instanz-Eigenschaften

- {{domxref("TransformStreamDefaultController.desiredSize")}} {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, um die lesbare Seite der internen Warteschlange des Streams zu füllen.

## Instanz-Methoden

- {{domxref("TransformStreamDefaultController.enqueue()")}}
  - : Stellt ein Stück (einzelnes Datenstück) in die lesbare Seite des Streams ein.
- {{domxref("TransformStreamDefaultController.error()")}}
  - : Fehler sowohl auf der lesbaren als auch auf der beschreibbaren Seite des Transform-Streams.
- {{domxref("TransformStreamDefaultController.terminate()")}}
  - : Schließt die lesbare Seite und fehlerhaft die beschreibbare Seite des Streams.

## Beispiele

Im folgenden Beispiel leitet ein Transform-Stream alle empfangenen Stücke als {{jsxref("Uint8Array")}}-Werte weiter, indem die Methoden {{domxref("TransformStreamDefaultController.error()","error()")}} und {{domxref("TransformStreamDefaultController.enqueue()","enqueue()")}} verwendet werden.

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // just say the stream is done I guess
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === "function" &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("Cannot send a symbol as a chunk part");
        break;
      case "undefined":
        controller.error("Cannot send undefined as a chunk part");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* do any destructor work here */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
