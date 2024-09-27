---
title: "ConvolverNode: buffer Eigenschaft"
short-title: buffer
slug: Web/API/ConvolverNode/buffer
l10n:
  sourceCommit: 4ad4343b502692739f0f28e557155797d9cc3a66
---

{{ APIRef("Web Audio API") }}

Die **`buffer`** Eigenschaft des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) Schnittstelle repräsentiert ein mono, stereo oder 4-Kanal [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` zur Erzeugung des Halleffekts verwendet wird.

Normalerweise handelt es sich hierbei um eine einfache Aufnahme eines so-nahe-wie-möglichen Impulses, der in dem Raum zu finden ist, den Sie modellieren möchten. Zum Beispiel, wenn Sie den Hall in Ihrem Badezimmer modellieren möchten, könnten Sie ein Mikrofon in der Nähe der Tür platzieren, um das Geräusch eines platzenden Ballons oder eines synthetisierten Impulses vom Waschbecken aufzunehmen. Diese Tonaufnahme könnte dann als Buffer verwendet werden.

Dieser Audiopuffer muss die gleiche Abtastrate wie der `AudioContext` haben, andernfalls wird eine Ausnahme ausgelöst. Wenn dieses Attribut gesetzt wird, werden der Buffer und der Zustand des Attributs verwendet, um den `ConvolverNode` mit dieser Impulsantwort mit der gegebenen Normalisierung zu konfigurieren. Der anfängliche Wert dieses Attributs ist `null`.

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer).

## Beispiele

### Zuordnung eines Audiopuffers

Das folgende Beispiel erstellt einen Convolver-Node und weist ihm ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu.

Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den unten auszugsweise verwendeten Code).

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

// Grab audio track via fetch() for convolver node
try {
  const response = await fetch(
    "https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg",
  );
  const arrayBuffer = await response.arrayBuffer();
  const decodedAudio = await audioCtx.decodeAudioData(arrayBuffer);
  convolver.buffer = decodedAudio;
} catch (error) {
  console.error(
    `Unable to fetch the audio file: ${name} Error: ${err.message}`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
