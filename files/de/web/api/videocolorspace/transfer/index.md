---
title: "VideoColorSpace: transfer-Eigenschaft"
short-title: transfer
slug: Web/API/VideoColorSpace/transfer
l10n:
  sourceCommit: 286d39acd9e2125510898b371a3427068443ab6e
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`transfer`**-Eigenschaft des [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Interfaces gibt die opto-elektronischen Transfermerkmale des Videos zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"bt709"`
  - : Transfermerkmale, die von BT.709 verwendet werden.
- `"smpte170m"`
  - : Transfermerkmale, die von BT.601 NTSC verwendet werden.
- `"iec61966-2-1"`
  - : Transfermerkmale, die von sRGBA verwendet werden.
- `"linear"`
  - : Transfermerkmale, die von linear RGB verwendet werden.
- `"pq"`
  - : Transfermerkmale, die von BT.2100 PQ verwendet werden.
- `"hlg"`
  - : Transfermerkmale, die von BT.2100 HLG verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von [`VideoFrame`](/de/docs/Web/API/VideoFrame) zurückgegeben wird. Der Wert von `transfer` wird in die Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.transfer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
