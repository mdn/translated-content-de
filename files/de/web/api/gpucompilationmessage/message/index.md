---
title: "GPUCompilationMessage: message-Eigenschaft"
short-title: message
slug: Web/API/GPUCompilationMessage/message
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`message`**-Eigenschaft der {{domxref("GPUCompilationMessage")}}-Schnittstelle ist ein String, der menschenlesbaren Nachrichtentext repräsentiert.

## Wert

Ein String.

## Beispiele

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.message);
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
