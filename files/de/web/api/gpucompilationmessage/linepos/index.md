---
title: "GPUCompilationMessage: linePos-Eigenschaft"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`linePos`** schreibgeschützte Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine Zahl, die die Position in der Codezeile darstellt, auf die sich die Meldung bezieht. Dies könnte ein genauer Punkt oder der Anfang des relevanten Teilstrings sein.

## Wert

Eine Zahl.

Genauer gesagt ist `linePos` die Zahl der UTF-16 Codeeinheiten vom Anfang der Zeile bis zu dem genauen Punkt oder dem Anfang des relevanten Teilstrings, auf den sich die Meldung bezieht.

Beachten Sie, dass:

- Wenn sich die Meldung auf einen Teilstring bezieht, verweist `linePos` auf die erste UTF-16 Codeeinheit des Teilstrings.
- Wenn sich die Meldung nicht auf eine bestimmte Codeposition bezieht (vielleicht bezieht sie sich auf den gesamten Shader-Code), wird `linePos` 0 sein.
- Die Werte sind ein-basiert — ein Wert von 1 bezieht sich auf die erste Codeeinheit der Zeile.

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

Sehen Sie sich die Hauptseite [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
