---
title: "GPUPipelineError: GPUPipelineError() Konstruktor"
short-title: GPUPipelineError()
slug: Web/API/GPUPipelineError/GPUPipelineError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUPipelineError()`** Konstruktor erzeugt eine neue Instanz eines [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) Objekts.

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
      - : Ein enumerierter Wert, der den Grund für das Fehlschlagen der Pipeline-Erstellung in einer maschinenlesbaren Weise definiert. Der Wert kann einer der folgenden sein:
        - `"internal"`: Die Pipeline-Erstellung ist aufgrund eines internen Fehlers fehlgeschlagen (siehe [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) für weitere Informationen über diese Art von Fehler).
        - `"validation"`: Die Pipeline-Erstellung ist aufgrund eines Validierungsfehlers fehlgeschlagen (siehe [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) für weitere Informationen über diese Art von Fehler).

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUPipelineError` Objekt zu erstellen. Der User-Agent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein {{jsxref("Promise")}}, das von einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegeben wird, ablehnt und damit ein Pipeline-Fehlschlagen signalisiert.

Siehe die Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples) für ein Beispiel, das eine `GPUPipelineError` Objektinstanz beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
