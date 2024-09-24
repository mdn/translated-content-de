---
title: "GPUShaderModule: getCompilationInfo()-Methode"
short-title: getCompilationInfo()
slug: Web/API/GPUShaderModule/getCompilationInfo
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getCompilationInfo()`**-Methode der {{domxref("GPUShaderModule")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("GPUCompilationInfo")}}-Objekt erfüllt wird. Dieses enthält Nachrichten, die während der Kompilierung des `GPUShaderModule` generiert wurden.

## Syntax

```js-nolint
getCompilationInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("GPUCompilationInfo")}}-Objekt erfüllt wird.

{{domxref("GPUCompilationInfo")}} enthält eine `messages`-Eigenschaft, die ein Array von {{domxref("GPUCompilationMessage")}}-Objekten ist, von denen jedes die Details einer einzelnen Kompilierungsnachricht enthält.

## Beispiele

Im folgenden Beispiel haben wir absichtlich eine Klammer in einer Funktionsdeklaration in unserem Shader-Code ausgelassen:

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
