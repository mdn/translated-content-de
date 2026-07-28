---
title: "Animation: cancel Ereignis"
short-title: cancel
slug: Web/API/Animation/cancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{ APIRef("Web Animations") }}

Das **`cancel`** Ereignis der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation in den `"idle"`-Wiedergabestatus wechselt, zum Beispiel, wenn die Animation von einem Element entfernt wird, bevor sie zu Ende gespielt ist.

> [!NOTE]
> Das Erstellen einer neuen Animation, die anfänglich im Leerlauf ist, löst kein `cancel` Ereignis für die neue Animation aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

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

- [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
