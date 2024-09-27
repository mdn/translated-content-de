---
title: "BaseAudioContext: createScriptProcessor()-Methode"
short-title: createScriptProcessor()
slug: Web/API/BaseAudioContext/createScriptProcessor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

Die `createScriptProcessor()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erzeugt einen [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) für die direkte Audiobearbeitung.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

## Syntax

```js-nolint
createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels)
```

### Parameter

- `bufferSize`

  - : Die Puffergröße in Einheiten von Sample-Frames. Falls angegeben, muss die `bufferSize` einer der folgenden Werte sein: 256, 512, 1024, 2048, 4096, 8192, 16384. Wird sie nicht übergeben oder ist der Wert 0, wird die Implementierung die beste Puffergröße für die gegebene Umgebung wählen, die während der gesamten Lebensdauer des Knotens eine konstante Zweierpotenz sein wird.

    Dieser Wert steuert, wie häufig das `audioprocess`-Ereignis ausgelöst wird und wie viele Sample-Frames bei jedem Aufruf verarbeitet werden müssen. Niedrigere Werte für `bufferSize` führen zu einer niedrigeren (besseren) Latenz. Höhere Werte sind erforderlich, um Audiounterbrechungen und Störungen zu vermeiden. Es wird empfohlen, dass Autoren diese Puffergröße nicht angeben und der Implementierung erlauben, eine geeignete Puffergröße zur Balance zwischen Latenz und Audioqualität auszuwählen.

- `numberOfInputChannels`
  - : Eine Ganzzahl, die die Anzahl der Kanäle für die Eingabe dieses Knotens angibt; standardmäßig 2. Werte bis zu 32 werden unterstützt.
- `numberOfOutputChannels`
  - : Eine Ganzzahl, die die Anzahl der Kanäle für die Ausgabe dieses Knotens angibt; standardmäßig 2. Werte bis zu 32 werden unterstützt.

> [!WARNING]
> Webkit erfordert derzeit (Version 31), dass eine gültige `bufferSize` übergeben wird, wenn diese Methode aufgerufen wird.

> [!NOTE]
> Es ist ungültig, dass sowohl `numberOfInputChannels` als auch `numberOfOutputChannels` null sind.

### Rückgabewert

Ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode).

## Beispiele

### Hinzufügen von weißem Rauschen mit einem Script-Processor

Das folgende Beispiel zeigt, wie ein `ScriptProcessorNode` verwendet wird, um eine über [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) geladene Spur zu verarbeiten, indem jedem Audiosample der Eingabespur ein wenig weißes Rauschen hinzugefügt wird, und sie über den [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) abzuspielen.

Für jeden Kanal und jeden Sample-Frame verwendet der `audioprocess`-Event-Handler des Script-Nodes das zugehörige `audioProcessingEvent`, um durch jeden Kanal des Eingabepuffers und jedes Sample in jedem Kanal zu schleifen, und fügt eine kleine Menge weißen Rauschens hinzu, bevor das Ergebnis in jedem Fall als Ausgabesample festgelegt wird.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/script-processor-node/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/script-processor-node).

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

    // The output buffer contains the samples that will be modified and played
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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
