---
title: OES_vertex_array_object-Erweiterung
short-title: OES_vertex_array_object
slug: Web/API/OES_vertex_array_object
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **OES_vertex_array_object**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt Vertex Array Objects (VAOs) bereit, die Vertex Array-Zustände kapseln. Diese Objekte behalten Zeiger auf Vertex-Daten und bieten Namen für verschiedene Sets von Vertex-Daten.

WebGL-Erweiterungen sind mit der Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar und die Konstanten und Methoden sind ohne das "`OES`"-Suffix verfügbar.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in der Methode {{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}} verwendet werden kann:

- `ext.VERTEX_ARRAY_BINDING_OES`
  - : Gibt ein {{domxref("WebGLVertexArrayObject")}}-Objekt zurück, wenn es in der Methode {{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}} als `pname`-Parameter verwendet wird.

## Instanzmethoden

Diese Erweiterung stellt vier neue Methoden bereit.

- {{domxref("OES_vertex_array_object.createVertexArrayOES()", "ext.createVertexArrayOES()")}}
  - : Erstellt ein neues {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("OES_vertex_array_object.deleteVertexArrayOES()", "ext.deleteVertexArrayOES()")}}
  - : Löscht ein angegebenes {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("OES_vertex_array_object.isVertexArrayOES()", "ext.isVertexArrayOES()")}}
  - : Gibt `true` zurück, wenn ein angegebenes Objekt ein {{domxref("WebGLVertexArrayObject")}} ist.
- {{domxref("OES_vertex_array_object.bindVertexArrayOES()", "ext.bindVertexArrayOES()")}}
  - : Bindet ein angegebenes {{domxref("WebGLVertexArrayObject")}} an den Buffer.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2-äquivalente Methoden:

  - {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
