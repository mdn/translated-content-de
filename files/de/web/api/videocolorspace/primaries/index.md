---
title: "VideoColorSpace: primaries-Eigenschaft"
short-title: primaries
slug: Web/API/VideoColorSpace/primaries
l10n:
  sourceCommit: a0ba2ee222b29e4be15388d1edded49054565c86
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`primaries`**-Eigenschaft (nur lesbar) des [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Interfaces gibt den Farb-{{Glossary("gamut", "Gamut")}} des Videos zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"bt709"`
  - : Farbprimärfarben, die von BT.709 und sRGB verwendet werden.
- `"bt470bg"`
  - : Farbprimärfarben, die von BT.601 PAL verwendet werden.
- `"smpte170m"`
  - : Farbprimärfarben, die von BT.601 NTSC verwendet werden.
- `"bt2020"`
  - : Farbprimärfarben, die von BT.2020 und BT.2100 verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Der Wert von `primaries` wird in die Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.primaries);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
