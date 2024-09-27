---
title: "VideoColorSpace: matrix-Eigenschaft"
short-title: matrix
slug: Web/API/VideoColorSpace/matrix
l10n:
  sourceCommit: fa772db7e9b781ab41d5692c9d70dac423fddb1f
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`matrix`**-Eigenschaft (nur lesbar) der Schnittstelle [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) gibt den Matrix-Koeffizienten des Videos zurück. Matrix-Koeffizienten beschreiben die Beziehung zwischen den Probenelementwerten und den Farbkoordinaten.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"rgb"`
  - : Matrix-Koeffizienten, die von sRGB verwendet werden.
- `"bt709"`
  - : Matrix-Koeffizienten, die von BT.709 verwendet werden.
- `"bt470bg"`
  - : Matrix-Koeffizienten, die von BT.601 PAL verwendet werden.
- `"smpte170m"`
  - : Matrix-Koeffizienten, die von BT.601 NTSC verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Der Wert von `matrix` wird in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.matrix);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
