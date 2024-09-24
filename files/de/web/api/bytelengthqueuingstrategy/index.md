---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ByteLengthQueuingStrategy`** Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) bietet eine integrierte Strategie zur Byte-Längenwarteschlange, die beim Erstellen von Streams verwendet werden kann.

## Konstruktor

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : Erstellt eine neue Instanz des `ByteLengthQueuingStrategy`-Objekts.

## Instanz-Eigenschaften

- {{domxref("ByteLengthQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : Die Gesamtanzahl an Bytes, die in der internen Warteschlange enthalten sein können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

## Instanz-Methoden

- {{domxref("ByteLengthQueuingStrategy.size()")}}
  - : Gibt die `byteLength`-Eigenschaft des angegebenen Chunks zurück.

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

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies)
- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} Konstruktor
