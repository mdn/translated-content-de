---
title: "GPUCompilationMessage: message-Eigenschaft"
short-title: message
slug: Web/API/GPUCompilationMessage/message
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`message`**-Eigenschaft des [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Interfaces ist eine schreibgeschützte Zeichenkette, die einen menschenlesbaren Nachrichtentext darstellt.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});

const shaderInfo = await shaderModule.getCompilationInfo();
const firstMessage = shaderInfo.messages[0];
console.log(firstMessage.message);
```

Siehe die Hauptseite von [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo#examples) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
