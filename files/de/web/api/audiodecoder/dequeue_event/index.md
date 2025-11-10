---
title: "AudioDecoder: dequeue Ereignis"
short-title: dequeue
slug: Web/API/AudioDecoder/dequeue_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle wird ausgelöst, um eine Verringerung der [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) anzuzeigen.

Dies eliminiert die Notwendigkeit, dass Entwickler eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Abfrage verwenden müssen, um festzustellen, wann die Warteschlange verringert wurde und mehr Arbeit eingeplant werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dequeue", (event) => { })

ondequeue = (event) => { }
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
