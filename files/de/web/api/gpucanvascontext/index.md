---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: ca6a51e5335df951c1d5b71593f84811697f4ce6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCanvasContext`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert den WebGPU-Renderingkontext eines {{htmlelement("canvas")}}-Elements, das über einen Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem `contextType` von `"webgpu"` zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`canvas`](/de/docs/Web/API/GPUCanvasContext/canvas) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die Leinwand zurück, von der der Kontext erstellt wurde.

## Instanz-Methoden

- [`configure()`](/de/docs/Web/API/GPUCanvasContext/configure) {{Experimental_Inline}}
  - : Konfiguriert den Kontext zur Verwendung mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) für das Rendering und setzt die Leinwand auf transparentes Schwarz zurück.
- [`getConfiguration()`](/de/docs/Web/API/GPUCanvasContext/getConfiguration) {{Experimental_Inline}}
  - : Gibt die aktuelle Konfiguration zurück, die für den Kontext festgelegt wurde.
- [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) {{Experimental_Inline}}
  - : Gibt die nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, die vom Canvas-Kontext in das Dokument eingebunden wird.
- [`unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure) {{Experimental_Inline}}
  - : Entfernt jegliche zuvor festgelegte Kontextkonfiguration und zerstört alle Texturen, die erstellt wurden, während der Canvas-Kontext konfiguriert war.

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
