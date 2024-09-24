---
title: "VideoDecoder: dequeue Ereignis"
short-title: dequeue
slug: Web/API/VideoDecoder/dequeue_event
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der {{domxref("VideoDecoder")}}-Schnittstelle wird ausgelöst, um eine Verringerung der {{domxref("VideoDecoder.decodeQueueSize")}} zu signalisieren.

Dies macht es überflüssig, dass Entwickler ein {{domxref("setTimeout()")}}-Polling verwenden müssen, um zu bestimmen, wann die Warteschlange abgenommen hat und mehr Arbeit in die Warteschlange gestellt werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Beispiel

```js
videoDecoder.addEventListener("dequeue", (event) => {
  // Mehr Kodierungsarbeit in die Warteschlange stellen
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
