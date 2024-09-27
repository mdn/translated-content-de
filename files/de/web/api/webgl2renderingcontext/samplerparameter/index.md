---
title: "WebGL2RenderingContext: samplerParameter[if]() Methode"
short-title: samplerParameter[if]()
slug: Web/API/WebGL2RenderingContext/samplerParameter
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.samplerParameter[if]()`** Methoden des [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzen Parameter von [`WebGLSampler`](/de/docs/Web/API/WebGLSampler).

## Syntax

```js-nolint
samplerParameteri(sampler, pname, param)
samplerParameterf(sampler, pname, param)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler) Objekt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welcher Parameter gesetzt werden soll. Mögliche Werte:

    - `gl.TEXTURE_COMPARE_FUNC`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Texturvergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Texturvergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Vergrößerungsfilter der Textur angibt.
    - `gl.TEXTURE_MAX_LOD`
      - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den maximalen Detailstufewert angibt.
    - `gl.TEXTURE_MIN_FILTER`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Verkleinerungsfilter der Textur angibt.
    - `gl.TEXTURE_MIN_LOD`
      - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den minimalen Detailstufewert angibt.
    - `gl.TEXTURE_WRAP_R`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Texturwicklungsfunktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Texturwicklungsfunktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Texturwicklungsfunktion für die Texturkoordinate t angibt.

- `param`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) (`samplerParameteri`) oder ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) (`samplerParameterf`), das einen Wert für `pname` angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const sampler = gl.createSampler();
gl.samplerParameteri(sampler, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
