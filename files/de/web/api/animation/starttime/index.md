---
title: "Animation: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/Animation/startTime
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

Die **`Animation.startTime`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interfaces ist ein Gleitkommawert mit doppelter Genauigkeit, der den geplanten Zeitpunkt angibt, zu dem die Wiedergabe einer Animation beginnen soll.

Die **Startzeit** einer Animation ist der Zeitwert ihrer [`timeline`](/de/docs/Web/API/DocumentTimeline), wenn ihr Ziel-`[`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)` zur Wiedergabe geplant ist. Die **Startzeit** einer Animation ist zunächst nicht festgelegt (was bedeutet, dass sie `null` ist, weil sie keinen Wert hat).

## Wert

Eine Gleitkommazahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, wenn keine Zeit festgelegt ist. Sie können diesen Wert auslesen, um festzustellen, was die aktuelle Startzeit ist, und Sie können diesen Wert ändern, um die Animation zu einem anderen Zeitpunkt beginnen zu lassen.

## Beispiele

### Verschiedene Animationen synchronisieren

Im folgenden Beispiel können wir alle neuen animierten Katzen synchronisieren, indem wir ihnen die gleiche `startTime` wie der ursprünglich laufenden Katze geben. Beachten Sie, dass dies nur mit der Web Animations API möglich ist: Es ist unmöglich, zwei separate Animationen mit CSS-Animationen zu synchronisieren.

```html hidden
<div id="css-cats">
  <h2>Cats animated with<br />CSS Animations</h2>
  <div class="cat with-css"></div>
  <button id="insert-css-cat">Add a Cat</button>
</div>

<div id="waapi-cats">
  <h2>Cats animated with the<br />Web Animation API</h2>
  <div class="cat" id="with-waapi"></div>
  <button id="insert-waapi-cat">Add a Cat</button>
</div>
```

```css
/* All cats have the same dimensions and the same sprite for a background image. */
.cat {
  background: url("/shared-assets/images/examples/web-animations/cat_sprite.png") -600px
    0 no-repeat;
  height: 150px;
  width: 100%;
}

/* The cats animated with CSS have their running animations set with CSS */
.cat.with-css {
  animation: 0.75s steps(13, end) infinite run-cycle;
}

/*
  The keyframes for the CSS running animation.
  This moves the background image sprite around.
*/
@keyframes run-cycle {
  from {
    background-position: -600px 0;
  }
  to {
    background-position: -600px -1950px;
  }
}
```

```css hidden
#css-cats,
#waapi-cats {
  text-align: center;
  vertical-align: top;
  min-width: 300px;
}

body {
  background: #e5e6e9;
  color: #071933;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
}
```

```js
const cssCats = document.getElementById("css-cats");
const waapiCats = document.getElementById("waapi-cats");
const insertCSSCat = document.getElementById("insert-css-cat");
const insertWAAPICat = document.getElementById("insert-waapi-cat");

// The same information as @keyframes run-cycle
const keyframes = [
  { backgroundPosition: "-600px 0" },
  { backgroundPosition: "-600px -1950px" },
];
// The same information as .cat.with-css
const timing = {
  duration: 750,
  iterations: Infinity,
  easing: "steps(13, end)",
};

const catRunning = document
  .getElementById("with-waapi")
  .animate(keyframes, timing);

function createCat() {
  const newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

insertCSSCat.addEventListener("click", () => {
  const newCat = createCat();
  newCat.classList.add("with-css");
  cssCats.insertBefore(newCat, insertCSSCat);
});

insertWAAPICat.addEventListener("click", () => {
  const newCat = createCat();
  const newAnimationPlayer = newCat.animate(keyframes, timing);
  // set start time to be the same as the original .cat#with-waapi
  newAnimationPlayer.startTime = catRunning.startTime;
  waapiCats.insertBefore(newCat, insertWAAPICat);
});
```

{{EmbedLiveSample("Syncing different animations", "", 600)}}

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision von `animation.startTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall wird die Präzision auf 100 ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` gesetzt, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `animation.startTime` immer ein Vielfaches von 0,002 oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

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
