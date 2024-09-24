---
title: "AudioWorkletGlobalScope: currentFrame Eigenschaft"
short-title: currentFrame
slug: Web/API/AudioWorkletGlobalScope/currentFrame
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`currentFrame`** Eigenschaft der {{domxref("AudioWorkletGlobalScope")}}-Schnittstelle gibt eine ganze Zahl zurück, die den sich ständig erhöhenden aktuellen Sample-Frame des Audio-Blocks repräsentiert, der gerade verarbeitet wird. Sie wird nach der Verarbeitung jedes Audio-Blocks um 128 (die Größe eines Renderquantums) erhöht.

## Wert

Eine ganze Zahl.

## Beispiele

Der {{domxref("AudioWorkletProcessor")}} hat Zugriff auf die spezifischen {{domxref("AudioWorkletGlobalScope")}} Eigenschaften:

```js
// AudioWorkletProcessor definiert in: test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Protokolliert den aktuellen Sample-Frame und die Zeit
    // zum Zeitpunkt der Instanziierung.
    // Sie sind aus dem AudioWorkletGlobalScope zugänglich.
    console.log(currentFrame);
    console.log(currentTime);
  }

  // Die process-Methode ist erforderlich - gibt Stille aus,
  // da die Ausgaben bereits ausgefüllt sind.
  process(inputs, outputs, parameters) {
    return true;
  }
}

// Protokolliert die Abtastrate, die sich niemals ändern wird,
// da es sich um eine schreibgeschützte Eigenschaft eines BaseAudioContext handelt
// und nur während seiner Instanziierung festgelegt wird.
console.log(sampleRate);

// Sie können beliebige Variablen deklarieren und in Ihren Prozessoren verwenden,
// zum Beispiel kann es ein ArrayBuffer mit einer Wavetable sein.
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Das Hauptskript lädt den Prozessor, erstellt eine Instanz von {{domxref("AudioWorkletNode")}}, übergibt den Namen des Prozessors an diese und verbindet den Knoten mit einem Audiografen. Wir sollten die Ausgabe von {{domxref("console/log_static", "console.log()")}}-Aufrufen in der Konsole sehen:

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor");
testNode.connect(audioContext.destination);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
