---
title: "GPUTexture: depthOrArrayLayers-Eigenschaft"
short-title: depthOrArrayLayers
slug: Web/API/GPUTexture/depthOrArrayLayers
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`depthOrArrayLayers`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces repräsentiert die Tiefe oder Anzahl der Schichten des `GPUTexture`.

Diese wird basierend auf der `size`-Eigenschaft im Deskriptor-Objekt festgelegt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wurde.

## Wert

Eine Zahl. Diese repräsentiert:

- Die Tiefe in Pixeln im Fall von Texturen mit einer `"3d"` [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension).
- Die Anzahl der Schichten im Fall von geschichteten Texturen mit einer `"2d"` [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension).

In Fällen, in denen das `GPUTexture` keine Tiefe oder Schichten aufweist, beträgt der Wert 1.

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
