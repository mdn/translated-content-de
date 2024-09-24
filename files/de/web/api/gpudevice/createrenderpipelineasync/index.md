---
title: "GPUDevice: createRenderPipelineAsync() Methode"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createRenderPipelineAsync()`** Methode der {{domxref("GPUDevice")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("GPURenderPipeline")}} aufgelöst wird, das die Vertex- und Fragment-Shader-Stufen steuern kann und in einem {{domxref("GPURenderPassEncoder")}} oder {{domxref("GPURenderBundleEncoder")}} verwendet werden kann, sobald die Pipeline ohne Verzögerungen genutzt werden kann.

> [!NOTE]
> Es ist im Allgemeinen vorzuziehen, diese Methode gegenüber {{domxref("GPUDevice.createRenderPipeline()")}} zu verwenden, wann immer möglich, da sie das Blockieren der Ausführung von GPU-Operationen während der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Descriptor-Definition für die Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer {{domxref("GPURenderPipeline")}} Objektinstanz aufgelöst wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Wenn die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline dadurch ungültig wird, lehnt das zurückgegebene Versprechen mit einem {{domxref("GPUPipelineError")}} ab:

- Wenn dies auf einen internen Fehler zurückzuführen ist, wird der {{domxref("GPUPipelineError")}} einen `reason` von `"internal"` haben.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, wird der {{domxref("GPUPipelineError")}} einen `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Bedingungen nicht erfüllt ist:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht ihre Standardwerte haben, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blend-Faktor-Operationen den Quell-Alpha-Kanal verwenden (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (das heißt, es muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Grundlegendes Beispiel

Das folgende Beispiel zeigt ein grundlegendes Beispiel für den Aufbau eines gültigen Render-Pipeline-Descriptor-Objekts, das dann verwendet wird, um eine {{domxref("GPURenderPipeline")}} über einen `createRenderPipelineAsync()` Aufruf zu erstellen.

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
