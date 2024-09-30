---
title: "GPU: Methode getPreferredCanvasFormat()"
short-title: getPreferredCanvasFormat()
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getPreferredCanvasFormat()`**-Methode der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt das optimale Texturformat für Canvas zur Anzeige von Inhalten mit 8-Bit-Tiefe im Standard-Dynamikumfang auf dem aktuellen System zurück.

Dies wird häufig verwendet, um einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) den optimalen `format`-Wert für das aktuelle System bereitzustellen. Dies wird empfohlen – wenn Sie das bevorzugte Format beim Konfigurieren des Canvas-Kontexts nicht verwenden, kann je nach Plattform zusätzlicher Overhead entstehen, wie z. B. zusätzliche Texturkopien.

## Syntax

```js-nolint
getPreferredCanvasFormat()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der ein Texturformat für das Canvas angibt. Der Wert kann `rgba8unorm` oder `bgra8unorm` sein.

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
