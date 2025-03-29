---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert. Diese Art von Filter kann zur Implementierung von Tonregelgeräten und grafischen Equalizern verwendet werden, und die Filterantwortparameter können spezifiziert werden, sodass sie nach Bedarf abgestimmt werden können. Dieser Artikel beschreibt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet einen Wiedergabe-/Pause-Button, der die Audiowiedergabe startet und pausiert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet und dadurch den Ton des Klangs verändert. Es stellt auch eine Leinwand bereit, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welche Wirkung der IIR-Filter hat.

![Eine Demo mit einem Wiedergabe-Button, einem Schalter, um einen Filter ein- und auszuschalten, und einem Liniendiagramm, das die Filterfrequenzen zeigt, die nach Anwendung des Filters zurückgegeben werden.](iir-filter-demo.png)

Sie können sich die [vollständige Demo hier auf CodePen ansehen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige verschiedene Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstanten auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte zu überprüfen.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden gut von modernen Browsern unterstützt, obwohl sie erst kürzlich im Vergleich zu einige der länger bestehenden Funktionen der Web Audio API, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Das IIRFilterNode

Die Web Audio API verfügt nun über ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich von dem bereits bekannten [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)?

Ein IIR-Filter ist ein **Infinite Impulse Response Filter**. Es ist einer der beiden Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist der FIR — **Finite Impulse Response Filter**. Eine sehr gute Übersicht über [IIF-Filter und FIR-Filter finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist eigentlich ein _spezifischer Typ_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Node in der Web Audio API. Wenn Sie diesen Node wählen, wird die harte Arbeit für Sie erledigt. Zum Beispiel, wenn Sie niedrigere Frequenzen aus Ihrem Sound filtern möchten, können Sie den [type](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann die zu filternde (oder zu blockierende) Frequenz festlegen.

Wenn Sie einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen gezielt angepassten Filter erstellen. Und hier ist der IIR-Filter-Node nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits verfügbaren Einstellungen für Ihre Bedürfnisse richtig ist. Außerdem, wenn Ihr Audio-Graph einen Hochpass- und einen Bandpassfilter benötigte, könnten Sie einfach einen IIR-Filter-Node anstelle der zwei Biquad-Filter-Nodes verwenden, die Sie ansonsten dafür benötigen würden.

Mit dem IIR-Filter-Node liegt es an Ihnen, welche `feedforward` und `feedback` Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es hier einige [Informationen über die Mathematik hinter IIR-Filtern](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies betritt das Gebiet der Signalverarbeitungstheorie — machen Sie sich keine Sorgen, wenn Sie es sich ansehen und das Gefühl haben, dass es nichts für Sie ist.

Wenn Sie mit dem IIR-Filter-Node experimentieren und einige Werte benötigen, um den Weg dorthin zu erleichtern, gibt es [eine Tabelle bereits berechneter Werte hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an` Werte auf die `feedForward` Werte und die `bn` Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter lesen möchten und wie sie digital implementiert werden.

Mit all dem im Hinterkopf, schauen wir uns den Code an, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Festlegen unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters geben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen an (Koeffizienten ist, wie wir die Werte beschreiben). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein kann.

Wenn wir unsere Koeffizienten festlegen, können die `feedforward`-Werte nicht alle auf null gesetzt sein, andernfalls würde nichts an den Filter gesendet werden. So etwas ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte dürfen nicht mit null beginnen, andernfalls würde beim ersten Durchlauf nichts zurückgesendet:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden basierend auf dem in den [Filtercharakteristika der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilter berechnet. Da dieser Filter-Node populärer wird, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audio-Graphen

Lassen Sie uns unseren Kontext und unseren Filter-Node erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zur Wiedergabe. Wir richten dies mithilfe einer benutzerdefinierten Funktion `playSoundNode()` ein, die [eine Puffersource erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an das Standardziel verbindet, es abspielen lässt und es zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn der Wiedergabe-Button gedrückt wird. Der HTML-Code des Wiedergabe-Buttons sieht folgendermaßen aus:

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

Der Schalter, der den IIR-Filter ein- und ausschaltet, wird ähnlich eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler des Filter-Buttons verbindet dann den `IIRFilter` mit dem Graphen, zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode verfügbar an [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des Audios passiert, das in den Filter eingespeist wird.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten erstellt haben, die wir von dieser Methode zurückbekommen.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Magnituden- und Phasenantwort erhalten möchten, und zwei leere Arrays, die die Daten erhalten. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle dieselbe Größe haben.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Füllen wir unser erstes Array mit Frequenzwerten, zu denen wir Daten zurückerhalten möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz verwenden, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu nehmen. Lassen Sie uns also unser Array mit Frequenzwerten füllen, die in den Array-Elementen weiter auseinanderliegen.

Nun holen wir uns die Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filterfrequenzdiagramm zu zeichnen. Wir werden dies in einem 2D-Leinwandkontext tun.

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

Das war es für unser IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie man die Grundlagen verwendet und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
