---
title: "Animation: cancel-Ereignis"
short-title: cancel
slug: Web/API/Animation/cancel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("Web Animations") }}

Das **`cancel`**-Ereignis der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation von einem anderen Zustand in den `"idle"`-Abspielzustand wechselt, wie zum Beispiel, wenn die Animation von einem Element entfernt wird, bevor sie vollständig abgespielt wurde.

> [!NOTE]
> Das Erstellen einer neuen Animation, die anfänglich im Leerlauf ist, löst kein `cancel`-Ereignis bei der neuen Animation aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis erzeugt hat.

## Beispiele

Wird diese Animation abgebrochen, entfernen Sie ihr Element.

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
