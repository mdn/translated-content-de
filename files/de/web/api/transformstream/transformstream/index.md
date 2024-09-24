---
title: "TransformStream: TransformStream()-Konstruktor"
short-title: TransformStream()
slug: Web/API/TransformStream/TransformStream
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`TransformStream()`**-Konstruktor erstellt ein neues {{domxref("TransformStream")}}-Objekt, das ein Paar von Streams darstellt: einen {{domxref("WritableStream")}}, der die beschreibbare Seite darstellt, und einen {{domxref("ReadableStream")}}, der die lesbare Seite darstellt.

## Syntax

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### Parameter

- `transformer` {{optional_inline}}

  - : Ein Objekt, das den `transformer` darstellt. Falls nicht angegeben, wird der resultierende Stream ein **Identitäts-Transformationsstream** sein, der alle an seine beschreibbare Seite geschriebenen Chunks unverändert an seine lesbare Seite weiterleitet.

    Das Transformer-Objekt kann eine der folgenden Methoden enthalten. In jeder Methode ist `controller` eine Instanz von {{domxref("TransformStreamDefaultController")}}.

    - `start(controller)`
      - : Wird aufgerufen, wenn der `TransformStream` erstellt wird. Es wird typischerweise verwendet, um Chunks mit {{domxref("TransformStreamDefaultController.enqueue()")}} in die Warteschlange einzureihen.
    - `transform(chunk, controller)`
      - : Wird aufgerufen, wenn ein Chunk, der auf die beschreibbare Seite geschrieben wurde, zur Transformation bereit ist und führt die Arbeit des Transformationsstreams aus. Es kann ein Promise zurückgeben, das den Erfolg oder das Scheitern der Schreiboperation signalisiert. Wenn keine `transform()`-Methode angegeben ist, wird die Identitätstransformation verwendet, und der Chunk wird unverändert in die Warteschlange gestellt.
    - `flush(controller)`
      - : Wird aufgerufen, nachdem alle Chunks, die auf die beschreibbare Seite geschrieben wurden, erfolgreich transformiert wurden und die beschreibbare Seite geschlossen werden soll.

- `writableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl. Dies definiert die Gesamtanzahl von Chunks, die in der internen Warteschlange enthalten sein können, bevor Rückstau angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält. Dies gibt die Größe an, die für jeden Chunk, in Bytes, verwendet werden soll.

- `readableStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl. Dies definiert die Gesamtanzahl von Chunks, die in der internen Warteschlange enthalten sein können, bevor Rückstau angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält. Dies gibt die Größe an, die für jeden Chunk, in Bytes, verwendet werden soll.

> [!NOTE]
> Sie könnten Ihre eigene benutzerdefinierte
> `readableStrategy` oder `writableStrategy` definieren oder eine Instanz von
> {{domxref("ByteLengthQueuingStrategy")}} oder {{domxref("CountQueuingStrategy")}}
> für die Objektwerte verwenden.

## Beispiele

### Transformation von Text in Großbuchstaben

Das folgende Beispiel transformiert Text Stück für Stück in Großbuchstaben. Dieses Beispiel stammt aus [Streams—The Definitive Guide](https://web.dev/articles/streams), das eine Reihe von Beispielen für verschiedene Arten von Streams enthält.

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

Wenn kein `transformer`-Argument angegeben wird, ist das Ergebnis ein Identitäts-Transformationsstream, der alle an die beschreibbare Seite geschriebenen Chunks unverändert an die lesbare Seite weiterleitet. Im folgenden Beispiel wird ein Identitäts-Transformationsstream verwendet, um Pufferung zu einer Pipeline hinzuzufügen.

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

## Browserkompatibilität

{{Compat}}
