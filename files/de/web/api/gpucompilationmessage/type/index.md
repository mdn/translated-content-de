---
title: "GPUCompilationMessage: type-Eigenschaft"
short-title: type
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist ein enumerierter Wert, der den Typ der Nachricht darstellt. Jeder Typ entspricht einem anderen Schweregrad.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"error"`
  - : Ein Shader-Erstellungsfehler, der eine erfolgreiche Kompilierung verhindert.
- `"info"`
  - : Eine rein informative Nachricht, die eine geringe Schwere hat.
- `"warning"`
  - : Eine Warnung hinsichtlich eines Problems, das die erfolgreiche Kompilierung nicht verhindert, aber die Aufmerksamkeit des Entwicklers verdient. Ein Beispiel ist die Verwendung veralteter Funktionen oder Syntax.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.type);
```

Sehen Sie sich die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
