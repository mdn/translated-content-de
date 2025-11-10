---
title: "GPUInternalError: GPUInternalError()-Konstruktor"
short-title: GPUInternalError()
slug: Web/API/GPUInternalError/GPUInternalError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUInternalError()`**-Konstruktor erstellt eine neue Instanz des [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)-Objekts.

## Syntax

```js-nolint
new GPUInternalError(message)
```

### Parameter

- `message`
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUInternalError`-Objekt zu erstellen. Der User-Agent verwendet diesen Konstruktor, um ein geeignetes Objekt zu erstellen, wenn ein interner Fehler durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) oder das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis auftritt.

Ein Beispiel, das eine `GPUInternalError`-Objektinstanz umfasst, finden Sie auf der Hauptseite [`GPUInternalError`](/de/docs/Web/API/GPUInternalError#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung – bewährte Methoden](https://toji.dev/webgpu-best-practices/error-handling)
