---
title: AnalyserNode
slug: Web/API/AnalyserNode
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Web Audio API")}}

Das **`AnalyserNode`** Interface repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitzustellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das den Audiostrom unverändert vom Eingang zum Ausgang durchlässt, aber es erlaubt Ihnen, die erzeugten Daten zu verarbeiten und Audio-Visualisierungen zu erstellen.

Ein `AnalyserNode` hat genau einen Eingang und einen Ausgang. Der Knoten funktioniert auch, wenn der Ausgang nicht verbunden ist.

![Ohne den Audiostrom zu modifizieren, ermöglicht der Knoten Ihnen, die Frequenz- und Zeitbereichsdaten zu erhalten, die damit assoziiert sind, unter Verwendung eines FFT.](fttaudiodata_en.svg)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code> (kann jedoch unverbunden bleiben)</td>
    </tr>
    <tr>
      <th scope="row">Kanalzählsmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`AnalyserNode()`](/de/docs/Web/API/AnalyserNode/AnalyserNode)
  - : Erstellt eine neue Instanz eines `AnalyserNode` Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternknoten, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize)
  - : Ein Wert vom Typ unsigned long, der die Größe der FFT ([Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)) darstellt, die verwendet wird, um den Frequenzbereich zu bestimmen.
- [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) {{ReadOnlyInline}}
  - : Ein Wert vom Typ unsigned long, der halb so groß ist wie die FFT-Größe. Dies entspricht im Allgemeinen der Anzahl der Datenwerte, mit denen Sie zur Visualisierung spielen können.
- [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels)
  - : Ein Wert vom Typ double, der den minimalen Leistungswert im Skalierungsbereich für die FFT-Analyzedaten darstellt, zur Umwandlung in unvorzeichenbehaftete Byte-Werte — im Wesentlichen gibt dies den minimalen Wert für den Ergebnisbereich an, wenn `getByteFrequencyData()` verwendet wird.
- [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels)
  - : Ein Wert vom Typ double, der den maximalen Leistungswert im Skalierungsbereich für die FFT-Analyzedaten darstellt, zur Umwandlung in unvorzeichenbehaftete Byte-Werte — im Wesentlichen gibt dies den maximalen Wert für den Ergebnisbereich an, wenn `getByteFrequencyData()` verwendet wird.
- [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant)
  - : Ein Wert vom Typ double, der die Mittelungskonstante mit dem letzten Analyse-Frame darstellt — im Wesentlichen macht es den Übergang zwischen den Werten im Laufe der Zeit glatter.

## Instanzmethoden

_Erbt Methoden von seinem Elternknoten, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Float32Array")}} Array.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (unvorzeichenbehaftetes Byte-Array).
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein übergebenes {{jsxref("Float32Array")}} Array.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein übergebenes {{jsxref("Uint8Array")}} (unvorzeichenbehaftetes Byte-Array).

## Beispiele

> [!NOTE]
> Siehe den Leitfaden [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) für weitere Informationen zur Erstellung von Audio-Visualisierungen.

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Nutzung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um ein `AnalyserNode` zu erstellen, dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um Zeitbereichsdaten wiederholt zu sammeln und eine "Oszilloskop-ähnliche" Ausgabe des aktuellen Audioeingangs zu zeichnen.
Für umfassendere angewandte Beispiele/Informationen, schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();

// …

const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Connect the source to be analyzed
source.connect(analyser);

// Get a canvas defined with ID "oscilloscope"
const canvas = document.getElementById("oscilloscope");
const canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source

function draw() {
  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";

  canvasCtx.beginPath();

  const sliceWidth = (canvas.width * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * canvas.height) / 2;

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

- [Die Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
