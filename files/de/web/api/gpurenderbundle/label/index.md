---
title: "GPURenderBundle: Label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundle/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`label`** der [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Schnittstelle ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das an den Ursprung der [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish)-Aufruf übergeben wird. Alternativ können Sie es direkt am `GPURenderBundle`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, wird ein leerer String zurückgegeben, wenn das Label abgerufen wird.

## Beispiele

Ein Label über `GPURenderBundle.label` setzen und abrufen:

```js
const renderBundle = renderBundleEncoder.finish();

renderBundle.label = "myrenderbundle";
console.log(renderBundle.label); // "myrenderbundle"
```

Ein Label über den ursprünglichen [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish)-Aufruf setzen und es dann über `GPURenderBundle.label` abrufen:

```js
const renderBundle = renderBundleEncoder.finish({
  label: "myrenderbundle",
});

console.log(renderBundle.label); // "myrenderbundle"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
