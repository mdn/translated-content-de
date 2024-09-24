---
title: Verwenden von IIR-Filtern
slug: Web/API/Web_Audio_API/Using_IIR_filters
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Die **`IIRFilterNode`** Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein {{domxref("AudioNode")}}-Prozessor, der einen allgemeinen [unendlichen Impulsantwortfilter](https://de.wikipedia.org/wiki/Infinite_Impulse_Response) (IIR) implementiert. Dieser Filtertyp kann verwendet werden, um Klangregelgeräte und grafische Equalizer zu implementieren, und die Filterantwortparameter können spezifiziert werden, sodass er nach Bedarf abgestimmt werden kann. Dieser Artikel zeigt, wie man einen solchen Filter implementiert und in einem einfachen Beispiel verwendet.

## Demo

Unser einfaches Beispiel für diesen Leitfaden bietet einen Play/Pause-Button, der die Audiowiedergabe startet und pausiert, und einen Schalter, der einen IIR-Filter ein- und ausschaltet und den Ton des Klangs verändert. Es gibt auch eine Leinwand, auf der die Frequenzantwort des Audios gezeichnet wird, sodass Sie sehen können, welchen Effekt der IIR-Filter hat.

![Ein Demo mit einem Play-Button und einem Schalter, um einen Filter ein- und auszuschalten, und einem Liniendiagramm, das die nach dem Anwenden des Filters zurückgegebenen Filterfrequenzen zeigt.](iir-filter-demo.png)

Sie können das [vollständige Demo hier auf Codepen ansehen](https://codepen.io/Rumyra/pen/oPxvYB/). Sehen Sie sich auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node) an. Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der Konstante `filterNumber` auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

## Unterstützung in Browsern

[IIR-Filter](/de/docs/Web/API/IIRFilterNode) werden in modernen Browsern gut unterstützt, obwohl sie erst kürzlich im Vergleich zu einigen der älteren Web Audio API-Features wie [Biquad-Filter](/de/docs/Web/API/BiquadFilterNode) implementiert wurden.

## Der IIRFilterNode

Die Web Audio API enthält jetzt eine {{domxref("IIRFilterNode")}} Schnittstelle. Aber was ist das und wie unterscheidet es sich von dem uns bereits bekannten {{domxref("BiquadFilterNode")}}?

Ein IIR-Filter ist ein **unendlicher Impulsantwortfilter**. Es ist eine der beiden Hauptfiltertypen, die in der Audio- und digitalen Signalverarbeitung verwendet werden. Der andere Typ ist FIR — **endlicher Impulsantwortfilter**. Es gibt hier eine sehr gute Übersicht zu [IIR- und FIR-Filtern](https://dspguru.com/dsp/faqs/iir/basics/).

Ein [Biquad-Filter](https://www.mathworks.com/help/dsphdl/ref/biquadfilter.html) ist eigentlich ein _spezifischer Typ_ eines unendlichen Impulsantwortfilters. Es ist ein häufig verwendeter Typ und wir haben ihn bereits als Knoten in der Web Audio API. Wenn Sie diesen Knoten wählen, ist die harte Arbeit bereits für Sie erledigt. Zum Beispiel, wenn Sie niedrigere Frequenzen aus Ihrem Klang filtern möchten, können Sie den [Typ](/de/docs/Web/API/BiquadFilterNode/type) auf `highpass` setzen und dann einstellen, welche Frequenz gefiltert werden soll (oder abgeschnitten werden soll).

Wenn Sie einen {{domxref("IIRFilterNode")}} anstelle eines {{domxref("BiquadFilterNode")}} verwenden, erstellen Sie den Filter selbst, anstatt nur einen vorprogrammierten Typ auszuwählen. So können Sie einen Hochpassfilter oder einen Tiefpassfilter oder einen individuelleren Filter erstellen. Und hier ist der IIR-Filter-Knoten nützlich — Sie können Ihren eigenen erstellen, wenn keine der bereits verfügbaren Einstellungen für das passt, was Sie möchten. Wenn Ihr Audiograf beispielsweise einen Hochpass- und einen Bandpassfilter benötigte, könnten Sie einfach einen IIR-Filterknoten anstelle der beiden erforderlichen Biquad-Filterknoten verwenden.

Beim IIR-Filter-Knoten liegt es an Ihnen, welche `feedforward` und `feedback` Werte der Filter benötigt — dies bestimmt die Eigenschaften des Filters. Der Nachteil ist, dass dies einige komplexe Mathematik erfordert.

Wenn Sie mehr lernen möchten, gibt es [Informationen zur Mathematik hinter IIR-Filtern hier](https://ece.uccs.edu/~mwickert/ece2610/lecture_notes/ece2610_chap8.pdf). Dies betritt den Bereich der Signalverarbeitungstheorie — machen Sie sich keine Sorgen, wenn Sie es ansehen und das Gefühl haben, es ist nichts für Sie.

Wenn Sie mit dem IIR-Filter-Knoten herumspielen und einige Werte benötigen, die Ihnen helfen, gibt es [hier eine Tabelle bereits berechneter Werte](https://www.dspguide.com/CH20.PDF); auf den Seiten 4 & 5 des verlinkten PDFs beziehen sich die `an`-Werte auf die `feedForward`-Werte und die `bn`-Werte auf das `feedback`. [musicdsp.org](https://www.musicdsp.org/en/latest/) ist auch eine großartige Ressource, wenn Sie mehr über verschiedene Filter und deren digitale Implementierung lesen möchten.

Mit all dem im Hinterkopf, lassen Sie uns den Code ansehen, um einen IIR-Filter mit der Web Audio API zu erstellen.

## Einstellen unserer IIRFilter-Koeffizienten

Wenn wir einen IIR-Filter erstellen, geben wir die `feedforward` und `feedback` Koeffizienten als Optionen an (Koeffizienten beschreiben die Werte). Beide dieser Parameter sind Arrays, von denen keines größer als 20 Elemente sein darf.

Wenn wir unsere Koeffizienten festlegen, können die `feedforward`-Werte nicht alle auf Null gesetzt werden, da sonst nichts an den Filter gesendet würde. Etwas wie das hier ist akzeptabel:

```js
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
```

Unsere `feedback`-Werte dürfen nicht mit Null beginnen, da sonst beim ersten Durchlauf nichts zurückgesendet würde:

```js
const feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
```

> [!NOTE]
> Diese Werte sind basierend auf dem im [Filterauswirkungen der Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/#filters-characteristics) angegebenen Tiefpassfilter berechnet. Da dieser Filterknoten mehr an Popularität gewinnt, sollten wir in der Lage sein, weitere Koeffizientenwerte zu sammeln.

## Einsatz eines IIRFilters in einem Audiograf

Lassen Sie uns unseren Kontext und unseren Filterknoten erstellen:

```js
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
```

Wir benötigen eine Klangquelle zum Abspielen. Wir richten dies mit einer benutzerdefinierten Funktion, `playSoundNode()`, ein, die [eine Pufferquelle erstellt](/de/docs/Web/API/BaseAudioContext/createBufferSource) aus einem vorhandenen {{domxref("AudioBuffer")}}, sie mit dem Standardziel verbindet, sie startet und zurückgibt:

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

Der `click`-Handler für den Filterknopf verbindet dann den `IIRFilter`-Knoten mit dem Audio-Graphen zwischen der Quelle und dem Ziel:

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

Wir haben nur eine Methode auf {{domxref("IIRFilterNode")}} Instanzen verfügbar, `getFrequencyResponse()`, die es uns ermöglicht, zu sehen, was mit den Frequenzen des in den Filter eingespeisten Audios passiert.

Lassen Sie uns ein Frequenzdiagramm des von uns erstellten Filters mit den Daten zeichnen, die wir von dieser Methode zurückerhalten.

Wir müssen drei Arrays erstellen. Eines der Frequenzwerte, für die wir die Magnitudenantwort und Phasenantwort erhalten möchten, und zwei leere Arrays, um die Daten zu empfangen. Alle drei müssen vom Typ [`float32array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) sein und alle die gleiche Größe haben.

```js
// Arrays für unsere Frequenzantwort
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
const magResponseOutput = new Float32Array(totalArrayItems);
const phaseResponseOutput = new Float32Array(totalArrayItems);
```

Lassen Sie uns unser erstes Array mit Frequenzwerten füllen, für die wir Daten zurückbekommen möchten:

```js
myFrequencyArray = myFrequencyArray.map((item, index) => 1.4 ** index);
```

Wir könnten einen linearen Ansatz wählen, aber es ist viel besser, wenn man mit Frequenzen arbeitet, einen logarithmischen Ansatz zu verwenden. Füllen wir also unser Array mit Frequenzwerten, die weiter hinten im Array größer werden.

Nun lassen Sie uns unsere Antwortdaten abrufen:

```js
iirFilter.getFrequencyResponse(
  myFrequencyArray,
  magResponseOutput,
  phaseResponseOutput,
);
```

Wir können diese Daten verwenden, um ein Frequenzdiagramm des Filters zu zeichnen. Wir werden dies auf einem 2D-Canvas-Kontext tun.

```js
// Erstellen Sie ein Canvas-Element und fügen Sie es unserem DOM hinzu
const canvasContainer = document.querySelector(".filter-graph");
const canvasEl = document.createElement("canvas");
canvasContainer.appendChild(canvasEl);

// 2D-Kontext festlegen und Dimensionen einstellen
const canvasCtx = canvasEl.getContext("2d");
const width = canvasContainer.offsetWidth;
const height = canvasContainer.offsetHeight;
canvasEl.width = width;
canvasEl.height = height;

// Hintergrundfarbe füllen
canvasCtx.fillStyle = "white";
canvasCtx.fillRect(0, 0, width, height);

// Einige Abstände basierend auf der Größe einrichten
const spacing = width / 16;
const fontSize = Math.floor(spacing / 1.5);

// Unsere Achse zeichnen
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "grey";

canvasCtx.beginPath();
canvasCtx.moveTo(spacing, spacing);
canvasCtx.lineTo(spacing, height - spacing);
canvasCtx.lineTo(width - spacing, height - spacing);
canvasCtx.stroke();

// Achse ist Verstärkung nach Frequenz -> Beschriftungen erstellen
canvasCtx.font = `${fontSize}px sans-serif`;
canvasCtx.fillStyle = "grey";
canvasCtx.fillText("1", spacing - fontSize, spacing + fontSize);
canvasCtx.fillText("g", spacing - fontSize, (height - spacing + fontSize) / 2);
canvasCtx.fillText("0", spacing - fontSize, height - spacing + fontSize);
canvasCtx.fillText("Hz", width / 2, height - spacing + fontSize);
canvasCtx.fillText("20k", width - spacing, height - spacing + fontSize);

// Über die Magnitudenantwort-Daten schleifen und unseren Filter zeichnen
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

Das war's für unsere IIRFilter-Demo. Dies sollte Ihnen gezeigt haben, wie Sie die Grundlagen verwenden, und Ihnen geholfen haben zu verstehen, wofür es nützlich ist und wie es funktioniert.
