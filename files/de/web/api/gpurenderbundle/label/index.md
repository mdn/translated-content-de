---
title: "GPURenderBundle: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundle/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Interfaces ist eine schreibgeschützte Zeichenkette, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

Diese kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt angegeben wird, das im ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) übergeben wird. Alternativ können Sie es direkt am `GPURenderBundle`-Objekt abrufen und festlegen.

## Wert

Eine Zeichenkette. Wenn zuvor kein Label-Wert festgelegt wurde, gibt das Abrufen des Labels eine leere Zeichenkette zurück.

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
