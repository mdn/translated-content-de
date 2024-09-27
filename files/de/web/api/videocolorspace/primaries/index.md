---
title: "VideoColorSpace: primaries Eigenschaft"
short-title: primaries
slug: Web/API/VideoColorSpace/primaries
l10n:
  sourceCommit: fa772db7e9b781ab41d5692c9d70dac423fddb1f
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`primaries`** schreibgeschützte Eigenschaft des [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Interfaces gibt den Farbraum ([Gamut](/de/docs/Glossary/gamut)) des Videos zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"bt709"`
  - : Farbprimärfarben, die von BT.709 und sRGB verwendet werden.
- `"bt470bg"`
  - : Farbprimärfarben, die von BT.601 PAL verwendet werden.
- `"smpte170m"`
  - : Farbprimärfarben, die von BT.601 NTSC verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Der Wert von `primaries` wird in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.primaries);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
