---
title: "AnalyserNode: smoothingTimeConstant-Eigenschaft"
short-title: smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`smoothingTimeConstant`**-Eigenschaft der {{ domxref("AnalyserNode") }}-Schnittstelle ist ein Double-Wert, der die Mittelungskonstante mit dem letzten Analyse-Frame darstellt. Es handelt sich im Wesentlichen um einen Durchschnitt zwischen dem aktuellen Puffer und dem letzten Puffer, den der `AnalyserNode` verarbeitet hat, und führt zu einer viel glatteren Veränderung der Werte im Laufe der Zeit.

## Wert

Ein Double innerhalb des Bereichs von `0` bis `1` (`0` bedeutet keine Zeitmittelung). Der Standardwert ist `0.8`.

Wenn 0 festgelegt ist, wird keine Mittelung durchgeführt, während ein Wert von 1 bedeutet, "den vorherigen und aktuellen Puffer beim Berechnen des Wertes stark zu überlappen", was im Wesentlichen die Änderungen über {{domxref("AnalyserNode.getFloatFrequencyData")}}/{{domxref("AnalyserNode.getByteFrequencyData")}}-Aufrufe glättet.

In technischen Begriffen wenden wir ein [Blackman-Fenster](https://webaudio.github.io/web-audio-api/#blackman-window) an und glätten die Werte über die Zeit. Der Standardwert ist für die meisten Fälle ausreichend.

> [!NOTE]
> Wird ein Wert außerhalb des Bereichs 0–1 festgelegt, wird eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um einen `AnalyserNode` zu erstellen, dann {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} und {{htmlelement("canvas")}}, um wiederholt Frequenzdaten zu sammeln und eine "Winamp-Balkendiagramm-ähnliche" Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen, schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

Wenn Sie neugierig auf den Effekt sind, den `smoothingTimeConstant()` hat, versuchen Sie, das obige Beispiel zu klonen und `analyser.smoothingTimeConstant = 0;` stattdessen einzustellen. Sie werden feststellen, dass die Werteänderungen viel drastischer sind.

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

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

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
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
