---
title: GPUCompilationInfo
slug: Web/API/GPUCompilationInfo
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCompilationInfo`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, die vom GPU-Shader-Modul-Kompilierer generiert werden, um Probleme mit Shader-Code zu diagnostizieren.

`GPUCompilationInfo` wird über [`GPUShaderModule.getCompilationInfo()`](/de/docs/Web/API/GPUShaderModule/getCompilationInfo) abgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`messages`](/de/docs/Web/API/GPUCompilationInfo/messages) {{ReadOnlyInline}}
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, die jeweils die Details einer einzelnen Shader-Kompilierungsnachricht enthalten. Nachrichten können informativ, Warnungen oder Fehler sein.

## Beispiele

Im folgenden Beispiel haben wir absichtlich eine Klammer in einer Funktionsdeklaration unseres Shader-Codes weggelassen:

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

Wenn wir das Shader-Modul kompilieren, verwenden wir `getCompilationInfo()`, um einige Informationen über den resultierenden Fehler zu erhalten:

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
