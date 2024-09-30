---
title: "WebGLRenderingContext: stencilOp()-Methode"
short-title: stencilOp()
slug: Web/API/WebGLRenderingContext/stencilOp
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilOp()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt sowohl die Vorder- als auch die Rückseiten-Stencil-Testaktionen fest.

## Syntax

```js-nolint
stencilOp(fail, zfail, zpass)
```

### Parameter

- `fail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet werden soll, wenn der Stencil-Test fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet werden soll, wenn der Stencil-Test bestanden wird, aber der Tiefentest fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet werden soll, wenn sowohl der Stencil-Test als auch der Tiefentest bestanden werden, oder wenn der Stencil-Test bestanden wird und kein Tiefenpuffer existiert oder die Tiefentestung deaktiviert ist. Der Standardwert ist `gl.KEEP`.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Konstanten

- `gl.KEEP`
  - : Behält den aktuellen Wert bei.
- `gl.ZERO`
  - : Setzt den Stencil-Pufferwert auf 0.
- `gl.REPLACE`
  - : Setzt den Stencil-Pufferwert auf den Referenzwert, wie durch [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) spezifiziert.
- `gl.INCR`
  - : Erhöht den aktuellen Stencil-Pufferwert. Begrenzt auf den maximal darstellbaren ungeraden Wert.
- `gl.INCR_WRAP`
  - : Erhöht den aktuellen Stencil-Pufferwert. Setzt den Stencil-Pufferwert auf null zurück, wenn der maximal darstellbare ungerade Wert erhöht wird.
- `gl.DECR`
  - : Verringert den aktuellen Stencil-Pufferwert. Begrenzt auf 0.
- `gl.DECR_WRAP`
  - : Verringert den aktuellen Stencil-Pufferwert. Setzt den Stencil-Pufferwert auf den maximal darstellbaren ungeraden Wert zurück, wenn ein Stencil-Pufferwert von 0 verringert wird.
- `gl.INVERT`
  - : Invertiert den aktuellen Stencil-Pufferwert bitweise.

## Beispiele

Der Stencil-Test ist standardmäßig deaktiviert. Um den Stencil-Test zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOp(gl.INCR, gl.DECR, gl.INVERT);
```

Um aktuelle Informationen über den Stencil- und Tiefe-Pass oder -Fail zu erhalten, fragen Sie die folgenden Konstanten mit [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) ab.

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
