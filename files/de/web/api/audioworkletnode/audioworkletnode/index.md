---
title: "AudioWorkletNode: AudioWorkletNode() Konstruktor"
short-title: AudioWorkletNode()
slug: Web/API/AudioWorkletNode/AudioWorkletNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Der **`AudioWorkletNode()`**-Konstruktor erstellt ein neues [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt, welches eine JavaScript-Funktion für benutzerdefinierte Audiobearbeitung verwendet.

## Syntax

```js-nolint
new AudioWorkletNode(context, name)
new AudioWorkletNode(context, name, options)
```

### Parameter

- `context`
  - : Die [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Instanz, mit der dieser Knoten assoziiert wird.
- `name`
  - : Ein String, der den Namen des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) angibt, auf dem dieser Knoten basieren wird. Ein Prozessor mit dem angegebenen Namen muss zuerst mit der Methode [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor) registriert werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das null oder mehr der folgenden optionalen Eigenschaften zur Konfiguration des neuen Knotens enthält:

    <!-- Die Spezifikation verweist auf dieses Objekt als: AudioWorkletNodeOptions -->

    > [!NOTE]
    > Das Ergebnis des [strukturieren Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm),
    > das auf das Objekt angewendet wird, wird intern auch an den zugehörigen [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)-Konstruktor übergeben
    > — dies ermöglicht eine benutzerdefinierte Initialisierung eines unterliegenden, benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor).

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs)-Eigenschaft. Standardmäßig 1.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs)-Eigenschaft. Standardmäßig 1.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Beispielsweise legt _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang auf _n_ und im zweiten Ausgang auf _m_ fest. Die Länge des Arrays muss `numberOfOutputs` entsprechen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte auf diesem Knoten enthält (in seiner [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft), wobei `key` der Name eines benutzerdefinierten Parameters und `value` dessen Anfangswert ist.
    - `processorOptions` {{optional_inline}}
      - : Alle zusätzlichen Daten, die für eine benutzerdefinierte Initialisierung des zugrundeliegenden [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet werden können.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die angegebene `options.outputChannelCount` ist `0` oder größer als die aktuell unterstützte Implementierung.

    Sowohl `options.numberOfInputs` als auch `options.numberOfOutputs` sind 0.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Länge des `options.outputChannelCount`-Arrays stimmt nicht mit `options.numberOfOutputs` überein.

## Nutzungshinweise

Verschiedene `options`-Parameterwerte können die folgenden Effekte haben.

Wenn sowohl die Anzahl der Eingänge als auch die Anzahl der Ausgänge auf 0 gesetzt sind, wird ein `NotSupportedError` ausgelöst und der Konstruktion des Knotens wird abgebrochen. Wenn die Länge des `outputChannelCount`-Arrays nicht mit `numberOfOutputs` übereinstimmt, wird ein `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn `outputChannelCount` nicht angegeben ist und `numberOfInputs` und `numberOfOutputs` beide 1 sind, wird die anfängliche Kanalanzahl des `AudioWorkletNode` auf 1 gesetzt. Dies bewirkt, dass sich die Anzahl der Ausgabekanäle dynamisch ändert, basierend auf der Anzahl der Eingangskanäle und der aktuellen Einstellung der [`AudioNode`](/de/docs/Web/API/AudioNode)-Eigenschaft [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).

Andernfalls, wenn `outputChannelCount` angegeben ist _und_ die Werte von `numberOfInputs` und `numberOfOutputs` beide 1 sind, wird die Kanalanzahl des Audioworklet-Knotens auf den Wert von `outputChannelCount` gesetzt. Andernfalls wird die Kanalanzahl jedes Kanals im Satz der Kanäle der Ausgänge entsprechend dem entsprechenden Wert im `outputChannelCount`-Array eingestellt.

## Beispiele

_Ein vollständiges Beispiel zur Demonstration benutzerdefinierter Audiobearbeitung finden Sie auf der Seite
[`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Hintergrund-Audiobearbeitung mit AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle
