---
title: "ScriptProcessorNode: audioprocess-Ereignis"
short-title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Das `audioprocess`-Ereignis der [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Schnittstelle wird ausgelöst, wenn ein Eingabepuffer eines Script-Processors zur Verarbeitung bereit ist.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Ereignistyp

Ein [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AudioProcessingEvent")}}

## Ereigniseigenschaften

_Implementiert auch die Eigenschaften, die von seinem Elternteil, [`Event`](/de/docs/Web/API/Event), geerbt werden._

- `playbackTime` {{ReadOnlyInline}}
  - : Ein Double-Wert, der die Zeit angibt, wann das Audio abgespielt wird, definiert durch die Zeit von [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime).
- `inputBuffer` {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der den Eingabepuffer mit den zu verarbeitenden Audiodaten enthält. Die Anzahl der Kanäle wird als Parameter `numberOfInputChannels` der Fabrikmethode [`AudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert. Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Rahmen des Ereignishandlers gültig ist.
- `outputBuffer` {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der der Puffer ist, in den die Ausgabedaten geschrieben werden sollen. Die Anzahl der Kanäle wird als Parameter <code>numberOfOutputChannels</code> der Fabrikmethode [`AudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert. Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Rahmen des Ereignishandlers gültig ist.

## Beispiele

```js
scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
  // The input buffer is a song we loaded earlier
  const inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  const outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (let sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += (Math.random() * 2 - 1) * 0.2;
    }
  }
});
```

Sie könnten den Ereignishandler auch über die `onaudioprocess`-Eigenschaft einrichten:

```js
scriptNode.onaudioprocess = (audioProcessingEvent) => {
  // ...
};
```

## Spezifikationen

Seit der Veröffentlichung der [Web Audio API-Spezifikation](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) am 29. August 2014 ist diese Funktion veraltet. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Sie wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
