---
title: "VideoEncoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/VideoEncoder/dequeue_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle wird ausgelöst, um eine Verringerung von [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) anzuzeigen.

Dadurch müssen Entwickler nicht mehr mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) regelmäßig prüfen, ob die Warteschlange kleiner geworden ist und weitere Aufgaben eingereiht werden sollten.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dequeue", (event) => { })
```

Alternativ können Sie der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
ondequeue = (event) => { }
```

## Beispiel

```js
videoEncoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
