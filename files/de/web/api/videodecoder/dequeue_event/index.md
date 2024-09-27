---
title: "VideoDecoder: dequeue Ereignis"
short-title: dequeue
slug: Web/API/VideoDecoder/dequeue_event
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle wird ausgelöst, um eine Verringerung in der [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) anzuzeigen.

Dies beseitigt die Notwendigkeit für Entwickler, ein [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Polling zu verwenden, um festzustellen, wann die Warteschlange kleiner geworden ist und mehr Arbeit eingeplant werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Beispiel

```js
videoDecoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
