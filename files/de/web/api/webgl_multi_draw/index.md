---
title: WEBGL_multi_draw-Erweiterung
short-title: WEBGL_multi_draw
slug: Web/API/WEBGL_multi_draw
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`WEBGL_multi_draw`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, mit einem einzigen Funktionsaufruf mehrere Primitive zu rendern. Dies kann die Leistung einer WebGL-Anwendung verbessern, da es den Aufwand für Bindungen im Renderer reduziert und die Verarbeitungszeit des GPU-Threads bei der Verwendung von Uniform-Daten verkürzt.

Wenn diese Erweiterung aktiviert ist:

- Werden neue Methoden hinzugefügt, die mehrere Argumentlisten in einem Aufruf verarbeiten (siehe die Methodenliste unten).
- Wird das Built-in `gl_DrawID` zur Shading-Sprache hinzugefügt.

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL-1-Kontexte](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL-2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.
>
> Im Shader-Code muss die Direktive `#extension GL_ANGLE_multi_draw` verwendet werden, um die Erweiterung zu aktivieren.
>
> Diese Erweiterung aktiviert implizit die Erweiterung [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays).

## Instanzmethoden

- [`ext.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
  - : Rendert mehrere Primitive aus Array-Daten (entspricht mehreren Aufrufen von [`drawArrays`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)).
- [`ext.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
  - : Rendert mehrere Primitive aus Element-Array-Daten (entspricht mehreren Aufrufen von [`drawElements`](/de/docs/Web/API/WebGLRenderingContext/drawElements)).
- [`ext.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
  - : Rendert mehrere Primitive aus Array-Daten (entspricht mehreren Aufrufen von [`drawArraysInstanced`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)).
- [`ext.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
  - : Rendert mehrere Primitive aus Element-Array-Daten (entspricht mehreren Aufrufen von [`drawElementsInstanced`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)).

## Shader-Erweiterung

Hinweis: Obwohl die Erweiterung `WEBGL_multi_draw` heißt, muss sie mit der Direktive `#extension GL_ANGLE_multi_draw` aktiviert werden, damit sie in einem Shader verwendet werden kann.

Wenn diese Erweiterung aktiviert ist, kann das Built-in `gl_DrawID` im Shader-Code verwendet werden. Bei jeder `multi*`-Variante eines Zeichenaufrufs kann der Vertex-Shader den Index `i` des jeweiligen Zeichenaufrufs als `gl_DrawID` auslesen. Bei Aufrufen ohne `multi*` ist der Wert von `gl_DrawID` gleich `0`.

```html
<script type="x-shader/x-vertex">
  #extension GL_ANGLE_multi_draw : require
  void main() {
    gl_Position = vec4(gl_DrawID, 0, 0, 1);
  }
</script>
```

## Beispiele

### Erweiterung aktivieren

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

```js
let ext = gl.getExtension("WEBGL_multi_draw");
```

### Mehrere Arrays zeichnen

Beispielaufrufe für [`ext.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL) und [`ext.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL):

```js
// multiDrawArrays variant
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
ext.multiDrawArraysWEBGL(gl.TRIANGLES, firsts, 0, counts, 0, firsts.length);
```

```js
// multiDrawArraysInstanced variant
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
const instanceCounts = new Int32Array(/* … */);
ext.multiDrawArraysInstancedWEBGL(
  gl.TRIANGLES,
  firsts,
  0,
  counts,
  0,
  instanceCounts,
  0,
  firsts.length,
);
```

### Mehrere Elemente zeichnen

Beispielaufrufe für [`ext.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL) und [`ext.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL).

Dabei wird angenommen, dass die zuvor in den `ELEMENT_ARRAY_BUFFER` hochgeladenen Indizes als `UNSIGNED_SHORT` behandelt werden.

```js
// multiDrawElements variant
const counts = new Int32Array(/* … */);
const offsets = new Int32Array(/* … */);
ext.multiDrawElementsWEBGL(
  gl.TRIANGLES,
  counts,
  0,
  gl.UNSIGNED_SHORT,
  offsets,
  0,
  counts.length,
);
```

```js
// multiDrawElementsInstanced variant
const counts = new Int32Array(/* … */);
const offsets = new Int32Array(/* … */);
const instanceCounts = new Int32Array(/* … */);
ext.multiDrawElementsInstancedWEBGL(
  gl.TRIANGLES,
  counts,
  0,
  gl.UNSIGNED_SHORT,
  offsets,
  0,
  instanceCounts,
  0,
  counts.length,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
- [`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) oder in WebGL 2: [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) oder in WebGL 2: [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
