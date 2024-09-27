---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStreamDefaultReader`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen Standardleser, der verwendet werden kann, um von einem Netzwerk bereitgestellte Stream-Daten zu lesen (zum Beispiel bei einer Fetch-Anfrage).

Ein `ReadableStreamDefaultReader` kann verwendet werden, um von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu lesen, der eine zugrunde liegende Quelle jeglicher Art hat (im Gegensatz zu einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), der nur mit Lesbaren Streams verwendet werden kann, die eine zugrunde liegende Byte-Quelle haben).

Beachten Sie jedoch, dass ein Zero-Copy-Transfer von einer zugrunde liegenden Quelle nur für zugrunde liegende Bytequellen, die automatisch Speicherpuffer zuweisen, unterstützt wird.
Mit anderen Worten muss der Stream so [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, dass sowohl [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) als auch [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben sind.
Für jede andere zugrunde liegende Quelle wird der Stream immer Leseanforderungen mit Daten aus internen Warteschlangen erfüllen.

## Konstruktor

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : Erstellt und gibt eine `ReadableStreamDefaultReader`-Objektinstanz zurück.

## Instanzeigenschaften

- [`ReadableStreamDefaultReader.closed`](/de/docs/Web/API/ReadableStreamDefaultReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder fehlgeht, wenn der Stream einen Fehler auslöst oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Durch Aufruf dieser Methode signalisiert ein Verbraucher, dass er kein Interesse mehr am Stream hat. Das angegebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise verwendet oder auch nicht.
- [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)
  - : Gibt ein Promise zurück, das Zugriff auf das nächste Chunk in der internen Warteschlange des Streams bietet.
- [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
  - : Gibt die Sperre des Lesers auf dem Stream frei.

## Beispiele

Im folgenden Beispiel wird eine künstliche [`Response`](/de/docs/Web/API/Response) erstellt, um HTML-Fragmente, die von einer anderen Ressource abgerufen werden, in den Browser zu streamen.

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

- [Streams-API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und transformierenden Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
