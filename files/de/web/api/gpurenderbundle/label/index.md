---
title: "GPURenderBundle: Label-Eigenschaft"
short-title: Label
slug: Web/API/GPURenderBundle/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`** Schreibgeschützt-Eigenschaft der
{{domxref("GPURenderBundle")}} Schnittstelle ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt bereitgestellt wird, das in den ursprünglichen {{domxref("GPURenderBundleEncoder.finish()")}}-Aufruf übergeben wird, oder Sie können es direkt am `GPURenderBundle`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Label-Wert festgelegt wurde, wird beim Abrufen des Labels ein leerer String zurückgegeben.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish();

renderBundle.label = "myrenderbundle";
console.log(renderBundle.label); // "myrenderbundle"
```

Festlegen eines Labels über den ursprünglichen {{domxref("GPURenderBundleEncoder.finish()")}}-Aufruf und anschließendem Abrufen des Labels über `GPURenderBundle.label`:

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
