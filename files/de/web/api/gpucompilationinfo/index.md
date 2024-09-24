---
title: GPUCompilationInfo
slug: Web/API/GPUCompilationInfo
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUCompilationInfo`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert ein Array von {{domxref("GPUCompilationMessage")}}-Objekten, die vom Compiler des GPU-Shader-Moduls generiert werden, um Probleme mit Shader-Code zu diagnostizieren.

Auf `GPUCompilationInfo` wird über {{domxref("GPUShaderModule.getCompilationInfo()")}} zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUCompilationInfo.messages", "messages")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("GPUCompilationMessage")}}-Objekten, von denen jedes die Details einer einzelnen Shader-Kompilierungsnachricht enthält. Nachrichten können informativ sein, Warnungen oder Fehler.

## Beispiele

Im folgenden Beispiel haben wir in unserem Shader-Code absichtlich eine Klammer in einer Funktionsdeklaration weggelassen:

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

Wenn wir das Shader-Modul kompilieren, verwenden wir `getCompilationInfo()`, um Informationen über den resultierenden Fehler zu erhalten:

```js
async function init() {
  // ...

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];

  console.log(firstMessage.lineNum); // 9
  console.log(firstMessage.message); // "expected ')' for function declaration"
  console.log(firstMessage.type); // "error"
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
