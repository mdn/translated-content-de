---
title: "GPUDevice: createShaderModule()-Methode"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createShaderModule()`**-Methode der
[`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Quellcode.

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

      - : Eine Sequenz von Record-Typen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordneten Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist der `"string"` ein Schlüssel zur Identifikation oder Auswahl des Records, und `compilationHint` ist entweder eine [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objektinstanz oder ein aufgezählter Wert von `"auto"`.

        Der Zweck von `hints` ist es, Informationen über das Pipeline-Layout so früh wie möglich bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge an Kompilierung, die einmal durch `createShaderModule()` erfolgen kann, zu maximieren, anstatt mehrmals in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline).

        > [!NOTE]
        > Verschiedene Implementierungen können `hints` auf unterschiedliche Weise behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren. Das Bereitstellen von Hinweisen garantiert nicht verbesserte Shader-Kompilierungsleistung in allen Browsern/Systemen.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die zur Identifikation des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Source-Map-Definition zur Bereitstellung von Entwicklertool-Integration wie Debugging in der Quellsprache. WGSL-Namen (Bezeichner) in Source-Maps sollten den Regeln im [WGSL Identifier Comparison](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) folgen. Falls definiert, kann die Source-Map als [source-map-v3 format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Verschiedene Implementierungen können `sourceMap`s auf unterschiedliche Weise behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren.

### Rückgabewert

Eine [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objektinstanz.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird unser Shader-Modul mit folgendem Code erstellt:

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

  let device = await adapter.requestDevice();

  // ...
  // later on

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- Die [WebGPU Shading Language Spezifikation](https://gpuweb.github.io/gpuweb/wgsl/)
