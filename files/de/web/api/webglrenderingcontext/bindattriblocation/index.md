---
title: "WebGLRenderingContext: bindAttribLocation()-Methode"
short-title: bindAttribLocation()
slug: Web/API/WebGLRenderingContext/bindAttribLocation
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindAttribLocation()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet einen generischen Vertex-Index an eine Attributvariable.

## Syntax

```js-nolint
bindAttribLocation(program, index, name)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt, das gebunden werden soll.
- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des generischen Vertex angibt, der gebunden werden soll.
- `name`
  - : Ein String, der den Namen der Variable angibt, die an den generischen Vertex-Index gebunden werden soll. Dieser Name darf nicht mit `"webgl_"` oder `"_webgl_"` beginnen, da diese für die Verwendung durch WebGL reserviert sind.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.bindAttribLocation(program, colorLocation, "vColor");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
