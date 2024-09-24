---
title: "AudioEncoder: dequeue Ereignis"
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis des [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Interfaces wird ausgelöst, um eine Verringerung der [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) anzuzeigen.

Dies eliminiert die Notwendigkeit für Entwickler, ein [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Polling zu verwenden, um zu bestimmen, wann die Warteschlange abgenommen hat und mehr Arbeit eingeordnet werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
