---
title: "GPUTexture: format-Eigenschaft"
short-title: format
slug: Web/API/GPUTexture/format
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`format`**-Eigenschaft der [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das Format der `GPUTexture` darstellt.

Dieses wird über die `format`-Eigenschaft im Deskriptor-Objekt festgelegt, das in den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird.

## Wert

Ein aufgezählter Wert. Siehe den Abschnitt [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle möglichen Werte.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
