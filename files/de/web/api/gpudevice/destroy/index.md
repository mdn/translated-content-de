---
title: "GPUDevice: destroy() Methode"
short-title: destroy()
slug: Web/API/GPUDevice/destroy
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle zerstört das Gerät und verhindert weitere Operationen darauf.

Beachten Sie, dass:

- Alle aktuell für die [`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts anstehenden Befehle ausgeführt werden, bevor das Gerät zerstört wird.
- Alle mit dem Gerät erstellten WebGPU-Ressourcen (Buffern, Texturen usw.) ebenfalls zerstört werden.
- Alle mit dem Gerät erstellten gemappten Buffer ungemappt werden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
