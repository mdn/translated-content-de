---
title: "BiquadFilterNode: detune-Eigenschaft"
short-title: detune
slug: Web/API/BiquadFilterNode/detune
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `detune`-Eigenschaft des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Frequenz in [Cent](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt.

## Wert

Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl der zurückgegebene `AudioParam` schreibgeschützt ist, ist der von ihm dargestellte Wert es nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Biquad-Filter-Knotens.
Für umfassendere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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
biquadFilter.detune.value = 100;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
