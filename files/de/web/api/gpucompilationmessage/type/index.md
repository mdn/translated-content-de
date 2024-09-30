---
title: "GPUCompilationMessage: type-Eigenschaft"
short-title: type
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`type`**-Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine schreibgeschützte, aufgezählte Eigenschaft, die den Typ der Nachricht darstellt. Jeder Typ steht für einen unterschiedlichen Schweregrad.

## Wert

Ein aufgezählter Wert. Mögliche Werte sind:

- `"error"`
  - : Ein Shader-Erstellungsfehler, der die erfolgreiche Kompilierung verhindert.
- `"info"`
  - : Eine rein informative Nachricht mit geringer Schwere.
- `"warning"`
  - : Eine Warnung über ein Problem, das die erfolgreiche Kompilierung nicht verhindert, aber die Aufmerksamkeit des Entwicklers verdient. Ein Beispiel ist die Verwendung von veralteten Funktionen oder Syntax.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.type);
  // ...
}
```

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
