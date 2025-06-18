---
title: "GPU: Methode getPreferredCanvasFormat()"
short-title: getPreferredCanvasFormat()
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getPreferredCanvasFormat()`** Methode des [`GPU`](/de/docs/Web/API/GPU) Interfaces gibt das optimale Texturformat für ein Canvas zur Darstellung von Inhalten mit 8-Bit-Tiefe und standardmäßiger dynamischer Reichweite auf dem aktuellen System zurück.

Dies wird üblicherweise verwendet, um einen Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) mit dem optimalen `format`-Wert für das aktuelle System zu versorgen. Dies wird empfohlen – wenn Sie das bevorzugte Format beim Konfigurieren des Canvas-Kontexts nicht verwenden, könnten Sie je nach Plattform zusätzlichen Aufwand haben, wie zusätzliche Texturkopien.

## Syntax

```js-nolint
getPreferredCanvasFormat()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der ein Texturformat für ein Canvas angibt. Der Wert kann `rgba8unorm` oder `bgra8unorm` sein.

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
