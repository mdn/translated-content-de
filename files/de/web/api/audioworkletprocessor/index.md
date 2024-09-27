---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletProcessor`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert den Audiocode hinter einem benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode). Es befindet sich im [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) und läuft auf dem Web Audio Rendering-Thread. Ein darauf basierender [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) läuft wiederum auf dem Hauptthread.

## Konstruktor

> [!NOTE]
> Der `AudioWorkletProcessor` und Klassen, die davon abgeleitet sind, können nicht direkt aus einem vom Benutzer bereitgestellten Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s erstellt. Der Konstruktor der abgeleiteten Klasse wird mit einem Optionsobjekt aufgerufen, sodass Sie benutzerdefinierte Initialisierungsverfahren durchführen können – siehe die Seite zum Konstruktor für Details.

- [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)
  - : Erstellt eine neue Instanz eines `AudioWorkletProcessor`-Objekts.

## Instanz-Eigenschaften

- [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Prozessor und dem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), zu dem er gehört, verwendet wird. Das andere Ende ist unter der [`port`](/de/docs/Web/API/AudioWorkletNode/port)-Eigenschaft des Knotens verfügbar.

## Instanz-Methoden

_Das `AudioWorkletProcessor`-Interface definiert keine eigenen Methoden. Sie müssen jedoch eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode bereitstellen, die zum Verarbeiten des Audiostreams aufgerufen wird._

## Ereignisse

_Das `AudioWorkletProcessor`-Interface reagiert auf keine Ereignisse._

## Nutzungshinweise

### Abgeleitete Klassen

Um benutzerdefinierten Audioverarbeitungscode zu definieren, müssen Sie von der `AudioWorkletProcessor`-Schnittstelle eine Klasse ableiten. Obwohl auf der Schnittstelle nicht definiert, muss die abgeleitete Klasse die [`process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode besitzen. Diese Methode wird für jeden Block von 128 Sample-Frames aufgerufen und nimmt Eingabe- und Ausgabearrays sowie berechnete Werte von benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam)s (falls definiert) als Parameter an. Sie können Eingaben und Audioparameterwerte verwenden, um das Ausgabe-Array zu füllen, das standardmäßig Stille enthält.

Optional können Sie benutzerdefinierte [`AudioParam`](/de/docs/Web/API/AudioParam)s für Ihren Knoten bereitstellen, indem Sie eine [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Eigenschaft als _statischen Getter_ auf dem Prozessor bereitstellen. Das Array von auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor)-basierenden Objekten, das zurückgegeben wird, wird intern verwendet, um die [`AudioParam`](/de/docs/Web/API/AudioParam)s während der Instanziierung des `AudioWorkletNode` zu erstellen.

Die resultierenden `AudioParam`s befinden sich in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens und können mit Standardmethoden wie [`linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) automatisiert werden. Ihre berechneten Werte werden in die [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode des Prozessors übergeben, damit Sie die Knotenausgabe entsprechend formen können.

### Audioverarbeitung

Ein Beispielalgorithmus zur Erstellung eines benutzerdefinierten Audioverarbeitungsmechanismus ist:

1. Erstellen Sie eine separate Datei;
2. In der Datei:

   1. Erweitern Sie die `AudioWorkletProcessor`-Klasse (siehe ["Abgeleitete Klassen"-Abschnitt](#abgeleitete_klassen)) und liefern Sie Ihre eigene [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode darin;
   2. Registrieren Sie den Prozessor mit der Methode [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor);

3. Laden Sie die Datei mit der Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) über die [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft Ihres Audiokontexts;
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

Als Nächstes laden wir in unserer Hauptskriptdatei den Prozessor, erstellen eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), indem wir ihm den Namen des Prozessors übergeben, und verbinden dann den Knoten mit einem Audiografie.

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
