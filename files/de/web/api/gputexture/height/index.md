---
title: "GPUTexture: height-Eigenschaft"
short-title: height
slug: Web/API/GPUTexture/height
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`height`**-Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle repräsentiert die Höhe der `GPUTexture`.

Diese wird basierend auf dem Wert der `size`-Eigenschaft im Deskriptor-Objekt gesetzt, das in den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

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
