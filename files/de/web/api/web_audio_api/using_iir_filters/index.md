---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://de.wikipedia.org/wiki/Infinite_Impulse_Response) (IIR)-Filter implementiert. Dieser Filtertyp kann zur Implementierung von Klangregelgeräten und grafischen Equalizern verwendet werden, und die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf angepasst werden kann. Dieser Artikel beleuchtet die Implementierung und Verwendung eines solchen Filters in einem einfachen Beispiel.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet einen Abspielen/Pause-Button, der die Audiowiedergabe startet und pausiert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet, wodurch der Klang verändert wird. Es stellt auch eine Leinwand bereit, auf die die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welche Wirkung der IIR-Filter hat.

![Eine Demo mit einer Abspieltaste, einem Schalter zum Ein- und Ausschalten eines Filters und einem Liniendiagramm, das die Filterfrequenzen zeigt, die nach Anwendung des Filters zurückgegeben wurden.](iir-filter-demo.png)

Sie können die [vollständige Demo live ansehen](https://mdn.github.io/webaudio-examples/iirfilter-node/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält verschiedene Koeffizientenwerte für unterschiedliche Tiefpassfrequenzen — Sie können den Wert der Konstante `filterNumber` auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie später als einige der langjährigen Web Audio API-Funktionen, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Das IIRFilterNode

Die Web Audio API enthält jetzt ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich von dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), das wir bereits haben?

