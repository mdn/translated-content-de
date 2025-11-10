---
title: "GPUTexture: dimension-Eigenschaft"
short-title: dimension
slug: Web/API/GPUTexture/dimension
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`dimension`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces repräsentiert die Dimension des Texel-Satzes für jede `GPUTexture`-Subressource.

Diese wird über die `dimension`-Eigenschaft im Descriptor-Objekt festgelegt, das in den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn sie weggelassen wird, ist der Standardwert `"2d"`.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"1d"`: Eine eindimensionale Textur mit einer einzigen Dimension, der Breite.
- `"2d"`: Eine zweidimensionale Textur mit Breite und Höhe, die auch Schichten haben kann. Nur `"2d"`-Texturen können Mipmaps haben, multisampled sein, ein komprimiertes oder Tiefen-/Stencil-Format verwenden und als Render-Anhang genutzt werden.
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
