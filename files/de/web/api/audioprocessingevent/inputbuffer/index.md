---
title: "AudioProcessingEvent: inputBuffer-Eigenschaft"
short-title: inputBuffer
slug: Web/API/AudioProcessingEvent/inputBuffer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}{{Deprecated_header}}

Die schreibgeschützte Eigenschaft **`inputBuffer`** der {{domxref("AudioProcessingEvent")}}-Schnittstelle repräsentiert den Eingabepuffer eines Audioverarbeitungsereignisses.

Der Eingabepuffer wird durch ein {{domxref("AudioBuffer")}}-Objekt dargestellt, das eine Sammlung von Audiokanälen enthält. Jeder Kanal ist ein Array von Gleitkommawerten, die das Audiosignal als eine Reihe von Amplituden kodieren. Die Anzahl der Kanäle und die Länge jedes Kanals werden durch die Kanälenzahl- und Puffergröße-Eigenschaften des `AudioBuffer` bestimmt.

## Wert

Ein {{domxref("AudioBuffer")}}-Objekt.

## Beispiele

In diesem Beispiel wird ein {{domxref("ScriptProcessorNode")}} mit einer Puffergröße von 256 Samples, 2 Eingabekanälen und 2 Ausgabekanälen erstellt. Wenn ein {{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}-Ereignis ausgelöst wird, werden die Ein- und Ausgabepuffer aus dem Ereignisobjekt abgerufen. Die Audiodaten im Eingabepuffer werden verarbeitet und das Ergebnis wird in den Ausgabepuffer geschrieben. In diesem Fall werden die Audiodaten um den Faktor 0,5 reduziert.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("AudioProcessingEvent.outputBuffer")}}
- {{domxref("ScriptProcessorNode")}}
