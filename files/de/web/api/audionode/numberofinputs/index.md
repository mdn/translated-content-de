---
title: "AudioNode: numberOfInputs-Eigenschaft"
short-title: numberOfInputs
slug: Web/API/AudioNode/numberOfInputs
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die `numberOfInputs`-Eigenschaft des [`AudioNode`](/de/docs/Web/API/AudioNode)-Interfaces gibt die Anzahl der Eingänge zurück, die den Knoten speisen. Quellknoten werden als Knoten definiert, die eine `numberOfInputs`-Eigenschaft mit einem Wert von 0 haben.

## Wert

Eine Ganzzahl ≥ 0.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfInputs); // 0
console.log(gainNode.numberOfInputs); // 1
console.log(audioCtx.destination.numberOfInputs); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
