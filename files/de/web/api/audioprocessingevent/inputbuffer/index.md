---
title: "AudioProcessingEvent: inputBuffer-Eigenschaft"
short-title: inputBuffer
slug: Web/API/AudioProcessingEvent/inputBuffer
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Audio API")}}{{Deprecated_header}}

Die **`inputBuffer`** schreibgeschützte Eigenschaft des [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Interfaces repräsentiert den Eingabepuffer eines Audioverarbeitungsereignisses.

Der Eingabepuffer wird durch ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt dargestellt, das eine Sammlung von Audiokanälen enthält. Jeder Kanal ist ein Array von Gleitkommawerten, die die Audiosignalwellenform als eine Serie von Amplituden darstellen. Die Anzahl der Kanäle und die Länge jedes Kanals werden durch die Kanalanzahl und Puffergrößeneigenschaften des `AudioBuffer` bestimmt.

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt.

## Beispiele

In diesem Beispiel wird ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) mit einer Puffergröße von 256 Samples, 2 Eingabekanälen und 2 Ausgabekanälen erstellt. Wenn ein [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event)-Ereignis ausgelöst wird, werden die Eingabe- und Ausgabepuffer aus dem Ereignisobjekt abgerufen. Die Audiodaten im Eingabepuffer werden verarbeitet, und das Ergebnis wird in den Ausgabepuffer geschrieben. In diesem Fall werden die Audiodaten um einen Faktor von 0,5 skaliert.

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

- [`AudioProcessingEvent.outputBuffer`](/de/docs/Web/API/AudioProcessingEvent/outputBuffer)
- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
