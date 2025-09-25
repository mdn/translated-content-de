---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

Das `AudioProcessingEvent`-Interface des [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert Ereignisse, die auftreten, wenn ein Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Verarbeitung ist.

Ein `audioprocess`-Ereignis mit diesem Interface wird auf einem [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ausgelöst, wenn eine Audiobearbeitung erforderlich ist. Während der Audiobearbeitung wird der Eingabepuffer gelesen und verarbeitet, um Ausgabedaten zu erzeugen, die dann in den Ausgabepuffer geschrieben werden.

> [!WARNING]
> Diese Funktion wurde veraltet und sollte durch einen [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ersetzt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioProcessingEvent()`](/de/docs/Web/API/AudioProcessingEvent/AudioProcessingEvent) {{Deprecated_Inline}}
  - : Erstellt ein neues `AudioProcessingEvent`-Objekt.

## Instanz-Eigenschaften

_Implementiert auch die Eigenschaften, die von seinem Elternobjekt geerbt wurden, [`Event`](/de/docs/Web/API/Event)_.

- [`playbackTime`](/de/docs/Web/API/AudioProcessingEvent/playbackTime) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Double-Wert, der die Zeit repräsentiert, zu der das Audio abgespielt wird,
    definiert durch die Zeit von [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime).
- [`inputBuffer`](/de/docs/Web/API/AudioProcessingEvent/inputBuffer) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das den Puffer mit den zu verarbeitenden Eingabedaten enthält.
    Die Anzahl der Kanäle ist als Parameter `numberOfInputChannels` der Fabrikmethode [`AudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Rahmen des Ereignishandlers gültig ist.
- [`outputBuffer`](/de/docs/Web/API/AudioProcessingEvent/outputBuffer) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das der Puffer ist, in den die Ausgabedaten geschrieben werden sollen.
    Die Anzahl der Kanäle ist als Parameter <code>numberOfOutputChannels</code> der Fabrikmethode [`AudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Rahmen des Ereignishandlers gültig ist.

## Beispiele

### Weißes Rauschen mit einem Script-Prozessor hinzufügen

Das folgende Beispiel zeigt, wie ein `ScriptProcessorNode` verwendet wird, um einen Track, der über [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) geladen wurde, zu verarbeiten, indem ein wenig weißes Rauschen zu jedem Audio-Sample des Eingabetracks (Puffer) hinzugefügt und über den [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) abgespielt wird. Für jeden Kanal und jedes Sample-Frame nimmt die Funktion `scriptNode.onaudioprocess` das zugehörige `audioProcessingEvent` und verwendet es, um durch jeden Kanal des Eingabepuffers und jedes Sample in jedem Kanal zu schleifen und eine kleine Menge weißes Rauschen hinzuzufügen, bevor dieses Ergebnis als Ausgabesample in jedem Fall gesetzt wird.

> [!NOTE]
> Für ein vollständiges, funktionierendes Beispiel besuchen Sie unser [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/)
> GitHub-Repo. (Sie können auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/script-processor-node) einsehen.)

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
