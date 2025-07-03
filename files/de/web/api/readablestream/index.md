---
title: ReadableStream
slug: Web/API/ReadableStream
l10n:
  sourceCommit: 7d37e07f04c40ecbfd424d6fce0766ef3d2f7db4
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStream`-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen lesbaren Strom von Byte-Daten. Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet ein konkretes Beispiel eines `ReadableStream` durch die [`body`](/de/docs/Web/API/Response/body)-Eigenschaft eines [`Response`](/de/docs/Web/API/Response)-Objekts.

`ReadableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)
  - : Erstellt und gibt ein lesbares Stromobjekt aus den angegebenen Handlern zurück.

## Instanzeigenschaften

- [`ReadableStream.locked`](/de/docs/Web/API/ReadableStream/locked) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob der lesbare Strom an einen Leser gebunden ist oder nicht.

## Statische Methoden

- [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) {{Experimental_Inline}}
  - : Gibt `ReadableStream` aus einem bereitgestellten iterierbaren oder asynchronen iterierbaren Objekt zurück, wie z.B. einem Array, einem Set, einem asynchronen Generator usw.

## Instanzmethoden

- [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Strom abgebrochen wird. Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses an dem Strom durch einen Verbraucher. Das bereitgestellte `reason`-Argument wird an die zugrunde liegende Quelle weitergegeben, die es möglicherweise verwendet oder auch nicht.
- [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader)
  - : Erstellt einen Leser und bindet den Strom daran. Solange der Strom gebunden ist, kann kein anderer Leser erworben werden, bis dieser freigegeben wird.
- [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough)
  - : Bietet eine kaskadierbare Möglichkeit, den aktuellen Strom durch einen Transformationsstrom oder ein anderes Paar aus schreibbarem/lesbarem Strom zu leiten.
- [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo)
  - : Leitet den aktuellen ReadableStream zu einem gegebenen [`WritableStream`](/de/docs/Web/API/WritableStream) und gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn der Leitungsvorgang erfolgreich abgeschlossen wird, oder abgelehnt wird, wenn Fehler aufgetreten sind.
- [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee)
  - : Die `tee`-Methode [erzeugt zwei Kopien](https://streams.spec.whatwg.org/#tee-a-readable-stream) dieses lesbaren Stroms, die ein zwei-elementiges Array enthalten, das die beiden resultierenden Zweige als neue `ReadableStream`-Instanzen zurückgibt. Jeder dieser Stromzweige erhält die gleichen eingehenden Daten.

## Asynchrone Iteration

`ReadableStream` implementiert das [asynchrone iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).
Dies ermöglicht eine asynchrone Iteration über die Datenblöcke in einem Strom mittels der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Syntax:

```js
const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream) {
  // Do something with each 'chunk'
}
```

Der asynchrone Iterator konsumiert den Strom, bis er keine Daten mehr enthält oder anderweitig beendet wird.
Die Schleife kann auch vorzeitig durch eine `break`-, `throw`- oder `return`-Anweisung beendet werden.

Während der Iteration ist der Strom gesperrt, um zu verhindern, dass andere Verbraucher einen Leser erwerben können (der Versuch, über einen bereits gesperrten Strom zu iterieren, wirft einen `TypeError`).
Diese Sperre wird freigegeben, wenn die Schleife endet.

Standardmäßig wird das Verlassen der Schleife auch den Strom abbrechen, sodass er nicht mehr verwendet werden kann.
Um einen Strom nach dem Verlassen der Schleife weiterhin zu nutzen, übergeben Sie `{ preventCancel: true }` an die `values()`-Methode des Stroms:

```js
for await (const chunk of stream.values({ preventCancel: true })) {
  // Do something with 'chunk'
  break;
}
// Acquire a reader for the stream and continue reading ...
```

## Beispiele

### Fetch-Strom

Im folgenden Beispiel wird ein künstliches [`Response`](/de/docs/Web/API/Response)-Objekt erstellt, um HTML-Fragmente, die von einer anderen Ressource abgerufen wurden, an den Browser zu streamen.

Es zeigt die Verwendung eines `ReadableStream` in Kombination mit einem {{jsxref("Uint8Array")}}.

```js
fetch("https://www.example.org")
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log("done", done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // Respond with our stream
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then((result) => {
    // Do things with result
    console.log(result);
  });
```

### Konvertieren eines Iterators oder Asynchron-Iterators in einen Strom

Die statische Methode [`from()`](/de/docs/Web/API/ReadableStream/from_static) kann einen Iterator, wie z.B. ein {{jsxref("Array")}} oder {{jsxref("Map")}}, oder einen [(asynchronen) Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) in einen lesbaren Strom umwandeln:

```js
const myReadableStream = ReadableStream.from(iteratorOrAsyncIterator);
```

In Browsern, die die `from()`-Methode nicht unterstützen, können Sie stattdessen Ihren eigenen [benutzerdefinierten lesbaren Strom](/de/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream) erstellen, um dasselbe Ergebnis zu erzielen:

```js
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (value) {
        controller.enqueue(value);
      }
      if (done) {
        controller.close();
      }
    },
  });
}
```

> [!WARNING]
> Dieses Beispiel geht davon aus, dass der Rückgabewert (`value`, wenn `done` `true` ist), falls vorhanden, ebenfalls ein Block ist, der eingereiht werden soll. Einige Iterator-APIs könnten den Rückgabewert für andere Zwecke nutzen. Sie müssen möglicherweise den Code an die API anpassen, mit der Sie interagieren.

### Asynchrone Iteration eines Stroms mit for await...of

Dieses Beispiel zeigt, wie Sie die `fetch()`-Antwort mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife verarbeiten können, um die eintreffenden Blöcke zu iterieren.

```js
const response = await fetch("https://www.example.org");
let total = 0;

// Iterate response.body (a ReadableStream) asynchronously
for await (const chunk of response.body) {
  // Do something with each chunk
  // Here we just accumulate the size of the response.
  total += chunk.length;
}

// Do something with the total
console.log(total);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Strömen](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von lesbaren Bytestromen](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
