---
title: "GPUValidationError: GPUValidationError() Konstruktor"
short-title: GPUValidationError()
slug: Web/API/GPUValidationError/GPUValidationError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUValidationError()`** Konstruktor erstellt eine neue [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) Objektinstanz.

## Syntax

```js-nolint
new GPUValidationError(message)
```

### Parameter

- `message`
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUValidationError`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein Validierungsfehler von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) oder dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis auftritt.

Sehen Sie sich die Hauptseite [`GPUValidationError`](/de/docs/Web/API/GPUValidationError#examples) für ein konkretes Beispiel an, das eine `GPUValidationError` Objektinstanz beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlungs-Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
