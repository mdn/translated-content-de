---
title: "GPUExternalTexture: label-Eigenschaft"
short-title: label
slug: Web/API/GPUExternalTexture/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle bietet ein Label, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt bereitgestellt wird, das beim ursprünglichen Aufruf von [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) übergeben wird. Alternativ können Sie es direkt am `GPUExternalTexture`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies, wie oben beschrieben, nicht vorher festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUExternalTexture.label`:

```js
// ...

const externalTexture = device.importExternalTexture({
  source: video,
});

externalTexture.label = "myExtTexture";

console.log(externalTexture.label); // "myExtTexture"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) und dann Abrufen über `GPUExternalTexture.label`:

```js
// ...

const externalTexture = device.importExternalTexture({
  source: video,
  label: "myExtTexture",
});

console.log(externalTexture.label); //  "myExtTexture"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
