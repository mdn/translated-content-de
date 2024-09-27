---
title: "AnalyserNode: fftSize Eigenschaft"
short-title: fftSize
slug: Web/API/AnalyserNode/fftSize
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die **`fftSize`**-Eigenschaft des [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Interfaces ist ein vorzeichenloser Long-Wert und repräsentiert die Fenstergröße in Samples, die verwendet wird, wenn eine [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) (FFT) durchgeführt wird, um Daten im Frequenzbereich zu erhalten.

## Wert

Ein vorzeichenloser Integer, der die Fenstergröße der FFT in Anzahl der Samples darstellt. Ein höherer Wert führt zu mehr Details im Frequenzbereich, jedoch zu weniger Details im Amplitudenbereich.

Muss eine Potenz von 2 zwischen 2^5 und 2^15 sein, also einer der folgenden Werte: `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384` und `32768`. Standardwert ist `2048`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der festgelegte Wert keine Potenz von 2 ist oder außerhalb des erlaubten Bereichs liegt.

## Beispiele

Das folgende Beispiel zeigt eine grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um wiederholt Zeitbereichsdaten zu sammeln und eine „Oszilloskop-stil“ Ausgabe des aktuellen Audioeingangs zu zeichnen.
Für vollständigere Anwendungsbeispiele/Informationen werfen Sie einen Blick auf unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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
