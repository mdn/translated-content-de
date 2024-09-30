---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStreamDefaultReader`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Standard-Reader, der verwendet werden kann, um Datenströme aus einem Netzwerk (wie zum Beispiel einer `fetch`-Anfrage) zu lesen.

Ein `ReadableStreamDefaultReader` kann verwendet werden, um aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu lesen, der eine zugrunde liegende Quelle irgendeines Typs hat (im Gegensatz zu einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), der nur mit lesbaren Strömen verwendet werden kann, die eine _zugrunde liegende Bytequelle_ haben).

Beachten Sie jedoch, dass Zero-Copy-Übertragung von einer zugrunde liegenden Quelle nur für zugrunde liegende Bytequellen unterstützt wird, die Puffer automatisch zuweisen.
Mit anderen Worten, der Stream muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, wobei sowohl [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) als auch [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben wurde.
Für jede andere zugrunde liegende Quelle wird der Stream immer Leseanforderungen mit Daten aus internen Warteschlangen erfüllen.

## Konstruktor

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : Erstellt und gibt eine Instanz eines `ReadableStreamDefaultReader`-Objekts zurück.

## Instanz-Eigenschaften

- [`ReadableStreamDefaultReader.closed`](/de/docs/Web/API/ReadableStreamDefaultReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream schließt, oder abgelehnt wird, wenn der Stream einen Fehler auslöst oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Instanz-Methoden

- [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses an dem Stream durch einen Verbraucher. Das übergebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise nutzt oder ignoriert.
- [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)
  - : Gibt ein Versprechen zurück, das Zugriff auf den nächsten Chunk in der internen Warteschlange des Streams bietet.
- [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
  - : Gibt die Sperre des Lesers auf den Stream frei.

## Beispiele

Im folgenden Beispiel wird eine künstliche [`Response`](/de/docs/Web/API/Response) erstellt, um HTML-Fragmente, die von einer anderen Ressource abgerufen wurden, an den Browser zu streamen.

Es zeigt die Verwendung eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) in Kombination mit einem {{jsxref("Uint8Array")}}.

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

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transformationsströmen.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
