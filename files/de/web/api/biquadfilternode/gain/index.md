---
title: "BiquadFilterNode: gain-Eigenschaft"
short-title: gain
slug: Web/API/BiquadFilterNode/gain
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `gain`-Eigenschaft der {{ domxref("BiquadFilterNode") }}-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} — ein Doppelwert, der den in der aktuellen Filteralgorithmus verwendeten [Gain](https://en.wikipedia.org/wiki/Gain) darstellt.

Wenn sein Wert positiv ist, stellt er einen tatsächlichen Verstärkungswert dar; bei negativem Wert handelt es sich um eine Dämpfung.

Er wird in dB ausgedrückt, hat einen Standardwert von `0` und kann in einem nominalen Bereich von `-40` bis `40` liegen.

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, es nicht.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines AudioContext zur Erstellung eines Biquad-Filterknotens.
Für vollständigere praktische Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();

// richten Sie die verschiedenen Audionodes ein, die wir für die App verwenden werden
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// verbinden Sie die Nodes miteinander

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulieren Sie das Biquad-Filter

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
