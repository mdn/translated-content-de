---
title: "WebGL2RenderingContext: Methode getInternalformatParameter()"
short-title: getInternalformatParameter()
slug: Web/API/WebGL2RenderingContext/getInternalformatParameter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getInternalformatParameter()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Informationen über die implementierungsabhängige Unterstützung von internen Formaten zurück.

## Syntax

```js-nolint
getInternalformatParameter(target, internalformat, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel-Renderpuffer-Objekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferdatenspeicher für einzelne Bilder in einem darstellbaren internen Format.

- `internalformat`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das interne Format angibt, über das Informationen abgerufen werden sollen (muss ein farb-darstellbares, tiefend-darstellbares oder schablonen-darstellbares Format sein).
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ der abzufragenden Informationen angibt. Mögliche Werte:

    - `gl.SAMPLES`
      - : Gibt ein {{jsxref("Int32Array")}} zurück, das in absteigender Reihenfolge die unterstützten Abtastziehlen für `internalformat` enthält.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie durch `pname` spezifiziert). Es handelt sich um ein {{jsxref("Int32Array")}}, wenn `pname` `gl.SAMPLES` ist.

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
