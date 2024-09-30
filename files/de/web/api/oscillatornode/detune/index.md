---
title: "OscillatorNode: detune-Eigenschaft"
short-title: detune
slug: Web/API/OscillatorNode/detune
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("Web Audio API") }}

Die `detune`-Eigenschaft des [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Oszillation in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, dies nicht.

## Wert

Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam).

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen Oszillator-Knoten zu erstellen. Für angewandte Beispiele/Informationen lesen Sie unser [Violent Theremin Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für den relevanten Code).

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents
oscillator.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
