---
title: "GPUDevice: createShaderModule() Methode"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createShaderModule()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String des [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Quellcodes.

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

      - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist der `"string"` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und `compilationHint` ist entweder ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt oder ein enumerierter Wert von `"auto"`.

        Der Zweck von `hints` besteht darin, Informationen über das Pipeline-Layout so früh wie möglich bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge an Kompilierung, die einmal durch `createShaderModule()` durchgeführt werden kann, maximal auszunutzen, anstatt mehrmals in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline).

        > [!NOTE]
        > Verschiedene Implementierungen können `hints` auf unterschiedliche Weise behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren. Die Bereitstellung von Hinweisen garantiert nicht, dass die Leistung der Shader-Kompilierung in allen Browsern/Systemen verbessert wird.

    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Source-Map-Definition zur Bereitstellung von Entwickler-Tool-Integrationen wie Debugging in der Quellsprache. WGSL-Namen (Identifier) in Source Maps sollten den in [WGSL Identifier Comparison](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definierten Regeln folgen. Wenn sie definiert sind, können die Quellkarten im [source-map-v3-Format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Verschiedene Implementierungen können `sourceMap`s auf unterschiedliche Weise behandeln, einschließlich der Möglichkeit, sie vollständig zu ignorieren.

### Rückgabewert

Eine [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createShaderModule()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt zurückgegeben:

- Wenn der WGSL-Code Ihres Shaders den Halbpräzisionstyp [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) verwendet, muss er `enable f16;` am Anfang enthalten, und das zugehörige [`GPUDevice`](/de/docs/Web/API/GPUDevice) muss mit dem `shader-f16` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert erstellt werden.

## Beispiele

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird unser Shader-Modul mit dem folgenden Code erstellt:

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
