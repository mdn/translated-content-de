---
title: "GPUDevice: pushErrorScope()-Methode"
short-title: pushErrorScope()
slug: Web/API/GPUDevice/pushErrorScope
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`pushErrorScope()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle fügt einen neuen GPU-Fehlerbereich auf den Fehlerbereichs-Stack des Geräts hinzu, sodass Sie Fehler eines bestimmten Typs erfassen können.

Sobald Sie die Fehleraufnahme abgeschlossen haben, können Sie die Aufnahme beenden, indem Sie {{domxref("GPUDevice.popErrorScope()")}} aufrufen. Dies entfernt den Bereich aus dem Stack und gibt ein {{jsxref("Promise")}} zurück, der zu einem Objekt aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

## Syntax

```js-nolint
pushErrorScope(filter)
```

### Parameter

- `filter`
  - : Ein enumerierter Wert, der angibt, welcher Fehlertyp in diesem bestimmten Fehlerbereich erfasst wird. Mögliche Werte sind:
    - `"internal"`
      - : Der Fehlerbereich wird einen {{domxref("GPUInternalError")}} erfassen.
    - `"out-of-memory"`
      - : Der Fehlerbereich wird einen {{domxref("GPUOutOfMemoryError")}} erfassen.
    - `"validation"`
      - : Der Fehlerbereich wird einen {{domxref("GPUValidationError")}} erfassen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

Das folgende Beispiel verwendet einen Fehlerbereich, um einen vermuteten Validierungsfehler zu erfassen und im Protokoll auszugeben.

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // Ungültig, maxAnisotropy muss mindestens 1 sein.
});

device.popErrorScope().then((error) => {
  if (error) {
    sampler = null;
    console.error(`Ein Fehler ist beim Erstellen des Samplers aufgetreten: ${error.message}`);
  }
});
```

Siehe [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling) für viele weitere Beispiele und Informationen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
