---
title: "AudioNode: Eigenschaft numberOfOutputs"
short-title: numberOfOutputs
slug: Web/API/AudioNode/numberOfOutputs
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`numberOfOutputs`** der Schnittstelle [`AudioNode`](/de/docs/Web/API/AudioNode) gibt die Anzahl der Ausgänge des Knotens zurück. Zielknoten – beispielsweise [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) – haben für dieses Attribut den Wert 0.

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
