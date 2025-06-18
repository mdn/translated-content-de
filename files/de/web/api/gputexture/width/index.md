---
title: "GPUTexture: width-Eigenschaft"
short-title: width
slug: Web/API/GPUTexture/width
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`width`**-Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle gibt die Breite der `GPUTexture` an.

Dieser Wert wird basierend auf dem Wert der `size`-Eigenschaft im Deskripturobjekt festgelegt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wurde.

## Wert

Eine Zahl.

## Beispiele

```js
// …

const depthTexture = device.createTexture({
  size: [640, 480],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.width); // 640
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
