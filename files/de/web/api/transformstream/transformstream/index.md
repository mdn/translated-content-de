---
title: "TransformStream: TransformStream()-Konstruktor"
short-title: TransformStream()
slug: Web/API/TransformStream/TransformStream
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`TransformStream()`**-Konstruktor erstellt ein neues [`TransformStream`](/de/docs/Web/API/TransformStream)-Objekt, das ein Paar von Streams darstellt: einen [`WritableStream`](/de/docs/Web/API/WritableStream), der die beschreibbare Seite repräsentiert, und einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die lesbare Seite repräsentiert.

## Syntax

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### Parameter

- `transformer` {{optional_inline}}

  - : Ein Objekt, das den `transformer` repräsentiert. Wird es nicht bereitgestellt, wird der resultierende Stream ein **Identitäts-Transformations-Stream** sein, der alle an seine beschreibbare Seite geschriebenen Chunks unverändert an seine lesbare Seite weiterleitet.

    Das Transformierungsobjekt kann eine der folgenden Methoden enthalten. In jeder Methode ist `controller` eine Instanz von [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController).

    - `start(controller)`
      - : Wird aufgerufen, wenn der `TransformStream` konstruiert wird. Es wird typischerweise verwendet, um Chunks mithilfe von [`TransformStreamDefaultController.enqueue()`](/de/docs/Web/API/TransformStreamDefaultController/enqueue) in die Warteschlange zu stellen.
    - `transform(chunk, controller)`
      - : Wird aufgerufen, wenn ein Chunk, der auf die beschreibbare Seite geschrieben wurde, transformiert werden soll und führt die Arbeit des Transformations-Streams durch. Es kann ein Promise zurückgeben, um Erfolg oder Misserfolg der Schreiboperation zu signalisieren. Wenn keine `transform()`-Methode bereitgestellt wird, wird die Identitätstransformation verwendet und der Chunk wird unverändert in die Warteschlange gestellt.
    - `flush(controller)`
      - : Wird aufgerufen, nachdem alle auf die beschreibbare Seite geschriebenen Chunks erfolgreich transformiert wurden und die beschreibbare Seite geschlossen wird.

- `writableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl. Dies definiert die Gesamtanzahl an Chunks, die in der internen Warteschlange enthalten sein können, bevor Druck angewandt wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält. Dies gibt die Größe an, die für jeden Chunk in Bytes verwendet werden soll.

- `readableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl. Dies definiert die Gesamtanzahl an Chunks, die in der internen Warteschlange enthalten sein können, bevor Druck angewandt wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält. Dies gibt die Größe an, die für jeden Chunk in Bytes verwendet werden soll.

> [!NOTE]
> Sie können Ihre eigene benutzerdefinierte `readableStrategy` oder `writableStrategy` definieren oder eine Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) für die Objektwerte verwenden.

## Beispiele

### Text in Großbuchstaben umwandeln

Im folgenden Beispiel wird Text Stück für Stück in Großbuchstaben umgewandelt. Dieses Beispiel stammt aus [Streams—The Definitive Guide](https://web.dev/articles/streams), das eine Reihe von Beispielen für verschiedene Arten von Streams enthält.

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

### Einen Identitäts-Transformations-Stream erstellen

Wird kein `transformer`-Argument bereitgestellt, dann resultiert dies in einem Identitäts-Transformations-Stream, der alle an die beschreibbare Seite geschriebenen Chunks unverändert an die lesbare Seite weiterleitet. Im folgenden Beispiel wird ein Identitäts-Transformations-Stream verwendet, um einer Pipe Puffer hinzuzufügen.

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
