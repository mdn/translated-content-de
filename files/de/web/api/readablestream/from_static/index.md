---
title: "ReadableStream: from() statische Methode"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{APIRef("Streams")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`ReadableStream.from()`** statische Methode gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von einem bereitgestellten Iterable oder asynchronen Iterable-Objekt zurück.

Die Methode kann verwendet werden, um Iterable- und asynchronen Iterable-Objekte als lesbare Streams zu umhüllen, einschließlich Arrays, Sets, Arrays von Promises, asynchrone Generatoren, `ReadableStreams`, Node.js `readable` Streams und so weiter.

## Syntax

```js-nolint
ReadableStream.from(anyIterable)
```

### Parameter

- `anyIterable`
  - : Ein [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [asynchrones iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Objekt.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene Parameter kein Iterable oder asynchrones Iterable ist (definiert nicht die Methode `[Symbol.iterator]()` oder `[Symbol.asyncIterator]()`). Wird auch ausgelöst, wenn während der Iteration das Ergebnis des nächsten Schrittes kein Objekt ist oder ein Promise, das sich nicht zu einem Objekt auflöst.

## Beispiele

### Ein asynchronen Iterator in einen ReadableStream umwandeln

Dieses Live-Beispiel zeigt, wie Sie ein asynchrones Iterable in einen `ReadableStream` umwandeln können und dann, wie dieser Stream konsumiert werden könnte.

#### HTML

Das HTML besteht aus einem einzigen `<pre>`-Element, das für das Logging verwendet wird.

```html
<pre id="log"></pre>
```

#### JavaScript

Der Beispielcode erstellt eine `log()`-Funktion, um zum loggende HTML-Element zu schreiben.

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Es wird dann überprüft, ob die statische Methode unterstützt wird, und falls nicht, das Ergebnis protokolliert.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

Das asynchrone Iterable ist eine anonyme Generatorfunktion, die die Werte 1, 2 und 3 liefert, wenn sie dreimal aufgerufen wird. Dies wird an `ReadableStream.from()` übergeben, um den `ReadableStream` zu erstellen.

```js
// Define an asynchronous iterator
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

// Create ReadableStream from iterator
const myReadableStream = ReadableStream.from(asyncIterator);
```

[Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) demonstriert mehrere Möglichkeiten, einen Stream zu konsumieren. Der folgende Code verwendet eine `for ...await`-Schleife, da diese Methode die einfachste ist. Jede Iteration der Schleife protokolliert den aktuellen Chunk aus dem Stream.

```js
consumeStream(myReadableStream);

// Iterate a ReadableStream asynchronously
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

#### Ergebnis

Die Ausgabe des Verbrauchs des Streams wird unten angezeigt (wenn `ReadableStream.from()` unterstützt wird).

{{EmbedLiveSample("Ein asynchronen Iterator in einen ReadableStream umwandeln","100%", "80")}}

### Ein Array in einen ReadableStream umwandeln

Dieses Beispiel zeigt, wie Sie ein `Array` in einen `ReadableStream` umwandeln können.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

#### JavaScript

Das Iterable ist einfach ein Array von Zeichenfolgen, das an `ReadableStream.from()` übergeben wird, um den `ReadableStream` zu erstellen.

```js
// An Array of vegetable names
const vegetables = ["Carrot", "Broccoli", "Tomato", "Spinach"];

// Create ReadableStream from the Array
const myReadableStream = ReadableStream.from(vegetables);
```

```js hidden
consumeStream(myReadableStream);

// Iterate a ReadableStream asynchronously
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

Wir verwenden denselben Ansatz wie im vorherigen Beispiel, um zu protokollieren und den Stream zu konsumieren, sodass dies hier nicht gezeigt wird.

#### Ergebnis

Die Ausgabe wird unten angezeigt.

{{EmbedLiveSample("Ein Array in einen ReadableStream umwandeln","100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
