---
title: "BaseAudioContext: Methode createConvolver()"
short-title: createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createConvolver()`-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), der üblicherweise verwendet wird, um Halleffekte auf Ihr Audio anzuwenden. Weitere Informationen finden Sie in der [Spezifikationsdefinition der Faltung](https://webaudio.github.io/web-audio-api/#background-3).

> [!NOTE]
> Der [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)-Konstruktor ist der empfohlene Weg, um einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) zu erstellen; siehe [Erstellen eines AudioNodes](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConvolver()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ConvolverNode`](/de/docs/Web/API/ConvolverNode).

## Beispiele

### Erstellen eines Convolver-Nodes

Das folgende Beispiel zeigt, wie Sie mit einem AudioContext einen Convolver-Node erstellen. Sie erstellen einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der ein Tonsample enthält, das als Umgebung zur Formung der Faltung (Impulse-Response genannt) verwendet wird, und wenden diesen auf den Convolver an. Das untenstehende Beispiel verwendet ein kurzes Sample von einem Konzertsaalpublikum, sodass der angewendete Halleffekt wirklich tief und echoartig ist.

Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unsere [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den untenstehend zitierten Code).

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
