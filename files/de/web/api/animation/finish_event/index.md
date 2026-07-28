---
title: "Animation: finish-Ereignis"
short-title: finish
slug: Web/API/Animation/finish_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{ APIRef("Web Animations") }}

Das **`finish`**-Ereignis des [`Animation`](/de/docs/Web/API/Animation)-Interfaces wird ausgelöst, wenn die Animation das Abspielen beendet, sei es, wenn die Animation natürlich endet oder wenn die Methode [`Animation.finish()`](/de/docs/Web/API/Animation/finish) aufgerufen wird, um die Animation sofort zu beenden.

> [!NOTE]
> Der Wiedergabestatus `"paused"` hat Vorrang vor dem Wiedergabestatus `"finished"`; wenn die Animation sowohl pausiert als auch beendet ist, wird der Status `"paused"` derjenige sein, der gemeldet wird. Sie können die Animation in den Status `"finished"` zwingen, indem Sie ihre [`startTime`](/de/docs/Web/API/Animation/startTime) auf `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)` setzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("finish", (event) => { })

onfinish = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Beispiele

`Animation.onfinish` wird mehrmals im Alice in Web Animations API Land [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) verwendet. Hier ist ein Beispiel, bei dem wir Zeigerereignisse zu einem Element nach dessen Opazitätsanimation, die es eingeblendet hat, zurückgeben:

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
