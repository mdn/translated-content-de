---
title: "AnalyserNode: Eigenschaft minDecibels"
short-title: minDecibels
slug: Web/API/AnalyserNode/minDecibels
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`minDecibels`**-Eigenschaft der {{ domxref("AnalyserNode") }}-Schnittstelle ist ein Doppelwert, der den minimalen Leistungswert im Skalierungsbereich für die FFT-Analyseeingabedaten darstellt, für die Umwandlung in unvorzeichenbehaftete Byte-Werte – im Wesentlichen gibt dies den minimalen Wert für den Bereich der Ergebnisse bei der Verwendung von `getByteFrequencyData()` an.

## Wert

Ein Doppelwert, der den minimalen [Dezibel](https://en.wikipedia.org/wiki/Decibel)-Wert zur Skalierung der FFT-Analyseeingabedaten darstellt, wobei `0` dB der lauteste mögliche Klang ist, `-10` dB ein Zehntel davon ist usw. Der Standardwert ist `-100` dB.

Beim Abrufen von Daten mit `getByteFrequencyData()`, werden alle Frequenzen mit einer Amplitude von `minDecibels` oder niedriger als `0` zurückgegeben.

> [!NOTE]
> Wenn ein Wert größer als `AnalyserNode.maxDecibels` gesetzt wird, wird eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um einen `AnalyserNode` zu erstellen. Anschließend werden {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} und ein {{htmlelement("canvas")}} genutzt, um wiederholt Frequenzdaten zu sammeln und eine "Winamp-Balkendiagramm-Ausgabe" des aktuellen Audioeingangs zu zeichnen.
Für vollständigere angewandte Beispiele/Informationen, schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
