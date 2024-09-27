---
title: "GPUValidationError: GPUValidationError() Konstruktor"
short-title: GPUValidationError()
slug: Web/API/GPUValidationError/GPUValidationError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUValidationError()`** Konstruktor erstellt eine neue
[`GPUValidationError`](/de/docs/Web/API/GPUValidationError) Objektinstanz.

## Syntax

```js-nolint
new GPUValidationError(message)
```

### Parameter

- `message`
  - : Ein String, der eine für Menschen lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUValidationError` Objekt zu erstellen. Der User-Agent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein Validierungsfehler durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) oder das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis auftritt.

Siehe die Hauptseite [`GPUValidationError`](/de/docs/Web/API/GPUValidationError#examples) für ein spezifisches Beispiel, das eine `GPUValidationError` Objektinstanz beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlungs-Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
