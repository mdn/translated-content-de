---
title: "BiquadFilterNode: Methode getFrequencyResponse()"
short-title: getFrequencyResponse()
slug: Web/API/BiquadFilterNode/getFrequencyResponse
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{ APIRef("Web Audio API") }}

Die `getFrequencyResponse()`-Methode des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interfaces nimmt die Einstellungen des aktuellen Filteralgorithmus und berechnet die Frequenzantwort für die in einem angegebenen Frequenzarray spezifizierten Frequenzen.

Die beiden Ausgabearrays, `magResponseOutput` und `phaseResponseOutput`, müssen erstellt werden, bevor diese Methode aufgerufen wird; sie müssen die gleiche Größe wie das Array der Eingabefrequenzwerte (`frequencyArray`) haben.

## Syntax

```js-nolint
getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput)
```

### Parameter

- `frequencyArray`
  - : Ein {{jsxref("Float32Array")}}, das ein Array von Frequenzen in Hertz enthält, die gefiltert werden sollen.
- `magResponseOutput`
  - : Ein {{jsxref("Float32Array")}}, um die berechneten Magnituden der Frequenzantwort für jeden Frequenzwert im `frequencyArray` zu empfangen. Für jede Frequenz in `frequencyArray`, deren Wert außerhalb des Bereichs von 0,0 bis `sampleRate`/2 liegt (wobei [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) ist), ist der entsprechende Wert in diesem Array {{jsxref("NaN")}}. Diese sind einheitslose Werte.
- `phaseResponseOutput`
  - : Ein {{jsxref("Float32Array")}}, um die berechneten Phasenantwortwerte in Radiant für jeden Frequenzwert im Eingabe-`frequencyArray` zu empfangen. Für jede Frequenz in `frequencyArray`, deren Wert außerhalb des Bereichs von 0,0 bis `sampleRate`/2 liegt (wobei [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) ist), ist der entsprechende Wert in diesem Array {{jsxref("NaN")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError`
  - : Die bereitgestellten drei Arrays haben nicht alle die gleiche Länge.

## Beispiele

Im folgenden Beispiel verwenden wir einen Biquad-Filter auf einem Medienstream (für die vollständige Demo, siehe unsere [stream-source-buffer demo](https://mdn.github.io/webaudio-examples/stream-source-buffer/) live oder [lesen Sie den Quellcode](https://github.com/mdn/webaudio-examples/blob/main/stream-source-buffer/index.html).). Im Rahmen dieser Demo erhalten wir die Frequenzantworten für diesen Biquad-Filter für fünf Beispiel-Frequenzen. Zuerst erstellen wir die benötigten {{jsxref("Float32Array")}}, eines das die Eingabefrequenzen enthält, und zwei, um die Ausgabe von Magnituden- und Phasenwerten zu empfangen:

```js
const myFrequencyArray = new Float32Array(5);
myFrequencyArray[0] = 1000;
myFrequencyArray[1] = 2000;
myFrequencyArray[2] = 3000;
myFrequencyArray[3] = 4000;
myFrequencyArray[4] = 5000;

const magResponseOutput = new Float32Array(5);
const phaseResponseOutput = new Float32Array(5);
```

Als nächstes erstellen wir ein {{ htmlelement("ul") }}-Element in unserem HTML, um unsere Ergebnisse zu enthalten und eine Referenz dazu in unserem JavaScript:

```html
<p>Biquad filter frequency response for:</p>
<ul class="freq-response-output"></ul>
```

```js
const freqResponseOutput = document.querySelector(".freq-response-output");
```

Schließlich, nachdem wir unseren Biquad-Filter erstellt haben, verwenden wir `getFrequencyResponse()`, um die Antwortdaten zu generieren und in unsere Arrays zu platzieren. Dann durchlaufen wir jeden Datensatz und geben ihn in einer verständlichen Liste am unteren Ende der Seite aus:

```js
const biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = range.value;

// …

function calcFrequencyResponse() {
  biquadFilter.getFrequencyResponse(
    myFrequencyArray,
    magResponseOutput,
    phaseResponseOutput,
  );

  for (let i = 0; i <= myFrequencyArray.length - 1; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `: Magnitude ${magResponseOutput[i]}, Phase ${phaseResponseOutput[i]} radians.`;
    listItem.insertBefore(
      document.createElement("strong"),
      listItem.firstChild,
    ).textContent = `${myFrequencyArray[i]}Hz`;
    freqResponseOutput.appendChild(listItem);
  }
}

calcFrequencyResponse();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
