---
title: "GPUTextureView: label-Eigenschaft"
short-title: label
slug: Web/API/GPUTextureView/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Schnittstelle bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das in den ursprünglichen Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) übergeben wird, oder Sie können es direkt auf dem `GPUTextureView`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies vorher nicht wie oben beschrieben festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView();

view.label = "myview";

console.log(view.label); // "myview"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) und anschließendes Abrufen über `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView({
  label: "myview",
});

console.log(view.label); // "myview"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
