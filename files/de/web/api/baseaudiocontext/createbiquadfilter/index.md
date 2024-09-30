---
title: "BaseAudioContext: createBiquadFilter() Methode"
short-title: createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createBiquadFilter()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erstellt einen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), der einen zweiten Ordnungsfilter darstellt, der als verschiedene gängige Filtertypen konfigurierbar ist.

> [!NOTE]
> Der [`BiquadFilterNode()`](/de/docs/Web/API/BiquadFilterNode/BiquadFilterNode)-Konstruktor wird empfohlen, um einen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createBiquadFilter()
```

### Parameter

Keine.

### Rückgabewert

Ein [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Biquad-Filterknotens. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();

//set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
