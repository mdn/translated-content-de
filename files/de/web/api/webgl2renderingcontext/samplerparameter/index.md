---
title: "WebGL2RenderingContext: samplerParameter[if]() Methode"
short-title: samplerParameter[if]()
slug: Web/API/WebGL2RenderingContext/samplerParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.samplerParameter[if]()`** Methoden
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzen
Parameter eines [`WebGLSampler`](/de/docs/Web/API/WebGLSampler).

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
        Vergleichsfunktion der Textur angibt.
    - `gl.TEXTURE_COMPARE_MODE`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die
        Vergleichsmodus der Textur angibt.
    - `gl.TEXTURE_MAG_FILTER`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den
        Vergrößerungsfilter der Textur angibt.
    - `gl.TEXTURE_MAX_LOD`
      - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den maximalen
        Grad der Detailtiefe angibt.
    - `gl.TEXTURE_MIN_FILTER`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den
        Verkleinerungsfilter der Textur angibt.
    - `gl.TEXTURE_MIN_LOD`
      - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den minimalen
        Grad der Detailtiefe angibt.
    - `gl.TEXTURE_WRAP_R`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die
        Wickelfunktion der Textur für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die
        Wickelfunktion der Textur für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die
        Wickelfunktion der Textur für die Texturkoordinate t angibt.

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
