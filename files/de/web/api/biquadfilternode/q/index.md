---
title: "BiquadFilterNode: Q-Eigenschaft"
short-title: Q
slug: Web/API/BiquadFilterNode/Q
l10n:
  sourceCommit: 4a37445ad5dbb9c3e39b8437b5105b7570549ac7
---

{{ APIRef("Web Audio API") }}

Die `Q`-Eigenschaft der [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Double, das einen [Q-Faktor](https://de.wikipedia.org/wiki/G%C3%BCtefaktor), oder Qualitätsfaktor, darstellt.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein [`defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) ist `1`, und seine [`minValue`](/de/docs/Web/API/AudioParam/minValue) und [`maxValue`](/de/docs/Web/API/AudioParam/maxValue) sind ±(2<sup>128</sup> - 2<sup>104</sup>), oder ungefähr ±3.403e38. Dies ist der Bereich für Gleitkommazahlen mit einfacher Genauigkeit.

Der tatsächliche Wertebereich hängt vom [`type`](/de/docs/Web/API/BiquadFilterNode/type) des Filters ab:

- Bei `lowpass` und `highpass` wird der `Q`-Wert in dB interpretiert. Für diese Filter ist der Wertebereich [-Q, Q], wobei Q der größte Wert ist, für den 10<sup>Q/20</sup> die obige Grenze nicht überschreitet. Dies ist ungefähr 770,63678.
- Bei `bandpass`, `notch`, `allpass` und `peaking` bezieht sich der `Q`-Wert auf die Bandbreite des Filters und sollte positiv sein, aber es gibt kein strengeres Maximum als das oben genannte.
- Er wird nicht für `lowshelf` und `highshelf` Filter verwendet.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es repräsentiert, nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines AudioContext, um einen Biquad-Filter-Knoten zu erstellen. Für umfangreichere Anwendungsbeispiele und Informationen werfen Sie einen Blick auf unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

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
