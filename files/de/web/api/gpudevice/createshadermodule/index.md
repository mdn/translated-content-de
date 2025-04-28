---
title: "GPUDevice: createShaderModule() Methode"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createShaderModule()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem Quellcode-String in [WGSL](https://gpuweb.github.io/gpuweb/wgsl/).

## Syntax

```js-nolint
createShaderModule(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `code`
      - : Ein String, der den WGSL-Quellcode für das Shader-Modul repräsentiert.
    - `hints` {{optional_inline}}

      - : Eine Sequenz von Datensatztypen, mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist der `"string"` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und der `compilationHint` ist entweder eine Instanz des [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekts oder ein aufgezählter Wert von `"auto"`.

        Der Zweck von `hints` besteht darin, so früh wie möglich Informationen über das Pipeline-Layout bereitzustellen, um die Leistung zu verbessern. Die Idee ist, dass durch `createShaderModule()` so viel wie möglich an Kompilierung einmal durchgeführt werden kann, anstatt mehrfach in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline).

        > [!NOTE]
        > Verschiedene Implementierungen können `hints` unterschiedlich behandeln, möglicherweise auch komplett ignorieren. Das Bereitstellen von Hinweisen garantiert nicht in allen Browsern/Systemen eine verbesserte Shader-Kompilierungsleistung.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Definition der Quellkarte zur Bereitstellung von Entwicklungswerkzeugintegrationen wie Debugging in der Quellsprache. WGSL Namen (Bezeichner) in Quellkarten sollten den Regeln folgen, die im [WGSL Bezeichnervergleich](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definiert sind. Wenn definiert, kann die Quellkarte als [source-map-v3 Format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Verschiedene Implementierungen können `sourceMap`s unterschiedlich behandeln, möglicherweise auch komplett ignorieren.

### Rückgabewert

Eine Instanz des [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createShaderModule()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt zurückgegeben:

- Wenn der WGSL-Code Ihres Shaders den Halbpräzisions-Gleitkommatyp [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) verwendet, muss er `enable f16;` zu Beginn enthalten und das zugehörige [`GPUDevice`](/de/docs/Web/API/GPUDevice) muss mit dem `shader-f16` [Feature](/de/docs/Web/API/GPUSupportedFeatures) erstellt sein.

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
