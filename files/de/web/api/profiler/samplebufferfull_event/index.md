---
title: "Profiler: samplebufferfull Ereignis"
short-title: samplebufferfull
slug: Web/API/Profiler/samplebufferfull_event
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("JS Self-Profiling API")}}

Das **`samplebufferfull`** Ereignis des [`Profiler`](/de/docs/Web/API/Profiler)-Interfaces wird ausgelöst, wenn die Anzahl der vom Profiler aufgezeichneten Samples dem [`maxBufferSize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize)-Wert entspricht, der im Konstruktor des Profilers übergeben wurde.

Nachdem dieses Ereignis ausgelöst wurde, wird der Profiler keine weiteren Samples mehr aufzeichnen.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("samplebufferfull", (event) => {});

onsamplebufferfull = (event) => {};
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
