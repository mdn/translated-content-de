---
title: "WebGL2RenderingContext: getInternalformatParameter() Methode"
short-title: getInternalformatParameter()
slug: Web/API/WebGL2RenderingContext/getInternalformatParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getInternalformatParameter()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) liefert Informationen über die implementierungsabhängige Unterstützung von internen Formaten.

## Syntax

```js-nolint
getInternalformatParameter(target, internalformat, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Datenspeicher für Einzelbilder in einem renderbaren internen Format.

- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das interne Format angibt, über das Informationen abgerufen werden sollen (muss ein farb-renderbares, tiefen-renderbares oder stencil-renderbares Format sein).
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ der abzufragenden Informationen angibt. Mögliche Werte:
    - `gl.SAMPLES`
      - : Gibt ein {{jsxref("Int32Array")}} zurück, das die unterstützten Abtastzahlen für `internalformat` in absteigender Reihenfolge enthält.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` angegeben). Es ist ein {{jsxref("Int32Array")}}, wenn `pname` `gl.SAMPLES` ist.

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

- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
