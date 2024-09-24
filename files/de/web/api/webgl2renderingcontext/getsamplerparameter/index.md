---
title: "WebGL2RenderingContext: Methode getSamplerParameter()"
short-title: getSamplerParameter()
slug: Web/API/WebGL2RenderingContext/getSamplerParameter
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getSamplerParameter()`** Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines {{domxref("WebGLSampler")}} Objekts zurück.

## Syntax

```js-nolint
getSamplerParameter(sampler, pname)
```

### Parameter

- `sampler`
  - : Ein {{domxref("WebGLSampler")}} Objekt.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.TEXTURE_COMPARE_FUNC`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die Texturvergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Texturvergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Texturvergrößerungsfilter angibt.
    - `gl.TEXTURE_MAX_LOD`: Gibt ein {{domxref("WebGL_API/Types", "GLfloat")}} zurück, das den maximalen Level-of-Detail-Wert angibt.
    - `gl.TEXTURE_MIN_FILTER`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Texturverkleinerungsfilter angibt.
    - `gl.TEXTURE_MIN_LOD`: Gibt ein {{domxref("WebGL_API/Types", "GLfloat")}} zurück, das den minimalen Level-of-Detail-Wert angibt.
    - `gl.TEXTURE_WRAP_R`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die Texturwickelfunktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die Texturwickelfunktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`: Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die Texturwickelfunktion für die Texturkoordinate t angibt.

### Rückgabewert

Hängt vom `pname` Parameter ab, entweder ein {{domxref("WebGL_API/Types", "GLenum")}} oder ein {{domxref("WebGL_API/Types", "GLfloat")}}.

## Beispiele

```js
const sampler = gl.createSampler();
gl.getSamplerParameter(sampler, gl.TEXTURE_COMPARE_FUNC);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLSampler")}}
