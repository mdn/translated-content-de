---
title: "AudioProcessingEvent: playbackTime-Eigenschaft"
short-title: playbackTime
slug: Web/API/AudioProcessingEvent/playbackTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}{{Deprecated_header}}

Die schreibgeschützte Eigenschaft **`playbackTime`** des {{domxref("AudioProcessingEvent")}}-Interfaces repräsentiert die Zeit, zu der das Audio abgespielt wird. Sie befindet sich im selben Koordinatensystem wie die Zeit, die vom {{domxref("AudioContext")}} verwendet wird.

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

- {{domxref("AudioProcessingEvent")}}
- {{domxref("ScriptProcessorNode")}}
