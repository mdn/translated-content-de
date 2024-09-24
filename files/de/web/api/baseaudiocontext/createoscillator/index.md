---
title: "BaseAudioContext: Methode createOscillator()"
short-title: createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die Methode `createOscillator()` des {{domxref("BaseAudioContext")}}-Interfaces erzeugt einen {{domxref("OscillatorNode")}}, eine Quelle, die eine periodische Wellenform darstellt. Sie generiert im Wesentlichen einen konstanten Ton.

> [!NOTE]
> Der {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}-Konstruktor wird empfohlen, um einen {{domxref("OscillatorNode")}} zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createOscillator()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("OscillatorNode")}}.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Nutzung eines AudioContext, um einen Oszillator-Knoten zu erstellen. Für angewandte Beispiele/Informationen, sehen Sie sich unser [Violent Theremin Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für relevanten Code) an; sehen Sie auch unsere {{domxref("OscillatorNode")}}-Seite für weitere Informationen.

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

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
