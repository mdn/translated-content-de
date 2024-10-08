---
title: "AudioParam: maxValue Eigenschaft"
short-title: maxValue
slug: Web/API/AudioParam/maxValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`maxValue`** des [`AudioParam`](/de/docs/Web/API/AudioParam)-Interfaces repräsentiert den maximal möglichen Wert für den nominalen (effektiven) Bereich des Parameters.

## Wert

Ein Gleitkomma-{{jsxref("Number")}}, der den maximal zulässigen Wert für den nominalen Bereich des Parameters angibt.

Der Standardwert von `maxValue` ist der maximal positive Gleitkommawert einfacher Genauigkeit (+340.282.346.638.528.859.811.704.183.484.516.925.440).

## Beispiele

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.maxValue); // 3.4028234663852886e38
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioParam.minValue`](/de/docs/Web/API/AudioParam/minValue)
