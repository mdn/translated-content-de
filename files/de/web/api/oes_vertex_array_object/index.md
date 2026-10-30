---
title: OES_vertex_array_object-Erweiterung
short-title: OES_vertex_array_object
slug: Web/API/OES_vertex_array_object
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **OES_vertex_array_object** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt Vertex Array Objects (VAOs) bereit, die Zustände von Vertex-Arrays kapseln. Diese Objekte speichern Zeiger auf Vertex-Daten und stellen Namen für verschiedene Sätze von Vertex-Daten bereit.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexten verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist ihre Funktionalität standardmäßig im WebGL2-Kontext verfügbar. Die Konstanten und Methoden stehen dort ohne das Präfix `OES_` zur Verfügung.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in der Methode [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden kann:

- `ext.VERTEX_ARRAY_BINDING_OES`
  - : Gibt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt zurück, wenn sie in der Methode [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) als Parameter `pname` verwendet wird.

## Instanzmethoden

Diese Erweiterung stellt vier neue Methoden bereit.

- [`ext.createVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/createVertexArrayOES)
  - : Erstellt ein neues [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject).
- [`ext.deleteVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/deleteVertexArrayOES)
  - : Löscht ein angegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject).
- [`ext.isVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/isVertexArrayOES)
  - : Gibt `true` zurück, wenn ein angegebenes Objekt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) ist.
- [`ext.bindVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES)
  - : Bindet ein angegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) an den Puffer.

## Beispiele

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

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
- Entsprechende WebGL2-Methoden:
  - [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
  - [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
  - [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
  - [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
