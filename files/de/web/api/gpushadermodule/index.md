---
title: GPUShaderModule
slug: Web/API/GPUShaderModule
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUShaderModule`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert ein internes Shader-Modul-Objekt, einen Container für [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Shader-Code, der zur Ausführung durch eine Pipeline an die GPU übergeben werden kann.

Ein `GPUShaderModule`-Objekt wird mit {{domxref("GPUDevice.createShaderModule()")}} erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUShaderModule.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen zu identifizieren.

## Instanz-Methoden

- {{domxref("GPUShaderModule.getCompilationInfo", "getCompilationInfo()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("GPUCompilationInfo")}}-Objekt erfüllt wird, das Meldungen enthält, die während der Kompilierung des `GPUShaderModule` generiert wurden.

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
