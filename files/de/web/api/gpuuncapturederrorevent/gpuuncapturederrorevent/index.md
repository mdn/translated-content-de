---
title: "GPUUncapturedErrorEvent: GPUUncapturedErrorEvent()-Konstruktor"
short-title: GPUUncapturedErrorEvent()
slug: Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`GPUUncapturedErrorEvent()`**-Konstruktor erstellt eine neue Instanz eines {{domxref("GPUUncapturedErrorEvent")}}-Objekts.

## Syntax

```js-nolint
new GPUUncapturedErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein enumerierter Wert, der den Fehlerart angibt. Mögliche Werte sind:
    - `"internal"`
      - : Der Fehler ist ein {{domxref("GPUInternalError")}}.
    - `"out-of-memory"`
      - : Der Fehler ist ein {{domxref("GPUOutOfMemoryError")}}.
    - `"validation"`
      - : Der Fehler ist ein {{domxref("GPUValidationError")}}.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `error`
      - : Eine Instanz eines {{domxref("GPUError")}}-Objekts, die Zugriff auf die Details des Fehlers bietet.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUUncapturedErrorEvent`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn das {{domxref("GPUDevice")}}-Ereignis {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} ausgelöst wird, um das Erfassen eines unerwarteten Fehlers zu ermöglichen.

Siehe die Hauptseite von [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Beste Praktiken für die Behandlung von WebGPU-Fehlern](https://toji.dev/webgpu-best-practices/error-handling)
