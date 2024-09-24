---
title: "GPUBuffer: label Eigenschaft"
short-title: label
slug: Web/API/GPUBuffer/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`** Eigenschaft des
{{domxref("GPUBuffer")}} Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem eine `label` Eigenschaft im Descriptor-Objekt bereitgestellt wird, das beim ursprünglichen {{domxref("GPUDevice.createBuffer()")}}-Aufruf übergeben wird, oder Sie können es direkt auf dem `GPUBuffer`-Objekt setzen und abrufen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

output.label = "mybuffer";

console.log(output.label); // "mybuffer"
```

Setzen eines Labels über den ursprünglichen {{domxref("GPUDevice.createBuffer()")}}-Aufruf und anschließendem Abrufen über `GPUBuffer.label`:

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
