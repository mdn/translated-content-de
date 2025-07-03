---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: 7d37e07f04c40ecbfd424d6fce0766ef3d2f7db4
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamDefaultReader`** Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Standardleser, der verwendet werden kann, um Datenströme zu lesen, die von einem Netzwerk bereitgestellt werden (wie bei einer `fetch`-Anfrage).

Ein `ReadableStreamDefaultReader` kann zum Lesen eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) verwendet werden, das eine zugrunde liegende Quelle beliebigen Typs hat (im Gegensatz zu einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), der nur mit lesbaren Streams verwendet werden kann, die eine _zugrunde liegende Bytequelle_ haben).

Beachten Sie jedoch, dass ein Zero-Copy-Transfer von einer zugrunde liegenden Quelle nur für zugrunde liegende Bytequellen unterstützt wird, die automatisch Puffer zuweisen. Mit anderen Worten, der Stream muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, indem sowohl [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) als auch [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben wurden. Für jede andere zugrunde liegende Quelle wird der Stream immer Leseanforderungen mit Daten aus internen Warteschlangen erfüllen.

## Konstruktor

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : Erstellt und gibt eine `ReadableStreamDefaultReader`-Objektinstanz zurück.

## Instanzeigenschaften

- [`ReadableStreamDefaultReader.closed`](/de/docs/Web/API/ReadableStreamDefaultReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream schließt, oder verworfen wird, wenn der Stream einen Fehler auslöst oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Der Aufruf dieser Methode signalisiert das Desinteresse eines Verbrauchers am Stream. Das angegebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise verwenden kann oder nicht.
- [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)
  - : Gibt ein Promise zurück, das Zugriff auf das nächste Stück in der internen Warteschlange des Streams bietet.
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
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
