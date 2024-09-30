---
title: "AnalyserNode: getFloatTimeDomainData()-Methode"
short-title: getFloatTimeDomainData()
slug: Web/API/AnalyserNode/getFloatTimeDomainData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`getFloatTimeDomainData()`**-Methode der [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Schnittstelle kopiert die aktuelle Wellenform- oder Zeitdomaindaten in ein übergebenes {{jsxref("Float32Array")}}-Array. Jeder Array-Wert ist eine _Stichprobe_, die die Größe des Signals zu einem bestimmten Zeitpunkt darstellt.

## Syntax

```js-nolint
getFloatTimeDomainData(array)
```

### Parameter

- `array`
  - : Das {{jsxref("Float32Array")}}, in das die Zeitdomaindaten kopiert werden. Wenn das Array weniger Elemente hat als die [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize), werden überschüssige Elemente entfernt. Wenn es mehr Elemente hat als benötigt, werden überschüssige Elemente ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, und dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um wiederholt Zeitdomaindaten zu sammeln und eine "Oszilloskop-ähnliche" Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere praktische Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 1024;
const bufferLength = analyser.fftSize;
console.log(bufferLength);
const dataArray = new Float32Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getFloatTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";
  canvasCtx.beginPath();

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] * 200.0;
    const y = HEIGHT / 2 + v;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }
    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
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
