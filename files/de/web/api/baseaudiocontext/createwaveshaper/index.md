---
title: "BaseAudioContext: createWaveShaper()-Methode"
short-title: createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
l10n:
  sourceCommit: a2e04148406b84af145fd1b3e388b72b5e430a82
---

{{ APIRef("Web Audio API") }}

Die `createWaveShaper()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erstellt einen [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode), der eine nicht-lineare Verzerrung darstellt. Sie wird verwendet, um Verzerrungseffekte auf Ihr Audio anzuwenden.

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

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines WaveShaperNode. Für ausführlichere Anwendungsbeispiele und Informationen werfen Sie einen Blick auf unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo (siehe [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) für relevanten Code).

> [!NOTE]
> Sigmoid-Funktionen werden häufig für Verzerrungskurven verwendet
> aufgrund ihrer natürlichen Eigenschaften. Ihre S-Form trägt beispielsweise dazu bei, ein
> glatteres Klangresultat zu schaffen. Wir fanden den untenstehenden Code für die Verzerrungskurve auf [Stack Overflow](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion).

```js
const audioCtx = new AudioContext();
const distortion = audioCtx.createWaveShaper();

// …

function makeDistortionCurve(amount) {
  const k = typeof amount === "number" ? amount : 50;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;

  for (let i = 0; i < n_samples; i++) {
    const x = (i * 2) / n_samples - 1;
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
