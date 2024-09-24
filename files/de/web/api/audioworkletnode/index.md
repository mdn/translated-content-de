---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

> [!NOTE]
> Obwohl die Schnittstelle außerhalb von [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, ist die Eigenschaft {{domxref("BaseAudioContext.audioWorklet")}} dies nicht. Daher können benutzerdefinierte {{domxref("AudioWorkletProcessor")}}s außerhalb dieser Kontexte nicht definiert werden.

Das **`AudioWorkletNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) stellt eine Basisklasse für ein benutzerdefiniertes {{domxref("AudioNode")}} dar, das zusammen mit anderen Knoten mit einem Audio-Routing-Diagramm verbunden werden kann. Es hat einen zugehörigen {{domxref("AudioWorkletProcessor")}}, der die eigentliche Audiobearbeitung in einem Web-Audio-Rendering-Thread übernimmt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}}
  - : Erstellt eine neue Instanz eines `AudioWorkletNode`-Objekts.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("AudioWorkletNode.port")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MessagePort")}} zurück, das für die bidirektionale Kommunikation zwischen dem Knoten und seinem zugehörigen {{domxref("AudioWorkletProcessor")}} verwendet wird. Das andere Ende ist unter der Eigenschaft {{domxref("AudioWorkletProcessor.port", "port")}} des Prozessors verfügbar.
- {{domxref("AudioWorkletNode.parameters")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("AudioParamMap")}} zurück – eine Sammlung von {{domxref("AudioParam")}}-Objekten. Diese werden während der Erstellung des zugrundeliegenden `AudioWorkletProcessor` instanziiert. Wenn der `AudioWorkletProcessor` über einen statischen {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}-Getter verfügt, wird das zurückgegebene {{domxref("AudioParamDescriptor")}}-Array verwendet, um `AudioParam`-Objekte auf dem `AudioWorkletNode` zu erstellen. Mit diesem Mechanismus ist es möglich, eigene `AudioParam`-Objekte vom `AudioWorkletNode` aus zugänglich zu machen. Sie können dann ihre Werte im zugehörigen `AudioWorkletProcessor` verwenden.

### Ereignisse

- {{domxref("AudioWorkletNode.processorerror_event", "processorerror")}}
  - : Wird ausgelöst, wenn ein Fehler im zugehörigen {{domxref("AudioWorkletProcessor")}} auftritt. Sobald ausgelöst, geben der Prozessor und folglich der Knoten während seiner gesamten Lebensdauer Stille aus.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

_Das `AudioWorkletNode`-Interface definiert keine eigenen Methoden._

## Beispiele

In diesem Beispiel erstellen wir ein benutzerdefiniertes `AudioWorkletNode`, das Zufallsrauschen ausgibt.

Zuerst müssen wir einen benutzerdefinierten {{domxref("AudioWorkletProcessor")}} definieren, der Zufallsrauschen ausgibt, und diesen registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

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

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von `AudioWorkletNode`, indem wir ihm den Namen des Prozessors übergeben, und verbinden den Knoten mit einem Audio-Diagramm.

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
