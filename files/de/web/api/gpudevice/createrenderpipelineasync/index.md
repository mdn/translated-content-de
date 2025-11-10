---
title: "GPUDevice: createRenderPipelineAsync() Methode"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipelineAsync()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird. Diese kann die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden, sobald die Pipeline ohne Verzögerung genutzt werden kann.

> [!NOTE]
> Es ist generell vorzuziehen, diese Methode gegenüber [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) zu verwenden, wann immer möglich, da so verhindert wird, dass GPU-Operationsausführungen bei der Pipeline-Kompilation blockiert werden.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Descriptor-Definition für die Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Wenn die Pipeline-Erstellung fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies auf einen internen Fehler zurückzuführen ist, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"`.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"`.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Bedingungen falsch ist:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbias), [`depthBiasClamp`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbiasclamp) und [`depthBiasSlopeScale`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbiasslopescale) sind auf `0` gesetzt für Linien- und Punkt-Topologien, d.h. wenn [`topology`](/de/docs/Web/API/GPUDevice/createRenderPipeline#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht ihre Standardwerte haben, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktor-Operationen den Quell-Alpha-Kanal verwendet (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (d.h. es muss ein `vec4` sein).
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive`-Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt ein einfaches Beispiel der Konstruktion eines gültigen Render-Pipeline-Descriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipelineAsync()` Aufruf zu erstellen.

```js
async function init() {
  // …

  const vertexBuffers = [
    {
      attributes: [
        {
          shaderLocation: 0, // position
          offset: 0,
          format: "float32x4",
        },
        {
          shaderLocation: 1, // color
          offset: 16,
          format: "float32x4",
        },
      ],
      arrayStride: 32,
      stepMode: "vertex",
    },
  ];

  const pipelineDescriptor = {
    vertex: {
      module: shaderModule,
      entryPoint: "vertex_main",
      buffers: vertexBuffers,
    },
    fragment: {
      module: shaderModule,
      entryPoint: "fragment_main",
      targets: [
        {
          format: navigator.gpu.getPreferredCanvasFormat(),
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },
    layout: "auto",
  };

  const renderPipeline =
    await device.createRenderPipelineAsync(pipelineDescriptor);

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
