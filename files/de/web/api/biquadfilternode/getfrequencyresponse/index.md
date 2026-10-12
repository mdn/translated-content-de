---
title: "BiquadFilterNode: Methode getFrequencyResponse()"
short-title: getFrequencyResponse()
slug: Web/API/BiquadFilterNode/getFrequencyResponse
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{ APIRef("Web Audio API") }}

Die Methode `getFrequencyResponse()` der Schnittstelle [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) verwendet die aktuellen Einstellungen des Filteralgorithmus und berechnet den Frequenzgang für die Frequenzen, die in einem Array angegeben sind.

Die beiden Ausgabearrays `magResponseOutput` und `phaseResponseOutput` müssen vor dem Aufruf dieser Methode erstellt werden. Sie müssen dieselbe Länge wie das Array der Eingabefrequenzen (`frequencyArray`) haben.

## Syntax

```js-nolint
getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput)
```

### Parameter

- `frequencyArray`
  - : Ein {{jsxref("Float32Array")}} mit den Frequenzen in Hertz, für die Sie den Frequenzgang berechnen möchten.
- `magResponseOutput`
  - : Ein {{jsxref("Float32Array")}}, das die berechneten Amplitudenwerte des Frequenzgangs für jede Frequenz in `frequencyArray` aufnimmt. Für jede Frequenz in `frequencyArray`, deren Wert außerhalb des Bereichs von 0.0 bis `sampleRate`/2 liegt (wobei [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) ist), lautet der entsprechende Wert in diesem Array {{jsxref("NaN")}}. Die Werte sind einheitenlos.
- `phaseResponseOutput`
  - : Ein {{jsxref("Float32Array")}}, das die berechneten Phasenwerte in Radiant für jede Frequenz im Eingabearray `frequencyArray` aufnimmt. Für jede Frequenz in `frequencyArray`, deren Wert außerhalb des Bereichs von 0.0 bis `sampleRate`/2 liegt (wobei [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) ist), lautet der entsprechende Wert in diesem Array {{jsxref("NaN")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die drei übergebenen Arrays haben nicht alle dieselbe Länge.

## Beispiele

Im folgenden Beispiel verwenden wir einen Biquad-Filter für einen Medienstrom. (Die vollständige Demo können Sie sich als [stream-source-buffer-Demo](https://mdn.github.io/webaudio-examples/stream-source-buffer/) ansehen oder den [Quellcode lesen](https://github.com/mdn/webaudio-examples/blob/main/stream-source-buffer/index.html).) Im Rahmen dieser Demo ermitteln wir den Frequenzgang des Biquad-Filters für fünf Beispielfrequenzen. Zuerst erstellen wir die benötigten {{jsxref("Float32Array")}}-Arrays: eines mit den Eingabefrequenzen und zwei für die Amplituden- und Phasenwerte der Ausgabe:

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

Anschließend erstellen wir in unserem HTML ein {{ htmlelement("ul") }}-Element für die Ergebnisse und rufen in unserem JavaScript eine Referenz darauf ab:

```html
<p>Biquad filter frequency response for:</p>
<ul class="freq-response-output"></ul>
```

```js
const freqResponseOutput = document.querySelector(".freq-response-output");
```

Nachdem wir den Biquad-Filter erstellt haben, verwenden wir schließlich `getFrequencyResponse()`, um die Frequenzgangdaten zu berechnen und in den Arrays zu speichern. Danach durchlaufen wir die Datensätze und geben sie am unteren Seitenrand als lesbare Liste aus:

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
