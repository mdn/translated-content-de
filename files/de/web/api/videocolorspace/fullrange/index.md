---
title: "VideoColorSpace: Eigenschaft fullRange"
short-title: fullRange
slug: Web/API/VideoColorSpace/fullRange
l10n:
  sourceCommit: fa772db7e9b781ab41d5692c9d70dac423fddb1f
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`fullRange`** schreibgeschützte Eigenschaft des [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Interfaces gibt `true` zurück, wenn Farbbereiche im vollen Spektrum verwendet werden.

## Wert

Ein {{jsxref("Boolean")}}, `true`, wenn Farbbereiche im vollen Spektrum verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Der Wert von `fullRange` wird in die Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.fullRange);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
