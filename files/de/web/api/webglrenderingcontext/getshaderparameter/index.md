---
title: "WebGLRenderingContext: Methode getShaderParameter()"
short-title: getShaderParameter()
slug: Web/API/WebGLRenderingContext/getShaderParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getShaderParameter()`**-Methode des [WebGL APIs](/de/docs/Web/API/WebGL_API) gibt Informationen über den gegebenen Shader zurück.

## Syntax

```js-nolint
getShaderParameter(shader, pname)
```

### Parameter

- `shader`
  - : Ein {{domxref("WebGLShader")}}, von dem Parameterinformationen abgerufen werden sollen.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die abzufragenden Informationen angibt. Mögliche Werte:

    - `gl.DELETE_STATUS`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob der Shader zur Löschung markiert ist.
    - `gl.COMPILE_STATUS`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob die letzte Shader-Kompilierung erfolgreich war.
    - `gl.SHADER_TYPE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das angibt, ob der Shader ein Vertex-Shader (`gl.VERTEX_SHADER`) oder Fragment-Shader (`gl.FRAGMENT_SHADER`) Objekt ist.

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

- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
