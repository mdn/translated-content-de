---
title: "AudioWorkletNode: parameters-Eigenschaft"
short-title: parameters
slug: Web/API/AudioWorkletNode/parameters
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Die schreibgeschützte **`parameters`**-Eigenschaft der
{{domxref("AudioWorkletNode")}}-Schnittstelle gibt die zugehörige
{{domxref("AudioParamMap")}} zurück – das heißt, eine `Map`-ähnliche Sammlung von
{{domxref("AudioParam")}}-Objekten. Diese werden während der Erstellung des
zugrunde liegenden {{domxref("AudioWorkletProcessor")}} gemäß dessen
{{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}-statischen Getter instanziiert.

## Wert

Das {{domxref("AudioParamMap")}}-Objekt, das {{domxref("AudioParam")}}-Instanzen enthält.
Diese können auf die gleiche Weise automatisiert werden wie bei Standard-`AudioNode`s, und ihre
berechneten Werte können in der {{domxref("AudioWorkletProcessor.process", "process")}}-Methode Ihres {{domxref("AudioWorkletProcessor")}} verwendet werden.

## Beispiele

Um die Erstellung und Nutzung benutzerdefinierter `AudioParam`s zu demonstrieren, erweitern wir das
Beispiel von der {{domxref("AudioWorkletNode")}}-Seite. Dort haben wir einen einfachen Knoten erstellt,
der weißes Rauschen ausgibt. Hier werden wir zusätzlich einen benutzerdefinierten Gain-Parameter erstellen, sodass
wir die Lautstärke der Ausgabe direkt ändern können (obwohl dies auch mit
{{domxref("GainNode")}} erreicht werden könnte).

Zuerst müssen wir einen benutzerdefinierten `AudioWorkletProcessor` definieren und registrieren.
Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

Wir erweitern den Prozessor, indem wir einen statischen
{{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}
Getter hinzufügen. Dieser wird intern vom `AudioWorkletNode`-Konstruktor verwendet, um
seine `parameters` mit instanziierten `AudioParam`-Objekten zu füllen.

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
        // Hinweis: Ein Parameter enthält ein Array von 128 Werten (ein Wert für jeweils 128 Samples),
        // es kann jedoch einen einzelnen Wert enthalten, der für alle 128 Samples verwendet werden soll,
        // wenn keine Automation für den Moment geplant ist.
      }
    });
    return true;
  }
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von
`AudioWorkletNode`, indem wir ihm den Namen des Prozessors übergeben, und verbinden den Knoten
mit einem Audiografen.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

Nun können wir den Gain am Knoten wie folgt ändern:

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
