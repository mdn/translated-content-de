---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletGlobalScope`** Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen globalen Ausführungskontext für benutzerdefinierten Code, der benutzerdefinierte Klassen definiert, die von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleitet sind.

Jeder [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) hat eine einzelne [`AudioWorklet`](/de/docs/Web/API/AudioWorklet), die unter der Eigenschaft [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar ist und deren Code in einem einzigen `AudioWorkletGlobalScope` ausgeführt wird.

Da der globale Ausführungskontext über den aktuellen `BaseAudioContext` geteilt wird, ist es möglich, andere Variablen zu definieren und alle in Worklets erlaubten Aktionen auszuführen – abgesehen von der Definition von `AudioWorkletProcessor` abgeleiteten Klassen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften, die auf seinem Eltern-Interface [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) definiert sind._

- [`currentFrame`](/de/docs/Web/API/AudioWorkletGlobalScope/currentFrame) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den ständig ansteigenden aktuellen Sample-Frame des verarbeiteten Audioblocks darstellt. Er wird nach der Verarbeitung jedes Audioblocks um 128 erhöht (die Größe eines Renderquanten).
- [`currentTime`](/de/docs/Web/API/AudioWorkletGlobalScope/currentTime) {{ReadOnlyInline}}
  - : Gibt eine Kommazahl zurück, die die ständig ansteigende Kontextzeit des verarbeiteten Audioblocks darstellt. Sie ist gleich der [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), zu dem das Worklet gehört.
- [`sampleRate`](/de/docs/Web/API/AudioWorkletGlobalScope/sampleRate) {{ReadOnlyInline}}
  - : Gibt einen Float-Wert zurück, der die Abtastrate des zugehörigen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) darstellt.
- [`port`](/de/docs/Web/API/AudioWorkletGlobalScope/port) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) für benutzerdefinierte asynchrone Kommunikation zwischen Code im Haupt-Thread und dem globalen Scope eines Audio-Worklets zurück.
    Dies ermöglicht benutzerdefinierte Nachrichten, wie das Senden und Empfangen von Steuerdaten oder globalen Einstellungen.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden, die auf seinem Eltern-Interface [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) definiert sind._

- [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)
  - : Registriert eine von der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) Schnittstelle abgeleitete Klasse. Die Klasse kann dann verwendet werden, indem ein [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt wird, dem ihr registrierter Name übergeben wird.

## Beispiele

In diesem Beispiel geben wir alle globalen Eigenschaften im Konstruktor eines benutzerdefinierten [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) in der Konsole aus.

Zuerst müssen wir den Prozessor definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei geschehen sollte.

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

Als nächstes werden wir in unserer Hauptskriptdatei den Prozessor laden, eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellen – indem wir ihm den Namen des Prozessors übergeben – und den Knoten mit einem Audiografen verbinden. Wir sollten die Ausgabe der [`console.log()`](/de/docs/Web/API/console/log_static) Aufrufe in der Konsole sehen:

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
