---
title: "GPUDevice: Methode createShaderModule()"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createShaderModule()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Quellcode.

## Syntax

```js-nolint
createShaderModule(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `code`
      - : Ein String, der den WGSL-Quellcode für das Shader-Modul darstellt.
    - `hints` {{optional_inline}}
      - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `"string"` ein Schlüssel, der verwendet wird, um die Aufzeichnung zu identifizieren oder auszuwählen, und der `compilationHint` ist entweder eine [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objektinstanz oder ein enumerierter Wert von `"auto"`.

        Der Zweck von `hints` besteht darin, so früh wie möglich Informationen über das Pipeline-Layout bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge an Kompilierung zu maximieren, die durch `createShaderModule()` einmal durchgeführt werden kann, anstatt mehrmals in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline).

        > [!NOTE]
        > Verschiedene Implementierungen können `hints` unterschiedlich behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren. Das Bereitstellen von Hinweisen garantiert nicht, dass die Leistung der Shader-Kompilierung in allen Browsern/Systemen verbessert wird.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}
      - : Eine Definition einer Source-Map zur Integration von Entwicklerwerkzeugen wie Debugging in der Quellsprache. WGSL-Namen (Identifier) in Source-Maps sollten den Regeln folgen, die in [WGSL-Identifier-Vergleich](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definiert sind. Wenn definiert, kann die Source-Map als ein [source-map-v3-Format](https://tc39.es/ecma426/) interpretiert werden.

        > [!NOTE]
        > Verschiedene Implementierungen können `sourceMap`s unterschiedlich behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren.

### Rückgabewert

Eine [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createShaderModule()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt zurückgegeben:

- Wenn Ihr WGSL-Code des Shaders den Halbpräzisions-Gleitkommatyp [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) verwendet, muss `enable f16;` am Anfang stehen, und das zugehörige [`GPUDevice`](/de/docs/Web/API/GPUDevice) muss mit dem `shader-f16` [Feature](/de/docs/Web/API/GPUSupportedFeatures) erstellt worden sein.

## Beispiele

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird unser Shader-Modul mit folgendem Code erstellt:

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;

async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
  // later on

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- Die [WebGPU Shading Language Spezifikation](https://gpuweb.github.io/gpuweb/wgsl/)
