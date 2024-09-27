---
title: "WebGLRenderingContext: stencilOp()-Methode"
short-title: stencilOp()
slug: Web/API/WebGLRenderingContext/stencilOp
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilOp()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt die Stencil-Test-Aktionen für die Vorder- und Rückseite fest.

## Syntax

```js-nolint
stencilOp(fail, zfail, zpass)
```

### Parameter

- `fail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn der Stencil-Test fehlschlägt.
    Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn der Stencil-Test besteht,
    aber der Tiefentest fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn sowohl der Stencil-Test
    als auch der Tiefentest bestehen oder wenn der Stencil-Test besteht und es keinen Tiefenpuffer gibt
    oder das Tieftesten deaktiviert ist. Der Standardwert ist `gl.KEEP`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Konstanten

- `gl.KEEP`
  - : Behält den aktuellen Wert bei.
- `gl.ZERO`
  - : Setzt den Stencil-Puffer-Wert auf 0.
- `gl.REPLACE`
  - : Setzt den Stencil-Puffer-Wert auf den Referenzwert, wie er durch
    [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) angegeben ist.
- `gl.INCR`
  - : Erhöht den aktuellen Stencil-Puffer-Wert. Klemmt auf den maximal darstellbaren
    unsigned Wert.
- `gl.INCR_WRAP`
  - : Erhöht den aktuellen Stencil-Puffer-Wert. Wickelt den Stencil-Puffer-Wert bis null zurück, wenn
    der maximal darstellbare unsigned Wert erhöht wird.
- `gl.DECR`
  - : Verringert den aktuellen Stencil-Puffer-Wert. Klemmt auf 0.
- `gl.DECR_WRAP`
  - : Verringert den aktuellen Stencil-Puffer-Wert. Wickelt den Stencil-Puffer-Wert zum
    maximal darstellbaren unsigned Wert zurück, wenn ein Stencil-Puffer-Wert von 0 verringert wird.
- `gl.INVERT`
  - : Invertiert bitweise den aktuellen Stencil-Puffer-Wert.

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie
die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und
[`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOp(gl.INCR, gl.DECR, gl.INVERT);
```

Um die aktuellen Informationen über Stencil- und Tiefenpass oder -fehler abzurufen, fragen Sie die
folgenden Konstanten mit [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) ab.

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

- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
