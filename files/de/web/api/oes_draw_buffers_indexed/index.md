---
title: OES_draw_buffers_indexed
slug: Web/API/OES_draw_buffers_indexed
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_draw_buffers_indexed`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht die Verwendung verschiedener Mischoptionen beim Schreiben in mehrere Farb-Puffer gleichzeitig.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}-Kontexte verfügbar.

## Instanzmethoden

- [`OES_draw_buffers_indexed.blendEquationiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES)
  - : Setzt sowohl die RGB- als auch die Alpha-Mischgleichungen für einen bestimmten Zeichnungspuffer.
- [`OES_draw_buffers_indexed.blendEquationSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES)
  - : Setzt die RGB- und Alpha-Mischgleichungen getrennt für einen bestimmten Zeichnungspuffer.
- [`OES_draw_buffers_indexed.blendFunciOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES)
  - : Definiert, welche Funktion beim Mischen von Pixeln für einen bestimmten Zeichnungspuffer verwendet wird.
- [`OES_draw_buffers_indexed.blendFuncSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES)
  - : Definiert, welche Funktion beim Mischen von Pixeln für RGB- und Alpha-Komponenten getrennt für einen bestimmten Zeichnungspuffer verwendet wird.
- [`OES_draw_buffers_indexed.colorMaskiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/colorMaskiOES)
  - : Legt fest, welche Farbkomponenten beim Zeichnen oder Rendern für einen bestimmten Zeichnungspuffer aktiviert oder deaktiviert werden.
- [`OES_draw_buffers_indexed.disableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/disableiOES)
  - : Deaktiviert das Mischen für einen bestimmten Zeichnungspuffer.
- [`OES_draw_buffers_indexed.enableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/enableiOES)
  - : Aktiviert das Mischen für einen bestimmten Zeichnungspuffer.

## Beispiele

### Verwendung der `OES_draw_buffers_indexed`-Erweiterung

Aktivieren Sie die Erweiterung mit einem Aufruf von [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");
```

Sie können nun das Mischen aktivieren, die Mischgleichung, die Mischfunktion und die Farbmaske für einen bestimmten Zeichnungspuffer festlegen.

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

Um die Einstellungen für einen bestimmten Zeichnungspuffer abzurufen, verwenden Sie [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter).

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

Sie können [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwenden, um zu sehen, wie viele Zeichnungspuffer verfügbar sind.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
