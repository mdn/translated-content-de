---
title: "GPUTexture: dimension-Eigenschaft"
short-title: dimension
slug: Web/API/GPUTexture/dimension
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dimension`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Dimension der Texelmengen für jede `GPUTexture`-Subressource darstellt.

Diese wird über die `dimension`-Eigenschaft im Deskripturobjekt festgelegt, das in den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird und standardmäßig auf `"2d"` gesetzt wird, wenn sie nicht angegeben wird.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"1d"`: Eine eindimensionale Textur mit einer einzigen Dimension, der Breite.
- `"2d"`: Eine zweidimensionale Textur mit Breite und Höhe, die auch Schichten haben kann. Nur `"2d"`-Texturen können Mipmaps haben, multisampled sein, ein komprimiertes oder Tiefen-/Stencil-Format verwenden und als Render-Anhang verwendet werden.
- `"3d"`: Eine dreidimensionale Textur mit Breite, Höhe und Tiefe.

## Beispiele

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.dimension); // "2d"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
