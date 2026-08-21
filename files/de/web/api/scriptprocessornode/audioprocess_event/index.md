---
title: "ScriptProcessorNode: audioprocess-Ereignis"
short-title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Audio API")}}

Das **`audioprocess`**-Ereignis der [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Schnittstelle wird ausgelöst, wenn ein Eingabepuffer eines Skriptprozessors zur Verarbeitung bereit ist.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und ist nicht aufsteigend.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("audioprocess", (event) => { })

onaudioprocess = (event) => { }
```

## Ereignistyp

Ein [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AudioProcessingEvent")}}

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

Sie könnten den Ereignis-Handler auch über die `onaudioprocess`-Eigenschaft einrichten:

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
