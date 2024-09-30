---
title: "AnalyserNode: Methode getByteFrequencyData()"
short-title: getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`getByteFrequencyData()`**-Methode des [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Interfaces kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (unsigned byte array).

Die Frequenzdaten bestehen aus ganzen Zahlen auf einer Skala von 0 bis 255.

Jedes Element im Array repräsentiert den Dezibelwert für eine bestimmte Frequenz. Die Frequenzen sind linear von 0 bis zur Hälfte der Abtastrate verteilt. Bei einer Abtastrate von `48000` repräsentiert das letzte Element des Arrays zum Beispiel den Dezibelwert für `24000` Hz.

Wenn das Array weniger Elemente hat als [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount), werden überschüssige Elemente verworfen. Wenn es mehr Elemente als benötigt hat, werden überschüssige Elemente ignoriert.

## Syntax

```js-nolint
getByteFrequencyData(array)
```

### Parameter

- `array`
  - : Das {{jsxref("Uint8Array")}}, in das die Daten des Frequenzbereichs kopiert werden. Wenn das Array weniger Elemente hat als [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount), werden überschüssige Elemente verworfen. Wenn es mehr Elemente als benötigt hat, werden überschüssige Elemente ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und ein {{htmlelement("canvas")}}, um wiederholt Frequenzdaten zu sammeln und einen "Winamp-Balkendiagramm-Stil" als Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

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

- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
