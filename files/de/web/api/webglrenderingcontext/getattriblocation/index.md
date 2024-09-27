---
title: "WebGLRenderingContext: getAttribLocation()-Methode"
short-title: getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getAttribLocation()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt die Position einer Attributvariablen in einem gegebenen [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) zurück.

## Syntax

```js-nolint
getAttribLocation(program, name)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das die Attributvariable enthält.
- `name`
  - : Ein String, der den Namen der Attributvariablen angibt, deren Position ermittelt werden soll.

### Rückgabewert

Eine [`GLint`](/de/docs/Web/API/WebGL_API/Types)-Zahl, die die Position der Variablen angibt, falls gefunden. Gibt andernfalls -1 zurück.

## Beispiele

```js
gl.getAttribLocation(program, "vColor");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
