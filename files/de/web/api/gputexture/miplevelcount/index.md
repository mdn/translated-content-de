---
title: "GPUTexture: mipLevelCount-Eigenschaft"
short-title: mipLevelCount
slug: Web/API/GPUTexture/mipLevelCount
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`mipLevelCount`** der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle repräsentiert die Anzahl der Mip-Level der `GPUTexture`.

Diese wird über die `mipLevelCount`-Eigenschaft im Deskriptor-Objekt gesetzt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn weggelassen, beträgt der Standardwert 1.

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
