---
title: "GPUUncapturedErrorEvent: GPUUncapturedErrorEvent() Konstruktor"
short-title: GPUUncapturedErrorEvent()
slug: Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUUncapturedErrorEvent()`** Konstruktor erstellt eine neue Instanz eines [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent) Objekts.

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
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `error`
      - : Eine Instanz eines [`GPUError`](/de/docs/Web/API/GPUError) Objekts, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUUncapturedErrorEvent` Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis ausgelöst wird, um das Erreichen eines unerwarteten Fehlers zu ermöglichen.

Siehe die Hauptseite [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
