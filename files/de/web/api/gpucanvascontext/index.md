---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCanvasContext`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements, das über einen Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem `contextType` von `"webgpu"` zurückgegeben wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`canvas`](/de/docs/Web/API/GPUCanvasContext/canvas) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Canvas zurück, von dem der Kontext erstellt wurde.

## Instanzmethoden

- [`configure()`](/de/docs/Web/API/GPUCanvasContext/configure) {{Experimental_Inline}}
  - : Konfiguriert den Kontext für die Verwendung beim Rendern mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) und leert das Canvas zu transparentem Schwarz.
- [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) {{Experimental_Inline}}
  - : Gibt die nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, die vom Canvas-Kontext im Dokument zusammengesetzt werden soll.
- [`unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure) {{Experimental_Inline}}
  - : Entfernt jegliche zuvor festgelegten Konfigurationen des Kontextes und zerstört alle Texturen, die produziert wurden, während der Canvas-Kontext konfiguriert war.

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
