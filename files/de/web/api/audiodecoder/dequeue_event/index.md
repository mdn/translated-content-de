---
title: "AudioDecoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/AudioDecoder/dequeue_event
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der {{domxref("AudioDecoder")}}-Schnittstelle wird ausgelöst, um eine Reduzierung der {{domxref("AudioDecoder.decodeQueueSize")}} zu signalisieren.

Dies eliminiert die Notwendigkeit für Entwickler, ein {{domxref("setTimeout()")}}-Polling zu verwenden, um festzustellen, wann die Warteschlange reduziert wurde und mehr Arbeit in die Warteschlange gestellt werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Beispiel

```js
audioDecoder.addEventListener("dequeue", (event) => {
  // Mehr Decodierarbeit in die Warteschlange stellen
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
