---
title: "WebGL2RenderingContext: getSamplerParameter()-Methode"
short-title: getSamplerParameter()
slug: Web/API/WebGL2RenderingContext/getSamplerParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getSamplerParameter()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen
eines [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekts zurück.

## Syntax

```js-nolint
getSamplerParameter(sampler, pname)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:
    - `gl.TEXTURE_COMPARE_FUNC`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturvergleichsfunktion angibt.
    - `gl.TEXTURE_COMPARE_MODE`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Texturvergleichsmodus angibt.
    - `gl.TEXTURE_MAG_FILTER`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Vergrößerungsfilter der Textur angibt.
    - `gl.TEXTURE_MAX_LOD`: Gibt ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) zurück, das den maximalen Detailgrad angibt.
    - `gl.TEXTURE_MIN_FILTER`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Verkleinerungsfilter der Textur angibt
    - `gl.TEXTURE_MIN_LOD`: Gibt ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) zurück, das den minimalen Detailgrad angibt.
    - `gl.TEXTURE_WRAP_R`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturumwicklungsfunktion für die Texturkoordinate r angibt.
    - `gl.TEXTURE_WRAP_S`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturumwicklungsfunktion für die Texturkoordinate s angibt.
    - `gl.TEXTURE_WRAP_T`: Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Texturumwicklungsfunktion für die Texturkoordinate t angibt.

### Rückgabewert

Abhängig vom `pname`-Parameter, entweder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) oder ein
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
