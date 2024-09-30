---
title: "AudioDecoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/AudioDecoder/dequeue_event
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis des [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Interfaces signalisiert eine Verringerung der [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize).

Dies eliminiert die Notwendigkeit für Entwickler, ein [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Polling zu verwenden, um zu bestimmen, wann die Warteschlange verringert wurde, und mehr Arbeit in die Warteschlange eingereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Beispiel

```js
audioDecoder.addEventListener("dequeue", (event) => {
  // Queue up more decoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
