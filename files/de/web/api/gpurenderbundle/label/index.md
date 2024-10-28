---
title: "GPURenderBundle: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundle/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft des [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Interfaces ist ein String, der ein Label zur Verfügung stellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dies kann durch Bereitstellung einer `label`-Eigenschaft im Deskriptor-Objekt, das an den ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) übergeben wird, festgelegt werden, oder Sie können es direkt auf dem `GPURenderBundle`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn vorher kein Labelwert festgelegt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish();

renderBundle.label = "my_render_bundle";
console.log(renderBundle.label); // "my_render_bundle"
```

Festlegen eines Labels über den ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) und anschließendem Abrufen über `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish({
  label: "my_render_bundle",
});

console.log(renderBundle.label); // "my_render_bundle"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
