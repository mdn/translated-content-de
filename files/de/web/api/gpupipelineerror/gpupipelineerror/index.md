---
title: "GPUPipelineError: GPUPipelineError() Konstruktor"
short-title: GPUPipelineError()
slug: Web/API/GPUPipelineError/GPUPipelineError
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUPipelineError()`** Konstruktor erstellt eine neue Instanz des [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)-Objekts.

## Syntax

```js-nolint
new GPUPipelineError(message, options)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, der eine menschenlesbare Nachricht enthält, die erklärt, warum der Fehler aufgetreten ist. Wenn nicht angegeben, wird `message` standardmäßig auf einen leeren String (`""`) gesetzt.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `reason`
      - : Ein enumerierter Wert, der den Grund für das Scheitern der Pipeline-Erstellung maschinenlesbar definiert. Der Wert kann einer der folgenden sein:
        - `"internal"`: Die Pipeline-Erstellung ist aufgrund eines internen Fehlers fehlgeschlagen (siehe [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) für weitere Informationen über diese Arten von Fehlern).
        - `"validation"`: Die Pipeline-Erstellung ist aufgrund eines Validierungsfehlers fehlgeschlagen (siehe [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) für weitere Informationen über diese Arten von Fehlern).

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUPipelineError`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein durch eine {{jsxref("Promise")}} zurückgegebenen Promise von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird, was auf ein Pipeline-Fehlschlagen hinweist.

Sehen Sie sich die Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples) für ein Beispiel, das eine Instanz eines `GPUPipelineError`-Objekts beinhaltet, an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
