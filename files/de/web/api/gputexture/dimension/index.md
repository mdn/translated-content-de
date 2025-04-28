---
title: "GPUTexture: dimension-Eigenschaft"
short-title: dimension
slug: Web/API/GPUTexture/dimension
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dimension`** schreibgeschützte Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces repräsentiert die Dimension des Satzes von Texeln für jede `GPUTexture`-Subressource.

Diese wird über die `dimension`-Eigenschaft im Deskriptorobjekt festgelegt, das in den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird und standardmäßig auf `"2d"` gesetzt ist, wenn sie weggelassen wird.

## Wert

Ein aufgezählter Wert. Mögliche Werte sind:

- `"1d"`: Eine eindimensionale Textur mit nur einer Dimension, der Breite.
- `"2d"`: Eine zweidimensionale Textur mit Breite und Höhe, die auch Schichten haben kann. Nur `"2d"` Texturen können Mipmaps haben, multisampled sein, ein komprimiertes oder Tiefen-/Stencil-Format verwenden und als Renderanhang verwendet werden.
- `"3d"`: Eine dreidimensionale Textur mit Breite, Höhe und Tiefe.

## Beispiele

```js
// …

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
