---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCanvasContext`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}} Elements, der über einen Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem `contextType` von `"webgpu"` zurückgegeben wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`canvas`](/de/docs/Web/API/GPUCanvasContext/canvas) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Canvas zurück, von dem der Kontext erstellt wurde.

## Instanzmethoden

- [`configure()`](/de/docs/Web/API/GPUCanvasContext/configure) {{Experimental_Inline}}
  - : Konfiguriert den Kontext für das Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) und setzt das Canvas auf transparentes Schwarz zurück.
- [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) {{Experimental_Inline}}
  - : Gibt die nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, die durch den Canvas-Kontext im Dokument zusammengesetzt wird.
- [`unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure) {{Experimental_Inline}}
  - : Entfernt jede zuvor gesetzte Kontextkonfiguration und zerstört alle Texturen, die während der Konfiguration des Canvas-Kontexts produziert wurden.

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
