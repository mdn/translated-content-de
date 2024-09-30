---
title: "BaseAudioContext: createAnalyser()-Methode"
short-title: createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Web Audio API")}}

Die `createAnalyser()`-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt ein [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), welches verwendet werden kann, um Audio-Zeit- und Frequenzdaten offenzulegen und Datenvisualisierungen zu erstellen.

> [!NOTE]
> Der [`AnalyserNode()`](/de/docs/Web/API/AnalyserNode/AnalyserNode)-Konstruktor wird empfohlen, um ein [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) zu erstellen; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

> [!NOTE]
> Weitere Informationen zur Verwendung dieses Knotens finden Sie auf der
> [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Seite.

## Syntax

```js-nolint
createAnalyser()
```

### Parameter

Keine.

### Rückgabewert

Ein [`AnalyserNode`](/de/docs/Web/API/AnalyserNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Analyser-Knotens. Anschließend wird `requestAnimationFrame()` verwendet, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-Stil"-Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)-Demo an (siehe [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
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

  canvasCtx.beginPath();

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
