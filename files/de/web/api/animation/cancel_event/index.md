---
title: "Animation: cancel-Ereignis"
short-title: cancel
slug: Web/API/Animation/cancel_event
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Das **`cancel`**-Ereignis des [`Animation`](/de/docs/Web/API/Animation)-Interfaces wird ausgelöst, wenn die [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)-Methode aufgerufen wird oder wenn die Animation von einem anderen Zustand in den `"idle"`-Spielzustand wechselt, beispielsweise wenn die Animation von einem Element entfernt wird, bevor sie zu Ende gespielt wird.

> [!NOTE]
> Das Erstellen einer neuen Animation, die zunächst im Idle-Zustand ist, löst kein `cancel`-Ereignis für die neue Animation aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })
oncancel = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften des übergeordneten Interfaces, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitachse der Animation, die das Ereignis erzeugt hat.

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
