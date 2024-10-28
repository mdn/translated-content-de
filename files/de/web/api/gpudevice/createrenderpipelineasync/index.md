---
title: "GPUDevice: createRenderPipelineAsync() Methode"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: 72bace50985179da02929a4cf9e9aa3f4bf4b395
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipelineAsync()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird. Diese kann die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden, sobald die Pipeline ohne Verzögerungen genutzt werden kann.

> [!NOTE]
> Es ist allgemein vorzuziehen, diese Methode über [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) zu verwenden, wann immer möglich, da sie die Blockierung der GPU-Betriebsausführung bei der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Beschreibung des Deskriptors für die Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung genutzt zu werden.

### Validierung

Falls die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline daher ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Bei einem internen Fehler wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"` haben.
- Bei einem Validierungsfehler wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eines der folgenden Kriterien nicht erfüllt ist:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind für Linien- und Punkt-Topologien auf <code>0</code> gesetzt, d.h., wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn irgendeine der verwendeten Blend-Faktor-Operationen den Quell-Alpha-Kanal nutzt (zum Beispiel `"src-alpha-saturated"`), muss das Ergebnis einen Alpha-Kanal haben (das heißt, es muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Proben](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Beschreibungsobjekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipelineAsync()`-Aufruf zu erstellen.

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
