---
title: "GPUDevice: Warteschlangen-Eigenschaft"
short-title: queue
slug: Web/API/GPUDevice/queue
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`queue`** der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Wert

Eine Instanz des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Objekts.

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
> Weitere Warteschlangen-Beispiele finden Sie auf den Referenzseiten von [`GPUQueue`](/de/docs/Web/API/GPUQueue).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
