---
title: "GPUTexture: width Eigenschaft"
short-title: Breite
slug: Web/API/GPUTexture/width
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`width`** schreibgeschützte Eigenschaft des {{domxref("GPUTexture")}}-Interfaces repräsentiert die Breite der `GPUTexture`.

Diese wird basierend auf dem Wert der `size`-Eigenschaft im Deskriptor-Objekt gesetzt, das an den Ursprung der {{domxref("GPUDevice.createTexture()")}}-Aufruf übergeben wird.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
