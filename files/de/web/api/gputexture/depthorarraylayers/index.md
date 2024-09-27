---
title: "GPUTexture: depthOrArrayLayers Eigenschaft"
short-title: depthOrArrayLayers
slug: Web/API/GPUTexture/depthOrArrayLayers
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`depthOrArrayLayers`** schreibgeschützte Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture) Schnittstelle gibt die Tiefe oder Anzahl der Schichten der `GPUTexture` an.

Dieser Wert wird basierend auf der `size` Eigenschaft im Deskriptionsobjekt festgelegt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wurde.

## Wert

Eine Zahl. Diese repräsentiert:

- Die Tiefe in Pixeln im Fall von Texturen mit einer `"3d"` [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension).
- Die Anzahl der Schichten im Fall von geschichteten Texturen mit einer `"2d"` [`GPUTexture.dimension`](/de/docs/Web/API/GPUTexture/dimension).

In Fällen, in denen die `GPUTexture` keine Tiefe oder Schichten hat, ist der Wert 1.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
