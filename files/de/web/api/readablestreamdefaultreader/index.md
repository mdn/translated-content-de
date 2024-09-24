---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamDefaultReader`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Standardleser, der verwendet werden kann, um von einem Netzwerk bereitgestellte Stream-Daten zu lesen (wie etwa bei einer Fetch-Anfrage).

Ein `ReadableStreamDefaultReader` kann verwendet werden, um aus einem {{domxref("ReadableStream")}} zu lesen, das eine zugrundeliegende Quelle beliebigen Typs hat (im Gegensatz zu einem {{domxref("ReadableStreamBYOBReader")}}, das nur mit lesbaren Streams verwendet werden kann, die eine _zugrundeliegende Bytequelle_ haben).

Beachten Sie jedoch, dass ein Zero-Copy-Transfer von einer zugrundeliegenden Quelle nur für zugrundeliegende Bytequellen unterstützt wird, die automatische Pufferallokationen verwenden.
Mit anderen Worten, der Stream muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) sein, indem sowohl [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) als auch [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben werden.
Für jede andere zugrundeliegende Quelle wird der Stream Leseanforderungen immer mit Daten aus internen Warteschlangen erfüllen.

## Konstruktor

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}}
  - : Erstellt und gibt eine `ReadableStreamDefaultReader`-Objektinstanz zurück.

## Instanzeigenschaften

- {{domxref("ReadableStreamDefaultReader.closed")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler auslöst oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- {{domxref("ReadableStreamDefaultReader.cancel()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Der Aufruf dieser Methode signalisiert einem Verbraucher das Desinteresse am Stream. Das übergebene `reason`-Argument wird der zugrundeliegenden Quelle mitgeteilt, die es möglicherweise verwendet oder auch nicht.
- {{domxref("ReadableStreamDefaultReader.read()")}}
  - : Gibt ein Promise zurück, das Zugriff auf den nächsten Chunk in der internen Warteschlange des Streams bietet.
- {{domxref("ReadableStreamDefaultReader.releaseLock()")}}
  - : Gibt die Sperre des Lesers auf dem Stream frei.

## Beispiele

Im folgenden Beispiel wird eine künstliche {{domxref("Response")}} erstellt, um HTML-Fragmente, die von einer anderen Ressource abgerufen wurden, an den Browser zu streamen.

Es demonstriert die Verwendung eines {{domxref("ReadableStream")}} in Kombination mit einem {{jsxref("Uint8Array")}}.

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // Die folgende Funktion verarbeitet jeden Daten-Chunk
      function push() {
        // "done" ist ein Boolean und value ein "Uint8Array"
        return reader.read().then(({ done, value }) => {
          // Gibt es keine Daten mehr zu lesen?
          if (done) {
            // Dem Browser mitteilen, dass wir das Senden von Daten beendet haben
            controller.close();
            return;
          }

          // Die Daten abrufen und über den Controller an den Browser senden
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
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transform-Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
