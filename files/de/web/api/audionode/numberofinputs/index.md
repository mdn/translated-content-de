---
title: "AudioNode: Eigenschaft numberOfInputs"
short-title: numberOfInputs
slug: Web/API/AudioNode/numberOfInputs
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`numberOfInputs`** der Schnittstelle [`AudioNode`](/de/docs/Web/API/AudioNode) gibt die Anzahl der Eingänge zurück, die den Knoten speisen. Quellknoten sind Knoten, deren Eigenschaft `numberOfInputs` den Wert 0 hat.

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
