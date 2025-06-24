---
title: "WebGLRenderingContext: stencilOpSeparate() Methode"
short-title: stencilOpSeparate()
slug: Web/API/WebGLRenderingContext/stencilOpSeparate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilOpSeparate()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt die Aktionen des Stencil-Tests für die Vorder- und/oder Rückseite fest.

## Syntax

```js-nolint
stencilOpSeparate(face, fail, zfail, zpass)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob der Stencil-Zustand der Vorder- und/oder Rückseite
    aktualisiert wird. Die möglichen Werte sind:
    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `fail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn der Stencil-Test fehlschlägt.
    Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn der Stencil-Test besteht,
    der Tiefentest jedoch fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet wird, wenn sowohl der Stencil-Test
    als auch der Tiefentest bestehen, oder wenn der Stencil-Test besteht und kein Tiefenpuffer vorhanden ist
    oder der Tiefentest deaktiviert ist. Der Standardwert ist `gl.KEEP`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Konstanten

- `gl.KEEP`
  - : Behält den aktuellen Wert bei.
- `gl.ZERO`
  - : Setzt den Wert des Stencil-Puffers auf 0.
- `gl.REPLACE`
  - : Setzt den Wert des Stencil-Puffers auf den Referenzwert, wie durch
    [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) angegeben.
- `gl.INCR`
  - : Erhöht den aktuellen Wert des Stencil-Puffers. Begrenzt auf den maximal darstellbaren
    vorzeichenlosen Wert.
- `gl.INCR_WRAP`
  - : Erhöht den aktuellen Wert des Stencil-Puffers. Setzt den Stencil-Pufferwert auf null zurück, wenn
    der maximal darstellbare vorzeichenlose Wert überschritten wird.
- `gl.DECR`
  - : Verringert den aktuellen Wert des Stencil-Puffers. Begrenzt auf 0.
- `gl.DECR_WRAP`
  - : Verringert den aktuellen Wert des Stencil-Puffers. Setzt den Stencil-Pufferwert auf den
    maximal darstellbaren vorzeichenlosen Wert, wenn der Stencil-Pufferwert 0 beträgt.
- `gl.INVERT`
  - : Invertiert den aktuellen Wert des Stencil-Puffers bitweise.

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie
die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und
[`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOpSeparate(gl.FRONT, gl.INCR, gl.DECR, gl.INVERT);
```

Um aktuelle Informationen über das Bestehen oder Nichtbestehen von Stencil- und Tiefentests zu erhalten, fragen Sie die
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

- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
