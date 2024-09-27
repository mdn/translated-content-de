---
title: "WebGL2RenderingContext: Methode getSamplerParameter()"
short-title: getSamplerParameter()
slug: Web/API/WebGL2RenderingContext/getSamplerParameter
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getSamplerParameter()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekts zurück.

## Syntax

```js-nolint
getSamplerParameter(sampler, pname)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.TEXTURE_COMPARE_FUNC`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Texturvergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Texturvergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Texturvergrößerungsfilter angibt.
    - `gl.TEXTURE_MAX_LOD`: Gibt einen [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) zurück, der den maximalen Detailgradwert angibt.
    - `gl.TEXTURE_MIN_FILTER`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Texturverkleinerungsfilter angibt.
    - `gl.TEXTURE_MIN_LOD`: Gibt einen [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) zurück, der den minimalen Detailgradwert angibt.
    - `gl.TEXTURE_WRAP_R`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Texturwickelfunktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Texturwickelfunktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`: Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Texturwickelfunktion für die Texturkoordinate t angibt.

### Rückgabewert

Abhängig vom Parameter `pname`, entweder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types).

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

- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
