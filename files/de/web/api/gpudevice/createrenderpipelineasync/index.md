---
title: "GPUDevice: createRenderPipelineAsync()-Methode"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipelineAsync()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird. Diese kann die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden, sobald die Pipeline ohne Verzögerungen genutzt werden kann.

> [!NOTE]
> Es ist im Allgemeinen vorzuziehen, diese Methode gegenüber [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) wann immer möglich zu verwenden, da sie verhindert, dass GPU-Operationen durch die Pipeline-Kompilierung blockiert werden.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Beschreibung des Deskriptors für die Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekts erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Wenn die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies aufgrund eines internen Fehlers geschieht, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"` haben.
- Wenn dies aufgrund eines Validierungsfehlers geschieht, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eines der folgenden falsch ist:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbias), [`depthBiasClamp`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbiasclamp) und [`depthBiasSlopeScale`](/de/docs/Web/API/GPUDevice/createRenderPipeline#depthbiasslopescale) sind auf <code>0</code> gesetzt für Linien- und Punkt-Topologien, d.h. wenn [`topology`](/de/docs/Web/API/GPUDevice/createRenderPipeline#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich der `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` weniger als 16.
  - Wenn eine der verwendeten Blendfaktor-Operationen den Quell-Alpha-Kanal nutzt (z. B. `"src-alpha-saturated"`), hat das Ausgangsobjekt einen Alpha-Kanal (das heißt, es muss ein `vec4` sein).
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzige Fragment-Shader-Einstiegspunktfunktion, die vom Browser als Standard-Einstiegspunkt verwendet werden kann.
- Für `primitive`-Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzige Vertex-Shader-Einstiegspunktfunktion, die vom Browser als Standard-Einstiegspunkt verwendet werden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipelineAsync()`-Aufruf zu erstellen.

```js
async function init() {
  // ...

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
