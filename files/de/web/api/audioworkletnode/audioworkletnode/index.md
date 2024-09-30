---
title: "AudioWorkletNode: AudioWorkletNode() Konstruktor"
short-title: AudioWorkletNode()
slug: Web/API/AudioWorkletNode/AudioWorkletNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Der **`AudioWorkletNode()`**-Konstruktor erstellt ein neues [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Objekt, das einen [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt, der eine JavaScript-Funktion verwendet, um benutzerdefinierte Audiobearbeitung durchzuführen.

## Syntax

```js-nolint
new AudioWorkletNode(context, name)
new AudioWorkletNode(context, name, options)
```

### Parameter

- `context`
  - : Die [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Instanz, mit der dieser Node verbunden sein wird.
- `name`
  - : Ein String, der den Namen des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) darstellt, auf dem dieser Knoten basieren wird. Ein Prozessor mit dem angegebenen Namen muss zuerst mittels der Methode [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor) registriert werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das null oder mehr der folgenden optionalen Eigenschaften enthält, um den neuen Node zu konfigurieren:

    <!-- Die Spezifikation bezeichnet dieses Objekt als: AudioWorkletNodeOptions -->

    > [!NOTE]
    > Das Ergebnis des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), angewendet auf das Objekt, wird auch intern an den zugehörigen [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)-Konstruktor übergeben — dies ermöglicht eine benutzerdefinierte Initialisierung eines benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor).

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs)-Eigenschaft. Standardmäßig ist dies 1.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der [`numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs)-Eigenschaft. Standardmäßig ist dies 1.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Zum Beispiel spezifiziert _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang als _n_ und im zweiten Ausgang als _m_. Die Länge des Arrays muss `numberOfOutputs` entsprechen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte von benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten auf diesem Node (in seiner [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft) enthält, wobei `key` der Name eines benutzerdefinierten Parameters und `value` dessen Anfangswert ist.
    - `processorOptions` {{optional_inline}}
      - : Alle zusätzlichen Daten, die für eine benutzerdefinierte Initialisierung des zugrunde liegenden [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet werden können.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die angegebene `options.outputChannelCount` ist `0` oder größer als die aktuelle Implementierung unterstützt.

    Sowohl `options.numberOfInputs` als auch `options.numberOfOutputs` sind 0.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Länge des `options.outputChannelCount`-Arrays stimmt nicht mit `options.numberOfOutputs` überein.

## Nutzungshinweise

Verschiedene Werte des `options`-Parameters können die folgenden Effekte haben.

Wenn sowohl die Anzahl der Eingänge als auch der Ausgänge auf 0 gesetzt sind, wird ein `NotSupportedError` ausgelöst und der Knotenherstellungsprozess abgebrochen. Wenn die Länge des `outputChannelCount`-Arrays nicht mit `numberOfOutputs` übereinstimmt, wird ein `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn `outputChannelCount` nicht angegeben wird und sowohl `numberOfInputs` als auch `numberOfOutputs` auf 1 gesetzt sind, wird die anfängliche Kanalanzahl des `AudioWorkletNode` auf 1 gesetzt. Dies hat den Effekt, die Anzahl der Ausgangskanäle dynamisch an die berechnete Anzahl der Kanäle anzupassen, basierend auf der Kanalanzahl des Eingangs und der aktuellen Einstellung der [`AudioNode`](/de/docs/Web/API/AudioNode)-Eigenschaft [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).

Andernfalls, wenn `outputChannelCount` angegeben wird _und_ die Werte von `numberOfInputs` und `numberOfOutputs` beide 1 sind, wird die Kanalanzahl des Audio-Worklet-Knotens auf den Wert von `outputChannelCount` gesetzt. Ansonsten wird die Kanalanzahl jedes Kanals im Satz von Ausgangskanälen so gesetzt, dass sie mit dem entsprechenden Wert im `outputChannelCount`-Array übereinstimmt.

## Beispiele

_Für ein vollständiges Beispiel, das benutzerdefinierte Audiobearbeitung demonstriert, siehe die Seite [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Hintergrund-Audiobearbeitung mit AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Schnittstelle
