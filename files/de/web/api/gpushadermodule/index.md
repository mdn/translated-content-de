---
title: GPUShaderModule
slug: Web/API/GPUShaderModule
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUShaderModule`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein internes Shader-Modulobjekt, einen Container für [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Shader-Code, der zur Ausführung an die GPU durch eine Pipeline gesendet werden kann.

Ein `GPUShaderModule`-Objekt wird mithilfe von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUShaderModule/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekt erfüllt wird, das Nachrichten enthält, die während der Kompilierung des `GPUShaderModule` generiert wurden.

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
