---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletProcessor`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert den Audioverarbeitungscode hinter einem benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode). Es lebt im [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) und läuft im Rendering-Thread der Web-Audio-Anwendung. Ein darauf basierender [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) läuft wiederum im Haupt-Thread.

## Konstruktor

> [!NOTE]
> Der `AudioWorkletProcessor` und die von ihm abgeleiteten Klassen können nicht direkt durch vom Benutzer bereitgestellten Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt. Der Konstruktor der abgeleiteten Klasse wird mit einem Optionen-Objekt aufgerufen, sodass individuelle Initialisierungsverfahren durchgeführt werden können — siehe die Seite zum Konstruktor für Details.

- [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)
  - : Erstellt eine neue Instanz eines `AudioWorkletProcessor`-Objekts.

## Instanz-Eigenschaften

- [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Prozessor und dem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), zu dem er gehört, verwendet wird. Das andere Ende ist unter der [`port`](/de/docs/Web/API/AudioWorkletNode/port)-Eigenschaft des Knotens verfügbar.

## Instanz-Methoden

_Das `AudioWorkletProcessor`-Interface definiert keine eigenen Methoden. Allerdings müssen Sie eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode bereitstellen, die aufgerufen wird, um den Audiostream zu verarbeiten._

## Ereignisse

_Das `AudioWorkletProcessor`-Interface reagiert auf keine Ereignisse._

## Verwendungshinweise

### Abgeleitete Klassen

Um benutzerdefinierten Audioverarbeitungscode zu definieren, müssen Sie eine Klasse vom `AudioWorkletProcessor`-Interface ableiten. Obwohl nicht im Interface definiert, muss die abgeleitete Klasse die [`process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode besitzen. Diese Methode wird für jeden Block von 128 Sample-Frames aufgerufen und nimmt Eingabe- und Ausgabearrays sowie berechnete Werte von benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam)s (falls sie definiert sind) als Parameter an. Sie können Eingaben und Audioparameterwerte verwenden, um das Ausgabe-Array zu füllen, das standardmäßig Stille enthält.

Optional, wenn Sie benutzerdefinierte [`AudioParam`](/de/docs/Web/API/AudioParam)s auf Ihrem Knoten haben möchten, können Sie eine [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Eigenschaft als _statischen Getter_ am Prozessor bereitstellen. Das zurückgegebene Array von auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basierenden Objekten wird intern verwendet, um die [`AudioParam`](/de/docs/Web/API/AudioParam)s während der Instanziierung des `AudioWorkletNode` zu erstellen.

Die resultierenden `AudioParam`s befinden sich in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens und können mit Standardmethoden wie [`linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) automatisiert werden. Ihre berechneten Werte werden in die [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode des Prozessors übergeben, damit Sie den Knotenausgang entsprechend gestalten können.

### Audioverarbeitung

Ein Beispielalgorithmus zur Erstellung eines benutzerdefinierten Audioverarbeitungsmechanismus ist:

1. Erstellen Sie eine separate Datei;
2. In der Datei:
   1. Erweitern Sie die `AudioWorkletProcessor`-Klasse (siehe Abschnitt ["Abgeleitete Klassen"](#abgeleitete_klassen)) und fügen Sie Ihre eigene [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode hinzu;
   2. Registrieren Sie den Prozessor mit der [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)-Methode;

3. Laden Sie die Datei mit der [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode auf der [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft Ihres Audiokontextes;
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

Anschließend laden wir in unserem Hauptskript die Prozessor-Datei, erstellen eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), übergeben den Namen des Prozessors und verbinden den Knoten mit einem Audiographen.

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
