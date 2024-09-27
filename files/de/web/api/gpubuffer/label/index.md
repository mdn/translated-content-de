---
title: "GPUBuffer: label-Eigenschaft"
short-title: label
slug: Web/API/GPUBuffer/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt angegeben wird, das im ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) übergeben wird, oder Sie können sie direkt am `GPUBuffer`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies nicht zuvor wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen einer Bezeichnung über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

output.label = "mybuffer";

console.log(output.label); // "mybuffer"
```

Setzen einer Bezeichnung über den ursprünglichen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) und dann Abrufen über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  label: "mybuffer",
});

console.log(output.label); // "mybuffer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
