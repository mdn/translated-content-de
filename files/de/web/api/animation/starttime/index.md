---
title: "Animation: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/Animation/startTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

Die **`Animation.startTime`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interfaces ist ein doppelt-genauer Gleitkommawert, der die geplante Zeit angibt, wann die Wiedergabe einer Animation beginnen soll.

Die **Startzeit** einer Animation ist der Zeitwert ihrer [`timeline`](/de/docs/Web/API/DocumentTimeline), wenn deren Ziel-`KeyframeEffect`(/de/docs/Web/API/KeyframeEffect) geplant ist, die Wiedergabe zu beginnen. Die **Startzeit** einer Animation ist anfänglich ungelöst (bedeutet, dass sie `null` ist, da sie keinen Wert hat).

## Wert

Eine Gleitkommazahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, wenn keine Zeit festgelegt ist. Sie können diesen Wert lesen, um zu bestimmen, was die aktuelle Startzeit ist, und Sie können diesen Wert ändern, um die Animation zu einem anderen Zeitpunkt starten zu lassen.

## Beispiele

Im [Beispiel zur Web Animations API](https://codepen.io/rachelnabors/pen/zxYexJ?editors=0010) können wir alle neuen animierten Katzen synchronisieren, indem wir ihnen allen die gleiche `startTime` wie der ursprünglichen laufenden Katze geben:

```js
const catRunning = document
  .getElementById("withWAAPI")
  .animate(keyframes, timing);

/* A function that makes new cats. */
function addCat() {
  const newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

/* This is the function that adds a cat to the WAAPI column */
function animateNewCatWithWAAPI() {
  // make a new cat
  const newCat = addCat();

  // animate said cat with the WAAPI's "animate" function
  const newAnimationPlayer = newCat.animate(keyframes, timing);

  // set the animation's start time to be the same as the original .cat#withWAAPI
  newAnimationPlayer.startTime = catRunning.startTime;

  // Add the cat to the pile.
  WAAPICats.appendChild(newCat);
}
```

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `animation.startTime` abhängig von den Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei die Präzision dann 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist, beträgt.

Beispielsweise wird bei reduzierter Zeitpräzision das Ergebnis von `animation.startTime` immer ein Vielfaches von 0,002 sein, oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduced time precision (2ms) in Firefox 60
animation.startTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
animation.startTime;
// Might be:
// 49.8
// 50.6
// 51.7
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) für die aktuelle Zeit der Animation.
