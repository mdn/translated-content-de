---
title: "AudioNode: numberOfOutputs-Eigenschaft"
short-title: numberOfOutputs
slug: Web/API/AudioNode/numberOfOutputs
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die `numberOfOutputs`-Eigenschaft des [`AudioNode`](/de/docs/Web/API/AudioNode)-Interface gibt die Anzahl der Ausgänge an, die aus dem Knoten kommen. Zielknoten — wie [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) — haben einen Wert von 0 für dieses Attribut.

## Wert

Eine Ganzzahl ≥ 0.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfOutputs); // 1
console.log(gainNode.numberOfOutputs); // 1
console.log(audioCtx.destination.numberOfOutputs); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
