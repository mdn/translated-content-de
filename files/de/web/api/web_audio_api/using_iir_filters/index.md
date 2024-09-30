---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert; dieser Filtertyp kann zur Implementierung von Klangregelgeräten und grafischen Equalizern verwendet werden. Die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf angepasst werden kann. Dieser Artikel zeigt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet einen Abspiel-/Pause-Button, der die Audiowiedergabe startet und pausiert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet und dadurch den Klang verändert. Es gibt auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welche Wirkung der IIR-Filter hat.

![Eine Demo mit einem Abspielknopf und einem Schalter, um einen Filter ein- und auszuschalten, sowie einem Liniendiagramm, das die Filterfrequenzen zeigt, die nach Anwendung des Filters zurückgegeben werden.](iir-filter-demo.png)

Sie können sich die [vollständige Demo hier auf Codepen anschauen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie erst kürzlich im Vergleich zu einigen der älteren Features der Web Audio API, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Der IIRFilterNode

Die Web Audio API enthält jetzt eine [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Schnittstelle. Aber was ist das und wie unterscheidet es sich von dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), den wir bereits kennen?

Ein IIR-Filter ist ein **Infinite Impulse Response-Filter**. Es ist einer von zwei Hauptfiltertypen, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response-Filter**. Es gibt eine wirklich gute Übersicht zu [IIF- und FIR-Filtern hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ eines Infinite Impulse Response-Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Knoten in der Web Audio API. Wenn Sie diesen Knoten wählen, ist die harte Arbeit für Sie erledigt. Wenn Sie beispielsweise niedrigere Frequenzen aus Ihrem Sound filtern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann festlegen, ab welcher Frequenz gefiltert werden soll (oder abgeschnitten werden soll).

Wenn Sie statt eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen spezielleren Filter erstellen. Und hier ist der IIR-Filterknoten nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits vorhandenen Einstellungen für das, was Sie wollen, richtig ist. Außerdem, wenn Ihr Audiograf sowohl einen Hochpass- als auch einen Bandpassfilter benötigt, könnten Sie einfach einen IIR-Filterknoten anstelle der zwei Biquad-Filterknoten verwenden, die Sie sonst dafür benötigen würden.

Beim IIRFilter-Knoten liegt es an Ihnen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplizierte Mathematik beinhaltet.

Wenn Sie mehr erfahren möchten, gibt es einige [Informationen über die Mathematik hinter IIR-Filtern hier](https://ece.uccs.edu/~mwickert/ece2610/lecture_notes/ece2610_chap8.pdf). Dies betrifft die Theorie der Signalverarbeitung — machen Sie sich keine Sorgen, wenn Sie darauf schauen und das Gefühl haben, dass es nichts für Sie ist.

Wenn Sie mit dem IIR-Filterknoten experimentieren möchten und einige Werte benötigen, um Ihnen zu helfen, gibt es [eine Tabelle bereits berechneter Werte hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, lassen Sie uns einen Blick auf den Code werfen, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Setzen unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten ist, wie wir die Werte beschreiben). Beide Parameter sind Arrays, von denen keines größer als 20 Elemente sein darf.

Beim Setzen unserer Koeffizienten dürfen die `feedforward`-Werte nicht alle auf Null gesetzt werden, da sonst nichts an den Filter gesendet würde. So etwas ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte dürfen nicht mit Null beginnen, da beim ersten Durchlauf sonst nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte basieren auf dem Tiefpassfilter, der in den [Filtereigenschaften der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegeben ist. Da dieser Filterknoten an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audiograf

Lassen Sie uns unseren Kontext und unseren Filterknoten erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Tonquelle zum Abspielen. Wir richten dies mit einer benutzerdefinierten Funktion `playSoundNode()` ein, die [eine Puffertonenquelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an die Standardzielvorgabe anschließt, sie startet und zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn der Abspielknopf gedrückt wird. Das HTML des Abspielknopfes sieht so aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und das `click`-Ereignishandler beginnt so:

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

Der Schalter, der den IIR-Filter ein- und ausschaltet, wird auf ähnliche Weise eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler des Filterknopfes verbindet den `IIRFilter` dann mit dem Graphen zwischen der Quelle und dem Ziel:

```js
filterButton.addEventListener(
  "click",
  () => {
    if (filterButton.dataset.filteron === "false") {
      srcNode.disconnect(audioCtx.destination);
      srcNode.connect(iirfilter).connect(audioCtx.destination);
      // …
    }
  },
  false,
);
```

### Frequenzantwort

Wir haben nur eine Methode verfügbar auf [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des in den Filter eingegebenen Audios passiert.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten, die wir von dieser Methode zurückbekommen, erstellt haben.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Amplituden- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle die gleiche Größe haben.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Lassen Sie uns unser erstes Array mit Frequenzwerten füllen, für die wir Daten erhalten möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz verfolgen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu verfolgen. Füllen wir unser Array mit Frequenzwerten, die in den weiter vorne liegenden Array-Elementen größer werden.

Nun erhalten wir unsere Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filterfrequenzdiagramm zu zeichnen. Wir werden dies auf einem 2d-Leinwandkontext tun.

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

Das war's für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie man die Grundlagen benutzt, und Ihnen geholfen haben, zu verstehen, wofür es nützlich ist und wie es funktioniert.
