---
title: "GPURenderBundleEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPURenderBundleEncoder/finish
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle beendet die Aufzeichnung der aktuellen Render-Bundle-Befehlsequenz und gibt ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekt zurück, das in einem Aufruf von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet werden kann, um diese Befehle in einem spezifischen Render-Pass auszuführen.

## Syntax

```js-nolint
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zum Identifizieren des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des Objekts [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) ist geöffnet (d. h. nicht bereits durch einen `finish()`-Aufruf beendet).
- Der Debug-Stack für den aktuellen Render-Pass ist leer (d. h. es ist keine Render-Pass-Debug-Gruppe derzeit geöffnet, wie sie durch [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) geöffnet wurde).

## Beispiele

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Der obige Ausschnitt stammt aus den WebGPU-Beispielen des [Animometer-Beispiels](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
