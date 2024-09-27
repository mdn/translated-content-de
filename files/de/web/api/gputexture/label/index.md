---
title: "GPUTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTexture/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der
[`GPUTexture`](/de/docs/Web/API/GPUTexture)-Schnittstelle bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem ein `label` in dem Deskriptor-Objekt bereitgestellt wird, das in den ursprünglichen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Aufruf übergeben wird, oder Sie können es direkt auf dem `GPUTexture`-Objekt setzen und abfragen.

## Wert

Ein String. Wenn dieses vorher nicht wie oben beschrieben gesetzt wurde, wird es ein leerer String sein.

## Beispiele

Ein Label über `GPUTexture.label` setzen und abfragen:

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

Ein Label über den ursprünglichen [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Aufruf setzen und es anschließend über `GPUTexture.label` abfragen:

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
