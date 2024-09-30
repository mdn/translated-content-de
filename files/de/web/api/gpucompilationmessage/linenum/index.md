---
title: "GPUCompilationMessage: lineNum-Eigenschaft"
short-title: lineNum
slug: Web/API/GPUCompilationMessage/lineNum
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lineNum`** der [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Schnittstelle ist eine Zahl, die die Zeilennummer im Shader-Code darstellt, mit der die Nachricht übereinstimmt.

## Wert

Eine Zahl.

Beachten Sie, dass:

- Wenn die Nachricht einem Teilstring entspricht, bezieht sich `lineNum` auf die Zeilennummer, bei der der Teilstring beginnt.
- Wenn die Nachricht keiner spezifischen Codezeile entspricht (möglicherweise bezieht sie sich auf den gesamten Shader-Code), wird `lineNum` 0 sein.
- Werte sind einsbasiert — ein Wert von 1 bezieht sich auf die erste Codezeile.
- Zeilen werden durch Zeilenumbrüche begrenzt. In WGSL wird eine [spezifische Liste von Zeichen](https://gpuweb.github.io/gpuweb/wgsl/#line-break) als Zeilenumbrüche definiert.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.lineNum);
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
