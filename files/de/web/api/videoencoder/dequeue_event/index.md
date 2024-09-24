---
title: "VideoEncoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/VideoEncoder/dequeue_event
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der {{domxref("VideoEncoder")}}-Schnittstelle wird ausgelöst, um eine Verringerung der {{domxref("VideoEncoder.encodeQueueSize")}} zu signalisieren.

Dies eliminiert die Notwendigkeit für Entwickler, einen {{domxref("setTimeout()")}}-Poll zu verwenden, um festzustellen, wann die Warteschlange verkleinert wurde und mehr Arbeit eingereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Beispiel

```js
videoEncoder.addEventListener("dequeue", (event) => {
  // Weitere Kodierungsarbeit einreihen
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
