---
title: "GPUDevice: Methode popErrorScope()"
short-title: popErrorScope()
slug: Web/API/GPUDevice/popErrorScope
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`popErrorScope()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle entfernt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereichstapel (ursprünglich mit {{domxref("GPUDevice.pushErrorScope()")}} hinzugefügt) und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das den im Bereich erfassten ersten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

## Syntax

```js-nolint
popErrorScope()
```

### Parameter

Keine.

### Rückgabewert

ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das den im Bereich erfassten ersten Fehler beschreibt. Dies kann ein Typ von:

- {{domxref("GPUInternalError")}}
- {{domxref("GPUOutOfMemoryError")}}
- {{domxref("GPUValidationError")}}

Wenn kein Fehler aufgetreten ist, wird es zu `null` aufgelöst.

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und protokolliert diesen in der Konsole.

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // Ungültig, maxAnisotropy muss mindestens 1 sein.
});

device.popErrorScope().then((error) => {
  if (error) {
    sampler = null;
    console.error(`Beim Erstellen des Samplers ist ein Fehler aufgetreten: ${error.message}`);
  }
});
```

Siehe [WebGPU Fehlerbehandlungs-Best-Practices](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
