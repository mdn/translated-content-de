---
title: "AudioEncoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der {{domxref("AudioEncoder")}}-Schnittstelle wird ausgelöst, um eine Verringerung der {{domxref("AudioEncoder.encodeQueueSize")}} anzuzeigen.

Dies eliminiert die Notwendigkeit für Entwickler, einen {{domxref("setTimeout()")}}-Poll zu verwenden, um festzustellen, wann sich die Warteschlange verringert hat und mehr Arbeit eingereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Beispiel

```js
audioEncoder.addEventListener("dequeue", (event) => {
  // Weitere Codierungsarbeiten einreihen
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
