---
title: "ScriptProcessorNode: audioprocess-Ereignis"
short-title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Das `audioprocess`-Ereignis der {{domxref("ScriptProcessorNode")}}-Schnittstelle wird ausgelöst, wenn ein Eingabepuffer eines Script-Prozessors bereit zum Verarbeiten ist.

> [!NOTE]
> Dieses Feature wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die {{domxref("AudioWorkletNode")}}-Schnittstelle ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Ereignistyp

Ein {{domxref("AudioProcessingEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("AudioProcessingEvent")}}

## Ereignis-Eigenschaften

_Setzt auch die von seinem Elternteil geerbten Eigenschaften um, {{domxref("Event")}}._

- `playbackTime` {{ReadOnlyInline}}
  - : Ein Double, das die Zeit repräsentiert, wann das Audio abgespielt wird,
    wie durch die Zeit von {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} definiert.
- `inputBuffer` {{ReadOnlyInline}}
  - : Ein {{domxref("AudioBuffer")}}, das den Puffer enthält, der die zu verarbeitenden Audioeingabedaten enthält.
    Die Anzahl der Kanäle ist als Parameter `numberOfInputChannels`
    der Fabrikmethode {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Gültigkeitsbereich des Ereignishandlers gültig ist.
- `outputBuffer` {{ReadOnlyInline}}
  - : Ein {{domxref("AudioBuffer")}}, der der Puffer ist, in den die Audioausgabedaten geschrieben werden sollten.
    Die Anzahl der Kanäle ist als Parameter <code>numberOfOutputChannels</code>
    der Fabrikmethode {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} definiert.
    Beachten Sie, dass der zurückgegebene <code>AudioBuffer</code> nur im Gültigkeitsbereich des Ereignishandlers gültig ist.

## Beispiele

```js
scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
  // Der Eingabepuffer ist ein Lied, das wir zuvor geladen haben
  const inputBuffer = audioProcessingEvent.inputBuffer;

  // Der Ausgabepuffer enthält die Samples, die modifiziert und abgespielt werden
  const outputBuffer = audioProcessingEvent.outputBuffer;

  // Schleife durch die Ausgabekanäle (in diesem Fall gibt es nur einen)
  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Schleife durch die 4096 Samples
    for (let sample = 0; sample < inputBuffer.length; sample++) {
      // mache die Ausgabe gleich der Eingabe
      outputData[sample] = inputData[sample];

      // füge jedem Ausgabesample Rauschen hinzu
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

Seit der Veröffentlichung der [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) am 29. August 2014 wurde dieses Feature als veraltet erklärt. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Es wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die {{domxref("AudioWorkletNode")}}-Schnittstelle ersetzt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
