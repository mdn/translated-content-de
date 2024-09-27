---
title: "BaseAudioContext: createConvolver()-Methode"
short-title: createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createConvolver()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erstellt einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), der häufig verwendet wird, um Halleffekte auf Ihr Audio anzuwenden. Weitere Informationen finden Sie in der [Spezifikationsdefinition der Faltung](https://webaudio.github.io/web-audio-api/#background-3).

> [!NOTE]
> Der [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)-Konstruktor ist die empfohlene Methode, um einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConvolver()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ConvolverNode`](/de/docs/Web/API/ConvolverNode).

## Beispiele

### Erstellen eines Convolver-Knotens

Das folgende Beispiel zeigt, wie Sie einen `AudioContext` verwenden, um einen Convolver-Knoten zu erstellen. Sie erstellen einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der ein Klangbeispiel enthält, das als Umgebung zur Formung der Faltung verwendet wird (genannt das _Impulsantwort_), und wenden dieses auf den Convolver an. Im untenstehenden Beispiel wird ein kurzer Ausschnitt einer Konzertsaalmenge verwendet, sodass der angewendete Halleffekt wirklich tief und echoartig ist.

Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unsere [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)-Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den untenstehenden Codeausschnitt).

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
