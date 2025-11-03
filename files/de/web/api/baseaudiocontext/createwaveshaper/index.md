---
title: "BaseAudioContext: createWaveShaper()-Methode"
short-title: createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ APIRef("Web Audio API") }}

Die `createWaveShaper()`-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt einen [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode), der eine nicht-lineare Verzerrung darstellt. Sie wird verwendet, um Verzerrungseffekte auf Ihren Audioinhalten anzuwenden.

> [!NOTE]
> Der [`WaveShaperNode()`](/de/docs/Web/API/WaveShaperNode/WaveShaperNode)-Konstruktor ist die empfohlene Methode, um einen [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode) zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createWaveShaper()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext, um einen Wave Shaper Node zu erstellen. Für vollständigere angewendete Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für den relevanten Code).

> [!NOTE]
> Sigmoid-Funktionen werden häufig für Verzerrungskurven verwendet
> aufgrund ihrer natürlichen Eigenschaften. Ihr S-förmiges Profil hilft beispielsweise, ein
> smootheres Klangresultat zu erzeugen. Wir fanden den untenstehenden Verzerrungskurven-Code auf [Stack Overflow](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion).

```js
const audioCtx = new AudioContext();
const distortion = audioCtx.createWaveShaper();

// …

function makeDistortionCurve(amount) {
  const k = typeof amount === "number" ? amount : 50;
  const numSamples = 44100;
  const curve = new Float32Array(numSamples);
  const deg = Math.PI / 180;

  for (let i = 0; i < numSamples; i++) {
    const x = (i * 2) / numSamples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

// …

distortion.curve = makeDistortionCurve(400);
distortion.oversample = "4x";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
