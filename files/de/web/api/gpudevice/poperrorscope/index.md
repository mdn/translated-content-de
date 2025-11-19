---
title: "GPUDevice: popErrorScope()-Methode"
short-title: popErrorScope()
slug: Web/API/GPUDevice/popErrorScope
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popErrorScope()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle entfernt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereichsstapel (ursprünglich mit [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) hinzugefügt) und gibt ein {{jsxref("Promise")}} zurück, das ein Objekt beschreibt, welches den ersten im Bereich erfassten Fehler darstellt, oder `null`, falls kein Fehler aufgetreten ist.

## Syntax

```js-nolint
popErrorScope()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt beschreibt, welches den ersten im Bereich erfassten Fehler darstellt. Dieser kann vom Typ sein:

- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

Falls kein Fehler aufgetreten ist, wird `null` zurückgegeben.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und ihn im Konsolenprotokoll auszugeben.

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

Siehe [Best Practices für die Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
