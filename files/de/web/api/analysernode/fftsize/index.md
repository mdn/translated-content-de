---
title: "AnalyserNode: fftSize-Eigenschaft"
short-title: fftSize
slug: Web/API/AnalyserNode/fftSize
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die **`fftSize`**-Eigenschaft des {{domxref("AnalyserNode")}}-Interfaces ist ein nicht signierter long-Wert und stellt die Fenstergröße in Samples dar, die bei der Durchführung einer [Schnellen Fourier-Transformation](https://en.wikipedia.org/wiki/Fast_Fourier_transform) (FFT) verwendet wird, um Daten im Frequenzbereich zu erhalten.

## Wert

Ein nicht signierter Integer, der die Fenstergröße der FFT in Anzahl der Samples darstellt. Ein höherer Wert führt zu mehr Details im Frequenzbereich, aber zu weniger Details im Amplitudenbereich.

Muss eine Potenz von 2 zwischen 2^5 und 2^15 sein, also einer von: `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384` und `32768`. Der Standardwert ist `2048`.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der gesetzte Wert keine Potenz von 2 ist oder außerhalb des erlaubten Bereichs liegt.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines {{domxref("AudioContext")}}, um einen `AnalyserNode` zu erstellen, dann mit {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} und einem {{htmlelement("canvas")}}, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-Stil"-Ausgabe des aktuellen Audioeingangs zu zeichnen.
Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Zeichnet ein Oszilloskop der aktuellen Audioquelle

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
