---
title: "GPUShaderModule: label-Eigenschaft"
short-title: label
slug: Web/API/GPUShaderModule/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Interfaces bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann gesetzt werden, indem Sie eine `label`-Eigenschaft im Deskriptor-Objekt bereitstellen, das im ursprünglichen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) übergeben wird. Alternativ können Sie es direkt auf dem `GPUShaderModule`-Objekt setzen und abrufen.

## Wert

Ein String. Falls dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Ein Label über `GPUShaderModule.label` setzen und abrufen:

```js
// ...

const shaderModule = device.createShaderModule({
  code: shaders,
});

shaderModule.label = "my_shader";

console.log(shaderModule.label); // "my_shader"
```

Ein Label über den ursprünglichen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) setzen und es dann über `GPUShaderModule.label` abrufen:

```js
// ...

const shaderModule = device.createShaderModule({
  code: shaders,
  label: "my_shader",
});

console.log(shaderModule.label); // "my_shader"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