Ein IIR-Filter ist ein **Infinite Impulse Response Filter**. Es ist einer von zwei Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response Filter**. Eine wirklich gute Übersicht zu [IIF-Filtern und FIR-Filtern finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Knoten in der Web Audio API. Wenn Sie diesen Knoten wählen, ist die harte Arbeit bereits erledigt. Wenn Sie beispielsweise niedrigere Frequenzen aus Ihrem Klang herausfiltern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann angeben, ab welcher Frequenz gefiltert werden soll (oder abgeschnitten).

Wenn Sie anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen individuelleren Filter erstellen. Hier ist der IIR-Filter-Knoten nützlich — Sie können Ihren eigenen erstellen, wenn keiner der verfügbaren Einstellungen Ihren Anforderungen entspricht. Wenn Ihr Audiograph beispielsweise einen Hochpass- und einen Bandpass-Filter benötigte, könnten Sie nur einen IIR-Filterknoten anstelle der beiden sonst benötigten Biquad-Filterknoten verwenden.

Mit dem IIR-Filterknoten liegt es an Ihnen, die erforderlichen `feedforward`- und `feedback`-Werte des Filters festzulegen — dies bestimmt die Eigenschaften des Filters. Der Nachteil besteht darin, dass dazu einige komplexe mathematische Berechnungen erforderlich sind.

Wenn Sie mehr erfahren möchten, gibt es [hier Informationen über die Mathematik hinter IIR-Filtern](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies führt in die Bereiche der Signalverarbeitungstheorie ein — machen Sie sich keine Sorgen, wenn Sie es sich ansehen und denken, dass es nichts für Sie ist.

Wenn Sie mit dem IIR-Filterknoten experimentieren möchten und einige Werte benötigen, die Ihnen dabei helfen, gibt es [hier eine Tabelle bereits berechneter Werte](https://www.dspguide.com/CH20.PDF); auf Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist ebenfalls eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung erfahren möchten.

Mit all dem im Hinterkopf, werfen wir einen Blick auf den Code, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Festlegen unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten beschreiben die Werte). Beide Parameter sind Arrays, die jeweils nicht größer als 20 Elemente sein dürfen.

Beim Festlegen unserer Koeffizienten dürfen die `feedforward`-Werte nicht alle auf null gesetzt sein, da andernfalls nichts an den Filter gesendet würde. Etwas in dieser Art ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte dürfen nicht mit null beginnen, da anderenfalls beim ersten Durchlauf nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte sind basierend auf dem Tiefpassfilter berechnet, der in den [Filtereigenschaften der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegeben ist. Da dieser Filterknoten an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audiograph

Lassen Sie uns unseren Kontext und unseren Filterknoten erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zur Wiedergabe. Wir richten dies mit einer benutzerdefinierten Funktion, `playSoundNode()`, ein, die [eine Pufferquelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an das Standardziel anschließt, sie abspielt und zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Abspieltaste gedrückt wird. Das HTML der Abspieltaste sieht folgendermaßen aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und der `click`-Event-Listener beginnt so:

```js
playButton.addEventListener("click", () => {
  if (playButton.dataset.playing === "false") {
    srcNode = playSourceNode(audioCtx, sample);
    // …
  }
});
```

Der Schalter, der den IIR-Filter ein- und ausschaltet, ist auf ähnliche Weise eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler der Filtertaste verbindet dann den `IIRFilter` mit dem Graph zwischen der Quelle und dem Ziel:

```js
filterButton.addEventListener("click", () => {
  if (filterButton.dataset.filteron === "false") {
    srcNode.disconnect(audioCtx.destination);
    srcNode.connect(iirFilter).connect(audioCtx.destination);
    // …
  }
});
```

### Frequenzantwort

Wir haben nur eine Methode bei [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen verfügbar, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des Audios geschieht, die an den Filter weitergeleitet werden.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten erstellt haben, die wir von dieser Methode zurückbekommen.

Wir müssen drei Arrays erstellen. Eins mit Frequenzwerten, für die wir die Magnitude- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle die gleiche Größe haben.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Lassen Sie uns unser erstes Array mit den Frequenzwerten füllen, für die wir Daten zurückhaben möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz wählen, aber es ist weitaus besser, bei der Arbeit mit Frequenzen einen logarithmischen Ansatz zu verwenden, also lassen Sie uns unser Array mit Frequenzwerten füllen, die weiter hinten in den Array-Elementen größer werden.

Jetzt holen wir unsere Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filterfrequenzdiagramm zu zeichnen. Wir werden dies auf einem 2D-Canvas-Kontext tun.

```js
// Create a canvas element and append it to our DOM
const canvasContainer = document.querySelector(".filter-graph");
const canvasEl = document.createElement("canvas");
canvasContainer.appendChild(canvasEl);

// Set 2d context and set dimensions
const canvasCtx = canvasEl.getContext("2d");
const width = canvasContainer.offsetWidth;
const height = canvasContainer.offsetHeight;
canvasEl.width = width;
canvasEl.height = height;

// Set background fill
canvasCtx.fillStyle = "white";
canvasCtx.fillRect(0, 0, width, height);

// Set up some spacing based on size
const spacing = width / 16;
const fontSize = Math.floor(spacing / 1.5);

// Draw our axis
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "grey";

canvasCtx.beginPath();
canvasCtx.moveTo(spacing, spacing);
canvasCtx.lineTo(spacing, height - spacing);
canvasCtx.lineTo(width - spacing, height - spacing);
canvasCtx.stroke();

// Axis is gain by frequency -> make labels
canvasCtx.font = `${fontSize}px sans-serif`;
canvasCtx.fillStyle = "grey";
canvasCtx.fillText("1", spacing - fontSize, spacing + fontSize);
canvasCtx.fillText("g", spacing - fontSize, (height - spacing + fontSize) / 2);
canvasCtx.fillText("0", spacing - fontSize, height - spacing + fontSize);
canvasCtx.fillText("Hz", width / 2, height - spacing + fontSize);
canvasCtx.fillText("20k", width - spacing, height - spacing + fontSize);

// Loop over our magnitude response data and plot our filter
canvasCtx.beginPath();

magResponseOutput.forEach((magResponseData, i) => {
  if (i === 0) {
    canvasCtx.moveTo(spacing, height - magResponseData * 100 - spacing);
  } else {
    canvasCtx.lineTo(
      (width / totalArrayItems) * i,
      height - magResponseData * 100 - spacing,
    );
  }
});

canvasCtx.stroke();
```

## Zusammenfassung

Das war's für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden und Ihnen helfen zu verstehen, wofür es nützlich ist und wie es funktioniert.
