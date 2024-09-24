---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Schnittstelle **`GPUCanvasContext`** der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements, das über einen {{domxref("HTMLCanvasElement.getContext()")}}-Aufruf mit einem `contextType` von `"webgpu"` zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUCanvasContext.canvas", "canvas")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Canvas zurück, von dem der Kontext erstellt wurde.

## Instanz-Methoden

- {{domxref("GPUCanvasContext.configure", "configure()")}} {{Experimental_Inline}}
  - : Konfiguriert den Kontext zur Nutzung für das Rendering mit einem gegebenen {{domxref("GPUDevice")}} und löscht das Canvas zu transparentem Schwarz.
- {{domxref("GPUCanvasContext.getCurrentTexture", "getCurrentTexture()")}} {{Experimental_Inline}}
  - : Gibt die nächste {{domxref("GPUTexture")}} zurück, die vom Canvas-Kontext zum Dokument zusammengesetzt werden soll.
- {{domxref("GPUCanvasContext.unconfigure", "unconfigure()")}} {{Experimental_Inline}}
  - : Entfernt jegliche zuvor gesetzte Kontextkonfiguration und zerstört alle Texturen, die erstellt wurden, während der Canvas-Kontext konfiguriert war.

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
