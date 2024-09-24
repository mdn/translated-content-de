---
title: "AudioNode: Eigenschaft numberOfOutputs"
short-title: numberOfOutputs
slug: Web/API/AudioNode/numberOfOutputs
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die Eigenschaft `numberOfOutputs` der {{ domxref("AudioNode") }}-Schnittstelle gibt die Anzahl der Ausgänge an, die von dem Knoten ausgehen. Zielknoten – wie der {{domxref("AudioDestinationNode") }} – haben für dieses Attribut einen Wert von 0.

## Wert

Ein ganzzahliger Wert ≥ 0.

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
