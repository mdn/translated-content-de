---
title: "AnalyserNode: maxDecibels-Eigenschaft"
short-title: maxDecibels
slug: Web/API/AnalyserNode/maxDecibels
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die **`maxDecibels`**-Eigenschaft des [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Interfaces ist ein Doppelwert, der den maximalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten darstellt, um in unsignierte Byte-Werte umgerechnet zu werden. Grundsätzlich gibt dies den maximalen Wert für den Bereich der Ergebnisse an, wenn `getByteFrequencyData()` verwendet wird.

## Wert

Ein Doppelwert, der den maximalen [Dezibel](https://en.wikipedia.org/wiki/Decibel)-Wert zum Skalieren der FFT-Analysedaten darstellt, wobei `0` dB der lautestmögliche Ton ist, `-10` dB der zehnte Teil davon ist usw. Der Standardwert ist `-30` dB.

Wenn Daten von `getByteFrequencyData()` abgerufen werden, werden alle Frequenzen mit einer Amplitude von `maxDecibels` oder höher als `255` zurückgegeben.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Wert kleiner oder gleich `AnalyserNode.minDecibels` gesetzt wird.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um wiederholt Frequenzdaten zu sammeln und eine "Winamp-Balkendiagramm-Darstellung" des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

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
