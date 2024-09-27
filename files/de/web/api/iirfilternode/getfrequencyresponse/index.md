---
title: "IIRFilterNode: Methode getFrequencyResponse()"
short-title: getFrequencyResponse()
slug: Web/API/IIRFilterNode/getFrequencyResponse
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

Die Methode `getFrequencyResponse()` der [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Schnittstelle nimmt die aktuellen Filteralgorithmen-Einstellungen und berechnet die Frequenzantwort für die in einem angegebenen Frequenzarray spezifizierten Frequenzen.

Die beiden Ausgabearrays, `magResponseOutput` und `phaseResponseOutput`, müssen vor dem Aufruf dieser Methode erstellt werden; sie müssen die gleiche Größe wie das Array der Eingabefrequenzwerte (`frequencyArray`) haben.

## Syntax

```js-nolint
getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput)
```

### Parameter

- `frequencyArray`
  - : Ein {{jsxref("Float32Array")}}, das ein Array von Frequenzen in Hertz enthält, das gefiltert werden soll.
- `magResponseOutput`
  - : Ein {{jsxref("Float32Array")}} zur Aufnahme der berechneten Magnituden der Frequenzantwort für jeden Frequenzwert im `frequencyArray`.
- `phaseResponseOutput`
  - : Ein {{jsxref("Float32Array")}} zur Aufnahme der berechneten Phasenantwortwerte in Radiant für jeden Frequenzwert im Eingabe-`frequencyArray`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft einen Fehler, wenn die drei bereitgestellten Arrays nicht alle die gleiche Länge haben.

## Beispiele

Im folgenden Beispiel verwenden wir einen IIR-Filter auf einem Medienstrom (für eine vollständige Demo siehe unser [stream-source-buffer demo](https://mdn.github.io/webaudio-examples/stream-source-buffer/) live oder [lesen Sie den Quellcode](https://github.com/mdn/webaudio-examples/blob/main/stream-source-buffer/index.html)). Als Teil dieser Demo erhalten wir die Frequenzantworten für diesen IIR-Filter für fünf Beispiel-Frequenzen. Wir erstellen zuerst die benötigten {{jsxref("Float32Array")}}-Objekte: eines enthält die Eingabefrequenzen und zwei, um die Ausgabemagnitude- und Phasenwerte zu empfangen:

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

Als Nächstes erstellen wir ein {{ htmlelement("ul") }}-Element in unserem HTML, um unsere Ergebnisse zu enthalten, und greifen in unserem JavaScript darauf zu:

```html
<p>IIR filter frequency response for:</p>
<ul class="freq-response-output"></ul>
```

```js
const freqResponseOutput = document.querySelector(".freq-response-output");
```

Schließlich, nachdem wir unseren Filter erstellt haben, verwenden wir `getFrequencyResponse()`, um die Antwortdaten zu generieren und in unsere Arrays zu setzen. Dann durchlaufen wir jeden Datensatz und geben sie in einer menschenlesbaren Liste am unteren Rand der Seite aus:

```js
const feedforwardCoefficients = [0.1, 0.2, 0.3, 0.4, 0.5];
const feedbackCoefficients = [0.5, 0.4, 0.3, 0.2, 0.1];

const iirFilter = audioCtx.createIIRFilter(
  feedforwardCoefficients,
  feedbackCoefficients,
);

// …

function calcFrequencyResponse() {
  iirFilter.getFrequencyResponse(
    myFrequencyArray,
    magResponseOutput,
    phaseResponseOutput,
  );

  for (let i = 0; i < myFrequencyArray.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${myFrequencyArray[i]}Hz: Magnitude ${magResponseOutput[i]}, Phase ${phaseResponseOutput[i]} radians.`;
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
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
