---
title: "Animation: Eigenschaft startTime"
short-title: startTime
slug: Web/API/Animation/startTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

Die **`Animation.startTime`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interfaces ist ein Gleitkommawert doppelter Genauigkeit, der angibt, wann die Wiedergabe einer Animation planmäßig beginnen soll.

Die **Startzeit** einer Animation ist der Zeitwert ihrer [`timeline`](/de/docs/Web/API/DocumentTimeline), wenn der zugehörige [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) zur Wiedergabe angesetzt wird. Die **Startzeit** einer Animation ist anfangs ungelöst (das bedeutet, dass sie `null` ist, da sie keinen Wert hat).

## Wert

Eine Gleitkommazahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, wenn keine Zeit festgelegt ist. Sie können diesen Wert lesen, um festzustellen, auf welche Startzeit er derzeit gesetzt ist, und Sie können diesen Wert ändern, um die Animation zu einem anderen Zeitpunkt starten zu lassen.

## Beispiele

Im Beispiel [Running on Web Animations API](https://codepen.io/rachelnabors/pen/zxYexJ?editors=0010) können wir alle neuen animierten Katzen synchronisieren, indem wir ihnen allen die gleiche `startTime` wie der ursprünglichen laufenden Katze geben:

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

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `animation.startTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `animation.startTime` immer ein Vielfaches von 0.002 sein, oder ein Vielfaches von 0.1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

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
