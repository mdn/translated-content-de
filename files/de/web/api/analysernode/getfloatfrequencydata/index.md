---
title: "AnalyserNode: getFloatFrequencyData() Methode"
short-title: getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("Web Audio API") }}

Die **`getFloatFrequencyData()`** Methode der [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) Schnittstelle kopiert die aktuellen Frequenzdaten in ein {{jsxref("Float32Array")}} Array, das ihr übergeben wird.

Jedes Element im Array repräsentiert den Dezibelwert für eine bestimmte Frequenz. Die Frequenzen sind linear von 0 bis zur Hälfte der Abtastrate verteilt. Zum Beispiel, bei einer Abtastrate von `48000` Hz repräsentiert das letzte Element des Arrays den Dezibelwert für `24000` Hz.

Falls Sie höhere Leistung benötigen und Genauigkeit nicht wichtig ist, können Sie stattdessen [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) verwenden, das mit einem {{jsxref("Uint8Array")}} arbeitet.

## Syntax

```js-nolint
getFloatFrequencyData(array)
```

### Parameter

- `array`
  - : Das {{jsxref("Float32Array")}}, in das die Frequenzbereichsdaten kopiert werden. Für jede stille Probe ist der Wert `-Infinity`.
    Wenn das Array weniger Elemente enthält als [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount), werden überschüssige Elemente verworfen. Wenn es mehr Elemente enthält, als benötigt werden, werden überschüssige Elemente ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
// Float32Array should be the same length as the frequencyBinCount
const myDataArray = new Float32Array(analyser.frequencyBinCount);
// fill the Float32Array with data returned from getFloatFrequencyData()
analyser.getFloatFrequencyData(myDataArray);
```

### Zeichnen eines Spektrums

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) mit einem `AnalyserNode` zu verbinden. Während die Audioausgabe abgespielt wird, sammeln wir die Frequenzdaten wiederholt mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und zeichnen ein "Winamp-Balkendiagramm-Stil" auf ein {{htmlelement("canvas")}} Element.

Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();

// Create audio source
// Here, we use an audio file, but this could also be e.g. microphone input
const audioEle = new Audio();
audioEle.src = "my-audio.mp3"; // Insert file name here
audioEle.autoplay = true;
audioEle.preload = "auto";
const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

// Create analyser node
const analyserNode = audioCtx.createAnalyser();
analyserNode.fftSize = 256;
const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Float32Array(bufferLength);

// Set up audio node network
audioSourceNode.connect(analyserNode);
analyserNode.connect(audioCtx.destination);

// Create 2D canvas
const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const canvasCtx = canvas.getContext("2d");
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

function draw() {
  // Schedule next redraw
  requestAnimationFrame(draw);

  // Get spectrum data
  analyserNode.getFloatFrequencyData(dataArray);

  // Draw black background
  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw spectrum
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let posX = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] + 140) * 2;
    canvasCtx.fillStyle = `rgb(${Math.floor(barHeight + 100)} 50 50)`;
    canvasCtx.fillRect(
      posX,
      canvas.height - barHeight / 2,
      barWidth,
      barHeight / 2,
    );
    posX += barWidth + 1;
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
