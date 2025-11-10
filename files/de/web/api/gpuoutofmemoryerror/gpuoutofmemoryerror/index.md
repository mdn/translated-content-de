---
title: "GPUOutOfMemoryError: GPUOutOfMemoryError() Konstruktor"
short-title: GPUOutOfMemoryError()
slug: Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUOutOfMemoryError()`** Konstruktor erzeugt eine neue Instanz des [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) Objekts.

## Syntax

```js-nolint
new GPUOutOfMemoryError(message)
```

### Parameter

- `message`
  - : Ein String, der eine für Menschen lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUOutOfMemoryError` Objekt zu erstellen. Der User-Agent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein Speicherüberlauf-Fehler durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) oder das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis auftritt.

Sehen Sie sich die Hauptseite [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError#examples) für ein konkretes Beispiel an, das eine `GPUOutOfMemoryError` Objektinstanz betrifft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
