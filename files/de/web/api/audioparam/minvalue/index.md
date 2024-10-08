---
title: "AudioParam: minValue-Eigenschaft"
short-title: minValue
slug: Web/API/AudioParam/minValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die **`minValue`**
schreibgeschützte Eigenschaft der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle stellt den minimal möglichen Wert des nominalen (effektiven) Bereichs des Parameters dar.

## Wert

Eine Gleitkomma-{{jsxref("Number")}}, die den minimal zulässigen Wert für den nominalen Bereich des Parameters angibt.

Der Standardwert von `minValue` ist der minimal negative Gleitkommawert einfacher Genauigkeit (-340,282,346,638,528,859,811,704,183,484,516,925,440).

## Beispiele

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.minValue); // -3.4028234663852886e38
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioParam.maxValue`](/de/docs/Web/API/AudioParam/maxValue)
