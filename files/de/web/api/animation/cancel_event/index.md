---
title: "Animation: Abbrechen-Ereignis"
short-title: abbrechen
slug: Web/API/Animation/cancel_event
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Das **`cancel`**-Ereignis des {{domxref("Animation")}}-Interfaces wird ausgelöst, wenn die {{domxref("Animation.cancel()")}}-Methode aufgerufen wird oder wenn die Animation in den „idle“-Abspielzustand aus einem anderen Zustand wechselt, beispielsweise wenn die Animation von einem Element entfernt wird, bevor sie zu Ende gespielt wird.

> [!NOTE]
> Das Erstellen einer neuen Animation, die zunächst im „idle“-Zustand ist, löst kein `cancel`-Ereignis bei der neuen Animation aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })
oncancel = (event) => { }
```

## Ereignistyp

Ein {{domxref("AnimationPlaybackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis erzeugt hat.

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
- {{domxref("Animation")}}
