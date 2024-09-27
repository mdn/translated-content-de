---
title: "BaseAudioContext: createAnalyser()-Methode"
short-title: createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Web Audio API")}}

Die `createAnalyser()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erstellt einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der genutzt werden kann, um Audio-Zeit- und -Frequenzdaten zu erfassen und Datenvisualisierungen zu erstellen.

> [!NOTE]
> Der [`AnalyserNode()`](/de/docs/Web/API/AnalyserNode/AnalyserNode)-Konstruktor ist der empfohlene Weg, um einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

> [!NOTE]
> Weitere Informationen zur Nutzung dieses Nodes finden Sie auf der [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Seite.

## Syntax

```js-nolint
createAnalyser()
```

### Parameter

Keine.

### Rückgabewert

Ein [`AnalyserNode`](/de/docs/Web/API/AnalyserNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines AudioContext zum Erstellen eines Analyser-Nodes, dann die Verwendung von requestAnimationFrame(), um fortlaufend Zeitdomaindaten zu sammeln und eine "Oszilloskop-ähnliche" Ausgabe des aktuellen Audioeingangs zu erzeugen. Für vollständigere praktische Beispiele/Informationen, schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)-Demo an (sehen Sie sich [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code an).

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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
