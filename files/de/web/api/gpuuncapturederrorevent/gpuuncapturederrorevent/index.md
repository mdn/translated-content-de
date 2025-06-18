---
title: "GPUUncapturedErrorEvent: GPUUncapturedErrorEvent() Konstruktor"
short-title: GPUUncapturedErrorEvent()
slug: Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUUncapturedErrorEvent()`** Konstruktor erstellt eine neue Instanz eines [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)-Objekts.

## Syntax

```js-nolint
new GPUUncapturedErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein enumerierter Wert, der den Typ des Fehlers angibt. Mögliche Werte sind:
    - `"internal"`
      - : Der Fehler ist ein [`GPUInternalError`](/de/docs/Web/API/GPUInternalError).
    - `"out-of-memory"`
      - : Der Fehler ist ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError).
    - `"validation"`
      - : Der Fehler ist ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError).
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `error`
      - : Eine [`GPUError`](/de/docs/Web/API/GPUError)-Objektinstanz, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUUncapturedErrorEvent`-Objekt zu erstellen. Der User-Agent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis ausgelöst wird, um das Erfassen eines unerwarteten Fehlers zu ermöglichen.

Sehen Sie die Hauptseite zu [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlungs-Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
