---
title: "GPUDevice: createShaderModule()-Methode"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

      - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `"string"` ein Schlüssel, der verwendet wird, um die Aufzeichnung zu identifizieren oder auszuwählen, und das `compilationHint` ist entweder eine Instanz des [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekt oder ein enumerierter Wert von `"auto"`.

        Der Zweck von `hints` besteht darin, Informationen über das Pipeline-Layout so früh wie möglich bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge der Kompilierung zu maximieren, die einmalig von `createShaderModule()` durchgeführt werden kann, anstatt mehrere Male in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline).

        > [!NOTE]
        > Unterschiedliche Implementierungen können `hints` auf verschiedene Weise behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren. Das Bereitstellen von Hinweisen garantiert keine verbesserte Shader-Kompilierungsleistung in allen Browsern/Systemen.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Definition der Quellkarte zur Bereitstellung von Integration in Entwicklertools wie Sprache-Quell-Debugging. WGSL-Namen (Bezeichner) in Quellkarten sollten den in [WGSL-Bezeichner-Vergleich](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definierten Regeln folgen. Falls definiert, kann die Quellkarte als [source-map-v3 Format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Unterschiedliche Implementierungen können `sourceMap`s auf verschiedene Weise behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren.

### Rückgabewert

Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objektinstanz.

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
- Die [WebGPU Shading Language-Spezifikation](https://gpuweb.github.io/gpuweb/wgsl/)
