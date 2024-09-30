---
title: "ConvolverNode: Eigenschaft buffer"
short-title: buffer
slug: Web/API/ConvolverNode/buffer
l10n:
  sourceCommit: 4ad4343b502692739f0f28e557155797d9cc3a66
---

{{ APIRef("Web Audio API") }}

Die **`buffer`**-Eigenschaft des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Interfaces repräsentiert einen mono, stereo oder 4-Kanal [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.

Dies ist normalerweise eine einfache Aufnahme von einem möglichst impulsähnlichen Geräusch, wie es in dem Raum zu finden ist, den Sie modellieren möchten. Zum Beispiel, wenn Sie den Hall in Ihrem Badezimmer modellieren möchten, könnten Sie ein Mikrofon in der Nähe der Tür aufstellen, um das Geräusch eines platzenden Ballons oder eines synthetisierten Impulses vom Waschbecken aufzunehmen. Diese Audioaufnahme könnte dann als Buffer verwendet werden.

Dieser Audio-Buffer muss dieselbe Abtastrate wie der `AudioContext` haben, sonst wird eine Ausnahme ausgelöst. Zum Zeitpunkt der Einstellung dieses Attributs werden der Buffer und der Zustand des Attributs verwendet, um den `ConvolverNode` mit dieser Impulsantwort und der gegebenen Normalisierung zu konfigurieren. Der Anfangswert dieses Attributs ist `null`.

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer).

## Beispiele

### Zuweisung eines Audio-Buffers

Das folgende Beispiel erstellt einen Convolver-Knoten und weist ihm einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu.

Weitere vollständige angewandte Beispiele/Informationen finden Sie in unserem [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den unten auszugsweise eingefügten Code).

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
