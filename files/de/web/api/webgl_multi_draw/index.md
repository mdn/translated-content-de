---
title: WEBGL_multi_draw Erweiterung
short-title: WEBGL_multi_draw
slug: Web/API/WEBGL_multi_draw
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_multi_draw`** Erweiterung ist Teil der
[WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern von mehr als einem Primiv mit einem einzelnen Funktionsaufruf. Dies kann die Leistung einer WebGL-Anwendung verbessern, da es die Bindungskosten im Renderer reduziert und die GPU-Thread-Zeit mit einheitlichen Daten erhöht.

Wenn diese Erweiterung aktiviert ist:

- Neue Methoden, die mehrere Listen von Argumenten in einem Aufruf verarbeiten, werden hinzugefügt
  (siehe Methodensammlung unten).
- Das integrierte `gl_DrawID` wird zur Shadersprache hinzugefügt.

> [!NOTE]
> Diese Erweiterung ist sowohl für
> [WebGL 1](/de/docs/Web/API/WebGLRenderingContext) als auch
> [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar.
>
> Im Shader-Code muss die Direktive `#extension GL_ANGLE_multi_draw`
> aufgerufen werden, um die Erweiterung zu aktivieren.
>
> Diese Erweiterung aktiviert implizit die [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays) Erweiterung.

## Instanzmethoden

- [`ext.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
  - : Rendert mehrere Primitiven aus Array-Daten (identisch zu mehreren Aufrufen von
    [`drawArrays`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)).
- [`ext.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
  - : Rendert mehrere Primitiven aus Element-Array-Daten (identisch zu mehreren Aufrufen von
    [`drawElements`](/de/docs/Web/API/WebGLRenderingContext/drawElements)).
- [`ext.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
  - : Rendert mehrere Primitiven aus Array-Daten (identisch zu mehreren Aufrufen von
    [`drawArraysInstanced`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)).
- [`ext.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
  - : Rendert mehrere Primitiven aus Element-Array-Daten (identisch zu mehreren Aufrufen von
    [`drawElementsInstanced`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)).

## Shader-Erweiterung

Hinweis: Obwohl der Erweiterungsname `WEBGL_multi_draw` lautet,
muss die Erweiterung mit der Direktive `#extension GL_ANGLE_multi_draw`
aktiviert werden, um die Erweiterung in einem Shader zu verwenden.

Wenn diese Erweiterung aktiviert ist, kann das integrierte `gl_DrawID`
im Shader-Code verwendet werden. Für jeden `multi*` Draw-Aufrufvariante
kann der Index der Zeichnung `i` vom Vertex-Shader als `gl_DrawID`
gelesen werden. Für nicht-`multi*` Aufrufe ist der Wert von
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

### Aktivierung der Erweiterung

WebGL-Erweiterungen sind mit der [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) Methode verfügbar.
Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
im [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

```js
let ext = gl.getExtension("WEBGL_multi_draw");
```

### Zeichnen mehrerer Arrays

Beispielaufrufe für [`ext.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
und [`ext.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL):

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

### Zeichnen mehrerer Elemente

Beispielaufrufe für [`ext.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
und [`ext.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL).

Es wird angenommen, dass die zuvor auf den `ELEMENT_ARRAY_BUFFER`
hochgeladenen Indizes als `UNSIGNED_SHORT` behandelt werden.

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
- [`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) oder
  in WebGL 2: [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) oder
  in WebGL 2: [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
