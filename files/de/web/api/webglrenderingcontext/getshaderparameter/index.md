---
title: "WebGLRenderingContext: getShaderParameter()-Methode"
short-title: getShaderParameter()
slug: Web/API/WebGLRenderingContext/getShaderParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getShaderParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über den angegebenen Shader zurück.

## Syntax

```js-nolint
getShaderParameter(shader, pname)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader), von dem Parameterinformationen abgerufen werden sollen.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die abzufragenden Informationen angibt. Mögliche Werte:

    - `gl.DELETE_STATUS`
      - : Gibt ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das angibt, ob der Shader zum Löschen markiert ist oder nicht.
    - `gl.COMPILE_STATUS`
      - : Gibt ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das angibt, ob die letzte Shader-Kompilierung erfolgreich war oder nicht.
    - `gl.SHADER_TYPE`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das angibt, ob der Shader ein Vertex-Shader (`gl.VERTEX_SHADER`) oder ein Fragment-Shader (`gl.FRAGMENT_SHADER`) Objekt ist.

### Rückgabewert

Gibt die angeforderten Shader-Informationen zurück (wie mit `pname` angegeben).

## Beispiele

```js
gl.getShaderParameter(shader, gl.SHADER_TYPE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
