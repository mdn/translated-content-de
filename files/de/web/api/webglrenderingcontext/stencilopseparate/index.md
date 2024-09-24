---
title: "WebGLRenderingContext: stencilOpSeparate()-Methode"
short-title: stencilOpSeparate()
slug: Web/API/WebGLRenderingContext/stencilOpSeparate
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilOpSeparate()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt die Aktionen des Stencil-Tests für die Vorder- und/oder Rückseite fest.

## Syntax

```js-nolint
stencilOpSeparate(face, fail, zfail, zpass)
```

### Parameter

- `face`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, ob der Stencil-Zustand der Vorder- und/oder Rückseite aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `fail`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Funktion angibt, die verwendet wird, wenn der Stencil-Test fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Funktion angibt, die verwendet wird, wenn der Stencil-Test besteht, aber der Tiefentest fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Funktion angibt, die verwendet wird, wenn sowohl der Stencil-Test als auch der Tiefentest bestehen, oder wenn der Stencil-Test besteht und kein Tiefenpuffer vorhanden ist oder der Tiefentest deaktiviert ist. Der Standardwert ist `gl.KEEP`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Konstanten

- `gl.KEEP`
  - : Behält den aktuellen Wert bei.
- `gl.ZERO`
  - : Setzt den Stencil-Pufferwert auf 0.
- `gl.REPLACE`
  - : Setzt den Stencil-Pufferwert auf den Referenzwert, wie durch
    {{domxref("WebGLRenderingContext.stencilFunc()")}} angegeben.
- `gl.INCR`
  - : Erhöht den aktuellen Stencil-Pufferwert. Begrenzen auf den maximal darstellbaren
    positiven Wert.
- `gl.INCR_WRAP`
  - : Erhöht den aktuellen Stencil-Pufferwert. Setzt den Stencil-Pufferwert auf null zurück, wenn
    der maximal darstellbare positive Wert überschritten wird.
- `gl.DECR`
  - : Verringert den aktuellen Stencil-Pufferwert. Begrenzen auf 0.
- `gl.DECR_WRAP`
  - : Verringert den aktuellen Stencil-Pufferwert. Setzt den Stencil-Pufferwert auf den
    maximal darstellbaren positiven Wert zurück, wenn der Stencil-Pufferwert 0 erreicht.
- `gl.INVERT`
  - : Invertiert den aktuellen Stencil-Pufferwert bitweise.

## Beispiele

Der Stencil-Test ist standardmäßig deaktiviert. Um den Stencil-Test zu aktivieren oder zu deaktivieren, verwenden Sie
die Methoden {{domxref("WebGLRenderingContext.enable", "enable()")}} und
{{domxref("WebGLRenderingContext.disable", "disable()")}} mit dem Argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOpSeparate(gl.FRONT, gl.INCR, gl.DECR, gl.INVERT);
```

Um aktuelle Informationen über den Stencil- und Tiefentest zu erhalten, können die folgenden Konstanten mit {{domxref("WebGLRenderingContext.getParameter", "getParameter()")}} abgefragt werden.

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

- {{domxref("WebGLRenderingContext.stencilOp()")}}
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
