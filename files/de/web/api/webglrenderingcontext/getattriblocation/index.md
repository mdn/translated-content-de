---
title: "WebGLRenderingContext: Methode getAttribLocation()"
short-title: getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getAttribLocation()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt die Position einer Attributvariable in einem gegebenen {{domxref("WebGLProgram")}} zurück.

## Syntax

```js-nolint
getAttribLocation(program, name)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das die Attributvariable enthält.
- `name`
  - : Ein String, der den Namen der Attributvariable angibt, deren Position ermittelt werden soll.

### Rückgabewert

Eine {{domxref("WebGL_API/Types", "GLint")}}-Zahl, die die Position des Variablennamens angibt, falls gefunden. Gibt andernfalls -1 zurück.

## Beispiele

```js
gl.getAttribLocation(program, "vColor");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
