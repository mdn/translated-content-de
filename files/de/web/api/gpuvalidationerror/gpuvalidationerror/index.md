---
title: "GPUValidationError: GPUValidationError() Konstruktor"
short-title: GPUValidationError()
slug: Web/API/GPUValidationError/GPUValidationError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`GPUValidationError()`** Konstruktor erstellt eine neue Instanz des {{domxref("GPUValidationError")}} Objekts.

## Syntax

```js-nolint
new GPUValidationError(message)
```

### Parameter

- `message`
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUValidationError` Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein Validierungsfehler durch {{domxref("GPUDevice.popErrorScope")}} oder das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} Ereignis auftritt.

Ein spezifisches Beispiel für eine `GPUValidationError` Objektinstanz finden Sie auf der Hauptseite [`GPUValidationError`](/de/docs/Web/API/GPUValidationError#examples).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung beste Praktiken](https://toji.dev/webgpu-best-practices/error-handling)
