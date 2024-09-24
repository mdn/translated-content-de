---
title: "BaseAudioContext: createBiquadFilter()-Methode"
short-title: createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createBiquadFilter()`-Methode des {{ domxref("BaseAudioContext") }}-Interfaces erstellt einen {{ domxref("BiquadFilterNode") }}, der einen zweiten Ordnungsfilter darstellt, der als verschiedene gebräuchliche Filtertypen konfiguriert werden kann.

> [!NOTE]
> Der {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}}-Konstruktor wird empfohlen, um einen {{domxref("BiquadFilterNode")}} zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createBiquadFilter()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("BiquadFilterNode")}}.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext, um einen Biquad-Filterknoten zu erstellen. Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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

// Manipulation des Biquad-Filters

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
