---
title: "Animation: Abschlussereignis"
short-title: Abschluss
slug: Web/API/Animation/finish_event
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Das **`finish`**-Ereignis der {{domxref("Animation")}}-Schnittstelle wird ausgelöst, wenn die Animation beendet ist, entweder durch das natürliche Ende der Animation oder wenn die {{domxref("Animation.finish()")}}-Methode aufgerufen wird, um die Animation sofort zu beenden.

> [!NOTE]
> Der `"paused"`-Abspielzustand ersetzt den `"finished"`-Abspielzustand; wenn die Animation sowohl pausiert als auch beendet ist, wird der `"paused"`-Zustand gemeldet. Sie können die Animation in den `"finished"`-Zustand zwingen, indem Sie ihre {{domxref("Animation.startTime", "startTime")}} auf `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)` setzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("finish", (event) => { })
onfinish = (event) => { }
```

## Ereignistyp

Ein {{domxref("AnimationPlaybackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften sind die Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugte.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis erzeugte.

## Beispiele

`Animation.onfinish` wird mehrfach im Alice in Web Animations API Land
[Wachstums-/Schrumpfspiel Alice](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) verwendet.
Hier ist eine Instanz, in der wir Mauszeiger-Ereignisse zu einem Element hinzufügen, nachdem seine Opazitätsanimation es eingeblendet hat:

```js
// Eine Animation zu den Endcredits des Spiels hinzufügen
const endingUI = document.getElementById("ending-ui");
const bringUI = endingUI.animate(keysFade, timingFade);

// Die Credits dieser Animation pausieren
bringUI.pause();

// Diese Funktion entfernt Mauszeiger-Ereignisse von den Credits.
hide(endingUI);

// Wenn die Credits später eingeblendet werden,
// fügen wir die Mauszeiger-Ereignisse wieder hinzu, wenn sie fertig sind
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
- {{domxref("Animation")}}
- {{domxref("Animation.finish()")}}
