---
title: "GPUDevice: Warteschlangen-Eigenschaft"
short-title: Warteschlange
slug: Web/API/GPUDevice/queue
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`queue`** schreibgeschützte Eigenschaft der {{domxref("GPUDevice")}}-Schnittstelle gibt die primäre {{domxref("GPUQueue")}} des Geräts zurück.

## Wert

Eine {{domxref("GPUQueue")}}-Objektinstanz.

## Beispiele

Grundlegender Zugriff auf {{domxref("GPUQueue")}}:

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
> Für weitere Beispiele zur Warteschlange, siehe die {{domxref("GPUQueue")}}-Referenzseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
