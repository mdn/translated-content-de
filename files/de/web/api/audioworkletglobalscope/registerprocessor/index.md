---
title: "AudioWorkletGlobalScope: registerProcessor() Methode"
short-title: registerProcessor()
slug: Web/API/AudioWorkletGlobalScope/registerProcessor
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`registerProcessor`** Methode der
[`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)-Schnittstelle registriert einen Klassenkonstruktor, der von der
[`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle abgeleitet ist, unter einem angegebenen _Namen_.

## Syntax

```js-nolint
registerProcessor(name, processorCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen darstellt, unter dem der Prozessor registriert wird.
- `processorCtor`
  - : Der Konstruktor einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse.

> [!NOTE]
> Ein Schlüssel-Wert-Paar `{ name: constructor }`
> wird intern im [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) gespeichert, sobald der Prozessor
> registriert ist. Der _Name_ ist zu verwenden, wenn ein
> [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) basierend auf dem registrierten Prozessor erstellt wird. Ein neuer Prozessor mit
> dem angegebenen Namen wird intern erstellt und dem neuen Knoten zugeordnet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird unter den folgenden Bedingungen ausgelöst:

    - Der _Name_ ist ein leerer String.
    - Ein Konstruktor unter dem gegebenen _Name_ ist bereits registriert. Die
      gleiche Name zweimal zu registrieren ist nicht erlaubt.

- {{jsxref("TypeError")}}

  - : Wird unter den folgenden Bedingungen ausgelöst:

    - Der _processorCtor_ ist kein aufrufbarer Konstruktor.
    - Die [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Eigenschaft des Konstruktors existiert und gibt kein Array von auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basierenden Objekten zurück.

## Beispiele

In diesem Beispiel erstellen wir einen benutzerdefinierten `AudioWorkletNode`, der Stille ausgibt.

Zuerst müssen wir einen benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) definieren und ihn registrieren.
Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

Als nächstes laden wir in unserem Hauptskript die Prozessor, erstellen eine Instanz von
`AudioWorkletNode` — übergeben dabei den Prozessor-Namen, den wir bei der Aufrufung von
`registerProcessor` verwendet haben — und verbinden ihn mit einem Audiografik.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const node = new AudioWorkletNode(audioContext, "test-processor");
node.connect(audioContext.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
