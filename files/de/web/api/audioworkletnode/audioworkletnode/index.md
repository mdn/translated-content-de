---
title: "AudioWorkletNode: AudioWorkletNode() Konstruktor"
short-title: AudioWorkletNode()
slug: Web/API/AudioWorkletNode/AudioWorkletNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Der **`AudioWorkletNode()`** Konstruktor erstellt ein neues {{domxref("AudioWorkletNode")}} Objekt, das einen {{domxref("AudioNode")}} darstellt, der eine JavaScript-Funktion zur kundenspezifischen Audioverarbeitung verwendet.

## Syntax

```js-nolint
new AudioWorkletNode(context, name)
new AudioWorkletNode(context, name, options)
```

### Parameter

- `context`
  - : Die {{domxref("BaseAudioContext")}}-Instanz, mit der dieser Knoten verknüpft wird.
- `name`
  - : Ein String, der den Namen des {{domxref("AudioWorkletProcessor")}} darstellt, auf dem dieser Knoten basieren wird. Ein Prozessor mit dem angegebenen Namen muss zuerst mit der Methode {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} registriert werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das null oder mehr der folgenden optionalen Eigenschaften enthält, um den neuen Knoten zu konfigurieren:

    > [!NOTE]
    > Das Ergebnis [des strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm),
    > das auf das Objekt angewendet wird, wird auch intern an den zugehörigen {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}}-Konstruktor übergeben — dies ermöglicht die benutzerdefinierte Initialisierung eines darunter liegenden benutzerdefinierten {{domxref("AudioWorkletProcessor")}}.

    - `numberOfInputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}}-Eigenschaft. Standardwert ist 1.
    - `numberOfOutputs` {{optional_inline}}
      - : Der Wert zur Initialisierung der {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}}-Eigenschaft. Standardwert ist 1.
    - `outputChannelCount` {{optional_inline}}
      - : Ein **Array**, das die Anzahl der Kanäle für jeden Ausgang definiert. Zum Beispiel spezifiziert _outputChannelCount: \[n, m]_ die Anzahl der Kanäle im ersten Ausgang als _n_ und im zweiten Ausgang als _m_. Die Länge des Arrays muss mit `numberOfOutputs` übereinstimmen.
    - `parameterData` {{optional_inline}}
      - : Ein Objekt, das die Anfangswerte der benutzerdefinierten {{domxref("AudioParam")}} Objekte an diesem Knoten enthält (in seiner {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft), wobei `key` der Name eines benutzerdefinierten Parameters ist und `value` dessen Anfangswert.
    - `processorOptions` {{optional_inline}}
      - : Zusätzliche Daten, die für die benutzerdefinierte Initialisierung des zugrundeliegenden {{domxref("AudioWorkletProcessor")}} verwendet werden können.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}

  - : Die angegebene `options.outputChannelCount` ist `0` oder größer als das, was die aktuelle Implementierung unterstützt.

    Sowohl `options.numberOfInputs` als auch `options.numberOfOutputs` sind 0.

- `IndexSizeError` {{domxref("DOMException")}}
  - : Die Länge des `options.outputChannelCount`-Arrays stimmt nicht mit `options.numberOfOutputs` überein.

## Nutzungshinweise

Verschiedene `options`-Parameterwerte können folgende Auswirkungen haben.

Wenn die Anzahl der Eingänge und Ausgänge beide auf 0 gesetzt sind, wird ein `NotSupportedError` ausgelöst und der Konstruktion des Knotens abgebrochen. Wenn die Länge des `outputChannelCount`-Arrays nicht mit `numberOfOutputs` übereinstimmt, wird ein `IndexSizeError` {{domxref("DOMException")}} ausgelöst.

Wenn `outputChannelCount` nicht angegeben ist und sowohl `numberOfInputs` als auch `numberOfOutputs` jeweils 1 sind, wird die anfängliche Kanalanzahl des `AudioWorkletNode` auf 1 gesetzt. Dies hat den Effekt, dass sich die Ausgangskanalanzahl dynamisch auf die berechnete Anzahl der Kanäle ändert, basierend auf der Kanalanzahl des Eingangs und der aktuellen Einstellung der {{domxref("AudioNode")}}-Eigenschaft {{domxref("AudioNode.channelCountMode", "channelCountMode")}}.

Andernfalls, wenn `outputChannelCount` angegeben ist _und_ die Werte von `numberOfInputs` und `numberOfOutputs` jeweils 1 sind, wird die Kanalanzahl des Audio-Worklet-Knotens auf den Wert von `outputChannelCount` gesetzt. Andernfalls wird die Kanalanzahl jeder Kanäle in der Menge der Ausgangskanäle so eingestellt, dass sie mit dem entsprechenden Wert im `outputChannelCount`-Array übereinstimmt.

## Beispiele

_Für ein vollständiges Beispiel zur benutzerdefinierten Audiobearbeitung siehe die {{domxref("AudioWorkletNode")}}-Seite._

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Hintergrund-Audiobearbeitung mit AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- {{domxref("AudioWorkletNode", "AudioWorkletNode")}}-Schnittstelle
