---
title: AnalyserNode
slug: Web/API/AnalyserNode
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Web Audio API")}}

Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Informationen zur Frequenz- und Zeitbereichsanalyse bereitzustellen. Es handelt sich um einen {{domxref("AudioNode")}}, der den Audiostream unverändert vom Eingang zum Ausgang weiterleitet, Ihnen jedoch ermöglicht, die erzeugten Daten zu verarbeiten und Audiovisualisierungen zu erstellen.

Ein `AnalyserNode` hat genau einen Eingang und einen Ausgang. Der Knoten funktioniert auch, wenn der Ausgang nicht verbunden ist.

![Ohne den Audiostream zu verändern, ermöglicht der Knoten, die damit verbundenen Frequenz- und Zeitbereichsdaten mithilfe einer FFT zu erhalten.](fttaudiodata_en.svg)

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
      <th scope="row">Kanalanpassungsmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Kanäle</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalspezifikation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}
  - : Erstellt eine neue Instanz eines `AnalyserNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.fftSize")}}
  - : Ein unsigned long-Wert, der die Größe der FFT ([Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)) darstellt, die zur Bestimmung des Frequenzbereichs verwendet wird.
- {{domxref("AnalyserNode.frequencyBinCount")}} {{ReadOnlyInline}}
  - : Ein unsigned long-Wert, der die Hälfte der FFT-Größe beträgt. Dies entspricht im Allgemeinen der Anzahl der Datenwerte, mit denen Sie für die Visualisierung arbeiten müssen.
- {{domxref("AnalyserNode.minDecibels")}}
  - : Ein double-Wert, der den minimalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten zur Umwandlung in unsigned byte-Werte darstellt — im Grunde spezifiziert dies den Mindestwert für den Bereich der Ergebnisse, wenn `getByteFrequencyData()` verwendet wird.
- {{domxref("AnalyserNode.maxDecibels")}}
  - : Ein double-Wert, der den maximalen Leistungswert im Skalierungsbereich für die FFT-Analysedaten zur Umwandlung in unsigned byte-Werte darstellt — im Grunde spezifiziert dies den Höchstwert für den Bereich der Ergebnisse, wenn `getByteFrequencyData()` verwendet wird.
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : Ein double-Wert, der die Glättungskonstante mit dem letzten Analysebild darstellt — im Grunde sorgt dies dafür, dass der Übergang zwischen Werten im Laufe der Zeit flüssiger wird.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : Kopiert die aktuellen Frequenzdaten in ein in ihn übergebenes {{jsxref("Float32Array")}}-Array.
- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : Kopiert die aktuellen Frequenzdaten in ein in ihn übergebenes {{jsxref("Uint8Array")}} (unsigned byte array).
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in ein in ihn übergebenes {{jsxref("Float32Array")}}-Array.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in ein in ihn übergebenes {{jsxref("Uint8Array")}} (unsigned byte array).

## Beispiele

> [!NOTE]
> Weitere Informationen zur Erstellung von Audiovisualisierungen finden Sie im Leitfaden [Visualizations with Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API).

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Nutzung eines {{domxref("AudioContext")}}, um einen `AnalyserNode` zu erstellen, dann {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} und {{htmlelement("canvas")}}, um wiederholt Zeitbereichsdaten zu sammeln und eine "Oszilloskop-Stil" Ausgabe des aktuellen Audioeingangs zu zeichnen. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js Zeilen 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
