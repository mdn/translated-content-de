---
title: "GPUShaderModule: label-Eigenschaft"
short-title: label
slug: Web/API/GPUShaderModule/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Schnittstelle bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellen einer `label`-Eigenschaft im Deskriptorobjekt, das im ursprünglichen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) übergeben wird, gesetzt werden, oder Sie können es direkt auf dem `GPUShaderModule`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Ein Label über `GPUShaderModule.label` setzen und abrufen:

```js
// ...

const shaderModule = device.createShaderModule({
  code: shaders,
});

shaderModule.label = "myshader";

console.log(shaderModule.label); // "myshader"
```

Ein Label über den ursprünglichen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) setzen und es dann über `GPUShaderModule.label` abrufen:

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
