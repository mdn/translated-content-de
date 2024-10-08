---
title: "OscillatorNode: type-Eigenschaft"
short-title: type
slug: Web/API/OscillatorNode/type
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`type`**-Eigenschaft des [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Interfaces gibt an, welche Form der [Wellenform](https://en.wikipedia.org/wiki/Waveform) der Oszillator ausgibt. Es stehen mehrere gängige Wellenformen zur Verfügung sowie eine Option, eine benutzerdefinierte Wellenform festzulegen. Die Form der Wellenform beeinflusst den erzeugten Ton.

## Wert

Ein String, der die Form der Oszillatorwelle angibt. Die verschiedenen verfügbaren Werte sind:

- `sine`
  - : Eine [Sinuswelle](https://en.wikipedia.org/wiki/Sine_wave). Dies ist der Standardwert.
- `square`
  - : Eine [Rechteckwelle](https://en.wikipedia.org/wiki/Square_wave) mit einem [Tastverhältnis](https://en.wikipedia.org/wiki/Duty_cycle) von 0.5; das heißt, das Signal ist für die Hälfte jedes Zeitraums "hoch".
- `sawtooth`
  - : Eine [Sägezahnwelle](https://en.wikipedia.org/wiki/Sawtooth_wave).
- `triangle`
  - : Eine [Dreieckswelle](https://en.wikipedia.org/wiki/Triangle_wave).
- `custom`
  - : Eine benutzerdefinierte Wellenform. Sie setzen `type` nie manuell auf `custom`; stattdessen verwenden Sie die Methode [`setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave), um die Daten bereitzustellen, die die Wellenform repräsentieren. Dadurch wird `type` automatisch auf `custom` gesetzt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert `custom` angegeben wurde. Um eine benutzerdefinierte Wellenform festzulegen, rufen Sie einfach [`setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf. Dadurch wird der Typ automatisch für Sie festgelegt.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen Oszillator-Knoten zu erstellen. Für ein praktisches Beispiel schauen Sie sich unser [Violent Theremin-Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) an ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für den relevanten Code).

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
