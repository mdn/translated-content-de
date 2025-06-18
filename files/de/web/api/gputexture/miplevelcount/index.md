---
title: "GPUTexture: mipLevelCount-Eigenschaft"
short-title: mipLevelCount
slug: Web/API/GPUTexture/mipLevelCount
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mipLevelCount`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces ist eine nur-lesbare Eigenschaft, die die Anzahl der Mip-Levels einer `GPUTexture` darstellt.

Diese wird über die `mipLevelCount`-Eigenschaft im Deskripturobjekt gesetzt, das im ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn sie weggelassen wird, beträgt der Standardwert 1.

## Wert

Eine Zahl.

## Beispiele

```js
// …

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
