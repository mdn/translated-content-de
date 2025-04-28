---
title: "GPUTexture: depthOrArrayLayers-Eigenschaft"
short-title: depthOrArrayLayers
slug: Web/API/GPUTexture/depthOrArrayLayers
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`depthOrArrayLayers`** schreibgeschützte Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle repräsentiert die Tiefe oder die Anzahl der Layer der `GPUTexture`.

Dies wird basierend auf der `size`-Eigenschaft im Deskriptor-Objekt festgelegt, das im ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Eine Zahl. Diese repräsentiert:

- Die Tiefe in Pixeln, im Fall von Texturen mit einer `"3d"` [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension).
- Die Anzahl der Layer, im Fall von geschichteten Texturen mit einer `"2d"` [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension).

In Fällen, in denen die `GPUTexture` keine Tiefe oder Layer hat, beträgt der Wert 1.

## Beispiele

```js
// …

const test = device.createTexture({
  size: [128],
  format: "r8uint",
  dimension: "1d",
  usage: GPUTextureUsage.COPY_SRC,
});

console.log(test.depthOrArrayLayers); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
