---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCanvasContext`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements, das über einen Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem `contextType` von `"webgpu"` zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`canvas`](/de/docs/Web/API/GPUCanvasContext/canvas) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Canvas zurück, aus dem der Kontext erstellt wurde.

## Instanz-Methoden

- [`configure()`](/de/docs/Web/API/GPUCanvasContext/configure)
  - : Konfiguriert den Kontext zur Nutzung für das Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) und löscht das Canvas zu transparentem Schwarz.
- [`getConfiguration()`](/de/docs/Web/API/GPUCanvasContext/getConfiguration)
  - : Gibt die aktuelle Konfiguration zurück, die für den Kontext festgelegt wurde.
- [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture)
  - : Gibt die nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, die vom Canvas-Kontext im Dokument zusammengesetzt werden soll.
- [`unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure)
  - : Entfernt jede zuvor festgelegte Kontextkonfiguration und zerstört alle Texturen, die erzeugt wurden, während der Canvas-Kontext konfiguriert war.

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
