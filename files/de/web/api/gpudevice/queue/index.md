---
title: "GPUDevice: queue-Eigenschaft"
short-title: queue
slug: Web/API/GPUDevice/queue
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`queue`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück. Diese Eigenschaft ist schreibgeschützt.

## Wert

Ein [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Objektinstanz.

## Beispiele

Einfacher Zugriff auf [`GPUQueue`](/de/docs/Web/API/GPUQueue):

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

  // ...

  // Common queue use — end current frame by passing array of
  // command buffers to queue for execution
  device.queue.submit([commandEncoder.finish()]);

  // ...
}
```

> [!NOTE]
> Für weitere Beispiele zu Queues, siehe die [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Referenzseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
