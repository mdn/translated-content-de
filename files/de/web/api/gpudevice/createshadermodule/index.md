---
title: "GPUDevice: Methode createShaderModule()"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createShaderModule()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle erstellt ein {{domxref("GPUShaderModule")}} aus einem String von [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Quellcode.

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

      - : Eine Sequenz von Datensatztypen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist der `"string"` ein Schlüssel, der zum Identifizieren oder Auswählen des Datensatzes verwendet wird, und `compilationHint` ist entweder eine {{domxref("GPUPipelineLayout")}}-Objektinstanz oder ein enumerierter Wert von `"auto"`.

        Der Zweck von `hints` ist es, Informationen über das Pipeline-Layout so früh wie möglich bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge der Kompilierung, die einmalig durch `createShaderModule()` durchgeführt werden kann, zu maximieren, anstatt mehrfach bei mehreren Aufrufen von {{domxref("GPUDevice.createComputePipeline()")}} und {{domxref("GPUDevice.createRenderPipeline()")}}.

        > [!NOTE]
        > Verschiedene Implementierungen können `hints` auf unterschiedliche Weise behandeln, möglicherweise auch vollständig ignorieren. Das Bereitstellen von Hinweisen garantiert keine verbesserte Shaderkompilierungsleistung in allen Browsern/Systemen.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Quellenkarten-Definition zur Bereitstellung von Entwicklerwerkzeugintegration wie Debugging in der Quellsprache. WGSL-Namen (Bezeichner) in Quellenkarten sollten den Regeln entsprechen, die in [WGSL-Identifier-Vergleich](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definiert sind. Wenn definiert, kann die Quellenkarte als [source-map-v3-Format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Verschiedene Implementierungen können `sourceMap`s auf unterschiedliche Weise behandeln, möglicherweise auch vollständig ignorieren.

### Rückgabewert

Eine Instanz des {{domxref("GPUShaderModule")}}-Objekts.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird unser Shader-Modul mit dem folgenden Code erstellt:

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
  // später

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
