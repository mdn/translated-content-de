---
title: "GPUTextureView: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTextureView/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft des {{domxref("GPUTextureView")}}-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Descriptor-Objekt festgelegt werden, das an die ursprungsgebende {{domxref("GPUTexture.createView()")}}-Aufruf übergeben wird, oder Sie können es direkt am `GPUTextureView`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dieser nicht wie oben beschrieben zuvor gesetzt wurde, wird er ein leerer String sein.

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

view.label = "myview";

console.log(view.label); // "myview"
```

Festlegen eines Labels über den ursprungsgebenden {{domxref("GPUTexture.createView()")}}-Aufruf und anschließendes Abrufen über `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView({
  label: "myview",
});

console.log(view.label); // "myview"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
