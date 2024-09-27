---
title: "GPUCompilationMessage: type-Eigenschaft"
short-title: type
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`type`**-Eigenschaft nur-lesend der
[`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist ein enumerierter Wert, der den Typ der Nachricht darstellt. Jeder Typ repräsentiert einen unterschiedlichen Schweregrad.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"error"`
  - : Ein Shader-Erstellungsfehler, der eine erfolgreiche Kompilierung verhindert.
- `"info"`
  - : Eine rein informative Nachricht, die eine niedrige Schwere hat.
- `"warning"`
  - : Eine Warnung über ein Problem, das eine erfolgreiche Kompilierung nicht verhindert, aber die Aufmerksamkeit des Entwicklers verdient. Ein Beispiel ist die Verwendung von veralteten Funktionen oder Syntax.

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

Sehen Sie sich die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
