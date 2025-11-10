---
title: "Animation: finish-Ereignis"
short-title: finish
slug: Web/API/Animation/finish_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("Web Animations") }}

Das **`finish`**-Ereignis des [`Animation`](/de/docs/Web/API/Animation)-Interfaces wird ausgelöst, wenn die Animation endet, entweder wenn die Animation auf natürliche Weise abgeschlossen wird oder wenn die Methode [`Animation.finish()`](/de/docs/Web/API/Animation/finish) aufgerufen wird, um die Animation sofort zu beenden.

> [!NOTE]
> Der `"paused"`-Zustand übertrumpft den `"finished"`-Zustand; wenn die Animation sowohl pausiert als auch beendet ist, wird der `"paused"`-Zustand gemeldet. Sie können die Animation in den `"finished"`-Zustand versetzen, indem Sie ihre [`startTime`](/de/docs/Web/API/Animation/startTime) auf `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)` setzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("finish", (event) => { })

onfinish = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften des übergeordneten Interfaces [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis erzeugt hat.

## Beispiele

`Animation.onfinish` wird mehrmals im Alice in Web Animations API Land [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) verwendet. Hier ist ein Fall, bei dem wir Pointer-Ereignisse zurück zu einem Element hinzufügen, nachdem dessen Opazitätsanimation es eingeblendet hat:

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
