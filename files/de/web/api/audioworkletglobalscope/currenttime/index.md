---
title: "AudioWorkletGlobalScope: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AudioWorkletGlobalScope/currentTime
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`currentTime`**-Eigenschaft der [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)-Schnittstelle gibt einen Double-Wert zurück, der die sich ständig erhöhende Kontextzeit des verarbeiteten Audioblocks darstellt. Sie entspricht der [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), zu dem der Worklet gehört.

## Wert

Eine Gleitkommazahl, die die Zeit repräsentiert.

## Beispiele

Der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) hat Zugriff auf die spezifischen Eigenschaften des [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope):

```js
// AudioWorkletProcessor defined in : test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Logs the current sample-frame and time at the moment of instantiation.
    // They are accessible from the AudioWorkletGlobalScope.
    console.log(currentFrame);
    console.log(currentTime);
  }

  // The process method is required - output silence,
  // which the outputs are already filled with.
  process(inputs, outputs, parameters) {
    return true;
  }
}

// Logs the sample rate, that is not going to change ever,
// because it's a read-only property of a BaseAudioContext
// and is set only during its instantiation.
console.log(sampleRate);

// You can declare any variables and use them in your processors
// for example it may be an ArrayBuffer with a wavetable.
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Das Hauptskript lädt den Prozessor, erstellt eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), übergibt den Namen des Prozessors an ihn und verbindet den Knoten mit einem Audiographen. Wir sollten die Ausgabe von [`console.log()`](/de/docs/Web/API/Console/log_static)-Aufrufen in der Konsole sehen:

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor");
testNode.connect(audioContext.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
