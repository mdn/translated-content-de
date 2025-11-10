---
title: "AudioWorkletProcessor: AudioWorkletProcessor() Konstruktor"
short-title: AudioWorkletProcessor()
slug: Web/API/AudioWorkletProcessor/AudioWorkletProcessor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`AudioWorkletProcessor()`**
Konstruktor erstellt ein neues [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) Objekt, das einen zugrunde liegenden Audiobearbeitungsmechanismus eines
[`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) darstellt.

> [!NOTE]
> Der `AudioWorkletProcessor` und Klassen, die von ihm erben, können nicht direkt von benutzerdefiniertem Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt.

## Syntax

```js-nolint
new AudioWorkletProcessor(options)
```

### Parameter

- `options`

  - : Ein Objekt, das als _options_ Parameter an den
    [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor übergeben und durch [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) geleitet wird. Verfügbare Eigenschaften sind wie folgt:

    <!-- Die Spezifikation bezeichnet dieses Objekt als: AudioWorkletNodeOptions -->

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs) Eigenschaft. Standardmäßig auf 1 gesetzt.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs) Eigenschaft. Standardmäßig auf 1 gesetzt.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Zum Beispiel spezifiziert _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang als _n_ und im zweiten Ausgang als _m_. Die Array-Länge muss mit `numberOfOutputs` übereinstimmen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte der benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam) Objekte auf diesem Node enthält (in seiner [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) Eigenschaft), wobei `key` der Name eines benutzerdefinierten Parameters und `value` dessen Anfangswert ist.
    - `processorOptions` {{optional_inline}}
      - : Alle zusätzlichen Daten, die für die benutzerdefinierte Initialisierung des zugrunde liegenden [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet werden können.

    Beachten Sie, dass es Standardwerte für die ersten beiden Eigenschaften gibt, sodass selbst wenn kein _options_ Objekt an den [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor übergeben wird, das von dem Node an den `AudioWorkletProcessor` Konstruktor übergebene _options_ Objekt existiert und mindestens `numberOfInputs` und `numberOfOutputs` enthält.

### Rückgabewert

Die neu erstellte [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) Instanz.

## Beispiele

In diesem Beispiel übergeben wir benutzerdefinierte Optionen an den
[`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor und beobachten, wie ein [strukturierter Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) davon an unseren `AudioWorkletProcessor` Konstruktor übergeben wird.

Zuerst müssen wir einen benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) definieren und registrieren.
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
`AudioWorkletNode` und übergeben ihm den Namen des Prozessors und das _options_ Objekt.

Im _options_ Objekt übergeben wir `processorOptions` mit einer
{{jsxref("Map")}} Instanz unter dem `someUsefulVariable` Schlüssel. Wir übergeben nicht
`numberOfInputs` und beobachten, wie es seinen Standardwert erhält.

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
