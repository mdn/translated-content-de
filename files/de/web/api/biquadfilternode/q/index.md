---
title: "BiquadFilterNode: Q-Eigenschaft"
short-title: Q
slug: Web/API/BiquadFilterNode/Q
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("Web Audio API") }}

Die `Q`-Eigenschaft des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Double, das einen [Q-Faktor](https://en.wikipedia.org/wiki/Q_factor) oder _Qualitätsfaktor_ darstellt.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein [`defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) ist `1`, und sein [`minValue`](/de/docs/Web/API/AudioParam/minValue) und [`maxValue`](/de/docs/Web/API/AudioParam/maxValue) sind ±(2<sup>128</sup> - 2<sup>104</sup>), oder etwa ±3,403e38. Dies ist der Bereich von Gleitkommazahlen einfacher Genauigkeit.

Sein tatsächlicher Wertebereich hängt vom [`type`](/de/docs/Web/API/BiquadFilterNode/type) des Filters ab:

- Für `lowpass` und `highpass` wird der `Q`-Wert in dB interpretiert. Für diese Filter ist der Wertebereich [-Q, Q],
  wobei Q der größte Wert ist, für den 10<sup>Q/20</sup> die obige Grenze nicht übersteigt. Dies entspricht etwa 770,63678.
- Für `bandpass`, `notch`, `allpass` und `peaking` steht der `Q`-Wert im Zusammenhang mit der Bandbreite des Filters und sollte positiv sein, es gibt jedoch keine strengere Obergrenze als die oben genannte.
- Für `lowshelf` und `highshelf`-Filter wird er nicht verwendet.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zum Erstellen eines Biquad-Filter-Knotens.
Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js, Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();

// Set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// Connect the nodes together

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

biquadFilter.type = "peaking";
biquadFilter.frequency.value = 1000;
biquadFilter.Q.value = 100;
biquadFilter.gain.value = 25;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
