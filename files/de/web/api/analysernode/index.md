---
title: AnalyserNode
slug: Web/API/AnalyserNode
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Web Audio API")}}

Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyse-Informationen bereitzustellen. Es handelt sich um einen [`AudioNode`](/de/docs/Web/API/AudioNode), der den Audiostream unverändert vom Eingang zum Ausgang weiterleitet, Ihnen aber ermöglicht, die generierten Daten zu verarbeiten und Audio-Visualisierungen zu erstellen.

Ein `AnalyserNode` hat genau einen Eingang und einen Ausgang. Der Knoten funktioniert auch, wenn der Ausgang nicht verbunden ist.

![Ohne den Audiostream zu ändern, ermöglicht der Knoten das Abrufen der Frequenz- und Zeitbereichsdaten, die mit ihm verbunden sind, unter Verwendung einer FFT.](fttaudiodata_en.svg)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code> (kann aber unverbunden bleiben)</td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
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
  - : Ein Wert vom Typ unsigned long, der die Größe der FFT ([Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)) darstellt, die zur Bestimmung des Frequenzbereichs verwendet wird.
- [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) {{ReadOnlyInline}}
  - : Ein Wert vom Typ unsigned long, der halb so groß ist wie die FFT-Größe. Dies entspricht im Allgemeinen der Anzahl der Datenwerte, mit denen Sie für die Visualisierung arbeiten können.
- [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels)
  - : Ein double-Wert, der den minimalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten darstellt, zur Umwandlung in unsigned Byte-Werte — im Wesentlichen gibt dies den Mindestwert für den Bereich der Ergebnisse bei Verwendung von `getByteFrequencyData()` an.
- [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels)
  - : Ein double-Wert, der den maximalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten darstellt, zur Umwandlung in unsigned Byte-Werte — im Wesentlichen gibt dies den Höchstwert für den Bereich der Ergebnisse bei Verwendung von `getByteFrequencyData()` an.
- [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant)
  - : Ein double-Wert, der die Durchschnittskonstante mit dem letzten Analyse-Frame darstellt — im Wesentlichen macht es die Übergänge zwischen den Werten über die Zeit glatter.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Float32Array")}}-Array.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (unsigned Byte-Array).
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in ein übergebenes {{jsxref("Float32Array")}}-Array.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in ein übergebenes {{jsxref("Uint8Array")}} (unsigned Byte-Array).

## Beispiele

> [!NOTE]
> Siehe den Leitfaden [Visualisations with Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) für weitere Informationen zur Erstellung von Audio-Visualisierungen.

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `AnalyserNode` zu erstellen, dann [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) und {{htmlelement("canvas")}}, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-ähnliche" Ausgabe des aktuellen Audio-Eingangs zu zeichnen. Für vollständigere Anwendungsbeispiele/informationen schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();

// …

const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Connect the source to be analysed
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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
