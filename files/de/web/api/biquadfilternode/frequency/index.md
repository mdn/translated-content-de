---
title: "BiquadFilterNode: frequency-Eigenschaft"
short-title: frequency
slug: Web/API/BiquadFilterNode/frequency
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("Web Audio API") }}

Die `frequency`-Eigenschaft des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam) — ein Doppelwert, der eine Frequenz im aktuellen Filteralgorithmus in Hertz (Hz) darstellt.

Der Standardwert ist `350`, mit einem Nennbereich von `10` bis zur [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) — das heißt, die Hälfte der Abtastrate.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext, um einen Biquad-Filternode zu erstellen. Für ein vollständiges funktionierendes Beispiel, sehen Sie sich unser [voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)-Demo an (schauen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) an).

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
