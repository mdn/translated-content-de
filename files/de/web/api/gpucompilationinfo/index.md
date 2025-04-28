---
title: GPUCompilationInfo
slug: Web/API/GPUCompilationInfo
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCompilationInfo`**-Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) stellt ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten dar, die vom GPU-Shader-Modul-Compiler erzeugt werden, um Probleme mit dem Shader-Code zu diagnostizieren.

Auf `GPUCompilationInfo` wird über [`GPUShaderModule.getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo) zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`messages`](/de/docs/Web/API/GPUCompilationInfo/messages) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, von denen jedes die Details einer individuellen Shader-Compilierungsnachricht enthält. Nachrichten können informativ sein, Warnungen oder Fehler.

## Beispiele

Im folgenden Beispiel haben wir absichtlich eine Klammer in einer Funktionsdeklaration in unserem Shader-Code weggelassen:

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f -> VertexOut
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
```

Beim Kompilieren des Shader-Moduls verwenden wir `getCompilationInfo()`, um Informationen über den resultierenden Fehler zu erhalten:

```js
async function init() {
  // …

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];

  console.log(firstMessage.lineNum); // 9
  console.log(firstMessage.message); // "expected ')' for function declaration"
  console.log(firstMessage.type); // "error"
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
