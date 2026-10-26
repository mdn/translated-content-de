---
title: "Animation: cancel-Ereignis"
short-title: cancel
slug: Web/API/Animation/cancel_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ APIRef("Web Animations") }}

Das **`cancel`**-Ereignis der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation aus einem anderen Wiedergabezustand in den Zustand `"idle"` wechselt, beispielsweise weil sie vor dem Ende der Wiedergabe von einem Element entfernt wird.

> [!NOTE]
> Wenn eine neue Animation erstellt wird, die sich anfangs im Zustand `"idle"` befindet, wird für diese Animation kein `cancel`-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cancel", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncancel = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Beispiele

Wenn diese Animation abgebrochen wird, entfernen Sie ihr Element.

```js
animation.oncancel = (event) => {
  animation.effect.target.remove();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
