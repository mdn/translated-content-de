---
title: "BaseAudioContext: createOscillator()-Methode"
short-title: createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die `createOscillator()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erstellt einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), eine Quelle, die eine periodische Wellenform repräsentiert. Sie generiert im Wesentlichen einen konstanten Ton.

> [!NOTE]
> Der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)-Konstruktor ist die empfohlene Methode, um einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu erstellen; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createOscillator()
```

### Parameter

Keine.

### Rückgabewert

Ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Oszillator-Knotens. Für angewandte Beispiele/Informationen sehen Sie sich unser [Violent Theremin Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für relevanten Code) an; siehe auch unsere [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Seite für weitere Informationen.

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
