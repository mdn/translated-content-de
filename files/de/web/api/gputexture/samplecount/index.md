---
title: "GPUTexture: sampleCount-Eigenschaft"
short-title: sampleCount
slug: Web/API/GPUTexture/sampleCount
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`sampleCount`**-Eigenschaft des
[`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Anzahl der Samples eines `GPUTexture` darstellt.

Diese wird über die `sampleCount`-Eigenschaft im Descriptor-Objekt festgelegt, das im ursprünglich aufgerufenen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn diese weggelassen wird, ist der Standardwert 1.

## Wert

Eine Nummer. Mögliche Werte sind:

- 1
- 4, was eine Multisampling-Textur angibt.

## Beispiele

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.sampleCount); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
