---
title: "GPUTextureView: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTextureView/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Schnittstelle bietet ein Etikett, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann gesetzt werden, indem eine `label`-Eigenschaft im Descriptor-Objekt bereitgestellt wird, das im ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufruf übergeben wird, oder Sie können sie direkt auf dem `GPUTextureView`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies wie oben beschrieben nicht vorher festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Etiketts über `GPUTextureView.label`:

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView();

view.label = "my_view";

console.log(view.label); // "my_view"
```

Festlegen eines Etiketts über den ursprünglichen [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView)-Aufruf und anschließendes Abrufen über `GPUTextureView.label`:

```js
// …

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
