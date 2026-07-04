---
title: "ReadableStream: from() statische Methode"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die statische Methode **`ReadableStream.from()`** gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von einem bereitgestellten iterable oder async iterable Objekt zurück.

Die Methode kann verwendet werden, um iterable und async iterable Objekte als lesbare Streams zu verpacken, einschließlich Arrays, Sets, Arrays von Promises, async Generatoren, `ReadableStreams`, Node.js `readable` Streams und so weiter.

## Syntax

```js-nolint
ReadableStream.from(anyIterable)
```

### Parameter

- `anyIterable`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [async iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Objekt.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene Parameter kein iterable oder async iterable ist (wenn er die Methode `[Symbol.iterator]()` oder `[Symbol.asyncIterator]()` nicht definiert).
    Wird auch ausgelöst, wenn während der Iteration das Ergebnis des nächsten Schrittes kein Objekt ist oder ein Promise ist, das sich nicht zu einem Objekt auflöst.

## Beispiele

### Konvertieren eines async Iterators in einen ReadableStream

Dieses Live-Beispiel zeigt, wie Sie ein async iterable in einen `ReadableStream` umwandeln können und wie dieser Stream dann konsumiert werden könnte.

#### HTML

Das HTML besteht aus einem einzigen `<pre>`-Element, das zum Protokollieren verwendet wird.

```html
<pre id="log"></pre>
```

#### JavaScript

Der Beispielcode erstellt eine `log()` Funktion, um in das HTML-Log-Element zu schreiben.

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Dann wird überprüft, ob die statische Methode unterstützt wird, und falls nicht, wird das Ergebnis protokolliert.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

Das async iterable ist eine anonyme Generatorfunktion, die die Werte 1, 2 und 3 liefert, wenn sie dreimal aufgerufen wird.
Diese wird an `ReadableStream.from()` übergeben, um den `ReadableStream` zu erstellen.

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

[Verwenden von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) zeigt mehrere Möglichkeiten, um einen Stream zu konsumieren.
Der folgende Code verwendet eine `for ...await` Schleife, da diese Methode die einfachste ist.
Jede Iteration der Schleife protokolliert den aktuellen Chunk aus dem Stream.

```js
consumeStream(myReadableStream);

// Iterate a ReadableStream asynchronously
async function consumeStream(readableStream) {
  for await (const chunk of readableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

#### Ergebnis

Das Ergebnis des Stream-Verbrauchs wird unten angezeigt (sofern `ReadableStream.from()` unterstützt wird).

{{EmbedLiveSample("Convert an async iterator to a ReadableStream","100%", "80")}}

### Konvertieren eines Arrays in einen ReadableStream

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

Das iterable ist einfach ein Array von Strings, das an `ReadableStream.from()` übergeben wird, um den `ReadableStream` zu erstellen.

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
  for await (const chunk of readableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

Wir verwenden den gleichen Ansatz wie im vorherigen Beispiel, um das Log anzuzeigen und den Stream zu konsumieren, daher wird dieser hier nicht gezeigt.

#### Ergebnis

Das Ergebnis wird unten angezeigt.

{{EmbedLiveSample("Convert an Array to a ReadableStream","100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Verwenden von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
