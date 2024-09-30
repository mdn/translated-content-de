---
title: "BiquadFilterNode: gain-Eigenschaft"
short-title: gain
slug: Web/API/BiquadFilterNode/gain
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `gain`-Eigenschaft des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam) — ein Doppelwert, der den in der aktuellen Filteralgorithmus verwendeten [gain](https://en.wikipedia.org/wiki/Gain) repräsentiert.

Wenn ihr Wert positiv ist, stellt sie einen tatsächlichen Gain dar; wenn negativ, stellt sie eine Abschwächung dar.

Sie wird in dB ausgedrückt, hat einen Standardwert von `0` und kann einen Wert in einem nominalen Bereich von `-40` bis `40` annehmen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der von ihm dargestellte Wert dies nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext, um einen Biquad-Filterknoten zu erstellen.
Für vollständigere angewandte Beispiele/Informationen werfen Sie einen Blick auf unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo (siehe [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
