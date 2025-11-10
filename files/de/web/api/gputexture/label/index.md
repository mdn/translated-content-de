---
title: "GPUTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTexture/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces bietet eine Bezeichnung, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese Bezeichnung kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt bereitgestellt wird, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird. Alternativ können Sie diese direkt am `GPUTexture`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen einer Bezeichnung über `GPUTexture.label`:

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

depthTexture.label = "my_texture";

console.log(depthTexture.label); // "my_texture"
```

Festlegen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) und anschließendem Abrufen über `GPUTexture.label`:

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
  label: "my_texture",
});

console.log(depthTexture.label); // "my_texture"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
