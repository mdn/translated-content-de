---
title: GPUPipelineError
slug: Web/API/GPUPipelineError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUPipelineError`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} beschreibt ein Pipeline-Fehler. Dies ist der Wert, der empfangen wird, wenn ein von einem Aufruf von {{jsxref("Promise")}} zurückgegebenes Promise {{domxref("GPUDevice.createComputePipelineAsync()")}} oder {{domxref("GPUDevice.createRenderPipelineAsync()")}} abgelehnt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GPUPipelineError.GPUPipelineError", "GPUPipelineError()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `GPUPipelineError`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("DOMException")}}._

- {{domxref("GPUPipelineError.reason", "reason")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein aufgezählter Wert, der den Grund für das Scheitern der Pipeline-Erstellung in einer maschinenlesbaren Weise definiert.

## Beispiele

Im folgenden Beispiel versuchen wir, eine {{domxref("GPUComputePipeline")}} mit {{domxref("GPUDevice.createComputePipelineAsync()")}} zu erstellen. Wir haben jedoch unseren Compute-Pipeline-`entryPoint` als `"maijn"` falsch geschrieben (er sollte `"main"` sein), daher schlägt die Pipeline-Erstellung fehl, und unser `catch`-Block gibt den resultierenden Grund und die Fehlermeldung in der Konsole aus.

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
  // error ist eine GPUPipelineError-Objektinstanz
  console.error(error.reason);
  console.error(`Pipeline creation failed: ${error.message}`);
}

// ...
```

In diesem Fall ist der gegebene `reason` `"Validation"`, und die `message` ist `"Entry point "maijn" doesn't exist in the shader module [ShaderModule]."`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Best Practices für Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling)
