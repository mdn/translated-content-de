---
title: "GPURenderBundleEncoder: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle ist ein Zeichenfolgenwert, der ein Label bereitstellt, das beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zur Identifizierung des Objekts verwendet werden kann.

Dieses Label kann gesetzt werden, indem eine `label`-Eigenschaft in dem Deskriptorobjekt bereitgestellt wird, das bei dem ursprünglichen Aufruf von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) übergeben wird, oder Sie können es direkt auf dem `GPURenderBundleEncoder`-Objekt abrufen und festlegen.

> [!NOTE]
> Diese Eigenschaft ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`label`](/de/docs/Web/API/GPURenderPassEncoder/label).

## Wert

Ein Zeichenstring. Wenn kein Labelwert zuvor gesetzt wurde, gibt das Abrufen des Labels eine leere Zeichenfolge zurück.

## Beispiele

Setzen und Abrufen eines Labels via `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});

renderBundleEncoder.label = "myrenderbundleencoder";
console.log(renderBundleEncoder.label); // "myrenderbundleencoder"
```

Setzen eines Labels via des ursprünglichen Aufrufs von [`GPUDevice.createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder), und dann Abrufen über `GPURenderBundleEncoder.label`:

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
