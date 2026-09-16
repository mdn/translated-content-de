---
title: "GPURenderBundleEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der Schnittstelle [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) ist ein String, der eine Bezeichnung bereitstellt, mit der das Objekt identifiziert werden kann, beispielsweise in Meldungen von [`GPUError`](/de/docs/Web/API/GPUError) oder Konsolenwarnungen.

Sie kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das an den ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) übergeben wird. Alternativ können Sie sie direkt auf dem `GPURenderBundleEncoder`-Objekt abrufen und festlegen.

> [!NOTE]
> Diese Eigenschaft ist funktional identisch mit ihrem Gegenstück auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`label`](/de/docs/Web/API/GPURenderPassEncoder/label).

## Wert

Ein String. Wenn zuvor kein Bezeichnungswert festgelegt wurde, gibt das Abrufen der Bezeichnung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Bezeichnung über `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});

renderBundleEncoder.label = "my_render_bundle_encoder";
console.log(renderBundleEncoder.label); // "my_render_bundle_encoder"
```

Festlegen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) und anschließendes Abrufen über `GPURenderBundleEncoder.label`:

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
