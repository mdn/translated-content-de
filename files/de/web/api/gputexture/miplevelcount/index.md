---
title: "GPUTexture: Eigenschaft mipLevelCount"
short-title: mipLevelCount
slug: Web/API/GPUTexture/mipLevelCount
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`mipLevelCount`** der {{domxref("GPUTexture")}}-Schnittstelle repräsentiert die Anzahl der Mip-Level der `GPUTexture`.

Diese wird über die `mipLevelCount`-Eigenschaft im Deskriptor-Objekt festgelegt, das in den ursprünglich aufgerufenen {{domxref("GPUDevice.createTexture()")}}-Aufruf übergeben wird. Wenn weggelassen, beträgt der Standardwert 1.

## Wert

Eine Zahl.

## Beispiele

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.mipLevelCount); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
