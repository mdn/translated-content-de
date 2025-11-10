---
title: "GPUCompilationMessage: type-Eigenschaft"
short-title: type
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist ein enumerierter Wert, der den Typ der Nachricht darstellt. Jeder Typ repräsentiert einen anderen Schweregrad.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"error"`
  - : Ein Shader-Erstellungsfehler, der den erfolgreichen Kompilierungsvorgang stoppt.
- `"info"`
  - : Eine rein informative Nachricht, die eine niedrige Schwere hat.
- `"warning"`
  - : Eine Warnung über ein Problem, das die erfolgreiche Kompilierung nicht stoppt, aber die Aufmerksamkeit des Entwicklers verdient. Ein Beispiel ist die Verwendung veralteter Funktionen oder Syntax.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.type);
```

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
