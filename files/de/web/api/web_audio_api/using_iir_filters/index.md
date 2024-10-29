---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert; dieser Filtertyp kann zur Implementierung von Tonsteuergeräten und grafischen Equalizern verwendet werden. Die Filterantwort-Parameter können spezifiziert werden, sodass der Filter nach Bedarf eingestellt werden kann. Dieser Artikel zeigt, wie man einen solchen implementiert und ihn in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet eine Abspiel-/Pause-Taste, die das Abspielen von Audio startet und pausiert, sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet und dabei den Ton des Sounds verändert. Es bietet auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welchen Effekt der IIR-Filter hat.

![Eine Demo mit einer Abspieltaste, einem Schalter zum Ein- und Ausschalten eines Filters und einem Liniendiagramm, das die Filterfrequenzen zeigt, die nach der Anwendung des Filters zurückgegeben werden.](iir-filter-demo.png)

Sie können sich die [vollständige Demo hier auf Codepen ansehen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der Konstanten `filterNumber` auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Browser-Unterstützung

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden gut über moderne Browser hinweg unterstützt, obwohl sie erst vor kurzem im Vergleich zu einigen der länger bestehenden Funktionen der Web Audio API, wie z.B. [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Der IIRFilterNode

Die Web Audio API enthält jetzt eine [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Schnittstelle. Aber was ist das und wie unterscheidet es sich von dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), den wir bereits kennen?

Ein IIR-Filter ist ein **Infinite Impulse Response-Filter**. Es ist einer der beiden Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response-Filter**. Eine sehr gute Übersicht zu [IIR-Filtern und FIR-Filtern finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ eines Infinite Impulse Response-Filters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Knoten in der Web Audio API. Wenn Sie diesen Knoten wählen, wird die schwierige Arbeit für Sie erledigt. Wenn Sie zum Beispiel die niedrigeren Frequenzen aus Ihrem Klang herausfiltern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann festlegen, welche Frequenz gefiltert werden soll (oder abgeschnitten).

Wenn Sie anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst und wählen nicht nur einen vorprogrammierten Typ. So können Sie einen Hochpassfilter oder einen Tiefpassfilter oder einen individuelleren erstellen. Und hier ist der IIR-Filterknoten nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits verfügbaren Einstellungen für Ihre Bedürfnisse geeignet ist. Außerdem, wenn Ihr Audiograf einen Hochpass- und einen Bandpassfilter benötigte, könnten Sie einfach einen IIR-Filterknoten anstelle der zwei Biquad-Filterknoten verwenden, die Sie sonst dafür benötigen würden.

Beim IIR-Filterknoten liegt es an Ihnen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies eine gewisse komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es hier einige [Informationen über die Mathematik hinter IIR-Filtern](https://ece.uccs.edu/~mwickert/ece2610/lecture_notes/ece2610_chap8.pdf). Dies betritt die Bereiche der Theorie der Signalverarbeitung — machen Sie sich keine Sorgen, wenn Sie darauf schauen und es nicht für Sie geeignet erscheint.

Wenn Sie mit dem IIR-Filterknoten spielen möchten und einige Werte benötigen, um Sie dabei zu unterstützen, gibt es [eine Tabelle bereits berechneter Werte hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, lassen Sie uns einen Blick auf den Code werfen, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Unsere IIRFilter-Koeffizienten festlegen

Wenn wir einen IIR-Filter erstellen, übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten ist die Bezeichnung für die Werte). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein darf.

Beim Festlegen unserer Koeffizienten dürfen die `feedforward`-Werte nicht alle auf null gesetzt sein, da sonst nichts an den Filter gesendet würde. So etwas ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte können nicht mit Null beginnen, da sonst beim ersten Durchlauf nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden basierend auf dem im [Filtermerkmale der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilter berechnet. Da dieser Filterknoten an Popularität gewinnt, sollten wir in der Lage sein, weitere Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audiografen

Lassen Sie uns unseren Kontext und unseren Filterknoten erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle, die abgespielt werden soll. Wir richten dies mit einer benutzerdefinierten Funktion `playSoundNode()` ein, die [eine Buffer-Quelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), diese an das Standardziel anschließt, sie abspielen lässt und sie zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Abspieltaste gedrückt wird. Das HTML der Abspieltaste sieht so aus:

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

Der Schalter, der den IIR-Filter ein- und ausschaltet, ist ähnlich eingerichtet. Zuerst das HTML:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler der Filtertaste verbindet dann den `IIRFilter` mit dem Grafen zwischen der Quelle und dem Ziel:

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

Uns steht nur eine Methode bei [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen zur Verfügung, `getFrequencyResponse()`. Diese ermöglicht es uns, zu sehen, was mit den Frequenzen des Audios passiert, das in den Filter eingegeben wird.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten, die wir von dieser Methode zurückbekommen, erstellt haben.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Magnitude- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) und alle gleich groß sein.

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

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu wählen, also lassen Sie uns unser Array mit Frequenzwerten füllen, die im Verlauf der Array-Elemente größer werden.

Jetzt holen wir uns unsere Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Mit diesen Daten können wir ein Frequenzfilterdiagramm zeichnen. Wir werden es auf einem 2D-Canvas-Kontext machen.

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

Das war alles für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie man die Grundlagen verwendet, und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
