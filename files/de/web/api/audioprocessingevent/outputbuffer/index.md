---
title: "AudioProcessingEvent: outputBuffer-Eigenschaft"
short-title: outputBuffer
slug: Web/API/AudioProcessingEvent/outputBuffer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}{{Deprecated_header}}

Die schreibgeschützte **`outputBuffer`**-Eigenschaft der {{domxref("AudioProcessingEvent")}}-Schnittstelle repräsentiert den Ausgabe-Puffer eines Audioverarbeitungsereignisses.

Der Ausgabe-Puffer wird durch ein {{domxref("AudioBuffer")}}-Objekt dargestellt, das eine Sammlung von Audiokanälen enthält. Jeder Kanal ist ein Array von Gleitkommawerten, die die Wellenform des Audiosignals darstellen, das als Reihe von Amplituden kodiert ist. Die Anzahl der Kanäle und die Länge jedes Kanals werden durch die Eigenschaften Kanalanzahl und Puffergröße des `AudioBuffer` bestimmt.

## Wert

Ein {{domxref("AudioBuffer")}}-Objekt.

## Beispiele

In diesem Beispiel wird ein {{domxref("ScriptProcessorNode")}} mit einer Puffergröße von 256 Samples, 2 Eingabekanälen und 2 Ausgabekanälen erstellt. Wenn ein {{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}-Ereignis ausgelöst wird, werden die Eingabe- und Ausgabepuffer aus dem Ereignisobjekt abgerufen. Die Audiodaten im Eingabepuffer werden verarbeitet, und das Ergebnis wird in den Ausgabepuffer geschrieben. In diesem Fall werden die Audiodaten um den Faktor 0,5 skaliert.

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

- {{domxref("AudioProcessingEvent.inputBuffer")}}
- {{domxref("ScriptProcessorNode")}}
