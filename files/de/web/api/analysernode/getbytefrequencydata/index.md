---
title: "AnalyserNode: getByteFrequencyData() Methode"
short-title: getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`getByteFrequencyData()`** Methode der {{ domxref("AnalyserNode") }}-Schnittstelle kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (un-signiertes Bytearray).

Die Frequenzdaten bestehen aus Ganzzahlen auf einer Skala von 0 bis 255.

Jedes Element im Array repräsentiert den Dezibel-Wert für eine bestimmte Frequenz. Die Frequenzen sind linear von 0 bis zur Hälfte der Abtastrate verteilt. Zum Beispiel repräsentiert das letzte Element des Arrays bei einer Abtastrate von `48000` den Dezibel-Wert für `24000` Hz.

Wenn das Array weniger Elemente enthält als die {{domxref("AnalyserNode.frequencyBinCount")}}, werden überschüssige Elemente weggelassen. Wenn es mehr Elemente enthält als benötigt, werden überschüssige Elemente ignoriert.

## Syntax

```js-nolint
getByteFrequencyData(array)
```

### Parameter

- `array`
  - : Das {{jsxref("Uint8Array")}}, in das die Frequenzdaten kopiert werden.
    Wenn das Array weniger Elemente enthält als die {{domxref("AnalyserNode.frequencyBinCount")}}, werden überschüssige Elemente weggelassen. Wenn es mehr Elemente enthält als benötigt, werden überschüssige Elemente ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um ein `AnalyserNode` zu erstellen, dann {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} und {{htmlelement("canvas")}}, um wiederholt Frequenzdaten zu sammeln und eine "Winamp-Balkendiagramm-Stil" Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
