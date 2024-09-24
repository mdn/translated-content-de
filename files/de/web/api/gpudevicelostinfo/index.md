---
title: GPUDeviceLostInfo
slug: Web/API/GPUDeviceLostInfo
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Schnittstelle **`GPUDeviceLostInfo`** der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert das Objekt, das zurückgegeben wird, wenn das {{domxref("GPUDevice.lost")}} {{jsxref("Promise")}} aufgelöst wird. Dies liefert Informationen darüber, warum ein Gerät verloren gegangen ist.

Besuchen Sie die Seite {{domxref("GPUDevice.lost")}}, um mehr über den "verlorenen" Status zu erfahren.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUDeviceLostInfo.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum das Gerät verloren gegangen ist.
- {{domxref("GPUDeviceLostInfo.reason", "reason")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Grund, warum das Gerät verloren gegangen ist, auf eine maschinenlesbare Weise definiert.

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
  let device = await adapter.requestDevice(descriptor);

  // Use lost to handle lost devices
  device.lost.then((info) => {
    console.error(`WebGPU device was lost: ${info.message}`);
    device = null;
    if (info.reason !== "destroyed") {
      init();
    }
  });
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
