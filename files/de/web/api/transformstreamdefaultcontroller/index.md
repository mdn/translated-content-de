---
title: TransformStreamDefaultController
slug: Web/API/TransformStreamDefaultController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`TransformStreamDefaultController`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) bietet Methoden zur Manipulation des zugehörigen [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream).

Beim Erstellen eines [`TransformStream`](/de/docs/Web/API/TransformStream) wird der `TransformStreamDefaultController` erstellt. Daher hat er keinen Konstruktor. Eine Instanz von `TransformStreamDefaultController` erhält man über die Callback-Methoden von [`TransformStream()`](/de/docs/Web/API/TransformStream/TransformStream).

## Instanz-Eigenschaften

- [`TransformStreamDefaultController.desiredSize`](/de/docs/Web/API/TransformStreamDefaultController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, um die lesbare Seite der internen Warteschlange des Streams zu füllen.

## Instanz-Methoden

- [`TransformStreamDefaultController.enqueue()`](/de/docs/Web/API/TransformStreamDefaultController/enqueue)
  - : Stellt ein Datenstück (einzelnes Datenstück) in der lesbaren Seite des Streams in die Warteschlange.
- [`TransformStreamDefaultController.error()`](/de/docs/Web/API/TransformStreamDefaultController/error)
  - : Fehlerbehaftet sowohl die lesbare als auch die beschreibbare Seite des Transform-Streams.
- [`TransformStreamDefaultController.terminate()`](/de/docs/Web/API/TransformStreamDefaultController/terminate)
  - : Schließt die lesbare Seite und fehlerbehaftet die beschreibbare Seite des Streams.

## Beispiele

Im folgenden Beispiel leitet ein Transform-Stream alle Datenstücke, die er als {{jsxref("Uint8Array")}}-Werte erhält, weiter und verwendet die Methoden [`error()`](/de/docs/Web/API/TransformStreamDefaultController/error) und [`enqueue()`](/de/docs/Web/API/TransformStreamDefaultController/enqueue).

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
