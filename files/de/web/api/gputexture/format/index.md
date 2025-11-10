---
title: "GPUTexture: format-Eigenschaft"
short-title: format
slug: Web/API/GPUTexture/format
l10n:
  sourceCommit: 78c41c9b5211cc5bfba793c72a9adcac852e07f9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`format`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces ist eine schreibgeschützte Eigenschaft, die das Format der `GPUTexture` darstellt.

Diese wird über die `format`-Eigenschaft im Deskriptionsobjekt festgelegt, das im ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Ein aufgezählter Wert. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte. Siehe auch [Tier 1 und Tier 2 Texture-Formate](/de/docs/Web/API/GPUDevice/createTexture#tier_1_and_tier_2_texture_formats).

## Beispiele

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.format); // "depth24plus"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
