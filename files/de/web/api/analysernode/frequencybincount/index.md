---
title: "AnalyserNode: frequencyBinCount-Eigenschaft"
short-title: frequencyBinCount
slug: Web/API/AnalyserNode/frequencyBinCount
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die **`frequencyBinCount`** schreibgeschützte Eigenschaft der {{domxref("AnalyserNode")}}-Schnittstelle enthält die Gesamtanzahl der Datenpunkte, die für {{domxref("AudioContext")}} {{domxref("BaseAudioContext.sampleRate", "sampleRate")}} verfügbar sind. Dies entspricht der Hälfte des `Wertes` von {{domxref("AnalyserNode.fftSize")}}. Die Indizes der beiden Methoden haben eine lineare Beziehung zu den Frequenzen, die sie repräsentieren, zwischen 0 und der [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency).

## Wert

Ein nicht signierter Integer, der gleich der Anzahl der Werte ist, die {{domxref("AnalyserNode.getByteFrequencyData()")}} und {{domxref("AnalyserNode.getFloatFrequencyData()")}} in das bereitgestellte `TypedArray` kopieren.

Aus technischen Gründen, die mit der Definition der [Fast Fourier-Transformation](https://de.wikipedia.org/wiki/Schnelle_Fourier-Transformation) zusammenhängen, ist sie immer die Hälfte des Wertes von {{domxref("AnalyserNode.fftSize")}}. Daher wird sie eine von `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192` und `16384` sein.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um einen `AnalyserNode` zu erstellen, dann {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} und {{htmlelement("canvas")}}, um fortlaufend Frequenzdaten zu sammeln und eine "Winamp-Balkendiagramm-ähnliche" Ausgabe des aktuellen Audio-Eingangs darzustellen. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an.

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

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

  const barWidth = (WIDTH / bufferLength) * 2.5 - 1;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth;
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
