---
title: Verwenden von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 4ac938c14e06a9cf0e322fc614576f0f9819e674
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://de.wikipedia.org/wiki/Infinite_Impulse_Response) (IIR)-Filter implementiert; dieser Filtertyp kann zur Implementierung von Klangregelgeräten und grafischen Equalizern verwendet werden, und die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf abgestimmt werden kann. Dieser Artikel erklärt, wie man einen solchen implementiert und an einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet eine Abspieltaste/Pausentaste, die das Abspielen und Anhalten der Audiowiedergabe steuert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet, um den Klang zu verändern. Außerdem gibt es eine Leinwand, auf der die Frequenzantwort des Audios dargestellt wird, sodass Sie sehen können, welchen Effekt der IIR-Filter hat.

![Ein Demo mit einer Abspieltaste und einem Schalter, um einen Filter ein- und auszuschalten, und einem Liniendiagramm, das die Filterfrequenzen zeigt, die nach Anwendung des Filters zurückgegeben werden.](iir-filter-demo.png)

Sie können sich das [vollständige Demo live anschauen](https://mdn.github.io/webaudio-examples/iirfilter-node/). Sehen Sie sich auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node) an. Es enthält einige verschiedene Koeffizientenwerte für unterschiedliche Tiefpassfrequenzen — Sie können den Wert der Konstante `filterNumber` auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie erst kürzlich im Vergleich zu einigen länger bestehenden Web Audio API-Features wie [Biquad-Filtern](/de/docs/Web/API/BiquadFilterNode) implementiert wurden.

## Das IIRFilterNode

Die Web Audio API beinhaltet nun ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich von dem bereits vorhandenen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)?

Ein IIR-Filter ist ein **infinite impulse response filter**. Es ist einer von zwei primären Filtertypen, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist der FIR — **finite impulse response filter**. Eine wirklich gute Übersicht über [IIR-Filter und FIR-Filter finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Node in der Web Audio API. Wenn Sie diesen Node wählen, ist die harte Arbeit bereits für Sie erledigt. Wenn Sie beispielsweise niedrigere Frequenzen aus Ihrem Klang herausfiltern möchten, können Sie den [Type](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann auswählen, ab welcher Frequenz gefiltert werden soll (oder abgeschnitten werden soll).

Wenn Sie anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen maßgeschneiderteren erstellen. Und hier ist der IIR-Filter Node nützlich — Sie können Ihren eigenen erstellen, falls keine der bereits verfügbaren Einstellungen dem entspricht, was Sie möchten. Wenn Ihr Audiograf beispielsweise einen Hochpass- und einen Bandpassfilter benötigt, könnten Sie einfach einen einzigen IIR-Filter Node anstelle der zwei benötigten Biquad-Filter Nodes verwenden.

Beim IIR-Filter Node müssen Sie die `feedforward`- und `feedback`-Werte festlegen, die der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik involviert.

Wenn Sie mehr lernen möchten, gibt es [Informationen über die Mathematik hinter IIR-Filtern hier](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies führt in das Gebiet der Signalverarbeitungstheorie — keine Sorge, wenn Sie es sich ansehen und das Gefühl haben, dass es nichts für Sie ist.

Wenn Sie mit dem IIR-Filter Node herumspielen und einige Werte zur Unterstützung benötigen, gibt es [eine Tabelle mit bereits berechneten Werten hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Kopf, schauen wir uns den Code an, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Festlegen unserer IIR-Filter-Koeffizienten

Beim Erstellen eines IIR-Filters geben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen an (Koeffizienten ist, wie wir die Werte beschreiben). Beide dieser Parameter sind Arrays, von denen keines mehr als 20 Elemente haben darf.

Wenn wir unsere Koeffizienten festlegen, können die `feedforward`-Werte nicht alle auf Null gesetzt werden, sonst würde nichts zum Filter geschickt. Etwas wie das hier ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte können nicht mit Null beginnen, sonst würde beim ersten Durchgang nichts zurückgesendet werden:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden basierend auf dem in den [Filtercharakteristiken der Web Audio API Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilter berechnet. Da dieser Filter Node an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwenden eines IIR-Filters in einem Audiograf

Lassen Sie uns unseren Kontext und unseren Filternode erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zum Abspielen. Wir richten dies mit einer benutzerdefinierten Funktion `playSoundNode()` ein, die [eine Buffer-Quelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem bestehenden [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), diese an das Standardziel anhängt, mit der Wiedergabe beginnt und sie zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Abspieltaste gedrückt wird. Die HTML für die Abspieltaste sieht so aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und der `click`-Event-Listener beginnt wie folgt:

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

Der Schalter, der den IIR-Filter ein- und ausschaltet, wird auf ähnliche Weise eingerichtet. Zunächst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler der Filtertaste verbindet dann den `IIRFilter` mit dem Graphen, zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode auf [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen zur Verfügung, `getFrequencyResponse()`, diese erlaubt es uns zu sehen, was mit den Frequenzen des in den Filter eingespeisten Audios geschieht.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten erstellen, die wir aus dieser Methode zurückerhalten.

Wir müssen drei Arrays erstellen. Eines für Frequenzwerte, für die wir die Magnituden- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle von der gleichen Größe.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Lassen Sie uns unser erstes Array mit den Frequenzwerten füllen, für die wir Daten zurückerhalten möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu nehmen, also füllen wir unser Array mit Frequenzwerten, die weiter hinten im Array größer werden.

Jetzt holen wir unsere Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filterfrequenzdiagramm zu zeichnen. Wir tun dies auf einem 2D-Canvas-Kontext.

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

Das war es für unser IIR-Filter-Demo. Dies sollte Ihnen gezeigt haben, wie man die Grundlagen verwendet, und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
