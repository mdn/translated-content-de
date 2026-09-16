---
title: "GPURenderBundle: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundle/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der Schnittstelle
[`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle) ist ein String, der eine Bezeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Diese kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das an den ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) übergeben wird, oder Sie können sie direkt auf dem `GPURenderBundle`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Bezeichnungswert festgelegt wurde, gibt das Abrufen der Bezeichnung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Bezeichnung über `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish();

renderBundle.label = "my_render_bundle";
console.log(renderBundle.label); // "my_render_bundle"
```

Festlegen einer Bezeichnung über den ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) und anschließendes Abrufen über `GPURenderBundle.label`:

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
