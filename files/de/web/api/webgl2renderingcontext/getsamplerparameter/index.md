---
title: "WebGL2RenderingContext: Methode getSamplerParameter()"
short-title: getSamplerParameter()
slug: Web/API/WebGL2RenderingContext/getSamplerParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getSamplerParameter()`** Methode
des [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines [`WebGLSampler`](/de/docs/Web/API/WebGLSampler) Objekts zurück.

## Syntax

```js-nolint
getSamplerParameter(sampler, pname)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler) Objekt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.TEXTURE_COMPARE_FUNC`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturvergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Texturvergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Texturvergrößerungsfilter angibt.
    - `gl.TEXTURE_MAX_LOD`: Gibt ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) zurück, das den maximalen Detaillierungsgrad angibt.
    - `gl.TEXTURE_MIN_FILTER`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Texturverkleinerungsfilter angibt.
    - `gl.TEXTURE_MIN_LOD`: Gibt ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) zurück, das den minimalen Detaillierungsgrad angibt.
    - `gl.TEXTURE_WRAP_R`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturwickelfunktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturwickelfunktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturwickelfunktion für die Texturkoordinate t angibt.

### Rückgabewert

Abhängig vom `pname` Parameter, entweder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) oder ein
[`GLfloat`](/de/docs/Web/API/WebGL_API/Types).

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
