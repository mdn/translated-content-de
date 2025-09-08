---
title: ReadableStream
slug: Web/API/ReadableStream
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStream`-Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen lesbaren Datenstrom von Bytes. Die [Fetch-API](/de/docs/Web/API/Fetch_API) bietet eine konkrete Instanz eines `ReadableStream` über die [`body`](/de/docs/Web/API/Response/body)-Eigenschaft eines [`Response`](/de/docs/Web/API/Response)-Objekts.

`ReadableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)
  - : Erstellt und gibt ein lesbares Stream-Objekt aus den gegebenen Handlern zurück.

## Instanzeigenschaften

- [`ReadableStream.locked`](/de/docs/Web/API/ReadableStream/locked) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der lesbare Stream an einen Leser gebunden ist oder nicht.

## Statische Methoden

- [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) {{Experimental_Inline}}
  - : Gibt `ReadableStream` von einem bereitgestellten Iterable oder asynchronen Iterable-Objekt zurück, wie z.B. ein Array, ein Set, ein asynchroner Generator usw.

## Instanzmethoden

- [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Durch Aufrufen dieser Methode signalisiert ein Konsument das Desinteresse am Stream. Das übergebene `reason`-Argument wird an die zugrunde liegende Quelle übergeben, die es möglicherweise verwendet oder nicht.
- [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader)
  - : Erstellt einen Leser und bindet den Stream an ihn. Solange der Stream gebunden ist, kann kein anderer Leser erworben werden, bis dieser freigegeben wird.
- [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough)
  - : Bietet eine kaskadierbare Möglichkeit, den aktuellen Stream durch einen Transform-Stream oder ein anderes schreibbares/lesbares Paar zu leiten.
- [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo)
  - : Leitet den aktuellen ReadableStream zu einem gegebenen [`WritableStream`](/de/docs/Web/API/WritableStream) und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Leitungsprozess erfolgreich abgeschlossen ist, oder abgelehnt wird, wenn Fehler aufgetreten sind.
- [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee)
  - : Die `tee`-Methode [tees](https://streams.spec.whatwg.org/#tee-a-readable-stream) diesen lesbaren Stream und gibt ein zwei-elementiges Array zurück, das die beiden resultierenden Verzweigungen als neue `ReadableStream`-Instanzen enthält. Jeder dieser Streams erhält die gleichen eingehenden Daten.

## Asynchrone Iteration

`ReadableStream` implementiert das [asynchrone Iterierprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).
Dies ermöglicht die asynchrone Iteration über die Chunks in einem Stream unter Verwendung der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Syntax:

```js
const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream) {
  // Do something with each 'chunk'
}
```

Der asynchrone Iterator konsumiert den Stream, bis er keine Daten mehr aufweist oder anderweitig beendet wird.
Die Schleife kann aufgrund eines `break`-, `throw`- oder `return`-Statements auch vorzeitig beendet werden.

Während der Iteration wird der Stream gesperrt, um zu verhindern, dass andere Konsumenten einen Leser erwerben (der Versuch, über einen bereits gesperrten Stream zu iterieren, führt zu einem `TypeError`).
Diese Sperre wird freigegeben, wenn die Schleife endet.

Standardmäßig wird der Stream auch bei Verlassen der Schleife abgebrochen, sodass er nicht mehr verwendet werden kann.
Um den Stream nach dem Verlassen der Schleife weiterzuverwenden, übergeben Sie `{ preventCancel: true }` an die `values()`-Methode des Streams:

```js
for await (const chunk of stream.values({ preventCancel: true })) {
  // Do something with 'chunk'
  break;
}
// Acquire a reader for the stream and continue reading ...
```

## Beispiele

### Fetch-Stream

Im folgenden Beispiel wird eine künstliche [`Response`](/de/docs/Web/API/Response) erstellt, um HTML-Fragmente, die von einer anderen Ressource abgerufen wurden, zum Browser zu streamen.

Es demonstriert die Nutzung eines `ReadableStream` in Kombination mit einer {{jsxref("Uint8Array")}}.

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

### Konvertieren eines Iterators oder asynchronen Iterators in einen Stream

Die statische Methode [`from()`](/de/docs/Web/API/ReadableStream/from_static) kann einen Iterator, wie z.B. eine {{jsxref("Array")}} oder {{jsxref("Map")}}, oder einen [(async) iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) in einen lesbaren Stream umwandeln:

```js
const myReadableStream = ReadableStream.from(iteratorOrAsyncIterator);
```

In Browsern, die die `from()`-Methode nicht unterstützen, können Sie stattdessen Ihren eigenen [benutzerdefinierten lesbaren Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream) erstellen, um dasselbe Ergebnis zu erzielen:

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
> Dieses Beispiel geht davon aus, dass der Rückgabewert (`value` wenn `done` gleich `true` ist), falls vorhanden, ebenfalls ein zu enqueuender Chunk ist. Einige Iterator-APIs verwenden den Rückgabewert für andere Zwecke. Möglicherweise müssen Sie den Code basierend auf der API, mit der Sie interagieren, anpassen.

### Asynchrone Iteration eines Streams mit for await...of

Dieses Beispiel zeigt, wie Sie die `fetch()`-Antwort mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife verarbeiten können, um die eingehenden Chunks zu durchlaufen.

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

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
