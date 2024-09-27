---
title: "GPUCompilationMessage: length-Eigenschaft"
short-title: length
slug: Web/API/GPUCompilationMessage/length
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`length`** schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die die Länge des Substrings darstellt, dem die Nachricht entspricht.

## Wert

Eine Zahl.

Genauer gesagt ist `length` die Anzahl der UTF-16-Codeeinheiten im Shader-Code-Substring, dem die Nachricht entspricht. Wenn die Nachricht einem einzelnen Punkt statt einem Substring entspricht, ist `length` 0.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.length);
  // ...
}
```

Siehe die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
