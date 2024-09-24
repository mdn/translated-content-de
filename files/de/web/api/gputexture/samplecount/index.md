---
title: "GPUTexture: sampleCount-Eigenschaft"
short-title: sampleCount
slug: Web/API/GPUTexture/sampleCount
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`sampleCount`** der {{domxref("GPUTexture")}}-Schnittstelle stellt die Abtastanzahl der `GPUTexture` dar.

Dies wird über die `sampleCount` Eigenschaft im Deskriptor-Objekt festgelegt, das beim ursprünglichen {{domxref("GPUDevice.createTexture()")}}-Aufruf übergeben wird. Wird es weggelassen, ist der Standardwert 1.

## Wert

Eine Zahl. Mögliche Werte sind:

- 1
- 4, was eine mehrfach abgetastete Textur anzeigt.

## Beispiele

```js
// ...

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
