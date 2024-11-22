---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert. Diese Art von Filter kann zur Implementierung von Tonsteuerungsgeräten und grafischen Equalizern verwendet werden, und die Filterantwortparameter können spezifisch angegeben werden, sodass der Filter nach Bedarf abgestimmt werden kann. Dieser Artikel zeigt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet eine Wiedergabe/Pause-Taste, die die Audiowiedergabe startet und pausiert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet, um den Klangton zu verändern. Es bietet auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welchen Effekt der IIR-Filter hat.

![Eine Demo mit einer Wiedergabetaste, einem Schalter zum Ein- und Ausschalten eines Filters und einem Liniendiagramm, das die nach dem Anwenden des Filters zurückgegebenen Filterfrequenzen zeigt.](iir-filter-demo.png)

Sie können die [vollständige Demo hier auf CodePen ansehen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es umfasst unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte zu testen.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie erst kürzlich im Vergleich zu einigen der älteren Web Audio API-Funktionen, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Das IIRFilterNode

Die Web Audio API enthält nun ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich vom [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), das wir bereits haben?

Ein IIR-Filter ist ein **Infinite Impulse Response Filter**. Es ist eine von zwei Hauptarten von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Die andere Art ist der FIR — **Finite Impulse Response Filter**. Hier gibt es einen wirklich guten Überblick über [IIR-Filter und FIR-Filter](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Node in der Web Audio API. Wenn Sie diesen Node auswählen, ist die harte Arbeit bereits erledigt. Wenn Sie zum Beispiel niedrigere Frequenzen aus Ihrem Sound filtern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann festlegen, ab welcher Frequenz gefiltert werden soll (oder abgeschnitten wird).

Wenn Sie stattdessen ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt einfach einen vorprogrammierten Typ auszuwählen. Sie können also einen Hochpass-, Tiefpass- oder einen spezielleren Filter erstellen. Und hier ist der IIR-Filter-Node nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits verfügbaren Einstellungen für Ihre Bedürfnisse geeignet ist. Darüber hinaus, wenn Ihr Audio-Graph einen Hochpass- und einen Bandpassfilter benötigte, könnten Sie einfach einen IIR-Filter-Node anstelle der beiden benötigten Biquad-Filter-Nodes verwenden.

Beim IIR-Filter-Node liegt es an Ihnen, die `feedforward`- und `feedback`-Werte festzulegen, die der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es [Informationen zur Mathematik hinter IIR-Filtern hier](https://ece.uccs.edu/~mwickert/ece2610/lecture_notes/ece2610_chap8.pdf). Dies tritt in die Bereiche der Signalverarbeitungstheorie ein — machen Sie sich keine Sorgen, wenn Sie das ansehen und denken, dass es nicht für Sie ist.

Wenn Sie mit dem IIR-Filter-Node spielen und einige Werte benötigen, die Ihnen helfen, gibt es [eine Tabelle mit bereits berechneten Werten hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf die `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Kopf, lassen Sie uns den Code ansehen, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Festlegen unserer IIRFilter-Koeffizienten

Wenn wir einen IIR-Filter erstellen, übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten sind die Werte, die wir beschreiben). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein darf.

Beim Festlegen unserer Koeffizienten dürfen die `feedforward`-Werte nicht alle auf null gesetzt werden, da ansonsten nichts an den Filter gesendet würde. Etwas in dieser Form ist zulässig:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte können nicht mit null beginnen, da ansonsten beim ersten Durchgang nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte basieren auf dem in den [Filtereigenschaften der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilter. Da dieser Filter-Node an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audio-Graphen

Lassen Sie uns unseren Kontext und unseren Filter-Node erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zur Wiedergabe. Wir richten dies mit einer benutzerdefinierten Funktion ein, `playSoundNode()`, die [eine Pufferquelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem bestehenden [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an das Standardziel anschließt, mit der Wiedergabe startet und sie zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Wiedergabetaste gedrückt wird. Der HTML-Bereich für die Wiedergabetaste sieht folgendermaßen aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und der `click`-Ereignislistener beginnt so:

```js
playButton.addEventListener(
  "click",
  () => {
    if (playButton.dataset.playing === "false") {
      srcNode = playSourceNode(audioCtx, sample);
      // …
    }
  },
  false,
);
```

Der Schalter, der den IIR-Filter ein- und ausschaltet, wird in ähnlicher Weise eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler der Schaltfläche verbindet dann den `IIRFilter` mit dem Graphen, zwischen der Quelle und dem Ziel:

```js
filterButton.addEventListener(
  "click",
  () => {
    if (filterButton.dataset.filteron === "false") {
      srcNode.disconnect(audioCtx.destination);
      srcNode.connect(iirFilter).connect(audioCtx.destination);
      // …
    }
  },
  false,
);
```

### Frequenzantwort

Wir haben nur eine Methode verfügbar bei [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des in den Filter einfließenden Audios geschieht.

Lassen Sie uns ein Frequenzdiagramm des von uns erstellten Filters mit den Daten zeichnen, die wir aus dieser Methode erhalten.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Amplitudenantwort und Phasenantwort erhalten möchten, und zwei leere Arrays zur Aufnahme der Daten. Alle drei dieser Arrays müssen von Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) und alle von derselben Größe sein.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Lassen Sie uns unser erstes Array mit Frequenzwerten füllen, für die wir Daten zurückerhalten möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten eine lineare Annäherung wählen, aber es ist viel besser, wenn es um Frequenzen geht, einen logarithmischen Ansatz zu verfolgen. Lassen Sie uns also unser Array mit Frequenzwerten füllen, die weiter hinten in den Array-Elementen größer werden.

Nun lassen Sie uns unsere Antwortdaten erhalten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filterfrequenzdiagramm zu zeichnen. Dies werden wir auf einem 2D-Canvas-Kontext tun.

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

Das war's für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden, und Ihnen geholfen haben zu verstehen, wofür sie nützlich ist und wie sie funktioniert.
