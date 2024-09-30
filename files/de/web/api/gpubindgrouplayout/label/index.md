---
title: "GPUBindGroupLayout: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBindGroupLayout/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem eine `label`-Eigenschaft im Beschreibungsobjekt angegeben wird, das im ursprünglichen [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)-Aufruf übergeben wird, oder Sie können es direkt auf dem `GPUBindGroupLayout`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUBindGroupLayout.label`:

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

bindGroupLayout.label = "mybindgrouplayout";

console.log(bindGroupLayout.label); // "mybindgrouplayout";
```

Setzen eines Labels über den ursprünglichen [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)-Aufruf und anschließendes Abrufen über `GPUBindGroupLayout.label`:

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
  label: "mybindgrouplayout",
});

console.log(bindGroupLayout.label); // "mybindgrouplayout";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
