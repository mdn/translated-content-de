---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("Web Audio API")}}

Die **`AudioWorkletGlobalScope`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen globalen Ausführungskontext für benutzerdefinierten Code, der benutzerdefinierte, von {{domxref("AudioWorkletProcessor")}} abgeleitete Klassen definiert.

Jeder {{domxref("BaseAudioContext")}} verfügt über eine einzelne {{domxref("AudioWorklet")}}, die unter der Eigenschaft {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} verfügbar ist und deren Code in einem einzigen `AudioWorkletGlobalScope` ausgeführt wird.

Da der globale Ausführungskontext im aktuellen `BaseAudioContext` geteilt wird, ist es möglich, beliebige andere Variablen zu definieren und alle in Worklets zulässigen Aktionen auszuführen — abgesehen von der Definition von von `AudioWorkletProcessor` abgeleiteten Klassen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften, die in ihrer übergeordneten Schnittstelle {{domxref("WorkletGlobalScope")}} definiert sind._

- {{domxref("AudioWorkletGlobalScope.currentFrame", "currentFrame")}} {{ReadOnlyInline}}
  - : Gibt einen Integer-Wert zurück, der den ständig zunehmenden aktuellen Sample-Frame des audioblock verarbeitend repräsentiert. Er wird um 128 (die Größe eines Renderquants) erhöht, nachdem jeder Audioblock verarbeitet wurde.
- {{domxref("AudioWorkletGlobalScope.currentTime", "currentTime")}} {{ReadOnlyInline}}
  - : Gibt einen Double-Wert zurück, der die ständig zunehmende Kontextzeit des audioblock verarbeitend repräsentiert. Er entspricht der {{domxref("BaseAudioContext.currentTime", "currentTime")}}-Eigenschaft des {{domxref("BaseAudioContext")}}, zu dem das Worklet gehört.
- {{domxref("AudioWorkletGlobalScope.sampleRate", "sampleRate")}} {{ReadOnlyInline}}
  - : Gibt einen Float-Wert zurück, der die Abtastrate des zugehörigen {{domxref("BaseAudioContext")}} repräsentiert.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden, die in ihrer übergeordneten Schnittstelle {{domxref("WorkletGlobalScope")}} definiert sind._

- {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}
  - : Registriert eine Klasse, die von der Schnittstelle {{domxref('AudioWorkletProcessor')}} abgeleitet ist. Die Klasse kann dann verwendet werden, indem ein {{domxref("AudioWorkletNode")}} erstellt wird, der seinen registrierten Namen bereitstellt.

## Beispiele

In diesem Beispiel geben wir alle globalen Eigenschaften in der Konsole im Konstruktor eines benutzerdefinierten {{domxref("AudioWorkletProcessor")}} aus.

Zuerst müssen wir den Prozessor definieren und registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

```js
// AudioWorkletProcessor definiert in: test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Gibt den aktuellen Sample-Frame und die Zeit zum Zeitpunkt der Instanziierung aus.
    // Sie sind aus dem AudioWorkletGlobalScope zugänglich.
    console.log(currentFrame);
    console.log(currentTime);
  }

  // Die Prozessmethode ist erforderlich - gibt Stille aus,
  // die Ausgänge sind bereits gefüllt.
  process(inputs, outputs, parameters) {
    return true;
  }
}

// Gibt die Abtastrate aus, die sich niemals ändert,
// da es sich um eine schreibgeschützte Eigenschaft eines BaseAudioContext handelt
// und sie nur während ihrer Instanziierung gesetzt wird.
console.log(sampleRate);

// Sie können beliebige Variablen deklarieren und sie in Ihren Prozessoren verwenden,
// zum Beispiel könnte es ein ArrayBuffer mit einer Wavetable sein
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Als nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von {{domxref("AudioWorkletNode")}} — indem wir den Namen des Prozessors angeben — und verbinden den Knoten mit einem Audiografen. Wir sollten die Ausgabe von {{domxref("console/log_static", "console.log()")}} Aufrufen in der Konsole sehen:

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
