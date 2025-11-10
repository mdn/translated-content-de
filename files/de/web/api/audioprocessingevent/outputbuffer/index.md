---
title: "AudioProcessingEvent: outputBuffer-Eigenschaft"
short-title: outputBuffer
slug: Web/API/AudioProcessingEvent/outputBuffer
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Audio API")}}{{Deprecated_header}}

Die schreibgeschützte Eigenschaft **`outputBuffer`** des [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Interfaces repräsentiert den Ausgabepuffer eines Audiobearbeitungsereignisses.

Der Ausgabepuffer wird durch ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt dargestellt, das eine Sammlung von Audiokanälen enthält, von denen jeder ein Array von Gleitkommawerten ist, das die Audio-Signalwelle als eine Reihe von Amplituden kodiert repräsentiert. Die Anzahl der Kanäle und die Länge jedes Kanals werden durch die Kanalanzahl und die Puffergrößeneigenschaften des `AudioBuffer` bestimmt.

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt.

## Beispiele

In diesem Beispiel wird ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) mit einer Puffergröße von 256 Samples, 2 Eingangskanälen und 2 Ausgangskanälen erstellt. Wenn ein [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event)-Ereignis ausgelöst wird, werden die Eingangs- und Ausgangspuffer aus dem Ereignisobjekt abgerufen. Die Audiodaten im Eingabepuffer werden verarbeitet und das Ergebnis in den Ausgabepuffer geschrieben. In diesem Fall werden die Audiodaten um den Faktor 0,5 skaliert.

```js
const audioContext = new AudioContext();
const processor = audioContext.createScriptProcessor(256, 2, 2);

processor.addEventListener("audioprocess", (event) => {
  const inputBuffer = event.inputBuffer;
  const outputBuffer = event.outputBuffer;

  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Process the audio data here
    for (let i = 0; i < outputBuffer.length; i++) {
      outputData[i] = inputData[i] * 0.5;
    }
  }
});

processor.connect(audioContext.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioProcessingEvent.inputBuffer`](/de/docs/Web/API/AudioProcessingEvent/inputBuffer)
- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
