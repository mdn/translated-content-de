---
title: "AudioDecoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/AudioDecoder/dequeue_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle wird ausgelöst, um eine Verringerung von [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) zu signalisieren.

Dadurch müssen Entwickler nicht mehr mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) regelmäßig prüfen, ob die Warteschlange kleiner geworden ist und weitere Arbeit eingereiht werden sollte.

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
audioDecoder.addEventListener("dequeue", (event) => {
  // Queue up more decoding work
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
