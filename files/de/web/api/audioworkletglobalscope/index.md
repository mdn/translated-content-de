---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
l10n:
  sourceCommit: d365a618a169aad175463ae028ad33f85b612f89
---

{{APIRef("Web Audio API")}}

Die **`AudioWorkletGlobalScope`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen globalen Ausführungskontext für benutzerdefinierten Code, der eigene von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleitete Klassen definiert.

Jeder [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) verfügt über eine einzelne [`AudioWorklet`](/de/docs/Web/API/AudioWorklet), die unter der [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft verfügbar ist und ihren Code in einem einzelnen `AudioWorkletGlobalScope` ausführt.

Da der globale Ausführungskontext über den aktuellen `BaseAudioContext` hinweg geteilt wird, ist es möglich, andere Variablen zu definieren und alle im Worklet erlaubten Aktionen durchzuführen — abgesehen von der Definition von `AudioWorkletProcessor`-abgeleiteten Klassen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften, die in ihrer übergeordneten Schnittstelle [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) definiert sind._

- [`currentFrame`](/de/docs/Web/API/AudioWorkletGlobalScope/currentFrame) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den ständig zunehmenden aktuellen Sample-Frame des zu verarbeitenden Audio-Blocks darstellt. Sie wird um 128 (die Größe eines Render-Quantum) nach der Verarbeitung jedes Audio-Blocks inkrementiert.
- [`currentTime`](/de/docs/Web/API/AudioWorkletGlobalScope/currentTime) {{ReadOnlyInline}}
  - : Gibt eine Gleitkommazahl zurück, die die ständig zunehmende Kontextzeit des verarbeiteten Audio-Blocks darstellt. Sie ist gleich der [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), zu dem das Worklet gehört.
- [`sampleRate`](/de/docs/Web/API/AudioWorkletGlobalScope/sampleRate) {{ReadOnlyInline}}
  - : Gibt eine Fließkommazahl zurück, die die Samplerate des zugehörigen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) darstellt.
- [`port`](/de/docs/Web/API/AudioWorkletGlobalScope/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) für die benutzerdefinierte, asynchrone Kommunikation zwischen Code im Haupt-Thread und dem globalen Bereich eines Audio-Worklets zurück. Dies ermöglicht benutzerdefinierte Nachrichten wie das Senden und Empfangen von Steuerdaten oder globalen Einstellungen.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden, die in ihrer übergeordneten Schnittstelle [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) definiert sind._

- [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)
  - : Registriert eine Klasse, die von der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle abgeleitet ist. Die Klasse kann dann verwendet werden, indem ein [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt wird, der ihren registrierten Namen angibt.

## Beispiele

In diesem Beispiel geben wir alle globalen Eigenschaften in der Konsole im Konstruktor eines benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) aus.

Zunächst müssen wir den Prozessor definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei geschehen sollte.

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

Als Nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) — indem wir den Namen des Prozessors übergeben — und verbinden den Knoten mit einem Audio-Graphen. Wir sollten die Ausgaben der [`console.log()`](/de/docs/Web/API/console/log_static)-Aufrufe in der Konsole sehen:

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
