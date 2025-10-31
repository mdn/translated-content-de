---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter implementiert. Diese Art von Filter kann für Tonregelgeräte und grafische Equalizer verwendet werden, und die Parameter der Filterantwort können spezifiziert werden, sodass er nach Bedarf angepasst werden kann. Dieser Artikel beschreibt, wie man einen solchen implementiert und ihn in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet einen Play/Pause-Button, der die Audiowiedergabe startet und pausiert, und einen Schalter, der einen IIR-Filter ein- und ausschaltet und den Klang verändert. Es bietet auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, damit Sie sehen können, welchen Effekt der IIR-Filter hat.

![Eine Demo mit einem Play-Button, einem Schalter zum Ein- und Ausschalten eines Filters und einem Liniendiagramm, das die Filterfrequenzen anzeigt, nachdem der Filter aktiviert wurde.](iir-filter-demo.png)

Sie können die [vollständige Demo live ansehen](https://mdn.github.io/webaudio-examples/iirfilter-node/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige verschiedene Koeffizientenwerte für unterschiedliche Tiefpassfrequenzen – Sie können den Wert der `filterNumber`-Konstanten auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte zu prüfen.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie kürzlich im Vergleich zu einigen der länger bestehenden Funktionen der Web Audio API, wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode), implementiert wurden.

## Der IIRFilterNode

Die Web Audio API verfügt nun über ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich von dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), das wir bereits kennen?

Ein IIR-Filter ist ein **Infinite Impulse Response Filter**. Es ist eine von zwei Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response Filter**. Eine wirklich gute Übersicht über [IIF- und FIR-Filter finden Sie hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich eine _spezifische Art_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ und wir haben es bereits als Node in der Web Audio API. Wenn Sie diesen Node wählen, ist die harte Arbeit bereits für Sie erledigt. Zum Beispiel, wenn Sie niedrigere Frequenzen aus Ihrem Klang filtern möchten, können Sie den [type](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann festlegen, ab welcher Frequenz gefiltert oder abgeschnitten werden soll.

Wenn Sie stattdessen ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ zu wählen. So können Sie einen Highpass-Filter, einen Lowpass-Filter oder einen individuelleren Filter erstellen. Hier ist das IIR-Filter-Node nützlich — Sie können Ihr eigenes erstellen, wenn keine der bereits verfügbaren Einstellungen für Ihre Anforderungen geeignet ist. Darüber hinaus, wenn Ihr Audiograf sowohl einen Highpass- als auch einen Bandpassfilter benötigt, könnten Sie einfach einen IIR-Filter-Node anstelle der zwei Biquad-Filter-Nodes verwenden, die Sie sonst dafür benötigen würden.

Mit dem IIR-Filter-Node liegt es an Ihnen, festzulegen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr darüber erfahren möchten, gibt es [Informationen über die Mathematik hinter IIR-Filtern hier](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies bewegt sich im Bereich der Signalverarbeitungstheorie — keine Sorge, wenn Sie es sich ansehen und das Gefühl haben, dass es nicht für Sie ist.

Wenn Sie mit dem IIR-Filter-Node experimentieren und einige Werte zur Unterstützung benötigen, gibt es [eine Tabelle bereits berechneter Werte hier](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 und 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, schauen wir uns den Code an, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Festlegung unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters geben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen an (Koeffizienten sind die Werte, die wir beschreiben). Beide Parameter sind Arrays, von denen keines mehr als 20 Elemente enthalten darf.

Beim Festlegen unserer Koeffizienten dürfen die `feedforward`-Werte nicht alle auf null gesetzt sein, da sonst nichts an den Filter gesendet würde. Etwas wie das Folgende ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte dürfen nicht mit null beginnen, da beim ersten Durchlauf sonst nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte basieren auf dem Tiefpassfilter, der in den [Filtereigenschaften der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegeben ist. Da dieser Filter-Node mehr an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audiografen

Erstellen wir unseren Kontext und unseren Filter-Node:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Tonquelle, um sie abzuspielen. Wir richten sie mit einer benutzerdefinierten Funktion, `playSoundNode()`, ein, die [eine Pufferquelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), sie an das Standardziel anschließt, das Abspielen startet und sie zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn der Play-Button gedrückt wird. Der HTML-Code des Play-Buttons sieht so aus:

```html
<button
  class="button-play"
  role="switch"
  data-playing="false"
  aria-pressed="false">
  Play
</button>
```

Und der `click`-Eventlistener beginnt so:

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
  aria-describedby="label"
  disabled></button>
```

Der `click`-Handler des Filter-Buttons verbindet dann den `IIRFilter` mit dem Grafen, zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode, die auf [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen verfügbar ist, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des in den Filter eingespeisten Audios passiert.

Zeichnen wir ein Frequenzdiagramm des Filters, das wir mit den Daten erstellt haben, die wir von dieser Methode zurückbekommen.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Magnitude- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle müssen die gleiche Größe haben.

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

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu verwenden. Füllen wir also unser Array mit Frequenzwerten, die weiter unten in den Array-Elementen größer werden.

Jetzt holen wir uns unsere Antwortdaten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Frequenzdiagramm des Filters zu zeichnen. Wir tun dies in einem 2D-Leinwand-Kontext.

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

Das war es für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden, und Ihnen helfen zu verstehen, wofür sie nützlich ist und wie sie funktioniert.
