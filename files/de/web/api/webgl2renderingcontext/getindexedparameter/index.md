---
title: "WebGL2RenderingContext: Methode getIndexedParameter()"
short-title: getIndexedParameter()
slug: Web/API/WebGL2RenderingContext/getIndexedParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getIndexedParameter()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt indizierte
Informationen über ein bestimmtes `target` zurück.

## Syntax

```js-nolint
getIndexedParameter(target, index)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel angibt, für das Informationen zurückgegeben werden sollen.
    Mögliche Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER_BINDING`: Gibt ein
      [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) zurück.
    - `gl.TRANSFORM_FEEDBACK_BUFFER_SIZE`: Gibt ein
      [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types) zurück.
    - `gl.TRANSFORM_FEEDBACK_BUFFER_START`: Gibt ein
      [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) zurück.
    - `gl.UNIFORM_BUFFER_BINDING`: Gibt ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) zurück.
    - `gl.UNIFORM_BUFFER_SIZE`: Gibt ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types) zurück.
    - `gl.UNIFORM_BUFFER_START`: Gibt ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types) zurück.

    Bei Verwendung der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL 2 Erweiterung sind zusätzlich folgende Werte verfügbar:

    - `gl.BLEND_EQUATION_RGB`: Gibt die RGB-Blending-Gleichung für den Zeichenpuffer bei `index` zurück.
    - `gl.BLEND_EQUATION_ALPHA`: Gibt die Alpha-Blending-Gleichung für den Zeichenpuffer bei `index` zurück.
    - `gl.BLEND_SRC_RGB`: Gibt die Quell-RGB-Blending-Funktion für den Zeichenpuffer bei `index` zurück.
    - `gl.BLEND_SRC_ALPHA`: Gibt die Quell-Alpha-Blending-Funktion für den Zeichenpuffer bei `index` zurück.
    - `gl.BLEND_DST_RGB`: Gibt die Ziel-RGB-Blending-Funktion für den Zeichenpuffer bei `index` zurück.
    - `gl.BLEND_DST_ALPHA`: Gibt die Ziel-Alpha-Blending-Funktion für den Zeichenpuffer bei `index` zurück.
    - `gl.COLOR_WRITEMASK`: Gibt ein Array zurück, das die Farbkomponenten enthält, die für den Zeichenpuffer bei `index` aktiviert sind.

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des abgefragten `target` angibt.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie durch `target` angegeben).

## Beispiele

```js
const binding = gl.getIndexedParameter(gl.TRANSFORM_FEEDBACK_BUFFER_BINDING, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
