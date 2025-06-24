---
title: "AudioWorkletNode: AudioWorkletNode() Konstruktor"
short-title: AudioWorkletNode()
slug: Web/API/AudioWorkletNode/AudioWorkletNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Der **`AudioWorkletNode()`**
Konstruktor erstellt ein neues [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Objekt, das ein
[`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert, welches eine JavaScript-Funktion zur individuellen Audioverarbeitung verwendet.

## Syntax

```js-nolint
new AudioWorkletNode(context, name)
new AudioWorkletNode(context, name, options)
```

### Parameter

- `context`
  - : Die Instanz von [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), der dieser Knoten zugeordnet wird.
- `name`
  - : Ein String, der den Namen des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) repräsentiert, auf dem dieser Knoten basiert. Ein Prozessor mit dem angegebenen Namen muss zunächst registriert werden, indem die Methode [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor) verwendet wird.
- `options` {{optional_inline}}

  - : Ein Objekt, das null oder mehr der folgenden optionalen Eigenschaften enthält, um den neuen Knoten zu konfigurieren:

    <!-- Die Spezifikation bezeichnet dieses Objekt als: AudioWorkletNodeOptions -->

    > [!NOTE]
    > Das Ergebnis des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm),
    > angewendet auf das Objekt, wird intern auch an den zugehörigen [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)-Konstruktor übergeben
    > — dies ermöglicht eine benutzerdefinierte Initialisierung eines zugrunde liegenden, benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor).

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert zum Initialisieren der [`numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs)-Eigenschaft. Standard ist 1.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert zum Initialisieren der [`numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs)-Eigenschaft. Standard ist 1.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Zum Beispiel gibt _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang als _n_ und im zweiten Ausgang als _m_ an. Die Länge des Arrays muss `numberOfOutputs` entsprechen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte der benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte an diesem Knoten enthält (in seiner [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft), wobei `key` der Name eines benutzerdefinierten Parameters und `value` sein Anfangswert ist.
    - `processorOptions` {{optional_inline}}
      - : Jegliche zusätzlichen Daten, die für eine benutzerdefinierte Initialisierung des zugrunde liegenden [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet werden können.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die angegebene `options.outputChannelCount` ist `0` oder größer, als die aktuelle Implementierung unterstützt.

    Sowohl `options.numberOfInputs` als auch `options.numberOfOutputs` sind 0.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Länge des `options.outputChannelCount`-Arrays entspricht nicht
    `options.numberOfOutputs`.

## Verwendungshinweise

Verschiedene `options`-Parameterwerte können die folgenden Effekte haben.

Wenn sowohl die Anzahl der Eingänge als auch die Anzahl der Ausgänge auf 0 gesetzt sind, wird ein `NotSupportedError` ausgelöst und der Knoten-Konstruktionsprozess abgebrochen. Wenn die Länge des `outputChannelCount`-Arrays nicht `numberOfOutputs` entspricht, wird ein `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn `outputChannelCount` nicht angegeben ist und `numberOfInputs` und `numberOfOutputs` beide 1 sind, wird die anfängliche Kanalanzahl des `AudioWorkletNode` auf 1 gesetzt. Dies hat zur Folge, dass sich die Ausgangskanalanzahl dynamisch an die berechnete Anzahl der Kanäle anpasst, basierend auf der Kanalanzahl des Eingangs und der aktuellen Einstellung der [`AudioNode`](/de/docs/Web/API/AudioNode)-Eigenschaft [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).

Andernfalls, wenn `outputChannelCount` angegeben ist _und_ die Werte von `numberOfInputs` und `numberOfOutputs` beide 1 sind, wird die Kanalanzahl des Audio-Worklet-Knotens auf den Wert von `outputChannelCount` gesetzt. Andernfalls wird die Kanalanzahl jedes Kanals im Satz der Ausgangskanäle auf den entsprechenden Wert im `outputChannelCount`-Array gesetzt.

## Beispiele

_Für ein vollständiges Beispiel, das benutzerdefinierte Audioprozesse demonstriert, siehe die
[`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Seite._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Hintergrund-Audiobearbeitung mit AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Schnittstelle
