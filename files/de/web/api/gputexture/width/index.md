---
title: "GPUTexture: width-Eigenschaft"
short-title: width
slug: Web/API/GPUTexture/width
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`width`** schreibgeschützte Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle repräsentiert die Breite der `GPUTexture`.

Dies wird basierend auf dem Wert der `size`-Eigenschaft im Deskriptorobjekt festgelegt, das beim ursprünglich aufgerufenen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

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

console.log(depthTexture.width); // 640
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
