---
title: "AudioEncoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis des [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Interfaces wird ausgelöst, um eine Verringerung der [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) anzuzeigen.

Dies eliminiert die Notwendigkeit für Entwickler, ein [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Polling zu verwenden, um festzustellen, wann die Warteschlange verkleinert wurde und mehr Arbeit aufgereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
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
