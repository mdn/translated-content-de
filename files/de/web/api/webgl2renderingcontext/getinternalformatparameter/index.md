---
title: "WebGL2RenderingContext: getInternalformatParameter() Methode"
short-title: getInternalformatParameter()
slug: Web/API/WebGL2RenderingContext/getInternalformatParameter
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getInternalformatParameter()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) liefert Informationen über implementierungsabhängige Unterstützung für interne Formate.

## Syntax

```js-nolint
getInternalformatParameter(target, internalformat, pname)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Pufferdatenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das interne Format angibt, über das Informationen abgerufen werden sollen (muss ein farb-, tiefen- oder stencil-renderbares Format sein).
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Art der abzufragenden Informationen bestimmt. Mögliche Werte:
    - `gl.SAMPLES`
      - : Gibt ein {{jsxref("Int32Array")}} zurück, das die unterstützten Abtastzahlen für `internalformat` in absteigender Reihenfolge enthält.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` spezifiziert). Es ist ein {{jsxref("Int32Array")}}, wenn `pname` `gl.SAMPLES` ist.

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
