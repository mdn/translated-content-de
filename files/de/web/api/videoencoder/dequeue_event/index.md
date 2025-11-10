---
title: "VideoEncoder: dequeue Ereignis"
short-title: dequeue
slug: Web/API/VideoEncoder/dequeue_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle tritt auf, um eine Verringerung der [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) anzuzeigen.

Dies beseitigt die Notwendigkeit für Entwickler, eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Abfrage zu verwenden, um festzustellen, wann die Warteschlange verkleinert wurde und mehr Arbeit eingereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dequeue", (event) => { })

ondequeue = (event) => { }
```

## Beispiel

```js
videoEncoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
