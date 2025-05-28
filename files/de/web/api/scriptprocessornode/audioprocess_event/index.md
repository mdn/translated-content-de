---
title: "ScriptProcessorNode: audioprocess-Ereignis"
short-title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Das **`audioprocess`**-Ereignis des [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Interfaces wird ausgelöst, wenn ein Eingabepuffer eines Script-Prozessors bereit zur Verarbeitung ist.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Interface ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("audioprocess", (event) => { })

onaudioprocess = (event) => { }
```

## Ereignistyp

Ein [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AudioProcessingEvent")}}

## Ereigniseigenschaften

_Implementiert auch die von seinem Elternteil [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften._

- `playbackTime` {{ReadOnlyInline}}
  - : Ein Double, das die Zeit darstellt, zu der das Audio abgespielt wird,
    definiert durch die Zeit von [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime).
- `inputBuffer` {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der den Puffer darstellt, der die zu verarbeitenden Eingabedaten enthält.
    Die Anzahl der Kanäle wird als Parameter `numberOfInputChannels` der Fabrikmethode [`AudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Gültigkeitsbereich des Ereignis-Handlers gültig ist.
- `outputBuffer` {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der der Puffer ist, in den die Ausgabedaten geschrieben werden sollen.
    Die Anzahl der Kanäle wird als Parameter <code>numberOfOutputChannels</code> der Fabrikmethode [`AudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Gültigkeitsbereich des Ereignis-Handlers gültig ist.

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

Sie könnten den Ereignis-Handler auch mit der `onaudioprocess`-Eigenschaft einrichten:

```js
scriptNode.onaudioprocess = (audioProcessingEvent) => {
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
