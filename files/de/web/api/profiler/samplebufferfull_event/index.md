---
title: "Profiler: samplebufferfull-Ereignis"
short-title: samplebufferfull
slug: Web/API/Profiler/samplebufferfull_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("JS Self-Profiling API")}}

Das **`samplebufferfull`**-Ereignis des [`Profiler`](/de/docs/Web/API/Profiler)-Interfaces wird ausgelöst, wenn die Anzahl der vom Profiler aufgezeichneten Stichproben dem [`maxBufferSize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize)-Wert entspricht, der an den Konstruktor des Profilers übergeben wurde.

Nachdem dieses Ereignis ausgelöst wurde, nimmt der Profiler keine weiteren Stichproben mehr auf.

Dieses Ereignis kann nicht abgebrochen werden und löst kein Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("samplebufferfull", (event) => { })

onsamplebufferfull = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 100 });

profiler.addEventListener("samplebufferfull", async () => {
  console.log("Sample buffer full!");
  const trace = await profiler.stop();
  console.log(JSON.stringify(trace));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
