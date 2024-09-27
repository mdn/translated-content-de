---
title: "GPURenderBundleEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`** schreibgeschützte Eigenschaft des [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Interfaces ist eine Zeichenkette, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellen einer `label`-Eigenschaft im Deskriptor-Objekt festgelegt werden, das in den ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) übergeben wird, oder Sie können es direkt am `GPURenderBundleEncoder`-Objekt abrufen und festlegen.

> [!NOTE]
> Diese Eigenschaft ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`label`](/de/docs/Web/API/GPURenderPassEncoder/label).

## Wert

Eine Zeichenkette. Wenn zuvor kein Labelwert festgelegt wurde, gibt das Abrufen des Labels eine leere Zeichenkette zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});

renderBundleEncoder.label = "myrenderbundleencoder";
console.log(renderBundleEncoder.label); // "myrenderbundleencoder"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) und anschließendes Abrufen über `GPURenderBundleEncoder.label`:

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
