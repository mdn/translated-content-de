---
title: "GPUDevice: Methode createShaderModule()"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`createShaderModule()`** des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Quellcode.

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

      - : Eine Sequenz von Datensätzen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist der `"string"` ein Schlüssel, der zur Identifizierung oder Auswahl des Datensatzes verwendet wird, und der `compilationHint` ist entweder eine Instanz eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts oder ein enumerierter Wert von `"auto"`.

        Der Zweck von `hints` besteht darin, Informationen über das Pipeline-Layout so früh wie möglich bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge der Kompilierung zu maximieren, die einmal durch `createShaderModule()` durchgeführt werden kann, anstatt sie mehrfach in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) durchzuführen.

        > [!NOTE]
        > Verschiedene Implementierungen können `hints` auf unterschiedliche Weise verarbeiten, einschließlich der Möglichkeit, sie vollständig zu ignorieren. Das Bereitstellen von Hinweisen garantiert nicht, dass die Shader-Kompilierungsleistung in allen Browsern/Systemen verbessert wird.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Source-Map-Definition zur Bereitstellung der Integration von Entwickler-Tools wie Debugging in der Quellsprache. WGSL-Namen (Bezeichner) in Source-Maps sollten den Regeln entsprechen, die in [WGSL-Bezeichnervergleich](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definiert sind. Falls definiert, kann die Source-Map als [Source-Map-v3-Format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Verschiedene Implementierungen können `sourceMap`s auf unterschiedliche Weise verarbeiten, einschließlich der Möglichkeit, sie vollständig zu ignorieren.

### Rückgabewert

Eine Instanz des [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createShaderModule()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt zurückgegeben:

- Wenn der WGSL-Code Ihres Shaders den halben Gleitkommatyp [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) verwendet, muss er `enable f16;` am Anfang enthalten, und das zugehörige [`GPUDevice`](/de/docs/Web/API/GPUDevice) muss mit aktiviertem `shader-f16` [Feature](/de/docs/Web/API/GPUSupportedFeatures) erstellt worden sein.

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
- Die [WebGPU Shading Language-Spezifikation](https://gpuweb.github.io/gpuweb/wgsl/)
