---
title: "GPUShaderModule: label-Eigenschaft"
short-title: label
slug: Web/API/GPUShaderModule/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft des {{domxref("GPUShaderModule")}}-Interfaces bietet ein Label, das zur Identifikation des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellen einer `label`-Eigenschaft im Deskriptorobjekt, das in den ursprünglichen {{domxref("GPUDevice.createShaderModule()")}}-Aufruf übergeben wird, festgelegt werden. Alternativ können Sie es direkt auf dem `GPUShaderModule`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUShaderModule.label`:

```js
// ...

const shaderModule = device.createShaderModule({
  code: shaders,
});

shaderModule.label = "myshader";

console.log(shaderModule.label); // "myshader"
```

Setzen eines Labels über den ursprünglichen {{domxref("GPUDevice.createShaderModule()")}}-Aufruf und dann Abrufen über `GPUShaderModule.label`:

```js
// ...

const shaderModule = device.createShaderModule({
  code: shaders,
  label: "myshader",
});

console.log(shaderModule.label); // "myshader"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
