---
title: "GPUOutOfMemoryError: GPUOutOfMemoryError() Konstruktor"
short-title: GPUOutOfMemoryError()
slug: Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`GPUOutOfMemoryError()`** Konstruktor erstellt eine neue Instanz des {{domxref("GPUOutOfMemoryError")}} Objekts.

## Syntax

```js-nolint
new GPUOutOfMemoryError(message)
```

### Parameter

- `message`
  - : Ein String, der eine lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde normalerweise nicht manuell den Konstruktor verwenden, um ein `GPUOutOfMemoryError` Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein Speicherfehler durch {{domxref("GPUDevice.popErrorScope")}} oder das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} Ereignis auftritt.

Sehen Sie auf der Hauptseite [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError#examples) ein konkretes Beispiel, das eine Instanz eines `GPUOutOfMemoryError` Objekts betrifft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
