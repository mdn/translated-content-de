---
title: "GPUDevice: pushErrorScope() Methode"
short-title: pushErrorScope()
slug: Web/API/GPUDevice/pushErrorScope
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushErrorScope()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle fügt einen neuen GPU-Fehlerbereich zum Fehlerbereich-Stack des Geräts hinzu, was es Ihnen ermöglicht, Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung durch Aufrufen von [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) beenden. Dies entfernt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

## Syntax

```js-nolint
pushErrorScope(filter)
```

### Parameter

- `filter`
  - : Ein enumerierter Wert, der angibt, welcher Fehlertyp in diesem speziellen Fehlerbereich erfasst wird. Mögliche Werte sind:
    - `"internal"`
      - : Der Fehlerbereich erfasst einen [`GPUInternalError`](/de/docs/Web/API/GPUInternalError).
    - `"out-of-memory"`
      - : Der Fehlerbereich erfasst einen [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError).
    - `"validation"`
      - : Der Fehlerbereich erfasst einen [`GPUValidationError`](/de/docs/Web/API/GPUValidationError).

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

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

Sehen Sie sich die [WebGPU-Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
