---
title: WEBGL_multi_draw Erweiterung
short-title: WEBGL_multi_draw
slug: Web/API/WEBGL_multi_draw
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_multi_draw`** Erweiterung ist Teil der
[WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern von mehr
als einem Primitive mit einem einzigen Funktionsaufruf. Dies kann die Leistung einer WebGL-Anwendung verbessern,
da es die Bindungskosten im Renderer reduziert und die GPU-Thread-Zeit mit einheitlichen Daten beschleunigt.

Wenn diese Erweiterung aktiviert ist:

- Neue Methoden, die mehrere Argumentlisten in einem Aufruf verarbeiten, werden hinzugefügt
  (siehe Methodenliste unten).
- Die integrierte Funktion `gl_DrawID` wird zur Shading-Sprache hinzugefügt.

> [!NOTE]
> Diese Erweiterung ist sowohl für
> {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} als auch für
> {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} Kontexte verfügbar.
>
> Im Shader-Code muss die Direktive `#extension GL_ANGLE_multi_draw`
> aufgerufen werden, um die Erweiterung zu aktivieren.
>
> Diese Erweiterung aktiviert implizit die {{domxref("ANGLE_instanced_arrays")}} Erweiterung.

## Instanzmethoden

- [`ext.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
  - : Rendert mehrere Primitives aus Array-Daten (identisch zu mehreren Aufrufen von
    [`drawArrays`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)).
- [`ext.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
  - : Rendert mehrere Primitives aus Element-Array-Daten (identisch zu mehreren Aufrufen von
    [`drawElements`](/de/docs/Web/API/WebGLRenderingContext/drawElements)).
- [`ext.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
  - : Rendert mehrere Primitives aus Array-Daten (identisch zu mehreren Aufrufen von
    [`drawArraysInstanced`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)).
- [`ext.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
  - : Rendert mehrere Primitives aus Element-Array-Daten (identisch zu mehreren Aufrufen von
    [`drawElementsInstanced`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)).

## Shader-Erweiterung

Hinweis: Obwohl der Erweiterungsname `WEBGL_multi_draw` lautet,
muss die Erweiterung mit der Direktive `#extension GL_ANGLE_multi_draw`
aktiviert werden, um die Erweiterung in einem Shader zu verwenden.

Wenn diese Erweiterung aktiviert ist, kann die integrierte Funktion `gl_DrawID`
im Shader-Code verwendet werden. Bei jedem `multi*`-Zeichenaufruf-Variante,
kann der Index des Draws `i` vom Vertex-Shader als `gl_DrawID` gelesen werden. Für nicht-`multi*`-Aufrufe ist der Wert von
`gl_DrawID` `0`.

```html
<script type="x-shader/x-vertex">
  #extension GL_ANGLE_multi_draw : require
  void main() {
    gl_Position = vec4(gl_DrawID, 0, 0, 1);
  }
</script>
```

## Beispiele

### Aktivieren der Erweiterung

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar.
Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

```js
let ext = gl.getExtension("WEBGL_multi_draw");
```

### Zeichnen mehrerer Arrays

Beispielaufrufe für [`ext.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
und [`ext.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL):

```js
// multiDrawArrays Variante
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
ext.multiDrawArraysWEBGL(gl.TRIANGLES, firsts, 0, counts, 0, firsts.length);
```

```js
// multiDrawArraysInstanced Variante
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

### Zeichnen mehrerer Elemente

Beispielaufrufe für [`ext.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
und [`ext.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL).

Es wird davon ausgegangen, dass die Indizes, die zuvor in den
`ELEMENT_ARRAY_BUFFER` hochgeladen wurden, als `UNSIGNED_SHORT` zu behandeln sind.

```js
// multiDrawElements Variante
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
// multiDrawElementsInstanced Variante
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

- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()")}} oder
  in WebGL 2: {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()")}} oder
  in WebGL 2: {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
