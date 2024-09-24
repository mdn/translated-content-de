---
title: "VideoColorSpace: transfer Eigenschaft"
short-title: transfer
slug: Web/API/VideoColorSpace/transfer
l10n:
  sourceCommit: fa772db7e9b781ab41d5692c9d70dac423fddb1f
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`transfer`** schreibgeschützte Eigenschaft der {{domxref("VideoColorSpace")}}-Schnittstelle gibt die optoelektronischen Übertragungseigenschaften des Videos zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"bt709"`
  - : Übertragungseigenschaften, die von BT.709 verwendet werden.
- `"smpte170m"`
  - : Übertragungseigenschaften, die von BT.601 NTSC verwendet werden.
- `"iec61966-2-1"`
  - : Übertragungseigenschaften, die von sRGBA verwendet werden.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace`-Objekt, das von {{domxref("VideoFrame")}} zurückgegeben wird. Der Wert von `transfer` wird in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.transfer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
