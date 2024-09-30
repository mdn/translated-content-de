---
title: GPUDeviceLostInfo
slug: Web/API/GPUDeviceLostInfo
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUDeviceLostInfo`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert das Objekt, das zurückgegeben wird, wenn der [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird. Dies liefert Informationen darüber, warum ein Gerät verloren gegangen ist.

Weitere Informationen über den "verlorenen" Status finden Sie auf der Seite [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`message`](/de/docs/Web/API/GPUDeviceLostInfo/message) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum das Gerät verloren gegangen ist.
- [`reason`](/de/docs/Web/API/GPUDeviceLostInfo/reason) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Grund angibt, warum das Gerät in maschinenlesbarer Form verloren gegangen ist.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
