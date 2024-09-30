---
title: "GPUTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTexture/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Interfaces bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt, das beim ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) übergeben wird, angegeben wird, oder Sie können es direkt am `GPUTexture`-Objekt festlegen und abrufen.

## Wert

Ein String. Wenn dies nicht wie oben beschrieben zuvor gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Setzen und Abrufen eines Labels über `GPUTexture.label`:

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

Setzen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) und dann Abrufen über `GPUTexture.label`:

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
