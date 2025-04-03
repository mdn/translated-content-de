---
title: "GPURenderBundleEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPURenderBundleEncoder/finish
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle beendet die Aufzeichnung der aktuellen Render-Bundle-Befehlsfolge und gibt ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekt zurück. Dieses kann in einem Aufruf von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden, um diese Befehle in einem bestimmten Render-Pass auszuführen.

## Syntax

```js-nolint
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bietet, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekts.

### Validierung

Folgende Kriterien müssen beim Aufruf von **`finish()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) ist offen (d.h. nicht bereits durch einen `finish()`-Aufruf beendet).
- Der Debug-Stack für den aktuellen Render-Pass ist leer (d.h. es ist keine Render-Pass-Debug-Gruppe derzeit geöffnet, wie sie durch [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) geöffnet wurde).

## Beispiele

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Der obige Codeausschnitt stammt aus dem WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
