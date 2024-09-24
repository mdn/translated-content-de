---
title: ReadableStream
slug: Web/API/ReadableStream
l10n:
  sourceCommit: d8c0a74eec7281976ea1a4d13c57fecbed8ab70e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStream` Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen lesbaren Datenstrom von Bytes. Die [Fetch-API](/de/docs/Web/API/Fetch_API) bietet eine konkrete Instanz eines `ReadableStream` über die {{domxref("Response.body", "body")}} Eigenschaft eines {{domxref("Response")}} Objekts.

`ReadableStream` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : Erstellt und gibt ein lesbares Stream-Objekt aus den gegebenen Handlern zurück.

## Instanzeigenschaften

- {{domxref("ReadableStream.locked")}} {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob der lesbare Stream für einen Leser gesperrt ist oder nicht.

## Statische Methoden

- {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} {{Experimental_Inline}}
  - : Gibt `ReadableStream` aus einem bereitgestellten iterierbaren oder asynchronen iterierbaren Objekt zurück, wie z.B. ein Array, ein Set, ein asynchroner Generator, und so weiter.

## Instanzmethoden

- {{domxref("ReadableStream.cancel()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einem Verbraucher das Verlustinteresse am Stream. Das bereitgestellte `reason` Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise verwendet.
- {{domxref("ReadableStream.getReader()")}}
  - : Erstellt einen Leser und sperrt den Stream dafür. Solange der Stream gesperrt ist, kann kein anderer Leser bis zur Freigabe erworben werden.
- {{domxref("ReadableStream.pipeThrough()")}}
  - : Bietet eine verkettenbare Möglichkeit, den aktuellen Stream durch einen Transformations-Stream oder andere schreib-/lesbare Paare zu leiten.
- {{domxref("ReadableStream.pipeTo()")}}
  - : Leitet den aktuellen ReadableStream zu einem gegebenen {{domxref("WritableStream")}} und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Leitungsprozess erfolgreich abgeschlossen wurde, oder abgelehnt, wenn Fehler aufgetreten sind.
- {{domxref("ReadableStream.tee()")}}
  - : Die `tee` Methode [teilt (tee)](https://streams.spec.whatwg.org/#tee-a-readable-stream) diesen lesbaren Stream und gibt ein Array mit zwei Elementen zurück, das die beiden resultierenden Zweige als neue `ReadableStream` Instanzen enthält. Jeder dieser Streams erhält die gleichen eingehenden Daten.

## Asynchrone Iteration

`ReadableStream` implementiert das [asynchrone Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).
Dies ermöglicht asynchrone Iteration über die Blöcke in einem Stream mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Syntax:

```js
const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream) {
  // Tun Sie etwas mit jedem 'chunk'
}
```

Der asynchrone Iterator konsumiert den Stream, bis er keine Daten mehr hat oder anderweitig beendet wird.
Die Schleife kann auch frühzeitig durch eine `break`, `throw`, oder `return` Anweisung beendet werden.

Während der Iteration ist der Stream gesperrt, um zu verhindern, dass andere Verbraucher einen Leser erwerben können (Versuche, über einen bereits gesperrten Stream zu iterieren, werfen einen `TypeError`).
Diese Sperre wird freigegeben, wenn die Schleife beendet wird.

Standardmäßig wird der Stream auch beim Beenden der Schleife abgebrochen, sodass er nicht mehr verwendet werden kann.
Um einen Stream nach dem Beenden der Schleife weiterzuverwenden, übergeben Sie `{ preventCancel: true }` an die `values()` Methode des Streams:

```js
for await (const chunk of stream.values({ preventCancel: true })) {
  // Tun Sie etwas mit 'chunk'
  break;
}
// Erwerben Sie einen Leser für den Stream und fahren Sie mit dem Lesen fort ...
```

## Beispiele

### Fetch-Stream

Im folgenden Beispiel wird eine künstliche {{domxref("Response")}} erstellt, um HTML-Schnipsel, die von einer anderen Quelle abgerufen wurden, an den Browser zu streamen.

Es demonstriert die Verwendung eines `ReadableStream` in Kombination mit einem {{jsxref("Uint8Array")}}.

```js
fetch("https://www.example.org")
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // Die folgende Funktion behandelt jeden Datenblock
        function push() {
          // "done" ist ein Boolean und value ein "Uint8Array"
          reader.read().then(({ done, value }) => {
            // Falls keine Daten mehr zu lesen sind
            if (done) {
              console.log("done", done);
              controller.close();
              return;
            }
            // Erhalten Sie die Daten und senden Sie sie über den Controller an den Browser
            controller.enqueue(value);
            // Überprüfen Sie Datenblöcke, indem Sie sie in die Konsole protokollieren
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // Antworten Sie mit unserem Stream
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then((result) => {
    // Tun Sie Dinge mit dem Ergebnis
    console.log(result);
  });
```

### Konvertieren eines Iterators oder asynchronen Iterators in einen Stream

Die {{domxref("ReadableStream/from_static", "from()")}} statische Methode kann einen Iterator, wie ein {{jsxref("Array")}} oder {{jsxref("Map")}}, oder einen [(asynchronen) Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) in einen lesbaren Stream konvertieren:

```js
const myReadableStream = ReadableStream.from(iteratorOrAsyncIterator);
```

In Browsern, die die `from()` Methode nicht unterstützen, können Sie stattdessen Ihren eigenen [benutzerdefinierten lesbaren Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream) erstellen, um dasselbe Ergebnis zu erzielen:

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
> Dieses Beispiel geht davon aus, dass der Rückgabewert (`value` wenn `done` `true` ist), falls vorhanden, ebenfalls ein einzureihender Block ist. Einige Iterator-APIs können den Rückgabewert für andere Zwecke verwenden. Möglicherweise müssen Sie den Code basierend auf der API, mit der Sie interagieren, anpassen.

### Asynchrone Iteration eines Streams unter Verwendung von for await...of

Dieses Beispiel zeigt, wie Sie die `fetch()` Antwort mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife verarbeiten können, um die ankommenden Blöcke zu durchlaufen.

```js
const response = await fetch("https://www.example.org");
let total = 0;

// Durchlaufen Sie response.body (einen ReadableStream) asynchron
for await (const chunk of response.body) {
  // Tun Sie etwas mit jedem Block
  // Hier sammeln wir lediglich die Größe der Antwort.
  total += chunk.length;
}

// Tun Sie etwas mit dem Gesamtbetrag
console.log(total);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung eines lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transformationsstreams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills.
