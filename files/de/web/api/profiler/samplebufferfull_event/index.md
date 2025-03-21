---
title: "Profiler: samplebufferfull Ereignis"
short-title: samplebufferfull
slug: Web/API/Profiler/samplebufferfull_event
l10n:
  sourceCommit: 49f36838f402e87204234c21fa8a98002c7e7a42
---

{{APIRef("JS Self-Profiling API")}}

Das **`samplebufferfull`**-Ereignis der [`Profiler`](/de/docs/Web/API/Profiler) Schnittstelle wird ausgelöst, wenn die Anzahl der vom Profiler aufgezeichneten Proben dem Wert von [`maxbuffersize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize) entspricht, der an den Konstruktor des Profilers übergeben wurde.

Nachdem dieses Ereignis ausgelöst wurde, wird der Profiler keine weiteren Proben mehr aufzeichnen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

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
