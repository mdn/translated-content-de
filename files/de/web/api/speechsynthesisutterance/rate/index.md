---
title: "SpeechSynthesisUtterance: rate-Eigenschaft"
short-title: rate
slug: Web/API/SpeechSynthesisUtterance/rate
l10n:
  sourceCommit: bdb42cfc961631d82d44fadc3740a2bc2f0055ac
---

{{APIRef("Web Speech API")}}

Die **`rate`**-Eigenschaft des {{domxref("SpeechSynthesisUtterance")}}-Interfaces liest und setzt die Geschwindigkeit, mit der die Äußerung ausgesprochen wird.

Falls nicht gesetzt, wird ein Standardwert von 1 verwendet.

## Wert

Ein Float, der den Rate-Wert darstellt.
Er kann zwischen 0,1 (niedrigste) und 10 (höchste) liegen, wobei 1 die Standardrate für die aktuelle Plattform oder Stimme ist, die einer normalen Sprechgeschwindigkeit entsprechen sollte.
Andere Werte wirken als Prozentsatz relativ dazu, zum Beispiel ist 2 zweimal so schnell, 0,5 ist halb so schnell, usw.

Einige Sprachsynthese-Engines oder Stimmen können die minimalen und maximalen Raten weiter einschränken.
Wenn [SSML](https://www.w3.org/TR/speech-synthesis/) verwendet wird, wird dieser Wert durch [Prosodie-Tags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) im Markup überschrieben.

## Beispiele

### Anpassung der Wiedergabegeschwindigkeit

In diesem Beispiel können wir die Wiedergabegeschwindigkeit mit dem Schieberegler anpassen und dann die Äußerung mit dem "Play"-Button abspielen.

#### HTML

```html
<p id="text">It was a dark and stormy night.</p>

<div id="rate-control">
  <label for="rate">Rate:</label>
  <input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
</div>

<button id="play">Play</button>
```

#### CSS

```css
body {
  font-family: sans-serif;
}

#rate-control {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}
```

#### JavaScript

```js
const synth = window.speechSynthesis;

const text = document.querySelector("#text");
const play = document.querySelector("#play");
const rate = document.querySelector("#rate");

function speak() {
  if (synth.speaking) {
    synth.cancel();
  }
  const utterThis = new SpeechSynthesisUtterance(text.textContent);
  utterThis.addEventListener("error", () => {
    console.error("SpeechSynthesisUtterance error");
  });
  utterThis.rate = rate.value;
  synth.speak(utterThis);
}

play.addEventListener("click", speak);
```

#### Ausgabe

{{EmbedLiveSample("Adjusting playback rate")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)