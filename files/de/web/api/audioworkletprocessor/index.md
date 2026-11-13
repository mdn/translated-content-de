---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("Web Audio API")}}

Die **`AudioWorkletProcessor`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert den Audioverarbeitungscode hinter einem benutzerdefinierten [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode). Sie befindet sich im [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) und wird im Rendering-Thread der Web Audio API ausgeführt. Ein darauf basierender [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) wird dagegen im Hauptthread ausgeführt.

## Konstruktor

> [!NOTE]
> `AudioWorkletProcessor` und davon abgeleitete Klassen können nicht direkt durch benutzerseitigen Code instanziiert werden. Stattdessen werden ihre Instanzen ausschließlich intern erstellt, wenn ein zugehöriger [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erzeugt wird. Der Konstruktor der abgeleiteten Klasse wird mit einem Optionsobjekt aufgerufen, sodass Sie eigene Initialisierungsschritte ausführen können. Einzelheiten finden Sie auf der Seite zum Konstruktor.

- [`AudioWorkletProcessor()`](/de/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)
  - : Erstellt eine neue Instanz eines `AudioWorkletProcessor`-Objekts.

## Instanzeigenschaften

- [`port`](/de/docs/Web/API/AudioWorkletProcessor/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück, der für die bidirektionale Kommunikation zwischen dem Prozessor und dem zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) verwendet wird. Das andere Ende ist über die Eigenschaft [`port`](/de/docs/Web/API/AudioWorkletNode/port) des Nodes verfügbar.

## Instanzmethoden

_Die `AudioWorkletProcessor`-Schnittstelle definiert keine eigenen Methoden. Sie müssen jedoch eine Methode [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) bereitstellen, die zur Verarbeitung des Audiostreams aufgerufen wird._

## Ereignisse

_Die `AudioWorkletProcessor`-Schnittstelle reagiert auf keine Ereignisse._

## Hinweise zur Verwendung

### Abgeleitete Klassen

Um benutzerdefinierten Audioverarbeitungscode zu definieren, müssen Sie eine Klasse von der `AudioWorkletProcessor`-Schnittstelle ableiten. Obwohl die Methode [`process`](/de/docs/Web/API/AudioWorkletProcessor/process) nicht auf der Schnittstelle definiert ist, muss die abgeleitete Klasse sie bereitstellen. Diese Methode wird für jeden Block von 128 Sample-Frames aufgerufen und erhält Eingabe- und Ausgabearrays sowie die berechneten Werte benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)s (falls vorhanden) als Parameter. Sie können die Eingaben und Audioparameterwerte verwenden, um das Ausgabearray zu füllen, das standardmäßig Stille enthält.

Wenn Sie für Ihren Node benutzerdefinierte [`AudioParam`](/de/docs/Web/API/AudioParam)s benötigen, können Sie optional eine [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Eigenschaft als _statischen Getter_ für den Prozessor bereitstellen. Das zurückgegebene Array von Objekten auf Grundlage von [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) wird intern verwendet, um die [`AudioParam`](/de/docs/Web/API/AudioParam)s bei der Instanziierung des `AudioWorkletNode` zu erstellen.

Die resultierenden `AudioParam`s befinden sich in der Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) des Nodes und können mit Standardmethoden wie [`linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) automatisiert werden. Ihre berechneten Werte werden an die Methode [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) des Prozessors übergeben, damit Sie die Ausgabe des Nodes entsprechend gestalten können.

### Audio verarbeiten

Ein möglicher Ablauf zum Erstellen eines benutzerdefinierten Audioverarbeitungsmechanismus ist:

1. Erstellen Sie eine separate Datei.
2. Gehen Sie in dieser Datei wie folgt vor:
   1. Leiten Sie eine Klasse von `AudioWorkletProcessor` ab (siehe den Abschnitt [„Abgeleitete Klassen“](#abgeleitete_klassen)) und implementieren Sie darin Ihre eigene Methode [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process).
   2. Registrieren Sie den Prozessor mit der Methode [`AudioWorkletGlobalScope.registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor).

3. Laden Sie die Datei mit der Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) über die Eigenschaft [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) Ihres Audiokontexts.
4. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), der auf dem Prozessor basiert. Der Prozessor wird intern vom `AudioWorkletNode`-Konstruktor instanziiert.
5. Verbinden Sie den Node mit den anderen Nodes.

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

Anschließend laden wir den Prozessor in unserer Hauptskriptdatei, erstellen eine Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), der wir den Namen des Prozessors übergeben, und verbinden den Node dann mit einem Audiographen.

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
