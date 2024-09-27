---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert. Dieser Filtertyp kann verwendet werden, um Klangregelgeräte und grafische Equalizer zu implementieren, und die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf abgestimmt werden kann. Dieser Artikel zeigt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet eine Wiedergabe-/Pause-Taste, die die Audiowiedergabe startet und pausiert, sowie einen Umschalter, der einen IIR-Filter ein- und ausschaltet, wodurch der Ton des Sounds geändert wird. Es bietet auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welchen Effekt der IIR-Filter hat.

![Ein Demo mit einer Wiedergabetaste, einem Umschalter zum Ein- und Ausschalten eines Filters und einem Liniendiagramm, das die Filterfrequenzen zeigt, die nach der Anwendung des Filters zurückgegeben werden.](iir-filter-demo.png)

Sie können sich die [vollständige Demo hier auf Codepen ansehen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden gut von modernen Browsern unterstützt, obwohl sie neuer implementiert wurden als einige der länger bestehenden Web Audio API-Features, wie z.B. [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode).

## Der IIRFilterNode

Die Web Audio API enthält jetzt eine [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Schnittstelle. Aber was ist das und wie unterscheidet es sich von der [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), die wir bereits haben?

Ein IIR-Filter ist ein **Infinite Impulse Response-Filter**. Es ist einer von zwei Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response-Filter**. Es gibt einen wirklich guten Überblick über [IIR-Filter und FIR-Filter hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ von Infinite Impulse Response-Filter. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Node in der Web Audio API. Wenn Sie diesen Node wählen, ist die harte Arbeit für Sie erledigt. Wenn Sie zum Beispiel tiefere Frequenzen aus Ihrem Sound filtern möchten, können Sie den [Type](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann die Frequenz festlegen, ab der gefiltert werden soll (oder abgeschnitten wird).

Wenn Sie einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen spezielleren Filter erstellen. Und hier ist der IIR-Filter-Node nützlich – Sie können Ihren eigenen erstellen, wenn keine der bereits verfügbaren Einstellungen für das, was Sie wollen, richtig ist. Ebenso, wenn Ihr Audiograf ein Hochpass- und ein Bandpassfilter benötigte, könnten Sie einfach einen IIR-Filter-Node anstelle der zwei Biquad-Filter-Nodes verwenden, die Sie sonst dafür benötigen würden.

Mit dem IIRFilter-Node liegt es an Ihnen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — diese bestimmen die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es [Informationen über die Mathematik hinter IIR-Filtern hier](https://ece.uccs.edu/~mwickert/ece2610/lecture_notes/ece2610_chap8.pdf). Dies bezieht sich auf die Theorien der Signalverarbeitung — machen Sie sich keine Sorgen, wenn Sie es ansehen und das Gefühl haben, dass es nichts für Sie ist.

Wenn Sie mit dem IIR-Filter-Node spielen und einige Werte als Hilfe benötigen, gibt es [eine Tabelle mit bereits berechneten Werten hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedforward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist ebenfalls eine großartige Ressource, wenn Sie mehr über verschiedene Filter und ihre digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, lassen Sie uns einen Blick auf den Code werfen, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Festlegen unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten ist, wie wir die Werte beschreiben). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein kann.

Beim Festlegen unserer Koeffizienten können die `feedforward`-Werte nicht alle auf Null gesetzt werden, da sonst nichts zum Filter gesendet würde. Etwas in der Art ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte können nicht mit Null beginnen, da sonst beim ersten Durchlauf nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden basierend auf dem in den [Filtereigenschaften der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilter berechnet. Da dieser Filter-Node immer beliebter wird, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIR-Filters in einem Audiograf

Lassen Sie uns unseren Kontext und unseren Filter-Node erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Tonquelle, die abgespielt wird. Wir richten dies mithilfe einer benutzerdefinierten Funktion, `playSoundNode()`, ein, die [eine Pufferquelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), an das Standardziel anbindet, es zu spielen beginnt und es zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Wiedergabetaste gedrückt wird. Der HTML-Code für die Wiedergabetaste sieht so aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und der `click`-Ereignislistener beginnt wie folgt:

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

Der Umschalter, der den IIR-Filter ein- und ausschaltet, wird ähnlich eingerichtet. Zuerst der HTML-Code:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler der Filtertaste verbindet den `IIRFilter` dann mit dem Graf, zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode in den [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des Audios geschieht, das in den Filter eingespeist wird.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten erstellt haben, die wir von dieser Methode zurückbekommen.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Magnitude- und Phasenantwort erhalten wollen, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle dieselbe Größe haben.

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

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu verwenden. Lassen Sie uns also unser Array mit Frequenzwerten füllen, die weiter hinten in den Array-Elementen größer werden.

Jetzt lassen Sie uns unsere Antwortdaten bekommen:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um einen Frequenzplot des Filters zu zeichnen. Wir werden dies in einem 2D-Canvas-Kontext tun.

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

Das war es für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
