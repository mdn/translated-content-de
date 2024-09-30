---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ByteLengthQueuingStrategy`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) bietet eine eingebaute Warteschlangestrategie basierend auf der Bytelänge, die beim Erstellen von Streams verwendet werden kann.

## Konstruktor

- [`ByteLengthQueuingStrategy()`](/de/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy)
  - : Erstellt eine neue Instanz des `ByteLengthQueuingStrategy`-Objekts.

## Instanz-Eigenschaften

- [`ByteLengthQueuingStrategy.highWaterMark`](/de/docs/Web/API/ByteLengthQueuingStrategy/highWaterMark) {{ReadOnlyInline}}
  - : Die Gesamtzahl an Bytes, die in der internen Warteschlange enthalten sein können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

## Instanz-Methoden

- [`ByteLengthQueuingStrategy.size()`](/de/docs/Web/API/ByteLengthQueuingStrategy/size)
  - : Gibt die `byteLength`-Eigenschaft des gegebenen Chunks zurück.

## Beispiele

```js
const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1024 });

const readableStream = new ReadableStream(
  {
    start(controller) {
      // …
    },
    pull(controller) {
      // …
    },
    cancel(err) {
      console.log("stream error:", err);
    },
  },
  queueingStrategy,
);

const size = queueingStrategy.size(chunk);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API](/de/docs/Web/API/Streams_API)
- [Interne Warteschlangen und Warteschlangestrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies)
- [`ByteLengthQueuingStrategy()`](/de/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy) Konstruktor
