---
title: "GPUTexture: Format-Eigenschaft"
short-title: format
slug: Web/API/GPUTexture/format
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`format`**-Eigenschaft der Schnittstelle {{domxref("GPUTexture")}} ist eine schreibgeschützte Eigenschaft, die das Format der `GPUTexture` darstellt.

Diese wird über die `format`-Eigenschaft im Deskriptor-Objekt gesetzt, das im ursprünglichen Aufruf von {{domxref("GPUDevice.createTexture()")}} übergeben wird.

## Wert

Ein enumerierter Wert. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

## Beispiele

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.format); // "depth24plus"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
