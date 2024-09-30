---
title: "WebGLRenderingContext: stencilOpSeparate()-Methode"
short-title: stencilOpSeparate()
slug: Web/API/WebGLRenderingContext/stencilOpSeparate
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilOpSeparate()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Aktionen für den front- und/oder rückseitigen Stencil-Test fest.

## Syntax

```js-nolint
stencilOpSeparate(face, fail, zfail, zpass)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob der front- und/oder rückseitige Stencil-Zustand
    aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `fail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet werden soll, wenn der Stencil-Test fehlschlägt.
    Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet werden soll, wenn der Stencil-Test besteht,
    aber der Tiefentest fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Funktion angibt, die verwendet werden soll, wenn sowohl der Stencil-Test
    als auch der Tiefentest bestehen, oder wenn der Stencil-Test besteht und es keinen Tiefenpuffer gibt
    oder der Tiefentest deaktiviert ist. Der Standardwert ist `gl.KEEP`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Konstanten

- `gl.KEEP`
  - : Behält den aktuellen Wert bei.
- `gl.ZERO`
  - : Setzt den Wert des Stencil-Puffers auf 0.
- `gl.REPLACE`
  - : Setzt den Wert des Stencil-Puffers auf den Referenzwert, wie er von
    [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) angegeben wird.
- `gl.INCR`
  - : Erhöht den aktuellen Wert des Stencil-Puffers. Begrenzung auf den maximal darstellbaren
    unveränderten Wert.
- `gl.INCR_WRAP`
  - : Erhöht den aktuellen Wert des Stencil-Puffers. Umschlagen des Werts im Stencil-Puffer auf Null, wenn
    der maximal darstellbare unveränderte Wert erhöht wird.
- `gl.DECR`
  - : Verringert den aktuellen Wert des Stencil-Puffers. Begrenzung auf 0.
- `gl.DECR_WRAP`
  - : Verringert den aktuellen Wert des Stencil-Puffers. Umschlagen des Werts im Stencil-Puffer auf den
    maximal darstellbaren unveränderten Wert, wenn ein Stencil-Puffer-Wert von 0 verringert wird.
- `gl.INVERT`
  - : Invertiert den aktuellen Wert des Stencil-Puffers bitweise.

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie 
die [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)- und 
[`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)-Methoden mit dem Argument 
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOpSeparate(gl.FRONT, gl.INCR, gl.DECR, gl.INVERT);
```

Um die aktuellen Informationen über Stencil- und Tiefenpass oder -fehler zu erhalten, fragen Sie die
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
