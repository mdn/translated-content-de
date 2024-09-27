---
title: "WebGL2RenderingContext: getFragDataLocation()-Methode"
short-title: getFragDataLocation()
slug: Web/API/WebGL2RenderingContext/getFragDataLocation
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getFragDataLocation()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die Zuordnung von Farbnummen zu benutzerdefinierten `varying out`-Variablen zurück.

## Syntax

```js-nolint
getFragDataLocation(program, name)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das abgefragt werden soll.
- `name`
  - : Ein String, der den Namen der benutzerdefinierten `varying out`-Variablen angibt.

### Rückgabewert

Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die zugewiesene Farbnummen-Zuordnung angibt, oder `-1` andernfalls.

## Beispiele

```js
// program is a linked WebGLProgram

gl.getFragDataLocation(program, "fragColor");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
