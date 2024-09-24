---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

Das `AudioProcessingEvent`-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert Ereignisse, die auftreten, wenn ein {{domxref("ScriptProcessorNode")}}-Eingabepuffer bereit zur Verarbeitung ist.

Ein `audioprocess`-Ereignis mit diesem Interface wird auf einem {{domxref("ScriptProcessorNode")}} ausgelöst, wenn es erforderlich ist, Audiodaten zu verarbeiten. Während der Audiobearbeitung wird der Eingabepuffer gelesen und verarbeitet, um Ausgabedaten zu erzeugen, die dann in den Ausgabepuffer geschrieben werden.

> [!WARNING]
> Diese Funktion wurde veraltet und sollte durch einen [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ersetzt werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AudioProcessingEvent.AudioProcessingEvent", "AudioProcessingEvent()")}} {{Deprecated_Inline}}
  - : Erstellt ein neues `AudioProcessingEvent`-Objekt.

## Instanz-Eigenschaften

_Implementiert auch die Eigenschaften, die von seinem Elternteil, {{domxref("Event")}}, vererbt werden._

- {{domxref("AudioProcessingEvent.playbackTime", "playbackTime")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Double, das die Zeit repräsentiert, wann das Audio abgespielt wird,
    wie definiert durch die Zeit von {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.
- {{domxref("AudioProcessingEvent.inputBuffer", "inputBuffer")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein {{domxref("AudioBuffer")}}, der den Puffer enthält, der die zu verarbeitenden Eingabedaten enthält.
    Die Anzahl der Kanäle wird als Parameter `numberOfInputChannels`
    der Fabrikmethode {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Umfang des Ereignishandlers gültig ist.
- {{domxref("AudioProcessingEvent.outputBuffer", "outputBuffer")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein {{domxref("AudioBuffer")}}, das der Puffer ist, in den die Ausgabedaten geschrieben werden sollen.
    Die Anzahl der Kanäle wird als Parameter <code>numberOfOutputChannels</code>
    der Fabrikmethode {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Umfang des Ereignishandlers gültig ist.

## Beispiele

### Hinzufügen von weißem Rauschen mithilfe eines Script-Prozessors

Das folgende Beispiel zeigt, wie ein `ScriptProcessorNode` verwendet wird, um einen
Track, der über {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} geladen wurde, zu verarbeiten, indem jedem Audio Sample des Eingabetracks (Buffer) ein wenig weißes Rauschen hinzugefügt wird, und ihn über den
{{domxref("AudioDestinationNode")}} abzuspielen. Für jeden Kanal und jeden Sample-Frame nimmt die
Funktion `scriptNode.onaudioprocess` das zugehörige
`audioProcessingEvent` und verwendet es, um durch jeden Kanal des Eingabepuffers und jedes Sample in jedem Kanal zu schleifen und eine kleine Menge weißen Rauschens hinzuzufügen, bevor das Ergebnis in jedem Fall als Ausgabe-Sample gesetzt wird.

> [!NOTE]
> Für ein vollständiges Arbeitsbeispiel siehe unser [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/)
> GitHub-Repository. (Sie können auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/script-processor-node) einsehen.)

```js
const myScript = document.querySelector("script");
const myPre = document.querySelector("pre");
const playButton = document.querySelector("button");

// Create AudioContext and buffer source
let audioCtx;

async function init() {
  audioCtx = new AudioContext();
  const source = audioCtx.createBufferSource();

  // Create a ScriptProcessorNode with a bufferSize of 4096 and
  // a single input and output channel
  const scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);

  // Load in an audio track using fetch() and decodeAudioData()
  try {
    const response = await fetch("viper.ogg");
    const arrayBuffer = await response.arrayBuffer();
    source.buffer = await audioCtx.decodeAudioData(arrayBuffer);
  } catch (err) {
    console.error(
      `Unable to fetch the audio file: ${name} Error: ${err.message}`,
    );
  }

  // Give the node a function to process audio events
  scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
    // The input buffer is the song we loaded earlier
    let inputBuffer = audioProcessingEvent.inputBuffer;

    // The output buffer contains the samples that will be modified
    // and played
    let outputBuffer = audioProcessingEvent.outputBuffer;

    // Loop through the output channels (in this case there is only one)
    for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
      let inputData = inputBuffer.getChannelData(channel);
      let outputData = outputBuffer.getChannelData(channel);

      // Loop through the 4096 samples
      for (let sample = 0; sample < inputBuffer.length; sample++) {
        // make output equal to the same as the input
        outputData[sample] = inputData[sample];

        // add noise to each output sample
        outputData[sample] += (Math.random() * 2 - 1) * 0.1;
      }
    }
  });

  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();

  // When the buffer source stops playing, disconnect everything
  source.addEventListener("ended", () => {
    source.disconnect(scriptNode);
    scriptNode.disconnect(audioCtx.destination);
  });
}

// wire up play button
playButton.addEventListener("click", () => {
  if (!audioCtx) {
    init();
  }
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
