---
title: "GPURenderBundleEncoder: label Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle ist eine Zeichenkette, die ein Etikett bereitstellt, mit dem das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das im ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) übergeben wird, oder Sie können sie direkt am `GPURenderBundleEncoder`-Objekt abrufen und festlegen.

> [!NOTE]
> Diese Eigenschaft ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`label`](/de/docs/Web/API/GPURenderPassEncoder/label).

## Wert

Eine Zeichenkette. Wenn kein Label-Wert zuvor festgelegt wurde, liefert das Abrufen des Labels eine leere Zeichenkette zurück.

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
