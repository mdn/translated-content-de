---
title: "AnalyserNode: getFloatTimeDomainData() Methode"
short-title: getFloatTimeDomainData()
slug: Web/API/AnalyserNode/getFloatTimeDomainData
l10n:
  sourceCommit: ba84d74d19a2c0c2351c8b9bce2fb10f6b890c55
---

{{ APIRef("Web Audio API") }}

Die **`getFloatTimeDomainData()`** Methode der [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) Schnittstelle kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein {{jsxref("Float32Array")}} Array, das ihr übergeben wird. Jeder Array-Wert ist eine _Stichprobe_, die Größe des Signals zu einem bestimmten Zeitpunkt.

Die Wellenform wird als PCM-Daten dargestellt, die einen nominalen Bereich von -1,0 bis 1,0 haben, aber Werte können den Bereich überschreiten, zum Beispiel beim Down-Mixing von Stereo auf Mono.

## Syntax

```js-nolint
getFloatTimeDomainData(array)
```

### Parameter

- `array`
  - : Das {{jsxref("Float32Array")}}, in das die Zeitbereichsdaten kopiert werden.
    Wenn das Array weniger Elemente als die [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize) hat, werden überzählige Elemente verworfen. Wenn es mehr Elemente als nötig hat, werden überzählige Elemente ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, und dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-Stil"-Ausgabe des aktuellen Audioeingangs zu zeichnen.
Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

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
