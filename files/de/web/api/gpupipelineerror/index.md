---
title: GPUPipelineError
slug: Web/API/GPUPipelineError
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUPipelineError`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Pipeline-Fehler. Dies ist der Wert, der empfangen wird, wenn ein von einem {{jsxref("Promise")}} zurückgegebenes Versprechen bei einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgewiesen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUPipelineError()`](/de/docs/Web/API/GPUPipelineError/GPUPipelineError) {{Experimental_Inline}}
  - : Erstellt eine neue `GPUPipelineError`-Objektinstanz.

## Instanzen-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`reason`](/de/docs/Web/API/GPUPipelineError/reason) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein aufgezählter Wert, der den Grund angibt, warum die Pipelinenerstellung auf maschinenlesbare Weise fehlgeschlagen ist.

## Beispiele

Im folgenden Codebeispiel versuchen wir, eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) mit [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) zu erstellen. Wir haben jedoch unseren Compute-Pipeline-`entryPoint` als `"maijn"` falsch geschrieben (es sollte `"main"` sein), daher schlägt die Pipelinenerstellung fehl, und unser `catch`-Block gibt den resultierenden Grund und die Fehlermeldung in der Konsole aus.

```js
// ...

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

// ...
```

In diesem Fall ist der gegebene `reason` `"Validation"`, und die `message` lautet `"Entry point "maijn" doesn't exist in the shader module [ShaderModule]."`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
