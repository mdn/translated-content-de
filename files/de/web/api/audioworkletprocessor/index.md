---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletProcessor`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen Audiobearbeitungscode hinter einem benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode). Es befindet sich im [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) und läuft im Web Audio Rendering-Thread. Im Gegenzug läuft ein darauf basierender [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) im Haupt-Thread.

## Konstruktor

> [!NOTE]
> Der `AudioWorkletProcessor` und die davon abgeleiteten Klassen können nicht direkt vom Benutzer-Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s erzeugt. Der Konstruktor der abgeleiteten Klasse wird mit einem Optionsobjekt aufgerufen, damit Sie eine benutzerdefinierte Initialisierungsprozedur durchführen können — Details dazu finden Sie auf der Constructor-Seite.

- [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)
  - : Erstellt eine neue Instanz eines `AudioWorkletProcessor`-Objekts.

## Instanz-Eigenschaften

- [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Prozessor und dem zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) verwendet wird. Das andere Ende ist unter der [`port`](/de/docs/Web/API/AudioWorkletNode/port)-Eigenschaft des Knotens verfügbar.

## Instanz-Methoden

_Das `AudioWorkletProcessor`-Interface definiert keine eigenen Methoden. Sie müssen jedoch eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode bereitstellen, die aufgerufen wird, um den Audiostream zu verarbeiten._

## Ereignisse

_Das `AudioWorkletProcessor`-Interface reagiert auf keine Ereignisse._

## Anwendungshinweise

### Abgeleitete Klassen

Um einen benutzerdefinierten Audiobearbeitungscode zu definieren, müssen Sie eine Klasse aus dem `AudioWorkletProcessor`-Interface ableiten. Obwohl es nicht im Interface definiert ist, muss die abgeleitete Klasse die [`process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode enthalten. Diese Methode wird für jeden Block von 128 Sample-Frames aufgerufen und nimmt Eingabe- und Ausgabe-Arrays sowie berechnete Werte benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)s (falls definiert) als Parameter entgegen. Sie können Eingaben und Audioparameterwerte verwenden, um das Ausgabearray zu füllen, das standardmäßig Stille enthält.

Optional, wenn Sie benutzerdefinierte [`AudioParam`](/de/docs/Web/API/AudioParam)s auf Ihrem Knoten wollen, können Sie eine [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Eigenschaft als _statischen Getter_ auf dem Prozessor bereitstellen. Das zurückgegebene Array von [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor)-basierten Objekten wird intern verwendet, um die [`AudioParam`](/de/docs/Web/API/AudioParam)s während der Instanzierung des `AudioWorkletNode` zu erstellen.

Die resultierenden `AudioParam`s befinden sich in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens und können mit Standardmethoden wie [`linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) automatisiert werden. Ihre berechneten Werte werden in die [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode des Prozessors übergeben, damit Sie die Knoten-Ausgabe entsprechend gestalten können.

### Audioverarbeitung

Ein Beispielalgorithmus zur Erstellung eines benutzerdefinierten Audiobearbeitungsmechanismus ist:

1. Erstellen Sie eine separate Datei;
2. In der Datei:

   1. Erweitern Sie die `AudioWorkletProcessor`-Klasse (siehe Abschnitt ["Abgeleitete Klassen"](#deriving_classes)) und stellen Sie Ihre eigene [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode darin bereit;
   2. Registrieren Sie den Prozessor mit der Methode [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor);

3. Laden Sie die Datei mit der Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) auf die [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft Ihres Audiokontexts;
4. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) basierend auf dem Prozessor. Der Prozessor wird intern durch den `AudioWorkletNode`-Konstruktor instanziiert.
5. Verbinden Sie den Knoten mit den anderen Knoten.

## Beispiele

Im folgenden Beispiel erstellen wir einen benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), der weißes Rauschen ausgibt.

Zuerst müssen wir einen benutzerdefinierten `AudioWorkletProcessor` definieren, der weißes Rauschen ausgibt, und ihn registrieren. Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

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

Als Nächstes laden wir in unserem Hauptskript die Prozessoren, erstellen eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), indem wir ihm den Namen des Prozessors übergeben, und verbinden dann den Knoten mit einem Audiograf.

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
