---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

> [!NOTE]
> Obwohl die Schnittstelle außerhalb von [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, ist die [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) Eigenschaft nicht verfügbar. Dadurch können benutzerdefinierte [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)s außerhalb dieser nicht definiert werden.

Das **`AudioWorkletNode`** Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert eine Basisklasse für einen benutzerdefinierten [`AudioNode`](/de/docs/Web/API/AudioNode), der zusammen mit anderen Knoten zu einem Audiorouting-Graph verbunden werden kann. Es hat einen zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der die eigentliche Audiobearbeitung in einem Web Audio-Rendering-Thread durchführt.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode)
  - : Erstellt eine neue Instanz eines `AudioWorkletNode` Objekts.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Knoten und seinem zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet wird. Das andere Ende ist über die [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) Eigenschaft des Prozessors verfügbar.
- [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) {{ReadOnlyInline}}
  - : Gibt ein [`AudioParamMap`](/de/docs/Web/API/AudioParamMap) — eine Sammlung von [`AudioParam`](/de/docs/Web/API/AudioParam) Objekten. Diese werden während der Erstellung des zugrunde liegenden `AudioWorkletProcessor` instanziiert. Falls der `AudioWorkletProcessor` eine statische [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) Getter hat, wird das [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) Array, das von diesem zurückgegeben wird, verwendet, um `AudioParam` Objekte auf dem `AudioWorkletNode` zu erstellen. Mit diesem Mechanismus ist es möglich, Ihre eigenen `AudioParam` Objekte über Ihren `AudioWorkletNode` zugänglich zu machen. Sie können dann deren Werte im zugehörigen `AudioWorkletProcessor` verwenden.

### Ereignisse

- [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)
  - : Wird ausgelöst, wenn ein Fehler im zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) auftritt. Sobald der Fehler auftritt, werden der Prozessor und folglich der Knoten während seiner gesamten Lebensdauer Stille ausgeben.

## Instanzmethoden

_Erbt auch Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

_Das `AudioWorkletNode` Interface definiert keine eigenen Methoden._

## Beispiele

In diesem Beispiel erstellen wir einen benutzerdefinierten `AudioWorkletNode`, der zufälliges Rauschen ausgibt.

Zuerst müssen wir einen benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) definieren, der zufälliges Rauschen ausgibt und ihn registrieren. Beachten Sie, dass dies in einer separaten Datei geschehen sollte.

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

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von `AudioWorkletNode` und übergeben den Namen des Prozessors. Dann verbinden wir den Knoten mit einem Audiographen.

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
