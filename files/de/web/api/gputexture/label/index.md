---
title: "GPUTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTexture/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der {{domxref("GPUTexture")}}-Schnittstelle bietet eine Bezeichnung, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Diese kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt bereitgestellt wird, das in den ursprünglichen {{domxref("GPUDevice.createTexture()")}}-Aufruf übergeben wird, oder Sie können sie direkt am `GPUTexture`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUTexture.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

depthTexture.label = "mytexture";

console.log(depthTexture.label); // "mytexture"
```

Festlegen eines Labels über den ursprünglichen {{domxref("GPUDevice.createTexture()")}}-Aufruf und dann Abrufen über `GPUTexture.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
  label: "mytexture",
});

console.log(depthTexture.label); // "mytexture"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
