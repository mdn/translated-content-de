---
title: "GPUDevice: label-Eigenschaft"
short-title: label
slug: Web/API/GPUDevice/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces ist ein String, der eine Bezeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Wert

Ein String. Wenn zuvor kein Wert für die Bezeichnung festgelegt wurde, gibt das Abrufen der Bezeichnung einen leeren String zurück.

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
