---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`CountQueuingStrategy`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) bietet eine eingebaute Warteschlangenstrategie, die bei der Erstellung von Streams verwendet werden kann.

## Konstruktor

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : Erstellt eine neue Instanz eines `CountQueuingStrategy`-Objekts.

## Instanzeigenschaften

- {{domxref("CountQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : Die Gesamtanzahl der Datenblöcke, die in der internen Warteschlange enthalten sein können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

## Instanzmethoden

- {{domxref("CountQueuingStrategy.size()")}}
  - : Gibt immer `1` zurück.

## Beispiele

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // Implementieren Sie das Ziel
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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} Konstruktor
- [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies)
