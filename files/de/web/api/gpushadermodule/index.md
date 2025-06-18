---
title: GPUShaderModule
slug: Web/API/GPUShaderModule
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUShaderModule`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein internes Shader-Modulobjekt, einen Container für [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Shader-Code, der der GPU zur Ausführung durch eine Pipeline übergeben werden kann.

Ein `GPUShaderModule`-Objekt wird über [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUShaderModule/label)
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekt erfüllt wird, das Nachrichten enthält, die während der Kompilierung des `GPUShaderModule` generiert wurden.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) wird unser Shader-Modul mit folgendem Code erstellt:

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
