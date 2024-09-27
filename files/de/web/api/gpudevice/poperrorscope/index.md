---
title: "GPUDevice: popErrorScope() Methode"
short-title: popErrorScope()
slug: Web/API/GPUDevice/popErrorScope
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popErrorScope()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle entfernt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereich-Stack (ursprünglich mit [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) hinzugefügt) und gibt ein {{jsxref("Promise")}} zurück, das in ein Objekt aufgelöst wird, welches den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

## Syntax

```js-nolint
popErrorScope()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, welches den ersten im Bereich erfassten Fehler beschreibt. Dies kann vom Typ sein:

- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

Falls kein Fehler aufgetreten ist, wird es in `null` aufgelöst.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und ihn in der Konsole zu protokollieren.

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

Siehe [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
