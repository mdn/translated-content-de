---
title: "GPU: getPreferredCanvasFormat()-Methode"
short-title: getPreferredCanvasFormat()
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getPreferredCanvasFormat()`**-Methode der {{domxref("GPU")}}-Schnittstelle gibt das optimale Canvas-Texturformat zur Anzeige von Inhalten mit 8-Bit-Tiefe und Standard-Dynamikbereich auf dem aktuellen System zurück.

Dies wird häufig verwendet, um einen Aufruf von {{domxref("GPUCanvasContext.configure()")}} mit dem optimalen `format`-Wert für das aktuelle System zu versorgen. Es wird empfohlen, dies zu tun – wenn Sie das bevorzugte Format beim Konfigurieren des Canvas-Kontexts nicht verwenden, könnte zusätzlicher Aufwand entstehen, wie etwa zusätzliche Texturkopien, abhängig von der Plattform.

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
