---
title: "GPUPipelineError: GPUPipelineError()-Konstruktor"
short-title: GPUPipelineError()
slug: Web/API/GPUPipelineError/GPUPipelineError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`GPUPipelineError()`**-Konstruktor erstellt eine neue Instanz des [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)-Objekts.

## Syntax

```js-nolint
new GPUPipelineError(message, options)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, der eine leicht verständliche Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist. Falls nicht angegeben, ist der Standardwert für `message` ein leerer String (`""`).
- `options`
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `reason`
      - : Ein aufgezählter Wert, der den Grund, warum die Pipelinenerstellung fehlgeschlagen ist, auf eine maschinenlesbare Weise definiert. Der Wert kann einer der folgenden sein:
        - `"internal"`: Die Pipelinenerstellung ist aufgrund eines internen Fehlers fehlgeschlagen (siehe [`GPUInternalError`](/de/docs/Web/API/GPUInternalError) für mehr Informationen über diese Art von Fehler).
        - `"validation"`: Die Pipelinenerstellung ist aufgrund eines Validierungsfehlers fehlgeschlagen (siehe [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) für mehr Informationen über diese Art von Fehler).

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUPipelineError`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein {{jsxref("Promise")}}, das von einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegeben wird, abgelehnt wird und so ein Pipeline-Fehler signalisiert.

Sehen Sie sich die Hauptseite [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError#examples) für ein Beispiel an, das eine Instanz eines `GPUPipelineError`-Objekts beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlermanagement Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
