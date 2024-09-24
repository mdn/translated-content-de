---
title: "ConvolverNode: Puffer-Eigenschaft"
short-title: Puffer
slug: Web/API/ConvolverNode/buffer
l10n:
  sourceCommit: 4ad4343b502692739f0f28e557155797d9cc3a66
---

{{ APIRef("Web Audio API") }}

Die **`buffer`**-Eigenschaft des {{ domxref("ConvolverNode") }}-Interfaces repräsentiert einen mono-, stereo- oder 4-Kanal-{{domxref("AudioBuffer")}}, der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.

Dies ist normalerweise eine einfache Aufnahme eines so nah wie möglich an einen Impuls herangekommenen Geräusches in dem Raum, den Sie modellieren möchten. Wenn Sie beispielsweise den Hall in Ihrem Badezimmer modellieren möchten, könnten Sie ein Mikrofon in der Nähe der Tür aufstellen, um das Geräusch eines platzenden Ballons oder eines synthetisierten Impulses vom Waschbecken aufzunehmen. Diese Audioaufnahme könnte dann als Puffer verwendet werden.

Dieser Audiopuffer muss die gleiche Abtastrate wie der `AudioContext` haben, da sonst eine Ausnahme ausgelöst wird. Zu dem Zeitpunkt, an dem dieses Attribut gesetzt wird, wird der Puffer und der Zustand des Attributs verwendet, um den `ConvolverNode` mit dieser Impulsantwort und der gegebenen Normalisierung zu konfigurieren. Der anfängliche Wert dieses Attributs ist `null`.

## Wert

Ein {{domxref("AudioBuffer")}}.

## Beispiele

### Zuweisen eines Audiopuffers

Im folgenden Beispiel wird ein Convolver-Knoten erstellt und ihm ein {{domxref("AudioBuffer")}} zugewiesen.

Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den unten aufgeführten Codeauszug).

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

// Audio-Track über fetch() für den Convolver-Knoten abrufen
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
