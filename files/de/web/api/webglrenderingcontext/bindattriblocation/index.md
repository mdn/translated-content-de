---
title: "WebGLRenderingContext: bindAttribLocation()-Methode"
short-title: bindAttribLocation()
slug: Web/API/WebGLRenderingContext/bindAttribLocation
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindAttribLocation()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) verbindet einen generischen Vertex-Index mit einer Attributvariablen.

## Syntax

```js-nolint
bindAttribLocation(program, index, name)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}-Objekt, das gebunden werden soll.
- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des zu bindenden generischen Vertexes angibt.
- `name`
  - : Ein String, der den Namen der zu bindenden Variable an den
    generischen Vertex-Index angibt. Dieser Name darf nicht mit `"webgl_"` oder `"_webgl_"` beginnen, da diese für die Verwendung durch WebGL reserviert sind.

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

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
