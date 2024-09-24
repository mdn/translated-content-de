---
title: "GPURenderBundleEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`** schreibgeschützte Eigenschaft des {{domxref("GPURenderBundleEncoder")}}-Interfaces ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskripturobjekt bereitgestellt wird, das in den ursprünglichen {{domxref("GPUDevice.createRenderBundleEncoder()")}}-Aufruf übergeben wird, oder Sie können es direkt auf dem `GPURenderBundleEncoder`-Objekt abrufen und festlegen.

> [!NOTE]
> Diese Eigenschaft ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.label", "label")}}.

## Wert

Ein String. Wenn zuvor kein Label-Wert festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});

renderBundleEncoder.label = "myrenderbundleencoder";
console.log(renderBundleEncoder.label); // "myrenderbundleencoder"
```

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createRenderBundleEncoder()")}}-Aufruf und anschließendes Abrufen über `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
  label: "myrenderbundleencoder",
});

console.log(renderBundleEncoder.label); // "myrenderbundleencoder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
