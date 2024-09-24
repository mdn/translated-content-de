---
title: "WebGL2RenderingContext: Methode samplerParameter[if]()"
short-title: samplerParameter[if]()
slug: Web/API/WebGL2RenderingContext/samplerParameter
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.samplerParameter[if]()`** Methoden des [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzen Parameter von {{domxref("WebGLSampler")}}.

## Syntax

```js-nolint
samplerParameteri(sampler, pname, param)
samplerParameterf(sampler, pname, param)
```

### Parameter

- `sampler`
  - : Ein {{domxref("WebGLSampler")}} Objekt.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welchen Parameter gesetzt werden soll. Mögliche Werte:

    - `gl.TEXTURE_COMPARE_FUNC`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Texturvergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Texturvergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Texturvergrößerungsfilter angibt.
    - `gl.TEXTURE_MAX_LOD`
      - : Ein {{domxref("WebGL_API/Types", "GLfloat")}}, der den maximalen Level-of-Detail-Wert angibt.
    - `gl.TEXTURE_MIN_FILTER`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Texturverkleinerungsfilter angibt.
    - `gl.TEXTURE_MIN_LOD`
      - : Ein {{domxref("WebGL_API/Types", "GLfloat")}}, der den minimalen Level-of-Detail-Wert angibt.
    - `gl.TEXTURE_WRAP_R`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Textur-Wrap-Funktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Textur-Wrap-Funktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Textur-Wrap-Funktion für die Texturkoordinate t angibt.

- `param`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}} (`samplerParameteri`) oder ein {{domxref("WebGL_API/Types", "GLfloat")}} (`samplerParameterf`), der einen Wert für `pname` angibt.

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

- {{domxref("WebGLSampler")}}
