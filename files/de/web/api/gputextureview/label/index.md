---
title: "GPUTextureView: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTextureView/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das an den ursprünglichen Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) übergeben wird, oder Sie können es direkt am `GPUTextureView`-Objekt festlegen und abrufen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben festgelegt wurde, ist es ein leerer String.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView();

view.label = "my_view";

console.log(view.label); // "my_view"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) und anschließendes Abrufen über `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView({
  label: "my_view",
});

console.log(view.label); // "my_view"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
