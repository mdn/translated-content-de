---
title: "GPUDevice: Methode popErrorScope()"
short-title: popErrorScope()
slug: Web/API/GPUDevice/popErrorScope
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`popErrorScope()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces entfernt einen bestehenden GPU-Fehlerbereich vom Fehlerbereichs-Stack (ursprünglich mit [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) hinzugefügt) und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder zu `null`, wenn kein Fehler aufgetreten ist.

## Syntax

```js-nolint
popErrorScope()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt. Dies kann von folgendem Typ sein:

- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)

Wenn kein Fehler aufgetreten ist, wird es zu `null` aufgelöst.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und diesen in der Konsole zu protokollieren.

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

Siehe [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
