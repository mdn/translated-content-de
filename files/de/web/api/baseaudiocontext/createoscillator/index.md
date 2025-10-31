---
title: "BaseAudioContext: createOscillator() Methode"
short-title: createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Die `createOscillator()` Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Interfaces erstellt einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), eine Quelle, die eine periodische
Wellenform darstellt. Sie erzeugt im Wesentlichen einen konstanten Ton.

> [!NOTE]
> Der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)
> Konstruktor ist der empfohlene Weg, um einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createOscillator()
```

### Parameter

Keine.

### Rückgabewert

Ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Oszillator-Knotens. Für angewandte Beispiele/Informationen sehen Sie sich unser [Violent Theremin Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) an ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für relevanten Code); für mehr Informationen besuchen Sie auch unsere [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) Seite.

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
