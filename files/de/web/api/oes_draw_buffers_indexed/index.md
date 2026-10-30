---
title: OES_draw_buffers_indexed
slug: Web/API/OES_draw_buffers_indexed
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`OES_draw_buffers_indexed`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es, beim gleichzeitigen Schreiben in mehrere Farbpuffer unterschiedliche Blending-Optionen zu verwenden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar.

## Instanzmethoden

- [`OES_draw_buffers_indexed.blendEquationiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES)
  - : Legt sowohl die RGB- als auch die Alpha-Blending-Gleichung für einen bestimmten Zeichenpuffer fest.
- [`OES_draw_buffers_indexed.blendEquationSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES)
  - : Legt die RGB- und die Alpha-Blending-Gleichung für einen bestimmten Zeichenpuffer getrennt fest.
- [`OES_draw_buffers_indexed.blendFunciOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES)
  - : Legt fest, welche Funktion beim Mischen von Pixeln für einen bestimmten Zeichenpuffer verwendet wird.
- [`OES_draw_buffers_indexed.blendFuncSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES)
  - : Legt fest, welche Funktion beim Mischen von Pixeln für RGB- und Alpha-Komponenten eines bestimmten Zeichenpuffers jeweils verwendet wird.
- [`OES_draw_buffers_indexed.colorMaskiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/colorMaskiOES)
  - : Legt fest, welche Farbkomponenten beim Zeichnen oder Rendern in einen bestimmten Zeichenpuffer aktiviert oder deaktiviert sind.
- [`OES_draw_buffers_indexed.disableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/disableiOES)
  - : Deaktiviert das Blending für einen bestimmten Zeichenpuffer.
- [`OES_draw_buffers_indexed.enableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/enableiOES)
  - : Aktiviert das Blending für einen bestimmten Zeichenpuffer.

## Beispiele

### Die Erweiterung `OES_draw_buffers_indexed` verwenden

Aktivieren Sie die Erweiterung durch einen Aufruf von [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");
```

Anschließend können Sie für einen bestimmten Zeichenpuffer das Blending aktivieren sowie die Blending-Gleichung, die Blending-Funktion und die Farbmaske festlegen.

```js
// For gl.DRAW_BUFFER0
ext.enableiOES(gl.BLEND, 0);
ext.blendEquationiOES(0, gl.FUNC_ADD);
ext.blendFunciOES(0, gl.ONE, gl.ONE);
ext.colorMaskiOES(0, 1, 0, 0, 0);

// For gl.DRAW_BUFFER1
ext.enableiOES(gl.BLEND, 1);
ext.blendEquationSeparateiOES(1, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
ext.blendFuncSeparateiOES(
  1,
  gl.SRC_ALPHA,
  gl.ONE_MINUS_SRC_ALPHA,
  gl.ZERO,
  gl.ZERO,
);
ext.colorMaskiOES(1, 0, 1, 0, 0);
```

Um die Einstellungen für einen bestimmten Zeichenpuffer abzurufen, verwenden Sie [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter).

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 0);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 0);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 0);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 0);

// For gl.DRAW_BUFFER1
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 1);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 1);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 1);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 1);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 1);
```

Mit [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) können Sie ermitteln, wie viele Zeichenpuffer verfügbar sind.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
