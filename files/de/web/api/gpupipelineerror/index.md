---
title: GPUPipelineError
slug: Web/API/GPUPipelineError
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUPipelineError`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Pipeline-Fehler. Dies ist der Wert, der erhalten wird, wenn ein von einem {{jsxref("Promise")}} zurückgegebenes Versprechen bei einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUPipelineError()`](/de/docs/Web/API/GPUPipelineError/GPUPipelineError)
  - : Erstellt eine neue Instanz eines `GPUPipelineError`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`reason`](/de/docs/Web/API/GPUPipelineError/reason) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Grund definiert, warum die Pipeline-Erstellung in einer maschinenlesbaren Weise fehlgeschlagen ist.

## Beispiele

<!-- cSpell:ignore maijn -->

Im folgenden Beispiel versuchen wir, eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) mithilfe von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) zu erstellen. Wir haben jedoch unseren Compute-Pipeline-`entryPoint` als `"maijn"` falsch geschrieben (es sollte `"main"` sein), daher schlägt die Pipeline-Erstellung fehl, und unser `catch`-Block druckt den resultierenden Grund und die Fehlermeldung in die Konsole aus.

```js
// …

let computePipeline;

try {
  computePipeline = await device.createComputePipelineAsync({
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    compute: {
      module: shaderModule,
      entryPoint: "maijn",
    },
  });
} catch (error) {
  // error is a GPUPipelineError object instance
  console.error(error.reason);
  console.error(`Pipeline creation failed: ${error.message}`);
}

// …
```

In diesem Fall ist der gegebene `reason` `"Validation"` und die `message` lautet `"Entry point "maijn" doesn't exist in the shader module [ShaderModule]."`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [Best Practices zur Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling)
