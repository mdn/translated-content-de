---
title: "ReadableStream: from() statische Methode"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{APIRef("Streams")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`ReadableStream.from()`** statische Methode gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) aus einem bereitgestellten iterierbaren oder asynchron iterierbaren Objekt zurück.

Die Methode kann verwendet werden, um iterierbare und asynchron iterierbare Objekte als lesbare Streams zu verpacken, einschließlich Arrays, Sets, Arrays von Versprechen, asynchroner Generatoren, `ReadableStreams`, Node.js `readable` Streams und so weiter.

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
  - : Wird ausgelöst, wenn der übergebene Parameter kein iterierbares oder asynchron iterierbares Objekt ist (definiert nicht die Methoden `[Symbol.iterator]()` oder `[Symbol.asyncIterator]()`).
    Wird auch ausgelöst, wenn während der Iteration das Ergebnis des nächsten Schritts kein Objekt ist oder ein Versprechen, das sich nicht zu einem Objekt auflöst.

## Beispiele

### Konvertieren eines asynchronen Iterators in einen ReadableStream

Dieses Live-Beispiel zeigt, wie Sie ein asynchron iterierbares zu einem `ReadableStream` konvertieren können und wie dieser Stream dann konsumiert werden könnte.

#### HTML

Das HTML besteht aus einem einzelnen `<pre>`-Element, das zum Protokollieren verwendet wird.

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

Dann wird überprüft, ob die statische Methode unterstützt wird, und falls nicht, wird das Ergebnis protokolliert.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

Das asynchron iterierbare ist eine anonyme Generatorfunktion, die die Werte 1, 2 und 3 liefert, wenn sie dreimal aufgerufen wird.
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

[Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams) zeigt verschiedene Möglichkeiten auf, einen Stream zu konsumieren.
Der unten stehende Code verwendet eine `for ...await` Schleife, da diese Methode die einfachste ist.
Jede Iteration der Schleife protokolliert das aktuelle Stück des Streams.

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

Das Ergebnis des Konsums des Streams wird unten angezeigt (falls `ReadableStream.from()` unterstützt wird).

{{EmbedLiveSample("Convert an async iterator to a ReadableStream", "100%", "80")}}

### Konvertieren eines Arrays in einen ReadableStream

Dieses Beispiel zeigt, wie Sie ein `Array` in einen `ReadableStream` konvertieren können.

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

Das iterierbare ist einfach ein Array von Strings, das an `ReadableStream.from()` übergeben wird, um den `ReadableStream` zu erstellen.

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

Wir verwenden denselben Ansatz wie im vorherigen Beispiel, um das Protokoll zu erstellen und den Stream zu konsumieren, daher wird dies hier nicht erneut gezeigt.

#### Ergebnis

Das Ergebnis wird unten angezeigt.

{{EmbedLiveSample("Convert an Array to a ReadableStream", "100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
