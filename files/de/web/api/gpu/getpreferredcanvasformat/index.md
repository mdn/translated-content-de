---
title: "GPU: getPreferredCanvasFormat()-Methode"
short-title: getPreferredCanvasFormat()
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getPreferredCanvasFormat()`**-Methode des [`GPU`](/de/docs/Web/API/GPU)-Interfaces gibt das optimale Canvas-Texturformat für die Anzeige von 8-Bit-Tiefe, Standard-Dynamikumfang-Inhalten auf dem aktuellen System zurück.

Dies wird häufig verwendet, um einen Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) mit dem optimalen `format`-Wert für das aktuelle System zu versorgen. Dies wird empfohlen – wenn Sie das bevorzugte Format nicht verwenden, wenn Sie den Canvas-Kontext konfigurieren, können je nach Plattform zusätzliche Aufwände, wie zusätzliche Texturkopien, anfallen.

## Syntax

```js-nolint
getPreferredCanvasFormat()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der ein Canvas-Texturformat angibt. Der Wert kann `rgba8unorm` oder `bgra8unorm` sein.

### Ausnahmen

Keine.

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
