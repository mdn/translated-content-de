---
title: "AudioWorkletGlobalScope: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/AudioWorkletGlobalScope/sampleRate
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("Web Audio API")}}

Die nur lesbare **`sampleRate`**-Eigenschaft der {{domxref("AudioWorkletGlobalScope")}}-Schnittstelle gibt einen Float-Wert zurück, der die Abtastrate des zugehörigen {{domxref("BaseAudioContext")}} darstellt, zu dem der Worklet gehört.

## Wert

Eine Gleitkommazahl, die die zugehörige Abtastrate darstellt.

## Beispiele

Der {{domxref("AudioWorkletProcessor")}} hat Zugriff auf die spezifischen Eigenschaften des {{domxref("AudioWorkletGlobalScope")}}:

```js
// AudioWorkletProcessor definiert in: test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Protokolliert den aktuellen Sample-Frame und die Zeit
    // zum Zeitpunkt der Instanziierung.
    // Sie sind vom AudioWorkletGlobalScope zugänglich.
    console.log(currentFrame);
    console.log(currentTime);
  }

  // Die process-Methode ist erforderlich - gibt Stille aus,
  // welche die Ausgaben bereits gefüllt hat.
  process(inputs, outputs, parameters) {
    return true;
  }
}

// Protokolliert die Abtastrate, die sich niemals
// ändern wird, da es sich um eine nur lesbare
// Eigenschaft eines BaseAudioContext handelt
// und nur bei der Instanziierung gesetzt wird.
console.log(sampleRate);

// Sie können Variablen deklarieren und in Ihren Prozessoren verwenden,
// beispielsweise könnte es ein ArrayBuffer mit einer Wavetable sein.
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Das Hauptskript lädt den Prozessor, erstellt eine Instanz von {{domxref("AudioWorkletNode")}}, übergibt den Namen des Prozessors an ihn und verbindet den Knoten mit einem Audiographen. Wir sollten die Ausgabe von {{domxref("console/log_static", "console.log()")}}-Aufrufen in der Konsole sehen:

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
- [Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
