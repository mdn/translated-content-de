---
title: "AudioParam: maxValue-Eigenschaft"
short-title: maxValue
slug: Web/API/AudioParam/maxValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die **`maxValue`** Schreibgeschützte Eigenschaft der {{domxref("AudioParam")}}-Schnittstelle repräsentiert den maximal möglichen Wert für den nominalen (effektiven) Wertebereich des Parameters.

## Wert

Eine Gleitkommazahl {{jsxref("Number")}}, die den maximal erlaubten Wert für den nominalen Bereich des Parameters angibt.

Der Standardwert von `maxValue` ist der maximal positive Wert einer einzelpräzisen Gleitkommazahl (+340.282.346.638.528.859.811.704.183.484.516.925.440).

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

- {{domxref("AudioParam.minValue")}}
