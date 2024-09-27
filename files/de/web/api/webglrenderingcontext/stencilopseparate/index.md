---
title: "WebGLRenderingContext: stencilOpSeparate() Methode"
short-title: stencilOpSeparate()
slug: Web/API/WebGLRenderingContext/stencilOpSeparate
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilOpSeparate()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt die Aktionen des Stencil-Tests für die Vorder- und/oder Rückseite fest.

## Syntax

```js-nolint
stencilOpSeparate(face, fail, zfail, zpass)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Stencil-Zustand für die Vorder- und/oder Rückseite aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `fail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn der Stencil-Test fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn der Stencil-Test besteht, aber der Tiefentest fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn sowohl der Stencil-Test als auch der Tiefentest bestehen, oder wenn der Stencil-Test besteht und es keinen Tiefenpuffer gibt oder die Tiefenprüfung deaktiviert ist. Der Standardwert ist `gl.KEEP`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Konstanten

- `gl.KEEP`
  - : Behält den aktuellen Wert bei.
- `gl.ZERO`
  - : Setzt den Wert im Stencil-Puffer auf 0.
- `gl.REPLACE`
  - : Setzt den Wert im Stencil-Puffer auf den Referenzwert, wie von [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) angegeben.
- `gl.INCR`
  - : Erhöht den aktuellen Wert im Stencil-Puffer. Klemmt auf den maximal darstellbaren unsigned Wert.
- `gl.INCR_WRAP`
  - : Erhöht den aktuellen Wert im Stencil-Puffer. Setzt den Stencil-Puffer-Wert auf null zurück, wenn der maximal darstellbare unsigned Wert überschritten wird.
- `gl.DECR`
  - : Verringert den aktuellen Wert im Stencil-Puffer. Klemmt auf 0.
- `gl.DECR_WRAP`
  - : Verringert den aktuellen Wert im Stencil-Puffer. Setzt den Stencil-Puffer-Wert auf den maximal darstellbaren unsigned Wert zurück, wenn der Stencil-Puffer-Wert 0 unterschreitet.
- `gl.INVERT`
  - : Invertiert den aktuellen Wert im Stencil-Puffer bitweise.

## Beispiele

Der Stencil-Test ist standardmäßig deaktiviert. Um den Stencil-Test zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOpSeparate(gl.FRONT, gl.INCR, gl.DECR, gl.INVERT);
```

Um die aktuellen Informationen über das Bestehen oder Scheitern von Stencil- und Tiefentests zu erhalten, fragen Sie die folgenden Konstanten mit [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) ab.

```js
gl.getParameter(gl.STENCIL_FAIL);
gl.getParameter(gl.STENCIL_PASS_DEPTH_PASS);
gl.getParameter(gl.STENCIL_PASS_DEPTH_FAIL);
gl.getParameter(gl.STENCIL_BACK_FAIL);
gl.getParameter(gl.STENCIL_BACK_PASS_DEPTH_PASS);
gl.getParameter(gl.STENCIL_BACK_PASS_DEPTH_FAIL);
gl.getParameter(gl.STENCIL_BITS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
