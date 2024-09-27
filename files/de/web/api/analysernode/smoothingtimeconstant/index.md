---
title: "AnalyserNode: smoothingTimeConstant Eigenschaft"
short-title: smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`smoothingTimeConstant`**-Eigenschaft der [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Schnittstelle ist ein Double-Wert, der die Durchschnittsbildungskonstante mit dem letzten Analyse-Frame darstellt. Im Grunde handelt es sich um einen Mittelwert zwischen dem aktuellen Puffer und dem letzten vom `AnalyserNode` verarbeiteten Puffer, was zu wesentlich sanfteren Werteänderungen im Laufe der Zeit führt.

## Wert

Ein Double im Bereich von `0` bis `1` (`0` bedeutet keine Zeitdurchschnittsbildung). Der Standardwert ist `0.8`.

Wird 0 gesetzt, erfolgt keine Durchschnittsbildung, während ein Wert von 1 bedeutet, dass der vorherige und aktuelle Puffer bei der Wertberechnung stark überlappen, was im Wesentlichen die Änderungen über Aufrufe von [`AnalyserNode.getFloatFrequencyData`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)/[`AnalyserNode.getByteFrequencyData`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) glättet.

In technischen Begriffen wenden wir ein [Blackman-Fenster](https://webaudio.github.io/web-audio-api/#blackman-window) an und glätten die Werte im Laufe der Zeit. Der Standardwert ist für die meisten Fälle ausreichend.

> [!NOTE]
> Wenn ein Wert außerhalb des Bereichs 0–1 gesetzt wird, wird eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um ein `AnalyserNode` zu erstellen, dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um wiederholt Frequenzdaten zu sammeln und eine "Winamp-Balkendiagramm-Stil"-Ausgabe der aktuellen Audioeingaben zu zeichnen. Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

Wenn Sie neugierig auf die Wirkung der `smoothingTimeConstant()` sind, versuchen Sie, das obige Beispiel zu klonen und `analyser.smoothingTimeConstant = 0;` stattdessen zu setzen. Sie werden feststellen, dass die Wertänderungen viel abrupter sind.

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

// …

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
  }
}

draw();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
