---
title: "BiquadFilterNode: frequency-Eigenschaft"
short-title: frequency
slug: Web/API/BiquadFilterNode/frequency
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `frequency`-Eigenschaft der [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam) — ein Double, das eine Frequenz im aktuellen Filteralgorithmus in Hertz (Hz) darstellt.

Der Standardwert beträgt `350`, mit einem Nominalbereich von `10` bis zur [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) — das ist die Hälfte der Abtastrate.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der dargestellte Wert dies nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines AudioContext, um einen Biquad-Filterknoten zu erstellen.
Für ein vollständiges Arbeitsbeispiel schauen Sie sich unser [voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) an).

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

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
