---
title: "Animation: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/Animation/startTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

Die **`Animation.startTime`**-Eigenschaft des {{domxref("Animation")}}-Interfaces ist ein Gleitkommawert mit doppelter Genauigkeit, der die geplante Zeit angibt, wann die Wiedergabe einer Animation beginnen soll.

Die **Startzeit** einer Animation ist der Zeitwert ihrer {{domxref("DocumentTimeline","Timeline")}}, wenn ihr Ziel-{{domxref("KeyframeEffect")}} zur Wiedergabe geplant ist. Die **Startzeit** einer Animation ist zunächst ungelöst (was bedeutet, dass sie `null` ist, da sie keinen Wert hat).

## Wert

Eine Gleitkommazahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, wenn keine Zeit festgelegt ist. Sie können diesen Wert auslesen, um zu bestimmen, auf welche Startzeit er derzeit eingestellt ist, und Sie können diesen Wert ändern, um die Animation zu einem anderen Zeitpunkt starten zu lassen.

## Beispiele

Im Beispiel [Running on Web Animations API](https://codepen.io/rachelnabors/pen/zxYexJ?editors=0010) können wir alle neuen animierten Katzen synchronisieren, indem wir ihnen dieselbe `startTime` wie der ursprünglichen laufenden Katze zuweisen:

```js
const catRunning = document
  .getElementById("withWAAPI")
  .animate(keyframes, timing);

/* Eine Funktion, die neue Katzen erstellt. */
function addCat() {
  const newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

/* Dies ist die Funktion, die eine Katze zur WAAPI-Spalte hinzufügt */
function animateNewCatWithWAAPI() {
  // Erstelle eine neue Katze
  const newCat = addCat();

  // Animieren Sie die besagte Katze mit der "animate"-Funktion der WAAPI
  const newAnimationPlayer = newCat.animate(keyframes, timing);

  // Setzen Sie die Startzeit der Animation auf dieselbe wie die der ursprünglichen .cat#withWAAPI
  newAnimationPlayer.startTime = catRunning.startTime;

  // Fügen Sie die Katze zum Stapel hinzu.
  WAAPICats.appendChild(newCat);
}
```

## Reduzierte Zeitgenauigkeit

Zum Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) kann die Genauigkeit von `animation.startTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Genauigkeit 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher Wert größer ist.

Zum Beispiel wird bei reduzierter Zeitgenauigkeit das Ergebnis von `animation.startTime` immer ein Vielfaches von 0,002 oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

```js
// reduzierte Zeitgenauigkeit (2ms) in Firefox 60
animation.startTime;
// Könnte sein:
// 23.404
// 24.192
// 25.514
// …

// reduzierte Zeitgenauigkeit mit aktiviertem `privacy.resistFingerprinting`
animation.startTime;
// Könnte sein:
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
- {{domxref("Animation")}}
- {{domxref("Animation.currentTime")}} für die aktuelle Zeit der Animation.
