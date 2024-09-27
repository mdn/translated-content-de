---
title: "GPUInternalError: GPUInternalError() Konstruktor"
short-title: GPUInternalError()
slug: Web/API/GPUInternalError/GPUInternalError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUInternalError()`** Konstruktor erstellt eine neue
[`GPUInternalError`](/de/docs/Web/API/GPUInternalError) Objektinstanz.

## Syntax

```js-nolint
new GPUInternalError(message)
```

### Parameter

- `message`
  - : Ein String, der eine lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUInternalError` Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein interner Fehler durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) oder das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis angezeigt wird.

Siehe die Hauptseite [`GPUInternalError`](/de/docs/Web/API/GPUInternalError#examples) für ein Beispiel mit einer `GPUInternalError` Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlungs-Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
