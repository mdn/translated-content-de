---
title: "WebGL2RenderingContext: Methode getInternalformatParameter()"
short-title: getInternalformatParameter()
slug: Web/API/WebGL2RenderingContext/getInternalformatParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getInternalformatParameter()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Informationen über die implementierungsabhängige Unterstützung für interne Formate zurück.

## Syntax

```js-nolint
getInternalformatParameter(target, internalformat, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel-Renderbuffer-Objekt spezifiziert. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferdatenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das interne Format angibt, über das Informationen abgerufen werden sollen (muss ein farbrenderbares, tiefenrenderbares oder schablonenrenderbares Format sein).
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ der abzufragenden Informationen angibt. Mögliche Werte:

    - `gl.SAMPLES`
      - : Gibt ein {{jsxref("Int32Array")}} zurück, das die unterstützten Abtastwerte für `internalformat` in absteigender Reihenfolge enthält.

### Rückgabewert

Hängt von der angeforderten Information ab (wie mit `pname` spezifiziert). Es ist ein {{jsxref("Int32Array")}}, wenn `pname` `gl.SAMPLES` ist.

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
