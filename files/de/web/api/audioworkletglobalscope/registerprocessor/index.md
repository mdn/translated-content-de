---
title: "AudioWorkletGlobalScope: registerProcessor()-Methode"
short-title: registerProcessor()
slug: Web/API/AudioWorkletGlobalScope/registerProcessor
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`registerProcessor`**-Methode der
{{domxref("AudioWorkletGlobalScope")}}-Schnittstelle registriert einen Klassenkonstruktor, der von der {{domxref("AudioWorkletProcessor")}}-Schnittstelle abgeleitet ist, unter einem angegebenen _Namen_.

## Syntax

```js-nolint
registerProcessor(name, processorCtor)
```

### Parameter

- `name`
  - : Ein Zeichenfolgentyp, der den Namen darstellt, unter dem der Prozessor registriert wird.
- `processorCtor`
  - : Der Konstruktor einer Klasse, die von {{domxref("AudioWorkletProcessor")}} abgeleitet ist.

> [!NOTE]
> Ein Schlüssel-Wert-Paar `{ name: constructor }`
> wird intern im {{domxref("AudioWorkletGlobalScope")}} gespeichert, sobald der Prozessor registriert ist. Der _Name_ wird bei der Erstellung eines
> {{domxref("AudioWorkletNode")}} auf der Grundlage des registrierten Prozessors verwendet. Ein neuer Prozessor mit dem angegebenen Namen wird intern erstellt und dem neuen Knoten zugeordnet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}

  - : Wird unter den folgenden Bedingungen ausgelöst:

    - Der _Name_ ist eine leere Zeichenfolge.
    - Ein Konstruktor mit dem angegebenen _Namen_ ist bereits registriert. Eine doppelte Registrierung desselben Namens ist nicht erlaubt.

- {{jsxref("TypeError")}}

  - : Wird unter den folgenden Bedingungen ausgelöst:

    - Der _processorCtor_ ist kein aufrufbarer Konstruktor.
    - Die {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}-Eigenschaft des Konstruktors existiert und gibt kein Array von {{domxref("AudioParamDescriptor")}}-basierten Objekten zurück.

## Beispiele

In diesem Beispiel erstellen wir einen benutzerdefinierten `AudioWorkletNode`, der Stille ausgibt.

Zuerst müssen wir einen benutzerdefinierten {{domxref("AudioWorkletProcessor")}} definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von
`AudioWorkletNode` — der der Prozessorname übergeben wird, den wir beim Aufruf von
`registerProcessor` verwendet haben — und verbinden ihn mit einem Audiografen.

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
