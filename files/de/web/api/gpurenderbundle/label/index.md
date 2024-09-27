---
title: "GPURenderBundle: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderBundle/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`label`** des [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Interfaces ist ein Zeichenfolgenwert, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Dieses kann gesetzt werden, indem eine `label`-Eigenschaft im Deskriptor-Objekt bereitgestellt wird, das beim ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) übergeben wird, oder Sie können es direkt am `GPURenderBundle`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn bisher kein Labelwert gesetzt wurde, gibt das Abrufen des Labels eine leere Zeichenfolge zurück.

## Beispiele

Setzen und Abrufen eines Labels über `GPURenderBundle.label`:

```js
const renderBundle = renderBundleEncoder.finish();

renderBundle.label = "myrenderbundle";
console.log(renderBundle.label); // "myrenderbundle"
```

Setzen eines Labels über den ursprünglichen Aufruf von [`GPURenderBundleEncoder.finish()`](/de/docs/Web/API/GPURenderBundleEncoder/finish) und anschließendes Abrufen über `GPURenderBundle.label`:

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
