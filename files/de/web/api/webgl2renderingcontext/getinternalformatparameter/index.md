---
title: "WebGL2RenderingContext: Methode getInternalformatParameter()"
short-title: getInternalformatParameter()
slug: Web/API/WebGL2RenderingContext/getInternalformatParameter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getInternalformatParameter()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) liefert Informationen über implementierungsabhängige Unterstützung für interne Formate.

## Syntax

```js-nolint
getInternalformatParameter(target, internalformat, pname)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferspeicher für einzelne Bilder in einem renderbaren internen Format.

- `internalformat`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das interne Format angibt, zu dem Informationen abgerufen werden sollen (muss ein farb-renderbares, tiefen-renderbares oder stencil-renderbares Format sein).
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Art der abzufragenden Information angibt. Mögliche Werte:

    - `gl.SAMPLES`
      - : Gibt ein {{jsxref("Int32Array")}} zurück, das die unterstützten Sample-Anzahlen für `internalformat` in absteigender Reihenfolge enthält.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` angegeben). Es ist ein {{jsxref("Int32Array")}} wenn `pname` `gl.SAMPLES` ist.

## Beispiele

```js
const samples = gl.getInternalformatParameter(
  gl.RENDERBUFFER,
  gl.RGBA8,
  gl.SAMPLES,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
