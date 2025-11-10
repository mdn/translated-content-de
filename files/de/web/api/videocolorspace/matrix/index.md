---
title: "VideoColorSpace: matrix-Eigenschaft"
short-title: matrix
slug: Web/API/VideoColorSpace/matrix
l10n:
  sourceCommit: a2860cf36b422a7367af496b031e45ea091fe03c
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`matrix`**-Eigenschaft des [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Interfaces gibt den Matrixkoeffizienten des Videos zurück. Matrixkoeffizienten beschreiben die Beziehung zwischen den Probenkomponentenwerten und den Farbkoordinaten.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"rgb"`
  - : Matrixkoeffizienten, die von sRGB verwendet werden.
- `"bt709"`
  - : Matrixkoeffizienten, die von BT.709 verwendet werden.
- `"bt470bg"`
  - : Matrixkoeffizienten, die von BT.601 PAL verwendet werden.
- `"smpte170m"`
  - : Matrixkoeffizienten, die von BT.601 NTSC verwendet werden.
- `"bt2020-ncl"`
  - : Matrixkoeffizienten, die von BT.2020 NCL verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Der Wert von `matrix` wird in die Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.matrix);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
