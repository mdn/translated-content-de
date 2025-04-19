---
title: "AudioWorkletProcessor: AudioWorkletProcessor() Konstruktor"
short-title: AudioWorkletProcessor()
slug: Web/API/AudioWorkletProcessor/AudioWorkletProcessor
l10n:
  sourceCommit: c5c84b62f3f1fbd46f77c940fa0cbfff649c46a1
---

{{APIRef("Web Audio API")}}

Der **`AudioWorkletProcessor()`**
Konstruktor erstellt ein neues [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Objekt, das einen zugrunde liegenden Audiobearbeitungsmechanismus eines
[`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) darstellt.

> [!NOTE]
> Der `AudioWorkletProcessor` und die von ihm abgeleiteten Klassen
> können nicht direkt aus benutzergeliefertem Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt.

## Syntax

```js-nolint
new AudioWorkletProcessor(options)
```

### Parameter

- `options`

  - : Ein Objekt, das als _options_ Parameter an den
    [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor übergeben wird und
    durch den [strukturieren Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übergeben wird.
    Verfügbare Eigenschaften sind wie folgt:

    <!-- Die Spezifikation verweist auf dieses Objekt als: AudioWorkletNodeOptions -->

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs) Eigenschaft. Standardmäßig 1.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs) Eigenschaft. Standardmäßig 1.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Beispielsweise gibt _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang als _n_ und im zweiten Ausgang als _m_ an. Die Array-Länge muss `numberOfOutputs` entsprechen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte auf diesem Node (in seiner [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) Eigenschaft) enthält, wobei `key` der Name eines benutzerdefinierten Parameters ist und `value` dessen Anfangswert.
    - `processorOptions` {{optional_inline}}
      - : Jegliche zusätzlichen Daten, die für die benutzerdefinierte Initialisierung des zugrunde liegenden [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet werden können.

    Beachten Sie, dass es Standardwerte für die ersten beiden Eigenschaften gibt, sodass selbst wenn kein _options_ Objekt an den [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor übergeben wird, das _options_ Objekt, das vom Node an den `AudioWorkletProcessor` Konstruktor übergeben wird, existiert und zumindest `numberOfInputs` und `numberOfOutputs` enthält.

### Rückgabewert

Die neu konstruierte [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Instanz.

## Beispiele

In diesem Beispiel übergeben wir benutzerdefinierte Optionen an den
[`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor und
beobachten, wie ein [strukturierter Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) davon an unseren `AudioWorkletProcessor` Konstruktor übergeben wird.

Zuerst müssen wir einen benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) definieren und ihn registrieren.
Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    console.log(options.numberOfInputs);
    console.log(options.processorOptions.someUsefulVariable);
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von
`AudioWorkletNode`, wobei wir ihm den Namen des Prozessors und das _options_
Objekt übergeben.

Im _options_ Objekt übergeben wir `processorOptions` mit einer
{{jsxref("Map")}} Instanz unter dem Schlüssel `someUsefulVariable`. Wir übergeben
`numberOfInputs` nicht und sehen, wie es seinen Standardwert erhält.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor", {
  processorOptions: {
    someUsefulVariable: new Map([
      [1, "one"],
      [2, "two"],
    ]),
  },
});
```

Die Konsolenausgabe wird wie folgt sein:

```plain
> 1 // AudioWorkletNode options.numberOfInputs set to default
> Map(2) { 1 => "one", 2 => "two" } // A cloned map under someUsefulVariable
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Schnittstelle
