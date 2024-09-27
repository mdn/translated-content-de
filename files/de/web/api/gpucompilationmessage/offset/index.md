---
title: "GPUCompilationMessage: offset-Eigenschaft"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`offset`** schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die den Offset vom Anfang des Shader-Codes bis zum exakten Punkt oder zum Anfang des relevanten Unterstrings darstellt, auf den sich die Nachricht bezieht.

## Wert

Eine Zahl.

Genauer gesagt ist `offset` die Anzahl der UTF-16-Codierungseinheiten vom Beginn des Shader-Codes bis zum genauen Punkt oder Anfang des relevanten Unterstrings, auf den sich die Nachricht bezieht.

Falls die Nachricht sich nicht auf eine spezielle Codestelle bezieht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), wird `offset` 0 sein.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.offset);
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
