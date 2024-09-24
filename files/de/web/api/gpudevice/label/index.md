---
title: "GPUDevice: label-Eigenschaft"
short-title: label
slug: Web/API/GPUDevice/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`** schreibgeschützte Eigenschaft des {{domxref("GPUDevice")}}-Interfaces ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Wert

Ein String. Wenn kein Labelwert zuvor festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  // Create a GPUDevice
  const device = await adapter.requestDevice();

  // Set a label
  device.label = "mylabel";

  // Get a label
  console.log(device.label);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
