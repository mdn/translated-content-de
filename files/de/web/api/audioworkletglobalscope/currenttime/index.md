---
title: "AudioWorkletGlobalScope: Eigenschaft currentTime"
short-title: currentTime
slug: Web/API/AudioWorkletGlobalScope/currentTime
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`currentTime`**-Eigenschaft der {{domxref("AudioWorkletGlobalScope")}}-Schnittstelle gibt einen Double-Wert zurück, der die ständig ansteigende Kontextzeit des bearbeiteten Audio-Blocks darstellt. Sie entspricht der {{domxref("BaseAudioContext.currentTime", "currentTime")}}-Eigenschaft des {{domxref("BaseAudioContext")}}, zu dem der Worklet gehört.

## Wert

Eine Gleitkommazahl, die die Zeit repräsentiert.

## Beispiele

Der {{domxref("AudioWorkletProcessor")}} hat Zugang zu den spezifischen {{domxref("AudioWorkletGlobalScope")}}-Eigenschaften:

```js
// AudioWorkletProcessor definiert in : test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Protokolliert das aktuelle Sample-Frame und die Zeit zum Zeitpunkt der Instanziierung.
    // Sie sind aus dem AudioWorkletGlobalScope zugänglich.
    console.log(currentFrame);
    console.log(currentTime);
  }

  // Die Prozessmethodik ist erforderlich - gibt Stille aus,
  // die Ausgaben sind bereits gefüllt.
  process(inputs, outputs, parameters) {
    return true;
  }
}

// Protokolliert die Samplerate, die sich nie ändern wird,
// da es sich um eine schreibgeschützte Eigenschaft eines BaseAudioContext handelt
// und nur während seiner Instanziierung gesetzt wird.
console.log(sampleRate);

// Sie können beliebige Variablen deklarieren und in Ihren Prozessoren verwenden,
// zum Beispiel könnte es ein ArrayBuffer mit einer Wavetable sein.
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Das Hauptskript lädt den Prozessor, erstellt eine Instanz von {{domxref("AudioWorkletNode")}}, übergibt ihm den Namen des Prozessors und verbindet den Node mit einem Audiografen. Wir sollten die Ausgabe der {{domxref("console/log_static", "console.log()")}}-Aufrufe in der Konsole sehen:

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
