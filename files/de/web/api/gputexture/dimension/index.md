---
title: "GPUTexture: dimension-Eigenschaft"
short-title: dimension
slug: Web/API/GPUTexture/dimension
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`dimension`** der {{domxref("GPUTexture")}}-Schnittstelle repräsentiert die Dimension der Texelmenge für jede `GPUTexture`-Subressource.

Diese wird über die `dimension`-Eigenschaft im Deskriptorobjekt festgelegt, das beim ursprünglichen Aufruf von {{domxref("GPUDevice.createTexture()")}} übergeben wird und bei Auslassung den Standardwert `"2d"` hat.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"1d"`: Eine eindimensionale Textur mit einer einzigen Dimension, der Breite.
- `"2d"`: Eine zweidimensionale Textur mit einer Breite und Höhe, die auch Ebenen haben kann. Nur `"2d"`-Texturen können Mipmaps haben, multisampled sein, ein komprimiertes oder Tiefen-/Stencil-Format verwenden und als Renderanhang genutzt werden.
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
