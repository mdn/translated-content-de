---
title: "GPUOutOfMemoryError: GPUOutOfMemoryError()-Konstruktor"
short-title: GPUOutOfMemoryError()
slug: Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUOutOfMemoryError()`**-Konstruktor erstellt eine neue Instanz des [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)-Objekts.

## Syntax

```js-nolint
new GPUOutOfMemoryError(message)
```

### Parameter

- `message`
  - : Ein String, der eine lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUOutOfMemoryError`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein Speicherplatzfehler durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) oder das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis erkannt wird.

Siehe die Hauptseite [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError#examples) für ein spezifisches Beispiel, das eine `GPUOutOfMemoryError`-Objektinstanz beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
