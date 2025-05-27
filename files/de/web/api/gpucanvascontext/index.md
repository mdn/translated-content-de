---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCanvasContext`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements, das über einen Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem `contextType` von `"webgpu"` zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`canvas`](/de/docs/Web/API/GPUCanvasContext/canvas) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Canvas zurück, von dem der Kontext erstellt wurde.

## Instanz-Methoden

- [`configure()`](/de/docs/Web/API/GPUCanvasContext/configure) {{Experimental_Inline}}
  - : Konfiguriert den Kontext zur Nutzung für Rendering mit einem gegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) und löscht das Canvas zu transparentem Schwarz.
- [`getConfiguration()`](/de/docs/Web/API/GPUCanvasContext/getConfiguration) {{Experimental_Inline}}
  - : Gibt die aktuelle für den Kontext gesetzte Konfiguration zurück.
- [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) {{Experimental_Inline}}
  - : Gibt das nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, das durch den Canvas-Kontext ins Dokument gesetzt wird.
- [`unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure) {{Experimental_Inline}}
  - : Entfernt jede zuvor gesetzte Kontextkonfiguration und zerstört alle Texturen, die erzeugt wurden, während der Canvas-Kontext konfiguriert war.

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
