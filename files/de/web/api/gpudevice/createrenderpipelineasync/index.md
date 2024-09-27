---
title: "GPUDevice: Methode createRenderPipelineAsync()"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipelineAsync()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird, welche die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerungen genutzt werden kann.

> [!NOTE]
> Es ist im Allgemeinen vorzuziehen, diese Methode anstelle von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) zu verwenden, wann immer dies möglich ist, da sie das Blockieren der GPU-Betriebsausführung bei der Pipelines-Kompilierung verhindert.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Definition von Descriptor für die Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz erfüllt wird, wenn die erstellte Pipeline einsatzbereit ist, ohne zusätzliche Verzögerung.

### Validierung

Wenn die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline dadurch ungültig wird, lehnt das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) ab:

- Wenn dies auf einen internen Fehler zurückzuführen ist, wird der `reason` des [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) `"internal"` sein.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, wird der `reason` des [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) `"validation"` sein.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Bedingungen nicht erfüllt ist:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blendfaktor-Operationen den Quellalphakanal nutzt (zum Beispiel `"src-alpha-saturated"`), hat das Ergebnis einen Alphakanal (das heißt, es muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Descriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipelineAsync()`-Aufruf zu erstellen.

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
