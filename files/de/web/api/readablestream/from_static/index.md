---
title: "ReadableStream: from() statische Methode"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: 71851d602eecd8786bb8da95ab2980764bb2c201
---

{{APIRef("Streams")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die statische Methode **`ReadableStream.from()`** gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von einem bereitgestellten iterierbaren oder asynchronen iterierbaren Objekt zurück.

Diese Methode kann verwendet werden, um iterierbare und asynchron iterierbare Objekte als lesbare Streams zu behandeln, einschließlich Arrays, Sets, Arrays von Promises, asynchronen Generatoren, `ReadableStreams`, Node.js `readable` Streams und so weiter.

## Syntax

```js-nolint
ReadableStream.from(anyIterable)
```

### Parameter

- `anyIterable`
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [asynchrones iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Objekt.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene Parameter kein iterierbares oder asynchrones iterierbares Objekt ist (definiert die Methode `[Symbol.iterator]()` oder `[Symbol.asyncIterator]()` nicht).
    Ebenfalls ausgelöst, wenn während der Iteration das Ergebnis des nächsten Schritts kein Objekt ist oder ein Promise ist, das sich nicht zu einem Objekt auflöst.

## Beispiele

### Ein asynchronen Iterator in einen ReadableStream konvertieren

Dieses interaktive Beispiel demonstriert, wie Sie ein asynchron iterierbares Objekt in einen `ReadableStream` konvertieren und dann, wie dieser Stream konsumiert werden könnte.

#### HTML

Das HTML besteht aus einem einzelnen `<pre>` Element, das für das Logging verwendet wird.

```html
<pre id="log"></pre>
```

#### JavaScript

Der Beispielcode erstellt eine `log()`-Funktion, um in das log HTML-Element zu schreiben.

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Es wird dann überprüft, ob die statische Methode unterstützt wird und, falls nicht, das Ergebnis geloggt.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

Das asynchron iterierbare Objekt ist eine anonyme Generatorfunktion, die die Werte 1, 2 und 3 liefert, wenn sie dreimal aufgerufen wird. Dies wird an `ReadableStream.from()` übergeben, um den `ReadableStream` zu erstellen.

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

[Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) zeigt verschiedene Möglichkeiten, einen Stream zu konsumieren. Der unten stehende Code verwendet eine `for ...await` Schleife, da diese Methode die einfachste ist. Jede Iteration der Schleife protokolliert das aktuelle Stück aus dem Stream.

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

Das Ergebnis des Konsums des Streams wird unten angezeigt (falls `ReadableStream.from()` unterstützt wird).

{{EmbedLiveSample("Convert an async iterator to a ReadableStream","100%", "80")}}

### Ein Array in einen ReadableStream konvertieren

Dieses Beispiel zeigt, wie man ein `Array` in einen `ReadableStream` konvertieren kann.

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

Das iterierbare Objekt ist einfach ein Array von Zeichenfolgen, das an `ReadableStream.from()` übergeben wird, um den `ReadableStream` zu erstellen.

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

Wir verwenden den gleichen Ansatz wie im vorherigen Beispiel, um zu loggen und den Stream zu konsumieren, sodass dies hier nicht gezeigt wird.

#### Ergebnis

Das Ergebnis wird unten angezeigt.

{{EmbedLiveSample("Convert an Array to a ReadableStream","100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
