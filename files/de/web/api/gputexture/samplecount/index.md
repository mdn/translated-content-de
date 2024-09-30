---
title: "GPUTexture: sampleCount-Eigenschaft"
short-title: sampleCount
slug: Web/API/GPUTexture/sampleCount
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`sampleCount`**-Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle repräsentiert die Sample-Anzahl der `GPUTexture`.

Diese wird über die `sampleCount`-Eigenschaft im Deskriptor-Objekt gesetzt, das an den ursächlichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Wenn weggelassen, ist der Standardwert 1.

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
