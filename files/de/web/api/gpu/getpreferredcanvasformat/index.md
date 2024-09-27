---
title: "GPU: Methode getPreferredCanvasFormat()"
short-title: getPreferredCanvasFormat()
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getPreferredCanvasFormat()`**-Methode der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt das optimale Canvas-Texturformat für die Anzeige von 8-Bit-Tiefe, Standard-Dynamikbereich-Inhalten auf dem aktuellen System zurück.

Diese Methode wird häufig verwendet, um einen Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) mit dem optimalen `format`-Wert für das aktuelle System zu versorgen. Dies wird empfohlen – wenn Sie nicht das bevorzugte Format verwenden, wenn Sie den Canvas-Kontext konfigurieren, können zusätzliche Overheads entstehen, wie zum Beispiel zusätzliche Texturkopien, abhängig von der Plattform.

## Syntax

```js-nolint
getPreferredCanvasFormat()
```

### Parameter

Keine.

### Rückgabewert

Ein Zeichenfolgenwert, der ein Canvas-Texturformat angibt. Der Wert kann `rgba8unorm` oder `bgra8unorm` sein.

### Ausnahmen

Keine.

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
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
