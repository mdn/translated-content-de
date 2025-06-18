---
title: GPUDeviceLostInfo
slug: Web/API/GPUDeviceLostInfo
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUDeviceLostInfo`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert das Objekt, das zurückgegeben wird, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird. Es liefert Informationen darüber, warum ein Gerät verloren gegangen ist.

Weitere Informationen über den "lost"-Zustand finden Sie auf der Seite [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`message`](/de/docs/Web/API/GPUDeviceLostInfo/message) {{ReadOnlyInline}}
  - : Ein String, der eine lesbare Nachricht liefert, die erklärt, warum das Gerät verloren ging.
- [`reason`](/de/docs/Web/API/GPUDeviceLostInfo/reason) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Grund, warum das Gerät verloren ging, in maschinenlesbarer Form definiert.

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
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
