---
title: "BaseAudioContext: createConvolver() Methode"
short-title: createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{ APIRef("Web Audio API") }}

Die `createConvolver()` Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Interfaces erstellt einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), der häufig verwendet wird, um
Hall-Effekte auf Ihr Audio anzuwenden. Weitere Informationen finden Sie in der [Spezifikationsdefinition der Faltung](https://webaudio.github.io/web-audio-api/#background-3).

> [!NOTE]
> Der [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)
> Konstruktor wird empfohlen, um einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConvolver()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ConvolverNode`](/de/docs/Web/API/ConvolverNode).

## Beispiele

### Ein Convolver Node erstellen

Das folgende Beispiel zeigt, wie Sie ein AudioContext verwenden, um einen Convolver-Node zu erstellen.
Sie erstellen einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der eine Klangprobe enthält, die als Umgebung verwendet wird, um die Faltung zu formen (genannt die _Impulsantwort_),
und wenden diese auf den Convolver an. Das folgende Beispiel verwendet eine kurze Probe eines Konzertsaalpublikums, daher ist der angewendete Hall-Effekt sehr tief und hallend.

Für vollständigere angewandte Beispiele/Informationen, schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den unten zitierten Code).

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
