---
title: "ScriptProcessorNode: audioprocess-Ereignis"
short-title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Web Audio API")}}

Das **`audioprocess`**-Ereignis der [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Schnittstelle wird ausgelöst, wenn ein Eingabepuffer eines Script-Prozessors zur Verarbeitung bereit ist.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("audioprocess", (event) => { })
```

Alternativ können Sie einen Wert für die [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle festlegen:

```js-nolint
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

Sie können die Ereignisbehandlung auch über die Eigenschaft `onaudioprocess` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onaudioprocess` hinzugefügte Ereignis-Listener ersetzt werden:

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
