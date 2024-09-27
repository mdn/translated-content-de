---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletGlobalScope`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen globalen Ausführungskontext für vom Benutzer bereitgestellten Code, der benutzerdefinierte von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleitete Klassen definiert.

Jeder [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) hat eine einzelne [`AudioWorklet`](/de/docs/Web/API/AudioWorklet), die unter der Eigenschaft [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar ist und ihren Code in einem einzigen `AudioWorkletGlobalScope` ausführt.

Da der globale Ausführungskontext im aktuellen `BaseAudioContext` geteilt ist, ist es möglich, andere Variablen zu definieren und alle in Worklets erlaubten Aktionen durchzuführen — abgesehen von der Definition von von `AudioWorkletProcessor` abgeleiteten Klassen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften, die auf seinem übergeordneten Interface [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) definiert sind._

- [`currentFrame`](/de/docs/Web/API/AudioWorkletGlobalScope/currentFrame) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den ständig zunehmenden aktuellen Sample-Frame des zu verarbeitenden Audioblocks darstellt. Er wird um 128 (die Größe eines Render-Quantums) nach der Verarbeitung jedes Audioblocks erhöht.
- [`currentTime`](/de/docs/Web/API/AudioWorkletGlobalScope/currentTime) {{ReadOnlyInline}}
  - : Gibt einen Gleitkommawert zurück, der die ständig zunehmende Kontextzeit des zu verarbeitenden Audioblocks darstellt. Er ist gleich der [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), zu dem das Worklet gehört.
- [`sampleRate`](/de/docs/Web/API/AudioWorkletGlobalScope/sampleRate) {{ReadOnlyInline}}
  - : Gibt einen Fließkommawert zurück, der die Samplerate des zugehörigen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) darstellt.

## Instanzmethoden

_Dieses Interface erbt auch Methoden, die auf seinem übergeordneten Interface [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) definiert sind._

- [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)
  - : Registriert eine Klasse, die von der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle abgeleitet ist. Die Klasse kann dann verwendet werden, indem ein [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt und ihr registrierter Name übergeben wird.

## Beispiele

In diesem Beispiel geben wir alle globalen Eigenschaften in der Konsole im Konstruktor eines benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) aus.

Zuerst müssen wir den Prozessor definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

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
// for example it may be an ArrayBuffer with a wavetable
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) — indem wir den Namen des Prozessors übergeben — und verbinden den Knoten mit einem Audiografen. Wir sollten die Ausgaben der [`console.log()`](/de/docs/Web/API/Console/log_static)-Aufrufe in der Konsole sehen:

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
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
