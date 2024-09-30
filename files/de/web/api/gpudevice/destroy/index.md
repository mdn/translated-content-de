---
title: "GPUDevice: destroy() Methode"
short-title: destroy()
slug: Web/API/GPUDevice/destroy
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle zerstört das Gerät, wodurch weitere Operationen darauf verhindert werden.

Beachten Sie, dass:

- Alle derzeit im Gerät's [`GPUQueue`](/de/docs/Web/API/GPUQueue) eingereihten Befehle werden ausgeführt, bevor das Gerät zerstört wird.
- Alle WebGPU-Ressourcen, die mit dem Gerät erstellt wurden (Buffer, Texturen, etc.), werden ebenfalls zerstört.
- Alle gemappten Buffer, die mit dem Gerät erstellt wurden, werden umgemappt.

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
