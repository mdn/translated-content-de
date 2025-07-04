---
title: "GPUShaderModule: Methode getCompilationInfo()"
short-title: getCompilationInfo()
slug: Web/API/GPUShaderModule/getCompilationInfo
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getCompilationInfo()`**-Methode der
[`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekt erfüllt wird, welches Nachrichten enthält, die während der Kompilierung des `GPUShaderModule` generiert wurden.

## Syntax

```js-nolint
getCompilationInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)-Objekt erfüllt wird.

[`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo) enthält eine `messages`-Eigenschaft, die ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten ist, wobei jedes die Details einer individuellen Kompilierungsnachricht enthält.

## Beispiele

Im folgenden Beispiel haben wir absichtlich eine Klammer aus einer Funktionsdeklaration in unserem Shader-Code weggelassen:

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
