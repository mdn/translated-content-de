---
title: "GPURenderBundleEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft des [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Interfaces ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptorobjekt, das in den ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) übergeben wird, gesetzt werden, oder Sie können es direkt auf dem `GPURenderBundleEncoder`-Objekt abrufen und setzen.

> [!NOTE]
> Diese Eigenschaft ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`label`](/de/docs/Web/API/GPURenderPassEncoder/label).

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});

renderBundleEncoder.label = "my_render_bundle_encoder";
console.log(renderBundleEncoder.label); // "my_render_bundle_encoder"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) und dann Abrufen über `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
  label: "my_render_bundle_encoder",
});

console.log(renderBundleEncoder.label); // "my_render_bundle_encoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
