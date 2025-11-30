---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

> [!NOTE]
> Obwohl die Schnittstelle außerhalb von [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, ist die Eigenschaft [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) es nicht, daher können benutzerdefinierte [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)s außerhalb dieser nicht definiert werden.

Die **`AudioWorkletNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) stellt eine Basisklasse für einen benutzerdefinierten [`AudioNode`](/de/docs/Web/API/AudioNode) dar, der zusammen mit anderen Knoten in ein Audio-Routing-Graph verbunden werden kann. Sie hat einen zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der die tatsächliche Audioverarbeitung in einem Web-Audio-Rendering-Thread durchführt.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode)
  - : Erstellt eine neue Instanz eines `AudioWorkletNode`-Objekts.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Knoten und seinem zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet wird. Das andere Ende ist über die [`port`](/de/docs/Web/API/AudioWorkletProcessor/port)-Eigenschaft des Prozessors verfügbar.
- [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) {{ReadOnlyInline}}
  - : Gibt ein [`AudioParamMap`](/de/docs/Web/API/AudioParamMap) zurück — eine Sammlung von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten. Diese werden während der Erstellung des zugrundeliegenden `AudioWorkletProcessor` instanziiert. Wenn der `AudioWorkletProcessor` über einen statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Getter verfügt, wird das daraus zurückgegebene [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor)-Array verwendet, um `AudioParam`-Objekte auf dem `AudioWorkletNode` zu erstellen. Mit diesem Mechanismus ist es möglich, eigene `AudioParam`-Objekte zugänglich zu machen von Ihrem `AudioWorkletNode`. Sie können dann ihre Werte im zugehörigen `AudioWorkletProcessor` verwenden.

### Ereignisse

- [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)
  - : Wird ausgelöst, wenn im zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) ein Fehler auftritt. Sobald er auftritt, wird der Prozessor und folglich der Knoten während seiner gesamten Lebensdauer Stille ausgeben.

## Instanzmethoden

_Erbt auch Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

_Die `AudioWorkletNode`-Schnittstelle definiert keine eigenen Methoden._

## Beispiele

In diesem Beispiel erstellen wir einen benutzerdefinierten `AudioWorkletNode`, der zufälliges Rauschen ausgibt.

Zuerst müssen wir einen benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) definieren, der zufälliges Rauschen ausgibt, und ihn registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

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

Als nächstes werden wir in unserem Hauptskript die Prozessor laden, eine Instanz von `AudioWorkletNode` erstellen, indem wir ihm den Namen des Prozessors übergeben, und den Knoten mit einem Audio-Graphen verbinden.

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
- [AudioWorklet verwenden](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
