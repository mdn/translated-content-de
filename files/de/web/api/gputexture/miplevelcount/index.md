---
title: "GPUTexture: Eigenschaft mipLevelCount"
short-title: mipLevelCount
slug: Web/API/GPUTexture/mipLevelCount
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`mipLevelCount`** der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle gibt die Anzahl der Mip-Levels der `GPUTexture` an.

Diese wird über die Eigenschaft `mipLevelCount` im Deskriptorobjekt festgelegt, das in den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn sie weggelassen wird, ist der Standardwert 1.

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
