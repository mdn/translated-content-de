---
title: "TransformStream: TransformStream() Konstruktor"
short-title: TransformStream()
slug: Web/API/TransformStream/TransformStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`TransformStream()`** Konstruktor erstellt ein neues [`TransformStream`](/de/docs/Web/API/TransformStream) Objekt, das ein Paar von Streams darstellt: einen [`WritableStream`](/de/docs/Web/API/WritableStream), der die beschreibbare Seite repräsentiert, und einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die lesbare Seite repräsentiert.

## Syntax

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### Parameter

- `transformer` {{optional_inline}}

  - : Ein Objekt, das den `transformer` darstellt. Wenn es nicht angegeben wird, resultiert der Stream in einem **Identitäts-Transform-Stream**, der alle an seine beschreibbare Seite geschriebenen Chunks an seine lesbare Seite weiterleitet, ohne Änderungen vorzunehmen.

    Das Transformer-Objekt kann eine der folgenden Methoden enthalten. In jeder Methode ist `controller` eine Instanz von [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController).

    - `start(controller)`
      - : Wird aufgerufen, wenn der `TransformStream` konstruiert wird. Es wird typischerweise verwendet, um Chunks mit [`TransformStreamDefaultController.enqueue()`](/de/docs/Web/API/TransformStreamDefaultController/enqueue) in die Warteschlange zu stellen.
    - `transform(chunk, controller)`
      - : Wird aufgerufen, wenn ein an die beschreibbare Seite geschriebener Chunk zur Transformation bereit ist, und führt die Arbeit des Transformationsstreams aus. Es kann ein Promise zurückgeben, um den Erfolg oder Misserfolg der Schreiboperation zu signalisieren. Wenn keine `transform()` Methode angegeben ist, wird die Identitäts-Transformation verwendet, und der Chunk wird ohne Änderungen in die Warteschlange gestellt.
    - `flush(controller)`
      - : Wird aufgerufen, nachdem alle an die beschreibbare Seite geschriebenen Chunks erfolgreich transformiert wurden und die beschreibbare Seite geschlossen werden soll.

- `writableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter:
    - `highWaterMark`
      - : Eine nicht-negative Ganzzahl. Dies definiert die Gesamtzahl der Chunks, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält. Dies gibt die Größe an,
        die für jeden Chunk in Bytes verwendet werden soll.

- `readableStrategy` {{optional_inline}}
  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter:
    - `highWaterMark`
      - : Eine nicht-negative Ganzzahl. Dies definiert die Gesamtzahl der Chunks, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält. Dies gibt die Größe an,
        die für jeden Chunk in Bytes verwendet werden soll.

> [!NOTE]
> Sie könnten Ihre eigene benutzerdefinierte
> `readableStrategy` oder `writableStrategy` definieren, oder eine Instanz von
> [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
> für die Objektwerte verwenden.

## Beispiele

### Text in Großbuchstaben umwandeln

Das folgende Beispiel wandelt Text Stück für Stück in Großbuchstaben um. Dieses Beispiel stammt aus [Streams—The Definitive Guide](https://web.dev/articles/streams), das eine Reihe von Beispielen für verschiedene Arten von Streams enthält.

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

### Erstellen eines Identitäts-Transformationsstreams

Wenn kein `transformer` Argument angegeben wird, resultiert dies in einem Identitäts-Transformationsstream, der alle an die beschreibbare Seite geschriebenen Chunks unverändert an die lesbare Seite weiterleitet. Im folgenden Beispiel wird ein Identitäts-Transformationsstream verwendet, um einer Pipe Pufferung hinzuzufügen.

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
