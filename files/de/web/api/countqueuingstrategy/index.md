---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`CountQueuingStrategy`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) bietet eine eingebaute Chunk-Zählwarteschlangenstrategie, die beim Erstellen von Streams verwendet werden kann.

## Konstruktor

- [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy)
  - : Erstellt eine neue `CountQueuingStrategy` Objektinstanz.

## Instanzeigenschaften

- [`CountQueuingStrategy.highWaterMark`](/de/docs/Web/API/CountQueuingStrategy/highWaterMark) {{ReadOnlyInline}}
  - : Die Gesamtanzahl an Chunks, die in der internen Warteschlange enthalten sein können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

## Instanzmethoden

- [`CountQueuingStrategy.size()`](/de/docs/Web/API/CountQueuingStrategy/size)
  - : Gibt immer `1` zurück.

## Beispiele

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queueingStrategy,
);

const size = queueingStrategy.size();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API](/de/docs/Web/API/Streams_API)
- [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) Konstruktor
- [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies)
