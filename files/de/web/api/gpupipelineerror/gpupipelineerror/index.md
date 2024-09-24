---
title: "GPUPipelineError: GPUPipelineError() Konstruktor"
short-title: GPUPipelineError()
slug: Web/API/GPUPipelineError/GPUPipelineError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`GPUPipelineError()`** Konstruktor erstellt eine neue Instanz eines {{domxref("GPUPipelineError")}}-Objekts.

## Syntax

```js-nolint
new GPUPipelineError(message, options)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, der eine für Menschen lesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist. Wenn nicht angegeben, wird `message` auf einen leeren String (`""`) gesetzt.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `reason`
      - : Ein enumerierter Wert, der den Grund für das Scheitern der Pipeline-Erstellung auf maschinenlesbare Weise definiert. Der Wert kann einer der folgenden sein:
        - `"internal"`: Die Pipeline-Erstellung schlug aufgrund eines internen Fehlers fehl (siehe {{domxref("GPUInternalError")}} für weitere Informationen zu diesen Arten von Fehlern).
        - `"validation"`: Die Pipeline-Erstellung schlug aufgrund eines Validierungsfehlers fehl (siehe {{domxref("GPUValidationError")}} für weitere Informationen zu diesen Arten von Fehlern).

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUPipelineError`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein geeignetes Objekt zu erstellen, wenn ein {{jsxref("Promise")}} von einem Aufruf von {{domxref("GPUDevice.createComputePipelineAsync()")}} oder {{domxref("GPUDevice.createRenderPipelineAsync()")}} abgelehnt wird, wodurch ein Pipeline-Fehler signalisiert wird.

Sehen Sie sich die Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples) für ein Beispiel an, das eine Instanz eines `GPUPipelineError`-Objekts umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlungsbest Practices](https://toji.dev/webgpu-best-practices/error-handling)
