---
title: WebGLBuffer
slug: Web/API/WebGLBuffer
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

Die **WebGLBuffer** Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt ein undurchsichtiges Pufferobjekt dar, das Daten wie Vertices oder Farben speichert.

{{InheritanceDiagram}}

## Beschreibung

Das `WebGLBuffer` Objekt definiert keine eigenen Methoden oder Eigenschaften und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLBuffer` Objekten sind die folgenden Methoden des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) nützlich:

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)

## Beispiele

### Erstellen eines Puffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
