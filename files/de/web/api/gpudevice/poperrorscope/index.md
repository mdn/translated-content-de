---
title: "GPUDevice: popErrorScope() Methode"
short-title: popErrorScope()
slug: Web/API/GPUDevice/popErrorScope
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popErrorScope()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle entfernt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereichs-Stack (ursprünglich mit [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) hinzugefügt) und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

## Syntax

```js-nolint
popErrorScope()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt. Dieser kann vom Typ sein:

- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

Falls kein Fehler aufgetreten ist, wird es zu `null` aufgelöst.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und protokolliert ihn in der Konsole.

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // Invalid, maxAnisotropy must be at least 1.
});

device.popErrorScope().then((error) => {
  if (error) {
    sampler = null;
    console.error(`An error occurred while creating sampler: ${error.message}`);
  }
});
```

Weitere Beispiele und Informationen finden Sie in den [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
