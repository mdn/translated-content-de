---
title: "GPUDevice: queue-Eigenschaft"
short-title: queue
slug: Web/API/GPUDevice/queue
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`queue`**-Schreibgeschützte Eigenschaft des
[`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Wert

Ein [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Objektinstanz.

## Beispiele

Grundlegender Zugriff auf [`GPUQueue`](/de/docs/Web/API/GPUQueue):

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

  // …

  // Common queue use — end current frame by passing array of
  // command buffers to queue for execution
  device.queue.submit([commandEncoder.finish()]);

  // …
}
```

> [!NOTE]
> Weitere Beispiel für Queues finden Sie auf den [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Referenzseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
