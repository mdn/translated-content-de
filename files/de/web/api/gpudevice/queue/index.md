---
title: "GPUDevice: queue-Eigenschaft"
short-title: queue
slug: Web/API/GPUDevice/queue
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`queue`** des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Wert

Eine Instanz des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Objekts.

## Beispiele

Grundlegender Zugriff auf die [`GPUQueue`](/de/docs/Web/API/GPUQueue):

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
> Weitere Queue-Beispiele finden Sie auf den Referenzseiten der [`GPUQueue`](/de/docs/Web/API/GPUQueue).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
