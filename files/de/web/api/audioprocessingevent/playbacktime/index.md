---
title: "AudioProcessingEvent: playbackTime-Eigenschaft"
short-title: playbackTime
slug: Web/API/AudioProcessingEvent/playbackTime
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`playbackTime`**-Eigenschaft des [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Interfaces repräsentiert die Zeit, zu der das Audio abgespielt wird. Sie befindet sich im gleichen Koordinatensystem wie die Zeit, die vom [`AudioContext`](/de/docs/Web/API/AudioContext) verwendet wird.

## Wert

Eine Zahl, die keine ganze Zahl sein muss.

## Beispiele

```js
const audioContext = new AudioContext();
const processor = audioContext.createScriptProcessor(256, 2, 2);

processor.addEventListener("audioprocess", (event) => {
  const inputBuffer = event.inputBuffer;
  const outputBuffer = event.outputBuffer;

  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Log the corresponding time for this audio buffer
    console.log(`Received audio data to be played at ${event.playbackTime}`);

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

- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)
- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
