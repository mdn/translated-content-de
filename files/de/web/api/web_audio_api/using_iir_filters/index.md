---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der eine allgemeine [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter implementiert. Dieser Filtertyp kann verwendet werden, um Tonsteuergeräte und grafische Equalizer zu implementieren, und die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf angepasst werden kann. Dieser Artikel behandelt, wie man einen solchen Filter implementiert und ihn in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet einen Wiedergabe-/Pause-Knopf, der die Audiowiedergabe startet und pausiert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet und damit den Klang verändert. Es gibt auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, so dass Sie sehen können, welchen Effekt der IIR-Filter hat.

![Ein Demo mit einem Abspielknopf und einem Schalter, um einen Filter an- und auszuschalten, sowie einem Liniendiagramm, das die Frequenzen des Filters zeigt, nachdem der Filter angewendet wurde.](iir-filter-demo.png)

Sie können sich die [vollständige Demo live ansehen](https://mdn.github.io/webaudio-examples/iirfilter-node/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstanten auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte zu überprüfen.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie erst kürzlich im Vergleich zu einigen der länger bestehenden Funktionen der Web Audio API, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Das IIRFilterNode

Die Web Audio API enthält jetzt ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich von dem bereits vorhandenen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)?

Ein IIR-Filter ist ein **infinite impulse response Filter**. Es ist einer von zwei Hauptfiltertypen, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **finite impulse response Filter**. Eine wirklich gute Übersicht zu [IIR-Filtern und FIR-Filtern finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist eigentlich ein _spezifischer Typ_ eines infinite impulse response Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Node in der Web Audio API. Wenn Sie diesen Node wählen, ist die harte Arbeit bereits für Sie erledigt. Wenn Sie beispielsweise niedrigere Frequenzen aus Ihrem Klang filtern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann wählen, welche Frequenz gefiltert werden soll (oder abgeschnitten werden soll).

Wenn Sie anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen individuelleren Filter erstellen. Und hier ist der IIR-Filter-Node nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits verfügbaren Einstellungen für das, was Sie wollen, geeignet ist. Außerdem, wenn Ihr Audio-Graph einen Hochpass- und einen Bandpassfilter benötigt, könnten Sie einfach einen IIR-Filter-Node anstelle der zwei Biquad-Filter-Nodes verwenden, die Sie sonst dafür benötigen würden.

Beim IIR-Filter-Node liegt es an Ihnen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es einige [Informationen zur Mathematik hinter IIR-Filtern hier](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies ist der Bereich der Signalverarbeitungstheorie — machen Sie sich keine Sorgen, wenn Sie es sich ansehen und das Gefühl haben, es sei nichts für Sie.

Wenn Sie mit dem IIR-Filter-Node spielen möchten und einige Werte benötigen, die Ihnen helfen, gibt es [eine Tabelle mit bereits berechneten Werten hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, werfen wir einen Blick auf den Code, um mit der Web Audio API einen IIR-Filter zu erstellen.

## Unsere IIRFilter-Koeffizienten setzen

Bei der Erstellung eines IIR-Filters geben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen an (Koeffizienten beschreiben die Werte). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein kann.

Beim Setzen unserer Koeffizienten dürfen die `feedforward`-Werte nicht alle auf Null gesetzt werden, andernfalls würde nichts zum Filter gesendet werden. Etwas wie dies ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte dürfen nicht mit Null beginnen, andernfalls würde im ersten Durchlauf nichts zurückgesendet werden:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden basierend auf dem Tiefpassfilter berechnet, der in den [Filtereigenschaften der Spezifikation der Web Audio API](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegeben ist. Wenn dieser Filter-Node mehr Popularität erlangt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audio-Graph

Erstellen wir unseren Kontext und unseren Filter-Node:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zum Abspielen. Wir richten dies mit einer benutzerdefinierten Funktion `playSoundNode()` ein, die [eine Buffer-Quelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an das Standardziel anschließt, sie startet und zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn der Wiedergabe-Knopf gedrückt wird. Der HTML-Code des Wiedergabe-Knopfs sieht folgendermaßen aus:

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
playButton.addEventListener("click", () => {
  if (playButton.dataset.playing === "false") {
    srcNode = playSourceNode(audioCtx, sample);
    // …
  }
});
```

Der Umschalter, der den IIR-Filter ein- und ausschaltet, wird ähnlich eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-labelledby="label"
  disabled></button>
```

Der `click`-Handler des Filterknopfs verbindet dann das `IIRFilter` mit dem Graphen, zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode bei [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen verfügbar, `getFrequencyResponse()`, diese erlaubt uns zu sehen, was mit den Frequenzen des in den Filter eingegebenen Audios passiert.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, das wir mit den Daten erstellen, die wir von dieser Methode zurückbekommen.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Magnitude-Response und Phase-Response erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle müssen die gleiche Größe haben.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Füllen wir unser erstes Array mit Frequenzwerten, für die wir Daten erhalten möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu wählen. Füllen wir also unser Array mit Frequenzwerten, die sich weiter im Array vergrößern.

Jetzt holen wir uns unsere Antwortdaten:

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

Das war es für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden können, und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
