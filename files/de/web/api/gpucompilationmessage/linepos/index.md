---
title: "GPUCompilationMessage: `linePos` Eigenschaft"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`linePos`** schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die die Position in der Codezeile angibt, auf die sich die Nachricht bezieht. Dies könnte ein exakter Punkt oder der Start des relevanten Substrings sein.

## Wert

Eine Zahl.

Genauer gesagt ist `linePos` die Anzahl der UTF-16 Codeeinheiten vom Anfang der Zeile bis zum exakten Punkt oder Start des relevanten Substrings, auf den sich die Nachricht bezieht.

Beachten Sie, dass:

- Wenn die Nachricht sich auf einen Substring bezieht, verweist `linePos` auf die erste UTF-16 Codeeinheit des Substrings.
- Wenn die Nachricht sich nicht auf eine spezifische Codeposition bezieht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), wird `linePos` 0 sein.
- Werte sind einsbasiert — ein Wert von 1 bezieht sich auf die erste Codeeinheit der Zeile.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.linePos);
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
