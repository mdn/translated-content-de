---
title: "GPUDevice: label-Eigenschaft"
short-title: label
slug: Web/API/GPUDevice/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des
[`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces ist eine schreibgeschützte Zeichenfolge, die ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Wert

Eine Zeichenfolge. Wenn kein Labelwert zuvor gesetzt wurde, gibt das Abrufen des Labels eine leere Zeichenfolge zurück.

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
  device.label = "my_label";

  // Get a label
  console.log(device.label);

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
