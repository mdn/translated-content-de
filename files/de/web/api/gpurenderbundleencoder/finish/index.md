---
title: "GPURenderBundleEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPURenderBundleEncoder/finish
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der
[`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle schließt die Aufzeichnung der aktuellen Render-Bundle-Befehlssequenz ab und gibt ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekt zurück, das in einen [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Aufruf übergeben werden kann, um diese Befehle in einem spezifischen Render-Pass auszuführen.

## Syntax

```js-nolint
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) muss geöffnet sein (d.h. nicht bereits durch einen `finish()`-Aufruf beendet).
- Der Debug-Stack für den aktuellen Render-Pass muss leer sein (d.h. keine Render-Pass-Debug-Gruppe ist derzeit geöffnet, wie sie durch [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) geöffnet wurde).

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
