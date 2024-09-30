---
title: "TransformStream: TransformStream() Konstruktor"
short-title: TransformStream()
slug: Web/API/TransformStream/TransformStream
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`TransformStream()`** Konstruktor erstellt ein neues [`TransformStream`](/de/docs/Web/API/TransformStream)-Objekt, das ein Paar von Streams repräsentiert: ein [`WritableStream`](/de/docs/Web/API/WritableStream), welches die beschreibbare Seite darstellt, und ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), welches die lesbare Seite darstellt.

## Syntax

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### Parameter

- `transformer` {{optional_inline}}

  - : Ein Objekt, das den `transformer` repräsentiert. Wird es nicht angegeben, resultiert der Stream in einem **Identity Transform Stream**, der alle an die beschreibbare Seite geschriebenen Chunks unverändert an die lesbare Seite weiterleitet.

    Das Transformer-Objekt kann eine der folgenden Methoden enthalten. In jeder Methode ist `controller` eine Instanz des [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController).

    - `start(controller)`
      - : Wird aufgerufen, wenn der `TransformStream` konstruiert wird. Es wird typischerweise verwendet, um Chunks mit [`TransformStreamDefaultController.enqueue()`](/de/docs/Web/API/TransformStreamDefaultController/enqueue) in die Warteschlange einzureihen.
    - `transform(chunk, controller)`
      - : Wird aufgerufen, wenn ein an die beschreibbare Seite geschriebener Chunk bereit ist, transformiert zu werden, und führt die Arbeit des Transformations-Streams aus. Es kann ein Promise zurückgeben, um den Erfolg oder Misserfolg der Schreiboperation anzuzeigen. Wenn keine `transform()`-Methode angegeben wird, wird der Identity Transform verwendet und der Chunk wird unverändert in die Warteschlange eingereiht.
    - `flush(controller)`
      - : Wird aufgerufen, nachdem alle an die beschreibbare Seite geschriebenen Chunks erfolgreich transformiert wurden und die beschreibbare Seite kurz vor dem Schließen steht.

- `writableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies umfasst zwei Parameter:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl. Diese definiert die maximale Anzahl von Chunks, die in der internen Warteschlange enthalten sein können, bevor Backpressure angewendet wird.
    - `size(chunk)`
      - : Eine Methode mit einem Parameter `chunk`. Diese gibt die Größe an, die für jeden Chunk in Bytes verwendet werden soll.

- `readableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies umfasst zwei Parameter:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl. Diese definiert die maximale Anzahl von Chunks, die in der internen Warteschlange enthalten sein können, bevor Backpressure angewendet wird.
    - `size(chunk)`
      - : Eine Methode mit einem Parameter `chunk`. Diese gibt die Größe an, die für jeden Chunk in Bytes verwendet werden soll.

> [!NOTE]
> Sie könnten Ihre eigene benutzerdefinierte
> `readableStrategy` oder `writableStrategy` definieren oder eine Instanz von
> [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
> für die Objektwerte verwenden.

## Beispiele

### Transformieren von Text in Großbuchstaben

Das folgende Beispiel transformiert Text in Großbuchstaben, Chunk für Chunk. Dieses Beispiel stammt aus dem [Streams—Der definitive Leitfaden](https://web.dev/articles/streams), der eine Reihe von Beispielen verschiedener Arten von Streams enthält.

```js
function upperCaseStream() {
  return new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });
}

function appendToDOMStream(el) {
  return new WritableStream({
    write(chunk) {
      el.append(chunk);
    },
  });
}

fetch("./lorem-ipsum.txt").then((response) =>
  response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(upperCaseStream())
    .pipeTo(appendToDOMStream(document.body)),
);
```

### Erstellen eines Identity Transform Streams

Wenn kein `transformer`-Argument angegeben wird, resultiert dies in einem Identity Transform Stream, der alle an die beschreibbare Seite geschriebenen Chunks unverändert an die lesbare Seite weiterleitet. Im folgenden Beispiel wird ein Identity Transform Stream verwendet, um einer Pipe Pufferung hinzuzufügen.

```js
const writableStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1024 * 1024,
});
readableStream
  .pipeThrough(new TransformStream(undefined, writableStrategy))
  .pipeTo(writableStream);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
