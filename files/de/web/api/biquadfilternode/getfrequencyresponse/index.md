---
title: "BiquadFilterNode: Methode getFrequencyResponse()"
short-title: getFrequencyResponse()
slug: Web/API/BiquadFilterNode/getFrequencyResponse
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{ APIRef("Web Audio API") }}

Die Methode `getFrequencyResponse()` der {{ domxref("BiquadFilterNode")}} Schnittstelle nimmt die aktuellen Einstellungen des Filteralgorithmus und berechnet die Frequenzantwort für die in einem bestimmten Frequenzarray angegebenen Frequenzen.

Die beiden Ausgabearrays, `magResponseOutput` und
`phaseResponseOutput`, müssen vor dem Aufrufen dieser Methode erstellt werden; sie
müssen die gleiche Größe wie das Array der Eingabefrequenzwerte
(`frequencyArray`) haben.

## Syntax

```js-nolint
getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput)
```

### Parameter

- `frequencyArray`
  - : Ein {{jsxref("Float32Array")}}, das ein Array von Frequenzen in Hertz enthält,
    die Sie filtern möchten.
- `magResponseOutput`
  - : Ein {{jsxref("Float32Array")}}, das die berechneten Amplituden der Frequenzantwort
    für jeden Frequenzwert im `frequencyArray` erhält. Für jede
    Frequenz in `frequencyArray`, deren Wert außerhalb des Bereichs von 0,0 bis
    `sampleRate`/2 liegt (wobei {{domxref("BaseAudioContext/sampleRate", "sampleRate")}}
    die Abtastrate des {{domxref("AudioContext")}} ist), ist der entsprechende Wert in
    diesem Array {{jsxref("NaN")}}. Diese sind einheitenlose Werte.
- `phaseResponseOutput`
  - : Ein {{jsxref("Float32Array")}}, das die berechneten Phasenantwortwerte in
    Radiant für jeden Frequenzwert im Eingabe-`frequencyArray` erhält. Für jede
    Frequenz in `frequencyArray`, deren Wert außerhalb des Bereichs von 0,0 bis
    `sampleRate`/2 liegt (wobei {{domxref("BaseAudioContext/sampleRate", "sampleRate")}}
    die Abtastrate des {{domxref("AudioContext")}} ist), ist der entsprechende Wert in
    diesem Array {{jsxref("NaN")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError`
  - : Die drei bereitgestellten Arrays sind nicht alle gleich lang.

## Beispiele

Im folgenden Beispiel verwenden wir einen Biquad-Filter auf einem Medienstream (für die vollständige
Demo, siehe unser [Stream-Source-Buffer-Demo](https://mdn.github.io/webaudio-examples/stream-source-buffer/) live, oder [lesen Sie den Quellcode](https://github.com/mdn/webaudio-examples/blob/main/stream-source-buffer/index.html)). Im Rahmen dieses Demos ermitteln wir die Frequenzantworten für diesen Biquad-Filter für fünf Beispiel-Frequenzen. Zuerst erstellen wir die {{jsxref("Float32Array")}}s, die wir
benötigen, eines, das die Eingabefrequenzen enthält, und zwei, um die Ausgabe-Amplituden und
Phasenwerte zu empfangen:

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

Als nächstes erstellen wir ein {{ htmlelement("ul") }}-Element in unserem HTML, um unsere Ergebnisse aufzunehmen, und greifen in unserem JavaScript darauf zu:

```html
<p>Biquad-Filter-Frequenzantwort für:</p>
<ul class="freq-response-output"></ul>
```

```js
const freqResponseOutput = document.querySelector(".freq-response-output");
```

Schließlich, nachdem wir unseren Biquad-Filter erstellt haben, verwenden wir `getFrequencyResponse()`, um die Antwortdaten zu generieren und in unsere Arrays einzufügen, dann durchlaufen wir jede Datensatz und geben sie in einer menschenlesbaren Liste am Ende der Seite aus:

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
    listItem.textContent = `: Amplitude ${magResponseOutput[i]}, Phase ${phaseResponseOutput[i]} Radiant.`;
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
