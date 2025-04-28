---
title: "GPUDevice: createRenderPipelineAsync() Methode"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipelineAsync()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird. Diese kann die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden, sobald die Pipeline ohne Stauungen verwendet werden kann.

> [!NOTE]
> Es ist in der Regel vorzuziehen, diese Methode gegenüber [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) zu verwenden, wann immer es möglich ist, da sie das Blockieren der Ausführung von GPU-Operationen bei der Pipeline-Kompilierung verhindert.

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

Wenn die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies aufgrund eines internen Fehlers geschieht, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"`.
- Wenn dies aufgrund eines Validierungsfehlers geschieht, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"`.

Ein Validierungsfehler kann auftreten, wenn eines der folgenden Kriterien nicht erfüllt ist:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbias), [`depthBiasClamp`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbiasclamp) und [`depthBiasSlopeScale`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d.h. wenn [`topology`](/de/docs/Web/API/GPUDevice/createRenderPipeline#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` eingestellt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) der `maxColorAttachments` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blend-Faktor-Operationen den Quellen-Alpha-Kanal verwenden (zum Beispiel `"src-alpha-saturated"`), hat der Output einen Alpha-Kanal (d.h. es muss ein `vec4` sein).
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive` Objekte:
  - Wenn die `unclippedDepth` Eigenschaft verwendet wird, ist das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

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

- Das [WebGPU API](/de/docs/Web/API/WebGPU_API)
