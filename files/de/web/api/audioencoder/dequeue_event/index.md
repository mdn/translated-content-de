---
title: "AudioEncoder: dequeue-Event"
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis des [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Interfaces wird ausgelöst, um eine Verringerung der [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) zu signalisieren.

Dies eliminiert die Notwendigkeit für Entwickler, ein [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Polling zu verwenden, um festzustellen, wann sich die Warteschlange verkleinert hat und mehr Arbeit eingereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("dequeue", (event) => { })

ondequeue = (event) => { }
```

## Beispiel

```js
audioEncoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
