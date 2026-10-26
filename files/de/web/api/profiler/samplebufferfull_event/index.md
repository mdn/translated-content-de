---
title: "Profiler: Ereignis samplebufferfull"
short-title: samplebufferfull
slug: Web/API/Profiler/samplebufferfull_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("JS Self-Profiling API")}}

Das **`samplebufferfull`**-Ereignis der [`Profiler`](/de/docs/Web/API/Profiler)-Schnittstelle wird ausgelöst, wenn die Anzahl der vom Profiler aufgezeichneten Samples den [`maxBufferSize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize)-Wert erreicht, der an den Konstruktor des Profilers übergeben wurde.

Nachdem dieses Ereignis ausgelöst wurde, zeichnet der Profiler keine weiteren Samples auf.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht nach oben aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("samplebufferfull", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
