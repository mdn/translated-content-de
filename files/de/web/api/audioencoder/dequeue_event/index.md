---
title: "AudioEncoder: dequeue-Ereignis"
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`dequeue`**-Ereignis der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle wird ausgelöst, um eine Verringerung von [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) zu signalisieren.

Dadurch müssen Entwickler nicht mehr mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) regelmäßig prüfen, ob die Warteschlange kleiner geworden ist und weitere Aufgaben eingereiht werden sollten.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dequeue", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
ondequeue = (event) => { }
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
