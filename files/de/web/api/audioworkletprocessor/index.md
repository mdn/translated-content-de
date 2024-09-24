---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das **`AudioWorkletProcessor`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) stellt den Audiobearbeitungscode hinter einem benutzerdefinierten {{domxref("AudioWorkletNode")}} dar. Es befindet sich im {{domxref("AudioWorkletGlobalScope")}} und läuft im Rendering-Thread der Web Audio API. Ein darauf basierender {{domxref("AudioWorkletNode")}} läuft wiederum im Haupt-Thread.

## Konstruktor

> [!NOTE]
> Der `AudioWorkletProcessor` und die von ihm abgeleiteten Klassen können nicht direkt aus einem vom Benutzer bereitgestellten Code instanziiert werden. Stattdessen werden sie nur intern durch die Erstellung eines zugehörigen {{domxref("AudioWorkletNode")}}s erzeugt. Der Konstruktor der abgeleiteten Klasse wird mit einem Optionen-Objekt aufgerufen, sodass Sie benutzerdefinierte Initialisierungsverfahren durchführen können — siehe die Konstruktorseite für Details.

- {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}}
  - : Erstellt eine neue Instanz eines `AudioWorkletProcessor`-Objekts.

## Instanz-Eigenschaften

- {{domxref("AudioWorkletProcessor.port", "port")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("MessagePort")}} zurück, der für die bidirektionale Kommunikation zwischen dem Prozessor und dem {{domxref("AudioWorkletNode")}}, zu dem er gehört, verwendet wird. Das andere Ende ist unter der {{domxref("AudioWorkletNode.port", "port")}}-Eigenschaft des Knotens verfügbar.

## Instanz-Methoden

_Das `AudioWorkletProcessor`-Interface definiert keine eigenen Methoden. Sie müssen jedoch eine {{domxref("AudioWorkletProcessor.process", "process()")}}-Methode bereitstellen, die aufgerufen wird, um den Audiostream zu verarbeiten._

## Ereignisse

_Das `AudioWorkletProcessor`-Interface reagiert auf keine Ereignisse._

## Verwendungshinweise

### Ableiten von Klassen

Um benutzerdefinierten Audiobearbeitungscode zu definieren, müssen Sie eine Klasse vom `AudioWorkletProcessor`-Interface ableiten. Obwohl nicht im Interface definiert, muss die abgeleitete Klasse die {{domxref("AudioWorkletProcessor.process", "process")}}-Methode besitzen. Diese Methode wird für jeden Block von 128 Sample-Frames aufgerufen und nimmt Eingabe- und Ausgabearrays sowie berechnete Werte benutzerdefinierter {{domxref("AudioParam")}}s (falls definiert) als Parameter. Sie können die Eingaben und Audioparameterwerte verwenden, um das Ausgabearray zu füllen, das standardmäßig Stille hält.

Optional können Sie, wenn Sie benutzerdefinierte {{domxref("AudioParam")}}s auf Ihrem Knoten haben möchten, eine {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}-Eigenschaft als _statischen Getter_ im Prozessor bereitstellen. Das zurückgegebene Array von {{domxref("AudioParamDescriptor")}}-basierten Objekten wird intern verwendet, um die {{domxref("AudioParam")}}s während der Instanziierung des `AudioWorkletNode` zu erstellen.

Die resultierenden `AudioParam`s befinden sich in der {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft des Knotens und können mit Standardmethoden wie [`linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) automatisiert werden. Deren berechnete Werte werden in die {{domxref("AudioWorkletProcessor.process", "process()")}}-Methode des Prozessors übergeben, damit Sie die Knotenausgabe entsprechend gestalten können.

### Verarbeitung von Audio

Ein Beispielalgorithmus zur Erstellung eines benutzerdefinierten Audiobearbeitungsmechanismus ist:

1. Erstellen Sie eine separate Datei;
2. In der Datei:

   1. Erweitern Sie die `AudioWorkletProcessor`-Klasse (siehe [„Ableiten von Klassen“-Abschnitt](#ableiten_von_klassen)) und stellen Sie Ihre eigene {{domxref("AudioWorkletProcessor.process", "process()")}}-Methode bereit;
   2. Registrieren Sie den Prozessor mit der Methode {{domxref("AudioWorkletGlobalScope.registerProcessor()")}};

3. Laden Sie die Datei mit der Methode {{domxref("Worklet.addModule", "addModule()")}} über die {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}}-Eigenschaft Ihres Audiokontexts;
4. Erstellen Sie einen {{domxref("AudioWorkletNode")}} basierend auf dem Prozessor. Der Prozessor wird intern durch den Konstruktor des `AudioWorkletNode` instanziiert.
5. Verbinden Sie den Knoten mit den anderen Knoten.

## Beispiele

Im folgenden Beispiel erstellen wir einen benutzerdefinierten {{domxref("AudioWorkletNode")}}, der weißes Rauschen ausgibt.

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

Als Nächstes laden wir im Hauptskript die Datei des Prozessors, erstellen eine Instanz des {{domxref("AudioWorkletNode")}}, übergeben den Namen des Prozessors, und verbinden den Knoten mit einem Audiografen.

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
