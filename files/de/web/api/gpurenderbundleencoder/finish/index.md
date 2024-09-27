---
title: "GPURenderBundleEncoder: finish()-Methode"
short-title: finish()
slug: Web/API/GPURenderBundleEncoder/finish
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`finish()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle beendet die Aufzeichnung der aktuellen Render-Bundle-Befehlssequenz und gibt ein [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekt zurück, das in einen Aufruf von [`GPURenderPassEncoder.executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) übergeben werden kann, um diese Befehle in einem bestimmten Render-Pass auszuführen.

## Syntax

```js-nolint
finish(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label angibt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`finish()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) ist offen (d.h. nicht bereits durch einen `finish()`-Aufruf beendet).
- Der Debug-Stack für den aktuellen Render-Pass ist leer (d.h. keine Render-Pass-Debug-Gruppe ist derzeit offen, wie durch [`pushDebugGroup()`](/de/docs/Web/API/GPURenderBundleEncoder/pushDebugGroup) geöffnet).

## Beispiele

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

Der obige Ausschnitt stammt aus dem WebGPU-Beispiele [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
