---
title: "BaseAudioContext: createBiquadFilter()-Methode"
short-title: createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("Web Audio API") }}

Die `createBiquadFilter()`-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt einen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), der einen konfigurierbaren Filter zweiter Ordnung darstellt, der als verschiedene gängige Filtertypen konfiguriert werden kann.

> [!NOTE]
> Der [`BiquadFilterNode()`](/de/docs/Web/API/BiquadFilterNode/BiquadFilterNode)-Konstruktor ist der
> empfohlene Weg, um einen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createBiquadFilter()
```

### Parameter

Keine.

### Rückgabewert

Ein [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Biquad-Filterknotens. Für vollständigere praktische Beispiele/Informationen, schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
