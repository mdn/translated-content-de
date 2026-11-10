---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

> [!NOTE]
> Obwohl die Schnittstelle außerhalb [sicherer Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, gilt dies nicht für die Eigenschaft [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet). Daher können benutzerdefinierte [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Implementierungen außerhalb sicherer Kontexte nicht definiert werden.

Die Schnittstelle **`AudioWorkletNode`** der [Web Audio API](/de/docs/Web/API/Web_Audio_API) stellt eine Basisklasse für einen benutzerdefinierten [`AudioNode`](/de/docs/Web/API/AudioNode) dar, der zusammen mit anderen Knoten mit einem Audio-Routing-Graphen verbunden werden kann. Ihr ist ein [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) zugeordnet, der die eigentliche Audioverarbeitung in einem Web-Audio-Rendering-Thread übernimmt.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode)
  - : Erstellt eine neue Instanz eines `AudioWorkletNode`-Objekts.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Knoten und dem zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet wird. Das andere Ende ist über die Eigenschaft [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) des Prozessors verfügbar.
- [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) {{ReadOnlyInline}}
  - : Gibt eine [`AudioParamMap`](/de/docs/Web/API/AudioParamMap) zurück – eine Sammlung von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten. Diese werden bei der Erstellung des zugrunde liegenden `AudioWorkletProcessor` instanziiert. Wenn der `AudioWorkletProcessor` einen statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Getter besitzt, wird das von ihm zurückgegebene Array von [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor)-Objekten verwendet, um `AudioParam`-Objekte auf dem `AudioWorkletNode` zu erstellen. Mit diesem Mechanismus können Sie eigene `AudioParam`-Objekte über Ihren `AudioWorkletNode` zugänglich machen. Deren Werte können Sie anschließend im zugehörigen `AudioWorkletProcessor` verwenden.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`AudioNode`](/de/docs/Web/API/AudioNode)._

_Die Schnittstelle `AudioWorkletNode` definiert keine eigenen Methoden._

## Ereignisse

- [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)
  - : Wird ausgelöst, wenn im zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) ein Fehler auftritt. Danach geben der Prozessor und damit auch der Knoten für ihre gesamte verbleibende Lebensdauer Stille aus.

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

Anschließend laden wir den Prozessor in unserer Hauptskriptdatei, erstellen eine Instanz von `AudioWorkletNode`, wobei wir den Namen des Prozessors übergeben, und verbinden den Knoten mit einem Audiographen.

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
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
