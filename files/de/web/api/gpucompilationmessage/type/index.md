---
title: "GPUCompilationMessage: type-Eigenschaft"
short-title: type
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`type`** des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist ein enumerierter Wert, der den Typ der Nachricht darstellt. Jeder Typ repräsentiert einen unterschiedlichen Schweregrad.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"error"`
  - : Ein Fehler bei der Shader-Erstellung, der den erfolgreichen Kompilierungsvorgang stoppt.
- `"info"`
  - : Eine rein informative Nachricht, die eine geringe Schwere hat.
- `"warning"`
  - : Eine Warnung über ein Problem, das den erfolgreichen Kompilierungsvorgang nicht stoppt, aber die Aufmerksamkeit des Entwicklers verdient. Ein Beispiel ist die Verwendung veralteter Funktionen oder Syntax.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.type);
```

Sehen Sie auf der Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
