---
title: "WebGL2RenderingContext: Methode samplerParameter[if]()"
short-title: samplerParameter[if]()
slug: Web/API/WebGL2RenderingContext/samplerParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.samplerParameter[if]()`** Methoden
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzen
Parameter von [`WebGLSampler`](/de/docs/Web/API/WebGLSampler).

## Syntax

```js-nolint
samplerParameteri(sampler, pname, param)
samplerParameterf(sampler, pname, param)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler) Objekt.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welcher Parameter gesetzt werden soll. Mögliche Werte:
    - `gl.TEXTURE_COMPARE_FUNC`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die
        Textur-Vergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den
        Textur-Vergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den
        Textur-Vergrößerungsfilter angibt.
    - `gl.TEXTURE_MAX_LOD`
      - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), das den maximalen
        Detailgrad-Wert angibt.
    - `gl.TEXTURE_MIN_FILTER`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den
        Textur-Verkleinerungsfilter angibt.
    - `gl.TEXTURE_MIN_LOD`
      - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), das den minimalen
        Detailgrad-Wert angibt.
    - `gl.TEXTURE_WRAP_R`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Textur-
        Umwicklungsfunktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Textur-
        Umwicklungsfunktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Textur-
        Umwicklungsfunktion für die Texturkoordinate t angibt.

- `param`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) (`samplerParameteri`) oder ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types)
    (`samplerParameterf`), das einen Wert für `pname` angibt.

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
