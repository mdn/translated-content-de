---
title: "ConvolverNode: buffer-Eigenschaft"
short-title: buffer
slug: Web/API/ConvolverNode/buffer
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{ APIRef("Web Audio API") }}

Die **`buffer`**-Eigenschaft des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Interfaces repräsentiert einen mono-, stereo- oder 4-Kanal-[`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Hall-Effekt zu erzeugen.

Dies ist normalerweise eine einfache Aufnahme eines so nah wie möglich an einem Impuls befindlichen Tons, den Sie im Raum, den Sie modellieren möchten, finden können. Beispielsweise, wenn Sie den Hall in Ihrem Badezimmer modellieren möchten, könnten Sie ein Mikrofon in der Nähe der Tür aufstellen, um den Klang eines platzenden Ballons oder eines synthetisierten Impulses aus dem Waschbecken aufzunehmen. Diese Audioaufnahme könnte dann als Buffer verwendet werden.

Dieser Audio-Buffer muss die gleiche Abtastrate wie der `AudioContext` aufweisen, da sonst eine Ausnahme ausgelöst wird. Zum Zeitpunkt der Einstellung dieses Attributs wird der Buffer und der Zustand des Attributs verwendet, um den `ConvolverNode` mit dieser Impulsantwort zu konfigurieren, die die gegebene Normalisierung hat. Der Anfangswert dieses Attributs ist `null`.

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer).

## Beispiele

### Zuweisung eines Audio-Buffers

Das folgende Beispiel erstellt einen Convolver-Knoten und weist ihm einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu.

Für vollständigere Anwendungsbeispiele/informationen werfen Sie einen Blick auf unsere [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den Code, der unten auszugsweise gezeigt wird).

```js
const audioCtx = new AudioContext();
// …

const convolver = audioCtx.createConvolver();
// …

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
