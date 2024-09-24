---
title: "GPURenderBundleEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPURenderBundleEncoder/finish
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`finish()`**-Methode der
{{domxref("GPURenderBundleEncoder")}}-Schnittstelle schließt das Aufzeichnen der aktuellen Render-Bundle-Befehlssequenz ab und gibt ein {{domxref("GPURenderBundle")}}-Objekt zurück, das in einen Aufruf von {{domxref("GPURenderPassEncoder.executeBundles()")}} übergeben werden kann, um diese Befehle in einem bestimmten Render-Pass auszuführen.

## Syntax

```js-nolint
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz eines {{domxref("GPURenderBundle")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- Der {{domxref("GPURenderBundleEncoder")}} ist offen (d. h. nicht bereits durch einen `finish()`-Aufruf beendet).
- Der Debug-Stack für den aktuellen Render-Pass ist leer (d. h. keine Render-Pass-Debug-Gruppe ist derzeit geöffnet, wie durch {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}} geöffnet).

## Beispiele

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Das obige Beispiel stammt aus den WebGPU-Beispielen [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
