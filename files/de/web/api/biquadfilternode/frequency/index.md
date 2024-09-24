---
title: "BiquadFilterNode: frequency-Eigenschaft"
short-title: frequency
slug: Web/API/BiquadFilterNode/frequency
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `frequency`-Eigenschaft der {{ domxref("BiquadFilterNode") }}-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} — ein Double, das eine Frequenz im aktuellen Filteralgorithmus darstellt, gemessen in Hertz (Hz).

Der Standardwert ist `350`, mit einem nominalen Bereich von `10` bis zur [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) — das heißt, die Hälfte der Abtastrate.

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl der zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den er darstellt, dies nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Biquad-Filterknotens.
Für ein vollständiges funktionierendes Beispiel, sehen Sie sich unser [voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an (sehen Sie auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) an).

```js
const audioCtx = new AudioContext();

// Richten Sie die verschiedenen Audioknoten ein, die wir für die App verwenden werden
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// Verbinden Sie die Knoten miteinander

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulieren Sie den Biquad-Filter

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
