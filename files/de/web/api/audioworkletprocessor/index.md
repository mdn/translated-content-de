---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletProcessor`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert den Audioverarbeitungscode hinter einem benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode). Es befindet sich im [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) und läuft auf dem Web Audio-Rendering-Thread. Ein darauf basierender [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) läuft im Gegenzug auf dem Haupt-Thread.

## Konstruktor

> [!NOTE]
> Der `AudioWorkletProcessor` und Klassen, die davon abgeleitet sind, können nicht direkt durch vom Benutzer bereitgestellten Code instanziiert werden. Stattdessen werden sie intern nur durch die Erstellung eines zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s erzeugt. Der Konstruktor der abgeleiteten Klasse wird mit einem Optionsobjekt aufgerufen, sodass Sie benutzerdefinierte Initialisierungsverfahren durchführen können — siehe die Konstruktorseite für Details.

- [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)
  - : Erstellt eine neue Instanz eines `AudioWorkletProcessor`-Objekts.

## Instanz-Eigenschaften

- [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Prozessor und dem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), zu dem er gehört, verwendet wird. Das andere Ende ist unter der [`port`](/de/docs/Web/API/AudioWorkletNode/port) Eigenschaft des Knotens verfügbar.

## Instanz-Methoden

_Das `AudioWorkletProcessor`-Interface definiert keine eigenen Methoden. Sie müssen jedoch eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode bereitstellen, die aufgerufen wird, um den Audiostrom zu verarbeiten._

## Ereignisse

_Das `AudioWorkletProcessor`-Interface reagiert auf keine Ereignisse._

## Nutzungshinweise

### Ableitende Klassen

Um benutzerdefinierten Audioverarbeitungscode zu definieren, müssen Sie eine Klasse vom `AudioWorkletProcessor`-Interface ableiten. Obwohl nicht im Interface definiert, muss die abgeleitete Klasse die [`process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode haben. Diese Methode wird für jeden Block von 128 Sample-Frames aufgerufen und nimmt Eingangs- und Ausgangs-Arrays sowie berechnete Werte benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)s (falls sie definiert sind) als Parameter entgegen. Sie können Eingaben und Audioparameterwerte verwenden, um das Ausgabearray zu füllen, das standardmäßig Stille enthält.

Optional können Sie, wenn Sie benutzerdefinierte [`AudioParam`](/de/docs/Web/API/AudioParam)s auf Ihrem Knoten wünschen, eine [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Eigenschaft als einen _statischen Getter_ auf dem Prozessor angeben. Das zurückgegebene Array von auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basierenden Objekten wird intern verwendet, um die [`AudioParam`](/de/docs/Web/API/AudioParam)s während der Instanziierung des `AudioWorkletNode` zu erstellen.

Die resultierenden `AudioParam`s befinden sich in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens und können mit Standardmethoden wie [`linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) automatisiert werden. Ihre berechneten Werte werden in die [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode des Prozessors übergeben, damit Sie den Knoten-Ausgang entsprechend formen können.

### Audioverarbeitung

Ein Beispielalgorithmus zum Erstellen eines benutzerdefinierten Audiobearbeitungsmechanismus ist:

1. Erstellen Sie eine separate Datei;
2. In der Datei:

   1. Erweitern Sie die `AudioWorkletProcessor`-Klasse (siehe Abschnitt ["Ableitende Klassen"](#ableitende_klassen)) und geben Sie Ihre eigene [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode an;
   2. Registrieren Sie den Prozessor mit der [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)-Methode;

3. Laden Sie die Datei mit der [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode auf der [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft Ihres Audiokontexts;
4. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) basierend auf dem Prozessor. Der Prozessor wird intern durch den `AudioWorkletNode`-Konstruktor instanziiert.
5. Verbinden Sie den Knoten mit den anderen Knoten.

## Beispiele

Im folgenden Beispiel erstellen wir einen benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), der weißes Rauschen ausgibt.

Zuerst müssen wir einen benutzerdefinierten `AudioWorkletProcessor` definieren, der weißes Rauschen ausgibt, und ihn registrieren. Beachten Sie, dass dies in einer separaten Datei geschehen sollte.

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1;
      }
    });
    return true;
  }
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

Als nächstes laden wir im Hauptskript die Prozessor-Datei, erstellen eine Instanz des [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), übergeben ihm den Namen des Prozessors und verbinden dann den Knoten mit einem Audiographen.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
