---
title: "VideoDecoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/VideoDecoder/dequeue_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle wird ausgelöst, um eine Verringerung von [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) zu signalisieren.

Dadurch müssen Entwickler nicht mehr regelmäßig mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) prüfen, ob die Warteschlange kürzer geworden ist und weitere Arbeit eingereiht werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dequeue", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
ondequeue = (event) => { }
```

## Beispiel

```js
videoDecoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
