---
title: "GPUCompilationMessage: Eigenschaft type"
short-title: type
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`type`** schreibgeschützte Eigenschaft der
{{domxref("GPUCompilationMessage")}} Schnittstelle ist ein Aufzählungswert, der den Typ der Nachricht darstellt. Jeder Typ repräsentiert eine unterschiedliche Schweregradstufe.

## Wert

Ein Aufzählungswert. Mögliche Werte sind:

- `"error"`
  - : Ein Shader-Erstellungsfehler, der eine erfolgreiche Kompilierung verhindert.
- `"info"`
  - : Eine rein informative Nachricht, die eine niedrige Schwere hat.
- `"warning"`
  - : Eine Warnung über ein Problem, das die erfolgreiche Kompilierung nicht verhindert, aber die Aufmerksamkeit des Entwicklers verdient. Ein Beispiel ist die Verwendung veralteter Funktionen oder Syntax.

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

Sehen Sie sich die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
