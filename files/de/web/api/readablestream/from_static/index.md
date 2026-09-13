---
title: "ReadableStream: from() statische Methode"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStream.from()`** statische Methode gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) aus einem bereitgestellten iterierbaren oder asynchronen iterierbaren Objekt zurück.

Die Methode kann verwendet werden, um iterierbare und asynchron iterierbare Objekte als lesbare Streams zu umwickeln, einschließlich Arrays, Sets, Arrays von Versprechen, asynchrone Generatoren, `ReadableStreams`, Node.js `readable` Streams und so weiter.

## Syntax

```js-nolint
ReadableStream.from(anyIterable)
```

### Parameter

- `anyIterable`
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [asynchron iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Objekt.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene Parameter kein iterierbares oder asynchron iterierbares Objekt ist (nicht die `[Symbol.iterator]()` oder `[Symbol.asyncIterator]()` Methode definiert).
    Ebenfalls ausgelöst, wenn während der Iteration das Ergebnis des nächsten Schritts kein Objekt ist oder ein Versprechen ist, das sich nicht zu einem Objekt auflöst.

## Beispiele

### Einen asynchronen Iterator in einen ReadableStream umwandeln

Dieses Live-Beispiel demonstriert, wie Sie einen asynchronen iterierbaren in einen `ReadableStream` umwandeln können und wie dieser Stream dann konsumiert werden könnte.

#### HTML

Das HTML besteht aus einem einzigen `<pre>`-Element, das zum Protokollieren verwendet wird.

```html
<pre id="log"></pre>
```

#### JavaScript

Der Beispielcode erstellt eine `log()`-Funktion, um in das Protokoll-HTML-Element zu schreiben.

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Es wird dann überprüft, ob die statische Methode unterstützt wird, und falls nicht, wird das Ergebnis protokolliert.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

Der asynchrone Iterable ist eine anonyme Generatorfunktion, die die Werte 1, 2 und 3 liefert, wenn sie dreimal aufgerufen wird. Dies wird an `ReadableStream.from()` übergeben, um den `ReadableStream` zu erstellen.

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

[Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams) zeigt verschiedene Möglichkeiten, einen Stream zu konsumieren.
Der folgende Code verwendet eine `for ...await`-Schleife, da diese Methode die einfachste ist. Jede Iteration der Schleife protokolliert den aktuellen Chunk des Streams.

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

Das Ergebnis des Konsums des Streams wird unten angezeigt (wenn `ReadableStream.from()` unterstützt wird).

{{EmbedLiveSample("Convert an async iterator to a ReadableStream","100%", "80")}}

### Ein Array in einen ReadableStream umwandeln

Dieses Beispiel demonstriert, wie Sie ein `Array` in einen `ReadableStream` umwandeln können.

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

Der Iterable ist einfach ein Array von Zeichenfolgen, das an `ReadableStream.from()` übergeben wird, um den `ReadableStream` zu erstellen.

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

Wir verwenden denselben Ansatz wie im vorherigen Beispiel, um das Protokoll zu führen und den Stream zu konsumieren, daher wird dies hier nicht gezeigt.

#### Ergebnis

Das Ergebnis wird unten angezeigt.

{{EmbedLiveSample("Convert an Array to a ReadableStream","100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
