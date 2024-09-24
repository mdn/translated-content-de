---
title: "WebGL2RenderingContext: Methode getFragDataLocation()"
short-title: getFragDataLocation()
slug: Web/API/WebGL2RenderingContext/getFragDataLocation
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getFragDataLocation()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die Bindung von Farbnummmern zu benutzerdefinierten ausgehenden Variablen zurück.

## Syntax

```js-nolint
getFragDataLocation(program, name)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das abgefragt werden soll.
- `name`
  - : Ein String, der den Namen der benutzerdefinierten ausgehenden Variablen angibt.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLint")}}, der die zugewiesene Farbzahlen-Bindung anzeigt, oder `-1`, wenn keine vorhanden ist.

## Beispiele

```js
// program is a linked WebGLProgram

gl.getFragDataLocation(program, "fragColor");
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
