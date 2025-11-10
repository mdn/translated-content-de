---
title: "WebGL2RenderingContext: Methode texStorage3D()"
short-title: texStorage3D()
slug: Web/API/WebGL2RenderingContext/texStorage3D
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`texStorage3D()`**-Methode des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) der [WebGL-API](/de/docs/Web/API/WebGL_API) legt alle Ebenen der dreidimensionalen Texturspeicherung fest.

## Syntax

```js-nolint
texStorage3D(target, levels, internalformat, width, height, depth)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) der aktiven Textur angibt. Mögliche Werte:
    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.
- `levels`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Texturebenen angibt.
- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Format der Texturspeicherung angibt. Eine Liste möglicher Werte finden Sie unter [`WebGL2RenderingContext.texStorage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage2D).
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite der Textur in Texeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe der Textur in Texeln angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Tiefe der Textur/die Anzahl der Texturen in einem `TEXTURE_2D_ARRAY` angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.texStorage3D(gl.TEXTURE_3D, 1, gl.RGB8, 256, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.texStorage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage2D)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
