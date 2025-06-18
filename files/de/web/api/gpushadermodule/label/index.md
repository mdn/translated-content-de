---
title: "GPUShaderModule: label-Eigenschaft"
short-title: label
slug: Web/API/GPUShaderModule/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.

Diese kann festgelegt werden, indem eine `label`-Eigenschaft im Descriptor-Objekt angegeben wird, das an den ursprünglichen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) übergeben wird. Alternativ können Sie sie direkt am `GPUShaderModule`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn dieser nicht zuvor wie oben beschrieben gesetzt wurde, ist er ein leerer String.

## Beispiele

Setzen und Abrufen eines Labels über `GPUShaderModule.label`:

```js
// …

const shaderModule = device.createShaderModule({
  code: shaders,
});

shaderModule.label = "my_shader";

console.log(shaderModule.label); // "my_shader"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule), und Abrufen über `GPUShaderModule.label`:

```js
// …

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
