---
title: "Animation: finish Ereignis"
short-title: finish
slug: Web/API/Animation/finish_event
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Das **`finish`** Ereignis der [`Animation`](/de/docs/Web/API/Animation) Schnittstelle wird ausgelöst, wenn die Animation entweder auf natürliche Weise abgeschlossen ist oder wenn die [`Animation.finish()`](/de/docs/Web/API/Animation/finish) Methode aufgerufen wird, um die Animation sofort zu beenden.

> [!NOTE]
> Der `"paused"` Abspielstatus hat Vorrang vor dem `"finished"` Abspielstatus; wenn die Animation sowohl pausiert als auch beendet ist, wird der `"paused"` Status gemeldet. Sie können die Animation in den `"finished"` Status zwingen, indem Sie ihre [`startTime`](/de/docs/Web/API/Animation/startTime) auf `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)` setzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("finish", (event) => { })
onfinish = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Eigenschaften des Ereignisses

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis erzeugt hat.

## Beispiele

`Animation.onfinish` wird mehrmals im Alice in Web Animations API Land [Growing/Shrinking Alice Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) verwendet. Hier ist ein Beispiel, wo wir Zeigerereignisse an ein Element zurückgeben, nachdem dessen Deckkraftanimation es eingeblendet hat:

```js
// Add an animation to the game's ending credits
const endingUI = document.getElementById("ending-ui");
const bringUI = endingUI.animate(keysFade, timingFade);

// Pause said animation's credits
bringUI.pause();

// This function removes pointer events on the credits.
hide(endingUI);

// When the credits are later faded in,
// we re-add the pointer events when they're done
bringUI.onfinish = (event) => {
  endingUI.style.pointerEvents = "auto";
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
