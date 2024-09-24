---
title: "GPUTexture: height-Eigenschaft"
short-title: height
slug: Web/API/GPUTexture/height
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`height`**-Eigenschaft der schreibgeschützten
{{domxref("GPUTexture")}} Schnittstelle repräsentiert die Höhe der `GPUTexture`.

Diese wird basierend auf dem Wert der `size`-Eigenschaft im Descriptor-Objekt festgelegt, das beim ursprünglichen {{domxref("GPUDevice.createTexture()")}}-Aufruf übergeben wird.

## Wert

Eine Zahl.

## Beispiele

```js
// ...

const depthTexture = device.createTexture({
  size: [640, 480],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.height); // 480
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
