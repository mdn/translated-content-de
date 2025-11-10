---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamDefaultReader`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen Standardleser, der verwendet werden kann, um Daten aus einem Netzwerkstrom zu lesen (wie z.B. eine Fetch-Anfrage).

Ein `ReadableStreamDefaultReader` kann verwendet werden, um aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu lesen, das eine zugrunde liegende Quelle beliebigen Typs hat (im Gegensatz zu einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), der nur mit Streams verwendet werden kann, die eine _zugrunde liegende Byte-Quelle_ haben).

Beachten Sie jedoch, dass Zero-Copy-Transfer von einer zugrunde liegenden Quelle nur für zugrunde liegende Byte-Quellen unterstützt wird, die Puffer automatisch zuweisen. Mit anderen Worten, der Stream muss so [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, dass sowohl [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) als auch [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben sind. Für jede andere zugrunde liegende Quelle wird der Stream Leseanfragen immer mit Daten aus internen Warteschlangen befriedigen.

## Konstruktor

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : Erstellt und gibt eine `ReadableStreamDefaultReader`-Objektinstanz zurück.

## Instanz-Eigenschaften

- [`ReadableStreamDefaultReader.closed`](/de/docs/Web/API/ReadableStreamDefaultReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler wirft oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses am Stream seitens des Konsumenten. Das übergebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise oder möglicherweise nicht verwendet.
- [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)
  - : Gibt ein Promise zurück, das Zugriff auf das nächste Chunk in der internen Warteschlange des Streams bietet.
- [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
  - : Gibt die Sperre des Lesers auf den Stream frei.

## Beispiele

Im folgenden Beispiel wird eine künstliche [`Response`](/de/docs/Web/API/Response) erstellt, um HTML-Fragmentstücke, die von einer anderen Ressource abgerufen wurden, an den Browser zu streamen.

Es demonstriert die Verwendung eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) in Kombination mit einem {{jsxref("Uint8Array")}}.

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        return reader.read().then(({ done, value }) => {
          // Is there no more data to read?
          if (done) {
            // Tell the browser that we have finished sending data
            controller.close();
            return;
          }

          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          push();
        });
      }

      push();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams-API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
