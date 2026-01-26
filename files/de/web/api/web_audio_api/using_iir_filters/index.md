---
title: Verwendung von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: a3d7c6b454d911768d084ff88b7dccae1c22b7bf
---

{{DefaultAPISidebar("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert. Dieser Filtertyp kann zur Implementierung von Tonsteuergeräten und grafischen Equalizern genutzt werden, und die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf angepasst werden kann. Dieser Artikel beschreibt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet eine Wiedergabe/Pause-Schaltfläche zum Starten und Anhalten der Audiowiedergabe sowie einen Schalter, der einen IIR-Filter ein- und ausschaltet, wodurch der Klang verändert wird. Außerdem wird eine Leinwand bereitgestellt, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welche Wirkung der IIR-Filter hat.

![Ein Demo mit einer Wiedergabeschaltfläche und einem Schalter zum Ein- und Ausschalten eines Filters sowie einem Liniendiagramm, das die nach der Filteranwendung zurückgegebenen Filterfrequenzen zeigt.](iir-filter-demo.png)

Sie können sich [das vollständige Live-Demo anschauen](https://mdn.github.io/webaudio-examples/iirfilter-node/). Sehen Sie sich auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node) an. Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpass-Frequenzen — Sie können den Wert der `filterNumber`-Konstanten auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Browser-Kompatibilität

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden gut von modernen Browsern unterstützt, obwohl sie kürzlich implementiert wurden im Vergleich zu einigen der langlebigeren Web Audio API-Funktionen, wie z. B. [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode).

## Das IIRFilterNode

Die Web Audio API verfügt nun über ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Interface. Aber was ist das und wie unterscheidet es sich von dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), das wir bereits haben?

Ein IIR-Filter ist ein **Infinite Impulse Response Filter**. Es ist einer von zwei Haupttypen von Filtern, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **Finite Impulse Response Filter**. Es gibt einen wirklich guten Überblick über [IIR-Filter und FIR-Filter hier](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist tatsächlich ein _spezifischer Typ_ eines Infinite Impulse Response Filters. Es ist ein häufig verwendeter Typ, und wir haben ihn bereits als Node in der Web Audio API. Wenn Sie diesen Node wählen, ist die schwere Arbeit bereits für Sie erledigt. Wenn Sie beispielsweise niedrigere Frequenzen aus Ihrem Klang filtern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann die zu filternde Frequenz (oder den Abschneidewert) festlegen.

Wenn Sie einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) anstelle eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) verwenden, erstellen Sie den Filter selbst, anstatt nur einen voreingestellten Typ zu wählen. So können Sie einen Hochpassfilter, einen Tiefpassfilter oder einen individuelleren erstellen. Und hier ist der IIR-Filter-Node nützlich — Sie können Ihren eigenen erstellen, wenn keiner der bereits verfügbaren Einstellungen für das, was Sie wollen, geeignet ist. Außerdem, wenn Ihr Audiograf ein Hochpass- und ein Bandpassfilter benötigt, könnten Sie einfach einen IIR-Filter-Node anstelle der beiden benötigten Biquad-Filter-Nodes verwenden.

Beim IIR-Filter-Node liegt es an Ihnen, welche `feedforward`- und `feedback`-Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es [hier Informationen über die Mathematik hinter IIR-Filtern](https://www.staff.ncl.ac.uk/oliver.hinton/eee305/Chapter5.pdf). Dies bewegt sich im Bereich der Signalverarbeitungstheorie — keine Sorge, wenn Sie es sich ansehen und denken, dass es nichts für Sie ist.

Wenn Sie mit dem IIR-Filter-Node spielen und einige Werte benötigen, um Ihnen auf dem Weg zu helfen, gibt es [hier eine Tabelle mit bereits berechneten Werten](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, schauen wir uns den Code an, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Setzen unserer IIRFilter-Koeffizienten

Beim Erstellen eines IIR-Filters übergeben wir die `feedforward`- und `feedback`-Koeffizienten als Optionen (Koeffizienten sind die Beschreibung der Werte). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein kann.

Beim Setzen unserer Koeffizienten können die `feedforward`-Werte nicht alle auf null gesetzt werden, da sonst nichts an den Filter gesendet würde. Etwas wie dies ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte können nicht mit null beginnen, da sonst beim ersten Durchlauf nichts zurückgesendet wird:

```js
const feedBack = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte werden auf Grundlage des im [Filtermerkmale der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilters berechnet. Da dieser Filter-Node immer mehr an Popularität gewinnt, sollten wir in der Lage sein, mehr Koeffizientenwerte zu sammeln.

## Verwendung eines IIRFilters in einem Audiograf

Lassen Sie uns unseren Kontext und unseren Filter-Node erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zur Wiedergabe. Wir richten dies mit einer benutzerdefinierten Funktion, `playSoundNode()`, ein, die [eine Buffer-Quelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem bestehenden [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), diese an das Standardziel anschließt, sie abspielt und zurückgibt:

```js
function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}
```

Diese Funktion wird aufgerufen, wenn die Wiedergabeschaltfläche gedrückt wird. Der HTML-Code der Wiedergabeschaltfläche sieht so aus:

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
playButton.addEventListener("click", () => {
  if (playButton.dataset.playing === "false") {
    srcNode = playSourceNode(audioCtx, sample);
    // …
  }
});
```

Der Schalter, der den IIR-Filter ein- und ausschaltet, wird auf ähnliche Weise eingerichtet. Zuerst der HTML-Code:

```html
<button
  class="button-filter"
  role="switch"
  data-filteron="false"
  aria-pressed="false"
  aria-labelledby="label"
  disabled></button>
```

Der `click`-Handler der Filter-Schaltfläche verbindet dann den `IIRFilter` mit dem Graf, zwischen Quelle und Ziel:

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

Wir haben nur eine Methode auf [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Instanzen verfügbar, `getFrequencyResponse()`, die es uns ermöglicht zu sehen, was mit den Frequenzen des Audios geschieht, das in den Filter eingespeist wird.

Lassen Sie uns ein Frequenzdiagramm des Filters zeichnen, den wir mit den Daten, die wir von dieser Methode zurückbekommen, erstellt haben.

Wir müssen drei Arrays erstellen. Eines mit Frequenzwerten, für die wir die Magnituden- und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu übernehmen. Alle drei müssen vom Typ [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle die gleiche Größe haben.

```js
// arrays for our frequency response
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Lassen Sie uns unser erstes Array mit Frequenzwerten füllen, für die wir Daten zurückhaben möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz verfolgen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu wählen. Füllen wir also unser Array mit Frequenzwerten, die weiter in den Array-Elementen größer werden.

Nun lassen Sie uns unsere Antwortdaten erhalten:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Filterfrequenzdiagramm zu zeichnen. Wir tun dies auf einem 2D-Leinwand-Kontext.

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

Das war's für unser IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
