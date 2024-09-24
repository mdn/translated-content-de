---
title: "BaseAudioContext: createAnalyser()-Methode"
short-title: createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Web Audio API")}}

Die `createAnalyser()`-Methode des {{domxref("BaseAudioContext")}}-Interfaces erstellt einen {{domxref("AnalyserNode")}}, der verwendet werden kann, um Audio-Zeit- und Frequenzdaten zu erfassen und Datenvisualisierungen zu erstellen.

> [!NOTE]
> Der {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}-Konstruktor ist der empfohlene Weg, um einen {{domxref("AnalyserNode")}} zu erstellen; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

> [!NOTE]
> Weitere Informationen zur Verwendung dieses Knotens finden Sie auf der {{domxref("AnalyserNode")}}-Seite.

## Syntax

```js-nolint
createAnalyser()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("AnalyserNode")}}.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Analyser-Knotens, der dann requestAnimationFrame() verwendet, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-Stil"-Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Zeichnen eines Oszilloskops der aktuellen Audioquelle

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
