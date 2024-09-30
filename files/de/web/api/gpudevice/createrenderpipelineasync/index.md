---
title: "GPUDevice: Methode createRenderPipelineAsync()"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipelineAsync()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird. Dieses kann die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden, sobald die Pipeline ohne Verzögerung genutzt werden kann.

> [!NOTE]
> Es ist im Allgemeinen vorzuziehen, diese Methode anstelle von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) zu verwenden, wann immer dies möglich ist, da sie das Blockieren der Ausführung von GPU-Operationen bei der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Beschreibung des Deskriptors für die Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Wenn die Pipeline-Erstellung fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies aufgrund eines internen Fehlers geschieht, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"`.
- Wenn dies aufgrund eines Validierungsfehlers geschieht, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"`.

Ein Validierungsfehler kann auftreten, wenn eines der Folgenden falsch ist:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn `stencilFront` oder `stencilBack`-Eigenschaften nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blendfaktor-Operationen den Quell-Alpha-Kanal benutzt (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (das heißt, es muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt ein grundlegendes Beispiel für den Aufbau eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipelineAsync()`-Aufruf zu erstellen.

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
