---
title: "AudioWorkletProcessor: AudioWorkletProcessor() Konstruktor"
short-title: AudioWorkletProcessor()
slug: Web/API/AudioWorkletProcessor/AudioWorkletProcessor
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Der **`AudioWorkletProcessor()`** Konstruktor erstellt ein neues {{domxref("AudioWorkletProcessor")}}-Objekt, welches den zugrunde liegenden Audiobearbeitungsmechanismus eines {{domxref("AudioWorkletNode")}} darstellt.

## Syntax

> [!NOTE]
> Der `AudioWorkletProcessor` und von ihm abgeleitete Klassen können nicht direkt aus vom Nutzer bereitgestelltem Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen {{domxref("AudioWorkletNode")}}s erzeugt.

```js-nolint
new AudioWorkletProcessor(options)
```

### Parameter

- `options`

  - : Ein Objekt, das als _options_ Parameter an den {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} Konstruktor übergeben und durch den [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) weitergeleitet wird. Verfügbare Eigenschaften sind wie folgt:

    <!-- Die Spezifikation verweist auf dieses Objekt als: AudioWorkletNodeOptions -->

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert, um die {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}} Eigenschaft zu initialisieren. Standardwert ist 1.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert, um die {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}} Eigenschaft zu initialisieren. Standardwert ist 1.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Beispielsweise gibt _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang mit _n_ und im zweiten Ausgang mit _m_ an. Die Array-Länge muss `numberOfOutputs` entsprechen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte der benutzerdefinierten {{domxref("AudioParam")}} Objekte auf diesem Knoten enthält (in seiner {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft), wobei der `key` der Name des benutzerdefinierten Parameters und `value` sein Anfangswert ist.
    - `processorOptions` {{optional_inline}}
      - : Jegliche zusätzlichen Daten, die für die benutzerdefinierte Initialisierung des zugrunde liegenden {{domxref("AudioWorkletProcessor")}} genutzt werden können.

    Beachten Sie, dass es Standardwerte für die ersten beiden Eigenschaften gibt, sodass selbst wenn kein _options_ Objekt an den {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} Konstruktor übergeben wird, das vom Knoten an den `AudioWorkletProcessor` Konstruktor übergebene _options_ Objekt existiert und mindestens `numberOfInputs` und `numberOfOutputs` enthält.

### Rückgabewert

Die neu konstruierte {{domxref("AudioWorkletProcessor")}}-Instanz.

## Beispiele

In diesem Beispiel übergeben wir benutzerdefinierte Optionen an den {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} Konstruktor und beobachten, wie eine [strukturierte Kopie](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) dieser an unseren `AudioWorkletProcessor` Konstruktor übergeben wird.

Zuerst müssen wir einen benutzerdefinierten {{domxref("AudioWorkletProcessor")}} definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

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

Als nächstes laden wir in unserem Hauptskript die Prozessor-Datei, erstellen eine Instanz von `AudioWorkletNode` und übergeben ihr den Namen des Prozessors sowie das _options_ Objekt.

In dem _options_ Objekt übergeben wir `processorOptions` mit einer {{jsxref("Map")}} Instanz unter dem Schlüssel `someUsefulVariable`. Wir geben `numberOfInputs` nicht an und sehen, wie es seinen Standardwert erhält.

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

Die Konsolenausgabe wird wie folgt aussehen:

```plain
> 1 // AudioWorkletNode options.numberOfInputs auf Standardwert gesetzt
> Map(2) { 1 => "one", 2 => "two" } // Eine geklonte Map unter someUsefulVariable
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} Schnittstelle
