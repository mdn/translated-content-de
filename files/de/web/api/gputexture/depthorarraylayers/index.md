---
title: "GPUTexture: depthOrArrayLayers-Eigenschaft"
short-title: depthOrArrayLayers
slug: Web/API/GPUTexture/depthOrArrayLayers
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`depthOrArrayLayers`** der {{domxref("GPUTexture")}}-Schnittstelle repräsentiert die Tiefe oder die Anzahl der Ebenen der `GPUTexture`.

Diese wird basierend auf der `size`-Eigenschaft im Deskriptorobjekt festgelegt, das beim ursprünglichen Aufruf von {{domxref("GPUDevice.createTexture()")}} übergeben wird.

## Wert

Eine Zahl. Diese repräsentiert:

- Die Tiefe in Pixeln im Falle von Texturen mit einer `"3d"`-{{domxref("GPUTexture.dimension")}}.
- Die Anzahl der Ebenen im Falle von geschichteten Texturen mit einer `"2d"`-{{domxref("GPUTexture.dimension")}}.

In Fällen, in denen die `GPUTexture` keine Tiefe oder Ebenen hat, ist der Wert 1.

## Beispiele

```js
// ...

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
