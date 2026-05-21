---
title: "GPUDevice: pushErrorScope() Methode"
short-title: pushErrorScope()
slug: Web/API/GPUDevice/pushErrorScope
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushErrorScope()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle fügt einen neuen Fehlerbereich (Error Scope) zum Fehlerbereichs-Stack des Geräts hinzu, wodurch Sie Fehler eines bestimmten Typs erfassen können.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das auf ein Objekt aufgelöst wird, welches den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

## Syntax

```js-nolint
pushErrorScope(filter)
```

### Parameter

- `filter`
  - : Ein enumerierter Wert, der angibt, welche Art von Fehler in diesem spezifischen Fehlerbereich erfasst wird. Mögliche Werte sind:
    - `"internal"`
      - : Der Fehlerbereich wird einen [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) erfassen.
    - `"out-of-memory"`
      - : Der Fehlerbereich wird einen [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) erfassen.
    - `"validation"`
      - : Der Fehlerbereich wird einen [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erfassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und im Konsolenprotokoll auszugeben.

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

Siehe [WebGPU Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
