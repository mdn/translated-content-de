---
title: "AnalyserNode: getByteTimeDomainData()-Methode"
short-title: getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`getByteTimeDomainData()`**-Methode der [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Schnittstelle kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in eine übergebene {{jsxref("Uint8Array")}} (unsigned byte array).

Wenn das Array weniger Elemente als die [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize) hat, werden überschüssige Elemente verworfen. Hat es mehr Elemente als benötigt, werden überschüssige Elemente ignoriert.

## Syntax

```js-nolint
getByteTimeDomainData(array)
```

### Parameter

- `array`
  - : Die {{jsxref("Uint8Array")}}, in die die Zeitbereichsdaten kopiert werden.
    Wenn das Array weniger Elemente als die [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize) hat, werden überschüssige Elemente verworfen. Hat es mehr Elemente als benötigt, werden überschüssige Elemente ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen. Anschließend wird `requestAnimationFrame` und ein {{htmlelement("canvas")}} verwendet, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-ähnliche" Ausgabe des aktuellen Audioeingangs zu zeichnen.
Für vollständigere praktische Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.fftSize;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source
function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  canvasCtx.beginPath();
  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * HEIGHT) / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
  canvasCtx.stroke();
}

draw();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
