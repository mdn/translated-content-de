---
title: "ReadableStream: from() statische Methode"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{APIRef("Streams")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`ReadableStream.from()`** statische Methode gibt einen {{domxref("ReadableStream")}} von einem bereitgestellten iterierbaren oder asynchron iterierbaren Objekt zurück.

Die Methode kann verwendet werden, um iterierbare und asynchron iterierbare Objekte als lesbare Streams einzuwickeln, einschließlich Arrays, Sets, Arrays von Versprechen, asynchronen Generatoren, `ReadableStreams`, Node.js `readable` Streams und so weiter.

## Syntax

```js-nolint
ReadableStream.from(anyIterable)
```

### Parameter

- `anyIterable`
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [asynchron iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Objekt.

### Rückgabewert

Ein {{domxref("ReadableStream")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene Parameter kein iterierbares oder asynchron iterierbares Objekt ist (nicht die Methode `[Symbol.iterator]()` oder `[Symbol.asyncIterator]()` definiert).
    Wird auch ausgelöst, wenn während der Iteration das Ergebnis des nächsten Schritts kein Objekt ist oder ein Versprechen ist, das sich nicht in ein Objekt auflöst.

## Beispiele

### Konvertieren eines asynchronen Iterators in einen ReadableStream

Dieses Live-Beispiel zeigt, wie Sie einen asynchronen iterierbaren in einen `ReadableStream` umwandeln können und wie dieser Stream anschließend verwendet werden kann.

#### HTML

Das HTML besteht aus einem einzigen `<pre>`-Element, das zum Protokollieren verwendet wird.

```html
<pre id="log"></pre>
```

#### JavaScript

Der Beispielcode erstellt eine `log()`-Funktion, um in das Log-HTML-Element zu schreiben.

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Es wird dann überprüft, ob die statische Methode unterstützt wird, und falls nicht, wird das Ergebnis protokolliert.

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() wird nicht unterstützt");
}
```

Der asynchron iterierbare ist eine anonyme Generatorfunktion, die die Werte 1, 2 und 3 liefert, wenn sie dreimal aufgerufen wird.
Dies wird an `ReadableStream.from()` übergeben, um den `ReadableStream` zu erstellen.

```js
// Definieren eines asynchronen Iterators
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

// Erstellen eines ReadableStream aus dem Iterator
const myReadableStream = ReadableStream.from(asyncIterator);
```

[Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) zeigt verschiedene Möglichkeiten, einen Stream zu verwenden.
Der Code unten verwendet eine `for ...await` Schleife, da diese Methode die einfachste ist.
Jede Iteration der Schleife protokolliert das aktuelle Stück aus dem Stream.

```js
consumeStream(myReadableStream);

// Eine ReadableStream asynchron durchlaufen
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Machen Sie etwas mit jedem Stück
    // Hier protokollieren wir einfach die Werte
    log(`chunk: ${chunk}`);
  }
}
```

#### Ergebnis

Die Ausgabe des Konsumierens des Streams wird unten angezeigt (wenn `ReadableStream.from()` unterstützt wird).

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
  log("ReadableStream.from() wird nicht unterstützt");
}
```

#### JavaScript

Der iterierbare ist einfach ein Array von Zeichenfolgen, das an `ReadableStream.from()` übergeben wird, um den `ReadableStream` zu erstellen.

```js
// Ein Array mit Gemüsenamen
const vegetables = ["Carrot", "Broccoli", "Tomato", "Spinach"];

// Erstellen eines ReadableStream aus dem Array
const myReadableStream = ReadableStream.from(vegetables);
```

```js hidden
consumeStream(myReadableStream);

// Eine ReadableStream asynchron durchlaufen
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Machen Sie etwas mit jedem Stück
    // Hier protokollieren wir einfach die Werte
    log(`chunk: ${chunk}`);
  }
}
```

Wir verwenden denselben Ansatz wie im vorherigen Beispiel, um in das Log zu schreiben und den Stream zu konsumieren, daher wird das hier nicht gezeigt.

#### Ergebnis

Die Ausgabe wird unten angezeigt.

{{EmbedLiveSample("Convert an Array to a ReadableStream","100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStream")}}
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
