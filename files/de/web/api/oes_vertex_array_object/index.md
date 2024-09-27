---
title: OES_vertex_array_object-Erweiterung
short-title: OES_vertex_array_object
slug: Web/API/OES_vertex_array_object
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("WebGL")}}

Die **OES_vertex_array_object**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet Vertex-Array-Objekte (VAOs), die Vertex-Array-Zustände kapseln. Diese Objekte speichern Zeiger auf Vertex-Daten und liefern Namen für verschiedene Sätze von Vertex-Daten.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar, und die Konstanten und Methoden sind ohne das `OES_`-Präfix verfügbar.

## Konstanten

Diese Erweiterung macht eine neue Konstante verfügbar, die in der Methode [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden kann:

- `ext.VERTEX_ARRAY_BINDING_OES`
  - : Gibt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt zurück, wenn es in der Methode [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) als der `pname`-Parameter verwendet wird.

## Instanzmethoden

Diese Erweiterung macht vier neue Methoden verfügbar.

- [`ext.createVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/createVertexArrayOES)
  - : Erstellt ein neues [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject).
- [`ext.deleteVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/deleteVertexArrayOES)
  - : Löscht ein gegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject).
- [`ext.isVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/isVertexArrayOES)
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) ist.
- [`ext.bindVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES)
  - : Bindet ein gegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) an den Buffer.

## Beispiele

```js
const oes_vao_ext = gl.getExtension("OES_vertex_array_object");
const vao = oes_vao_ext.createVertexArrayOES();
oes_vao_ext.bindVertexArrayOES(vao);

// …
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
- WebGL2-äquivalente Methoden:

  - [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
  - [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
  - [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
  - [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
