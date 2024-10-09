---
title: AnalyserNode
slug: Web/API/AnalyserNode
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Web Audio API")}}

Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Informationen zur Frequenz- und Zeitbereichsanalyse bereitzustellen. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der den Audiostream unverändert vom Eingang zum Ausgang durchlaufen lässt, es Ihnen jedoch ermöglicht, die erzeugten Daten zu nutzen, zu verarbeiten und Audio-Visualisierungen zu erstellen.

Ein `AnalyserNode` hat genau einen Eingang und einen Ausgang. Der Knoten funktioniert auch, wenn der Ausgang nicht verbunden ist.

![Ohne den Audiostream zu modifizieren, ermöglicht der Knoten die Erfassung von Frequenz- und Zeitbereichsdaten, die damit in Verbindung stehen, unter Verwendung einer FFT.](fttaudiodata_en.svg)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code> (kann jedoch nicht verbunden bleiben)</td>
    </tr>
    <tr>
      <th scope="row">Channel-Count-Modus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Anzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`AnalyserNode()`](/de/docs/Web/API/AnalyserNode/AnalyserNode)
  - : Erstellt eine neue Instanz eines `AnalyserNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize)
  - : Ein unsigned long-Wert, der die Größe der FFT ([Fast Fourier Transform](https://de.wikipedia.org/wiki/Schnelle_Fourier-Transformation)) darstellt, die verwendet wird, um den Frequenzbereich zu bestimmen.
- [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) {{ReadOnlyInline}}
  - : Ein unsigned long-Wert, der die Hälfte der FFT-Größe beträgt. Dies entspricht im Allgemeinen der Anzahl der Datenwerte, die Sie für die Visualisierung verwenden können.
- [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels)
  - : Ein double-Wert, der den minimalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten darstellt, zur Umwandlung in unsigned Byte-Werte — im Grunde gibt dies den Mindestwert für den Bereich der Ergebnisse an, wenn `getByteFrequencyData()` verwendet wird.
- [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels)
  - : Ein double-Wert, der den maximalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten darstellt, zur Umwandlung in unsigned Byte-Werte — im Grunde gibt dies den Maximalwert für den Bereich der Ergebnisse an, wenn `getByteFrequencyData()` verwendet wird.
- [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant)
  - : Ein double-Wert, der die Mittelungskonstante mit dem letzten Analyse-Frame darstellt — im Wesentlichen wird der Übergang zwischen Werten über die Zeit sanfter gestaltet.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Float32Array")}}-Array, das an die Methode übergeben wird.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Uint8Array")}} (Unsigned Byte-Array), das an die Methode übergeben wird.
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein {{jsxref("Float32Array")}}-Array, das an die Methode übergeben wird.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein {{jsxref("Uint8Array")}} (Unsigned Byte-Array), das an die Methode übergeben wird.

## Beispiele

> [!NOTE]
> Siehe den Leitfaden [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) für weitere Informationen zur Erstellung von Audiovisualisierungen.

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Nutzung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, gefolgt von einer Nutzung von [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und einem {{htmlelement("canvas")}}, um auf wiederholende Weise Zeitbereichsdaten zu sammeln und eine "Oszilloskop-ähnliche" Ausgabe des aktuellen Audioeingangs zu zeichnen.
Für vollständigere angewandte Beispiele/Informationen besuchen Sie unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo (siehe [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
