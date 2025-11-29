---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

> [!NOTE]
> Obwohl die Schnittstelle außerhalb von [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, ist die Eigenschaft [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) nicht verfügbar, sodass benutzerdefinierte [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)s außerhalb dieser Kontexte nicht definiert werden können.

Das **`AudioWorkletNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert eine Basisklasse für einen benutzerdefinierten [`AudioNode`](/de/docs/Web/API/AudioNode), der zusammen mit anderen Knoten mit einem Audio-Routing-Graph verbunden werden kann. Es gibt einen zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der die eigentliche Audioverarbeitung in einem Web Audio-Rendering-Thread durchführt.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode)
  - : Erstellt eine neue Instanz eines `AudioWorkletNode`-Objekts.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Knoten und seinem zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet wird. Das andere Ende ist unter der [`port`](/de/docs/Web/API/AudioWorkletProcessor/port)-Eigenschaft des Prozessors verfügbar.
- [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) {{ReadOnlyInline}}
  - : Gibt ein [`AudioParamMap`](/de/docs/Web/API/AudioParamMap) zurück — eine Sammlung von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten. Sie werden bei der Erstellung des zugrunde liegenden `AudioWorkletProcessor` instanziiert. Wenn der `AudioWorkletProcessor` einen statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Getter hat, wird das Array von [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor), das von diesem zurückgegeben wird, verwendet, um `AudioParam`-Objekte auf dem `AudioWorkletNode` zu erstellen. Mit diesem Mechanismus ist es möglich, Ihre eigenen `AudioParam`-Objekte zugänglich von Ihrem `AudioWorkletNode` zu machen. Sie können dann deren Werte im zugehörigen `AudioWorkletProcessor` verwenden.

### Ereignisse

- [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)
  - : Wird ausgelöst, wenn ein Fehler im zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) geworfen wird. Einmal ausgelöst, wird der Prozessor und damit der Knoten während seiner gesamten Lebensdauer Stille ausgeben.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

_Das `AudioWorkletNode`-Interface definiert keine eigenen Methoden._

## Beispiele

In diesem Beispiel erstellen wir einen benutzerdefinierten `AudioWorkletNode`, der zufällige Geräusche ausgibt.

Zuerst müssen wir einen benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) definieren, der zufällige Geräusche ausgibt, und ihn registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

```js
// random-noise-processor.js
class RandomNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1;
      }
    });
    return true;
  }
}

registerProcessor("random-noise-processor", RandomNoiseProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von `AudioWorkletNode`, übergeben den Namen des Prozessors und verbinden den Knoten mit einem Audio-Graphen.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("random-noise-processor.js");
const randomNoiseNode = new AudioWorkletNode(
  audioContext,
  "random-noise-processor",
);
randomNoiseNode.connect(audioContext.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwenden von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
