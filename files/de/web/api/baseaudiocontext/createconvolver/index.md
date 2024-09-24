---
title: "BaseAudioContext: createConvolver() Methode"
short-title: createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createConvolver()`-Methode der {{ domxref("BaseAudioContext") }}-Schnittstelle erstellt einen {{ domxref("ConvolverNode") }}, der üblicherweise verwendet wird, um Halleffekte auf Ihre Audioinhalte anzuwenden. Weitere Informationen finden Sie in der [Spezifikationsdefinition der Faltung](https://webaudio.github.io/web-audio-api/#background-3).

> [!NOTE]
> Der {{domxref("ConvolverNode.ConvolverNode", "ConvolverNode()")}}-Konstruktor ist die empfohlene Methode, um einen {{domxref("ConvolverNode")}} zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConvolver()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("ConvolverNode")}}.

## Beispiele

### Erstellen eines Convolver-Knotens

Das folgende Beispiel zeigt, wie man einen AudioContext verwendet, um einen Convolver-Knoten zu erstellen. Sie erstellen einen {{domxref("AudioBuffer")}}, der ein Klangbeispiel enthält, das als Umgebung zur Formgebung der Faltung (als _Impulsantwort_ bezeichnet) verwendet wird und wenden dies auf den Convolver an. Das untenstehende Beispiel verwendet ein kurzes Beispiel eines Konzertsaalpublikums, sodass der angewendete Halleffekt wirklich tief und echoartig ist.

Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den unten dargestellten Codeauszug).

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

// Audiotrack über fetch() für Convolver-Knoten abrufen
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
