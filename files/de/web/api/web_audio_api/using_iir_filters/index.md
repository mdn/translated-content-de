---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{DefaultAPISidebar("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter implementiert. Dieser Filtertyp kann zur Implementierung von Klangregelgeräten und grafischen Equalizern verwendet werden. Die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf abgestimmt werden kann. Dieser Artikel erklärt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet eine Wiedergabe-/Pause-Schaltfläche, die die Audiowiedergabe startet und pausiert, und einen Schalter, der einen IIR-Filter ein- und ausschaltet und den Klangton verändert. Es gibt auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, damit Sie sehen können, welchen Effekt der IIR-Filter hat.

![Ein Demo mit einer Wiedergabeschaltfläche und einem Schalter zum Ein- und Ausschalten eines Filters sowie einem Liniendiagramm, das die zurückgegebenen Filterfrequenzen nach Anwendung des Filters anzeigt.](iir-filter-demo.png)

Sie können sich das [vollständige Live-Demo ansehen](https://mdn.github.io/webaudio-examples/iirfilter-node/). Sehen Sie sich auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node) an. Es umfasst einige verschiedene Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte zu überprüfen.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden gut in modernen Browsern unterstützt, obwohl sie im Vergleich zu einigen älteren Web Audio API-Funktionen, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), erst kürzlich implementiert wurden.

## Der IIRFilterNode

Die Web Audio API bietet nun eine [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Schnittstelle. Aber was ist das und wie unterscheidet es sich von dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), den wir bereits haben?

Ein IIR-Filter ist ein **Infinite Impulse Response Filter**. Es ist einer von zwei Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response Filter**. Eine wirklich gute Übersicht über [IIF-Filter und FIR-Filter finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist eigentlich ein _spezifischer Typ_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Knoten in der Web Audio API. Wenn Sie diesen Knoten wählen, ist die harte Arbeit bereits erledigt. Wenn Sie zum Beispiel niedrigere Frequenzen aus Ihrem Klang herausfiltern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann festlegen, welche Frequenz gefiltert werden soll (oder abgeschnitten werden soll).

Wenn Sie einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. Sie können also einen Hochpassfilter oder einen Tiefpassfilter oder einen individuelleren erstellen. Und hier ist der IIR-Filterknoten nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits verfügbaren Einstellungen für das, was Sie möchten, geeignet ist. Darüber hinaus könnten Sie, wenn Ihr Audiograph sowohl einen Hochpass- als auch einen Bandpassfilter benötigt, einfach einen IIR-Filterknoten anstelle der zwei Biquad-Filterknoten verwenden, die Sie hierfür sonst benötigen würden.

Mit dem IIR-Filterknoten liegt es an Ihnen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies eine komplexe Mathematik beinhaltet.

Wenn Sie mehr lernen möchten, gibt es einige [Informationen über die Mathematik hinter IIR-Filtern hier](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies betritt die Bereiche der Signalverarbeitungstheorie — machen Sie sich keine Sorgen, wenn Sie darauf schauen und fühlen, dass es nichts für Sie ist.

Falls Sie mit dem IIR-Filterknoten experimentieren möchten und einige Werte benötigen, die Ihnen auf dem Weg helfen, gibt es [eine Tabelle mit bereits berechneten Werten hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist ebenfalls eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, schauen wir uns den Code an, um mit der Web Audio API einen IIR-Filter zu erstellen.

## Festlegung unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten beschreiben die Werte). Beide dieser Parameter sind Arrays, keines davon kann größer als 20 Elemente sein.

Bei der Festlegung unserer Koeffizienten müssen die `feedforward`-Werte nicht alle auf null gesetzt sein, sonst würde nichts an den Filter gesendet werden. Etwas wie dies ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte können nicht mit null beginnen, da sonst beim ersten Durchlauf nichts zurückgesendet würde:

```js
const feedBack = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden basierend auf dem Tiefpassfilter berechnet, der in den [Filtermerkmalen der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegeben ist. Da dieser Filterknoten an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audiographen

Lassen Sie uns unseren Kontext und unseren Filterknoten erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zur Wiedergabe. Wir richten dies mit einer benutzerdefinierten Funktion, `playSoundNode()`, ein, die [eine Buffer-Quelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an das Standardziel anhängt, sie zu spielen beginnt und sie zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Wiedergabeschaltfläche gedrückt wird. Das HTML der Wiedergabeschaltfläche sieht so aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und der `click`-Ereignis-Listener beginnt so:

```js
playButton.addEventListener("click", () => {
  if (playButton.dataset.playing === "false") {
    srcNode = playSourceNode(audioCtx, sample);
    // …
  }
});
```

Der Schalter, der den IIR-Filter ein- und ausschaltet, wird ähnlich eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-labelledby="label"
  disabled></button>
```

Der `click`-Handler der Filter-Schaltfläche verbindet dann den `IIRFilter` mit dem Graph, zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode auf [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen verfügbar, `getFrequencyResponse()`, die es uns ermöglicht, zu sehen, was mit den Frequenzen des in den Filter eingespeisten Audios passiert.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den zurückgegebenen Daten aus dieser Methode erstellt haben.

Wir müssen drei Arrays erstellen. Eines für die Frequenzwerte, für die wir die Amplituden- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle müssen die gleiche Größe haben.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Füllen wir unser erstes Array mit Frequenzwerten, für die Daten zurückgegeben werden sollen:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, bei der Arbeit mit Frequenzen einen logischen Ansatz zu verfolgen, also füllen wir unser Array mit Frequenzwerten, die sich weiter hinten in den Array-Elementen vergrößern.

Jetzt holen wir uns unsere Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filter-Frequenzdiagramm zu zeichnen. Wir tun dies auf einem 2D-Leinwandkontext.

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

Das war's für unser IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie die Grundlagen zu verwenden sind, und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
