---
title: "VideoDecoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/VideoDecoder/dequeue_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Interfaces signalisiert eine Verringerung der [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize).

Dies beseitigt die Notwendigkeit für Entwickler, ein [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Polling zu verwenden, um festzustellen, wann sich die Warteschlange verringert hat und mehr Arbeit in die Warteschlange gestellt werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("dequeue", (event) => { })

ondequeue = (event) => { }
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
