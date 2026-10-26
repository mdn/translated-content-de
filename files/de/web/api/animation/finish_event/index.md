---
title: "Animation: finish-Ereignis"
short-title: finish
slug: Web/API/Animation/finish_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ APIRef("Web Animations") }}

Das **`finish`**-Ereignis der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle wird ausgelöst, wenn die Wiedergabe der Animation endet: entweder weil sie regulär abgeschlossen wird oder weil die Methode [`Animation.finish()`](/de/docs/Web/API/Animation/finish) aufgerufen wird, um sie sofort zu beenden.

> [!NOTE]
> Der Wiedergabestatus `"paused"` hat Vorrang vor `"finished"`. Wenn die Animation sowohl pausiert als auch abgeschlossen ist, wird `"paused"` gemeldet. Sie können die Animation in den Status `"finished"` versetzen, indem Sie ihre [`startTime`](/de/docs/Web/API/Animation/startTime) auf `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)` setzen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("finish", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onfinish = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Beispiele

`Animation.onfinish` wird im Spiel [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) aus „Alice in Web Animations API Land“ mehrfach verwendet. Im folgenden Beispiel werden Pointer-Ereignisse für ein Element wieder aktiviert, nachdem es durch eine Opazitätsanimation eingeblendet wurde:

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
