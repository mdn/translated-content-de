---
title: "GPUTexture: sampleCount-Eigenschaft"
short-title: sampleCount
slug: Web/API/GPUTexture/sampleCount
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`sampleCount`**-Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle repräsentiert die Sampling-Anzahl der `GPUTexture`.

Dieser Wert wird über die `sampleCount`-Eigenschaft im Deskriptorobjekt gesetzt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn er weggelassen wird, ist der Standardwert 1.

## Wert

Eine Zahl. Mögliche Werte sind:

- 1
- 4, was eine Multisampling-Textur anzeigt.

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
