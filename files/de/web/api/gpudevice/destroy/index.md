---
title: "GPUDevice: destroy() Methode"
short-title: destroy()
slug: Web/API/GPUDevice/destroy
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle zerstört das Gerät, was weitere Operationen darauf verhindert.

Beachten Sie, dass:

- Alle aktuell auf der [`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts wartenden Befehle vor der Zerstörung des Geräts ausgeführt werden.
- Alle mit dem Gerät erstellten WebGPU-Ressourcen (Puffer, Texturen, etc.) ebenfalls zerstört werden.
- Alle mit dem Gerät erstellten gemappten Puffer werden ungemappt.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

  let device = await adapter.requestDevice();

  // Some time later

  device.destroy();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
