---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die Schnittstelle **`ReadableStreamDefaultReader`** der [Streams API](/de/docs/Web/API/Streams_API) stellt einen Standard-Reader dar, mit dem Stream-Daten gelesen werden können, die über ein Netzwerk bereitgestellt werden (beispielsweise durch eine Fetch-Anfrage).

Ein `ReadableStreamDefaultReader` kann Daten aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit einer zugrunde liegenden Quelle beliebigen Typs lesen. Im Gegensatz dazu kann ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) nur mit lesbaren Streams verwendet werden, die eine _zugrunde liegende Byte-Quelle_ haben.

Beachten Sie jedoch, dass eine Zero-Copy-Übertragung aus einer zugrunde liegenden Quelle nur für zugrunde liegende Byte-Quellen unterstützt wird, die Puffer automatisch zuweisen.
Anders ausgedrückt: Der Stream muss unter Angabe sowohl von [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) als auch von [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) [erstellt](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein.
Bei allen anderen zugrunde liegenden Quellen bedient der Stream Leseanfragen stets mit Daten aus internen Warteschlangen.

## Konstruktor

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : Erstellt eine `ReadableStreamDefaultReader`-Objektinstanz und gibt sie zurück.

## Instanzeigenschaften

- [`ReadableStreamDefaultReader.closed`](/de/docs/Web/API/ReadableStreamDefaultReader/closed) {{ReadOnlyInline}}
  - : Gibt eine {{jsxref("Promise")}} zurück, die erfüllt wird, wenn der Stream geschlossen wird, oder zurückgewiesen wird, wenn im Stream ein Fehler auftritt oder die Sperre des Readers freigegeben wird. Mit dieser Eigenschaft können Sie Code schreiben, der auf das Ende des Streaming-Vorgangs reagiert.

## Instanzmethoden

- [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : Gibt eine {{jsxref("Promise")}} zurück, die aufgelöst wird, wenn der Stream abgebrochen wurde. Der Aufruf dieser Methode signalisiert, dass ein Verbraucher nicht mehr an dem Stream interessiert ist. Das übergebene Argument `reason` wird an die zugrunde liegende Quelle weitergegeben, die es verwenden kann, aber nicht muss.
- [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)
  - : Gibt eine Promise zurück, die Zugriff auf den nächsten Datenblock in der internen Warteschlange des Streams bietet.
- [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
  - : Gibt die Sperre des Readers für den Stream frei.

## Beispiele

Im folgenden Beispiel wird eine künstliche [`Response`](/de/docs/Web/API/Response) erstellt, um HTML-Fragmente, die von einer anderen Ressource abgerufen werden, an den Browser zu streamen.

Das Beispiel zeigt die Verwendung eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) zusammen mit einem {{jsxref("Uint8Array")}}.

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

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API)
- [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
