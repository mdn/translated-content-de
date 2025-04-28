---
title: "GPUTexture: width-Eigenschaft"
short-title: width
slug: Web/API/GPUTexture/width
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`width`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture) Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Breite der `GPUTexture` repräsentiert.

Diese wird basierend auf dem Wert der `size`-Eigenschaft im Deskriptor-Objekt festgelegt, das in den ursprunglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wurde.

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
