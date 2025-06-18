---
title: GPUPipelineError
slug: Web/API/GPUPipelineError
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUPipelineError`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt einen Pipeline-Fehler. Dies ist der Wert, den man erhält, wenn ein von einem {{jsxref("Promise")}} zurückgegebenes Versprechen von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`GPUPipelineError()`](/de/docs/Web/API/GPUPipelineError/GPUPipelineError)
  - : Erstellt eine neue Instanz eines `GPUPipelineError`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`reason`](/de/docs/Web/API/GPUPipelineError/reason) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den Grund für das Fehlschlagen der Pipeline-Erstellung in maschinenlesbarer Form definiert.

## Beispiele

<!-- cSpell:ignore maijn -->

Im folgenden Codebeispiel versuchen wir, eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) unter Verwendung von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) zu erstellen. Allerdings haben wir unseren Compute-Pipeline-`entryPoint` falsch als `"maijn"` (es sollte `"main"` sein) buchstabiert, wodurch die Pipeline-Erstellung fehlschlägt, und unser `catch`-Block gibt den resultierenden Grund und die Fehlermeldung in der Konsole aus.

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

In diesem Fall ist der angegebene `reason` `"Validation"`, und die `message` lautet `"Entry point "maijn" doesn't exist in the shader module [ShaderModule]."`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU-Fehlerbehandlung – Beste Praktiken](https://toji.dev/webgpu-best-practices/error-handling)
