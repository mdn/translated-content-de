---
title: "WebGL2RenderingContext: Methode getIndexedParameter()"
short-title: getIndexedParameter()
slug: Web/API/WebGL2RenderingContext/getIndexedParameter
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.getIndexedParameter()`** des [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt indizierte Informationen über ein gegebenes `target` zurück.

## Syntax

```js-nolint
getIndexedParameter(target, index)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel spezifiziert, für das Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER_BINDING`: Gibt ein
      {{domxref("WebGLBuffer")}} zurück.
    - `gl.TRANSFORM_FEEDBACK_BUFFER_SIZE`: Gibt ein
      {{domxref("WebGL_API/Types", "GLsizeiptr")}} zurück.
    - `gl.TRANSFORM_FEEDBACK_BUFFER_START`: Gibt ein
      {{domxref("WebGL_API/Types", "GLintptr")}} zurück.
    - `gl.UNIFORM_BUFFER_BINDING`: Gibt ein {{domxref("WebGLBuffer")}} zurück.
    - `gl.UNIFORM_BUFFER_SIZE`: Gibt ein {{domxref("WebGL_API/Types", "GLsizeiptr")}} zurück.
    - `gl.UNIFORM_BUFFER_START`: Gibt ein {{domxref("WebGL_API/Types", "GLintptr")}} zurück.

    Beim Verwenden der {{domxref("OES_draw_buffers_indexed")}} WebGL 2 Erweiterung sind zusätzlich folgende Werte verfügbar:

    - `gl.BLEND_EQUATION_RGB`: Gibt die RGB-Mischgleichung für den Zeichnungspuffer bei `index` zurück.
    - `gl.BLEND_EQUATION_ALPHA`: Gibt die Alpha-Mischgleichung für den Zeichnungspuffer bei `index` zurück.
    - `gl.BLEND_SRC_RGB`: Gibt die Quell-RGB-Mischfunktion für den Zeichnungspuffer bei `index` zurück.
    - `gl.BLEND_SRC_ALPHA`: Gibt die Quell-Alpha-Mischfunktion für den Zeichnungspuffer bei `index` zurück.
    - `gl.BLEND_DST_RGB`: Gibt die Ziel-RGB-Mischfunktion für den Zeichnungspuffer bei `index` zurück.
    - `gl.BLEND_DST_ALPHA`: Gibt die Ziel-Alpha-Mischfunktion für den Zeichnungspuffer bei `index` zurück.
    - `gl.COLOR_WRITEMASK`: Gibt ein Array zurück, das die Farbkomponenten enthält, die für den Zeichnungspuffer bei `index` aktiviert sind.

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das den Index des abgefragten `target` spezifiziert.

### Rückgabewert

Abhängig von den angeforderten Informationen (wie durch `target` angegeben).

## Beispiele

```js
const binding = gl.getIndexedParameter(gl.TRANSFORM_FEEDBACK_BUFFER_BINDING, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getParameter()")}}
