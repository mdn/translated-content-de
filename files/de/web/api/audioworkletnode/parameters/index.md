---
title: "AudioWorkletNode: parameters-Eigenschaft"
short-title: parameters
slug: Web/API/AudioWorkletNode/parameters
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Die schreibgeschützte **`parameters`**-Eigenschaft der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle gibt die zugehörige [`AudioParamMap`](/de/docs/Web/API/AudioParamMap) zurück — also eine `Map`-ähnliche Sammlung von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten. Diese werden während der Erstellung des zugrunde liegenden [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) gemäß seinem [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) statischen Getter instanziiert.

## Wert

Das [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)-Objekt, das [`AudioParam`](/de/docs/Web/API/AudioParam)-Instanzen enthält. Sie können auf die gleiche Weise wie bei Standard-`AudioNode`s automatisiert werden, und ihre berechneten Werte können in der [`process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode Ihres [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) verwendet werden.

## Beispiele

Um die Erstellung und Verwendung benutzerdefinierter `AudioParam`s zu demonstrieren, erweitern wir das Beispiel von der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Seite. Dort haben wir einen einfachen Knoten erstellt, der weißes Rauschen ausgibt. Hier werden wir zusätzlich einen benutzerdefinierten Gain-Parameter erstellen, damit wir die Lautstärke des Outputs direkt ändern können (obwohl Sie dafür auch [`GainNode`](/de/docs/Web/API/GainNode) verwenden könnten).

Zuerst müssen wir einen benutzerdefinierten `AudioWorkletProcessor` definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

Wir erweitern den Prozessor, indem wir einen statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) Getter hinzufügen. Dieser wird intern vom `AudioWorkletNode`-Konstruktor verwendet, um seine `parameters` mit instanziierten `AudioParam`-Objekten zu füllen.

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] =
          (Math.random() * 2 - 1) *
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
        // note: a parameter contains an array of 128 values (one value for each of 128 samples),
        // however it may contain a single value which is to be used for all 128 samples
        // if no automation is scheduled for the moment.
      }
    });
    return true;
  }
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von `AudioWorkletNode`, übergeben ihm den Namen des Prozessors und verbinden den Knoten mit einem Audiographen.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

Nun können wir den Gain am Knoten so ändern:

```js
const gainParam = whiteNoiseNode.parameters.get("customGain");
gainParam.setValueAtTime(0, audioContext.currentTime);
gainParam.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.5);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
