---
title: "GPUDevice: createShaderModule() Methode"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createShaderModule()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Quellcode.

## Syntax

```js-nolint
createShaderModule(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `code`
      - : Ein String, der den WGSL-Quellcode für das Shader-Modul darstellt.
    - `hints` {{optional_inline}}

      - : Eine Sequenz von Datensatztypen mit der Struktur `("string", compilationHint)`. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist der `"string"` ein Schlüssel, der zum Identifizieren oder Auswählen des Datensatzes verwendet wird, und `compilationHint` ist entweder eine [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objektinstanz oder ein aufgezählter Wert von `"auto"`.

        Der Zweck von `hints` ist es, Informationen über das Pipeline-Layout so früh wie möglich bereitzustellen, um die Leistung zu verbessern. Die Idee ist, die Menge der Kompilierung zu maximieren, die einmal von `createShaderModule()` durchgeführt werden kann, anstatt mehrfach in mehreren Aufrufen von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) und [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline).

        > [!NOTE]
        > Unterschiedliche Implementierungen können `hints` auf unterschiedliche Weise behandeln, möglicherweise ignorieren sie sogar vollständig. Das Bereitstellen von Hinweisen garantiert keine verbesserte Shader-Kompilierungsleistung in allen Browsern/Systemen.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `sourceMap` {{optional_inline}}

      - : Eine Definition der Quellkarte, um die Integration mit Entwicklertools zu ermöglichen, wie z.B. das Debuggen der Quellsprache. WGSL-Namen (Bezeichner) in Quellkarten sollten den in [WGSL identifier comparison](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison) definierten Regeln folgen. Wenn definiert, kann die Quellkarte als [source-map-v3 Format](https://sourcemaps.info/spec.html) interpretiert werden.

        > [!NOTE]
        > Unterschiedliche Implementierungen können `sourceMap`s auf unterschiedliche Weise behandeln, möglicherweise ignorieren sie sogar vollständig.

### Rückgabewert

Eine [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createShaderModule()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt zurückgegeben:

- Wenn Ihr WGSL-Code des Shaders den halbbreiten Gleitkommatyp [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) verwendet, enthält er `enable f16;` am Anfang und das zugehörige [`GPUDevice`](/de/docs/Web/API/GPUDevice) wird mit dem aktivierten `shader-f16` [Feature](/de/docs/Web/API/GPUSupportedFeatures) erstellt.

## Beispiele

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird unser Shader-Modul mit folgendem Code erstellt:

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
