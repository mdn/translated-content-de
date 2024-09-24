---
title: "OscillatorNode: type-Eigenschaft"
short-title: type
slug: Web/API/OscillatorNode/type
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`type`**-Eigenschaft der {{domxref("OscillatorNode")}}-Schnittstelle gibt an, welche Form der [Wellenform](https://en.wikipedia.org/wiki/Waveform) der Oszillator ausgibt. Es gibt mehrere gebräuchliche Wellenformen zur Verfügung, sowie die Möglichkeit, eine benutzerdefinierte Wellenform zu spezifizieren. Die Form der Wellenform beeinflusst den erzeugten Ton.

## Wert

Ein string, der die Form der Oszillatorwelle angibt. Die verschiedenen verfügbaren Werte sind:

- `sine`
  - : Eine [Sinuswelle](https://en.wikipedia.org/wiki/Sine_wave). Dies ist der Standardwert.
- `square`
  - : Eine [Rechteckwelle](https://en.wikipedia.org/wiki/Square_wave) mit einem [Tastverhältnis](https://en.wikipedia.org/wiki/Duty_cycle) von 0,5; das bedeutet, das Signal ist für die Hälfte jeder Periode "hoch".
- `sawtooth`
  - : Eine [Sägezahnwelle](https://en.wikipedia.org/wiki/Sawtooth_wave).
- `triangle`
  - : Eine [Dreieckswelle](https://en.wikipedia.org/wiki/Triangle_wave).
- `custom`
  - : Eine benutzerdefinierte Wellenform. Sie setzen `type` niemals manuell auf `custom`; verwenden Sie stattdessen die Methode {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}}, um die Daten bereitzustellen, die die Wellenform darstellen. Dadurch wird `type` automatisch auf `custom` gesetzt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Wert `custom` angegeben wurde. Um eine benutzerdefinierte Wellenform festzulegen, rufen Sie einfach {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}} auf. Dadurch wird der Typ automatisch für Sie eingestellt.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{ domxref("AudioContext") }}, um einen Oszillator-Knoten zu erstellen. Für ein angewandtes Beispiel schauen Sie sich unser [Violent Theremin Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) an ([sehen Sie sich app.js an](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für den relevanten Code).

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
