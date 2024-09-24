---
title: "WebGLRenderingContext: Methode stencilOp()"
short-title: stencilOp()
slug: Web/API/WebGLRenderingContext/stencilOp
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilOp()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt die Aktionen des Stencil-Tests sowohl für die Vorder- als auch Rückseite fest.

## Syntax

```js-nolint
stencilOp(fail, zfail, zpass)
```

### Parameter

- `fail`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Funktion angibt, die verwendet wird, wenn der Stencil-Test fehlschlägt.
    Der Standardwert ist `gl.KEEP`.
- `zfail`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Funktion angibt, die verwendet wird, wenn der Stencil-Test besteht,
    jedoch der Tiefentest fehlschlägt. Der Standardwert ist `gl.KEEP`.
- `zpass`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Funktion angibt, die verwendet wird, wenn sowohl der Stencil-Test
    als auch der Tiefentest bestehen oder wenn der Stencil-Test besteht und es keinen Tiefenpuffer gibt
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
    {{domxref("WebGLRenderingContext.stencilFunc()")}} angegeben wird.
- `gl.INCR`
  - : Inkrementiert den aktuellen Wert des Stencil-Puffers. Begrenzung auf den maximal darstellbaren
    unsigned Wert.
- `gl.INCR_WRAP`
  - : Inkrementiert den aktuellen Wert des Stencil-Puffers. Setzt den Stencil-Pufferwert auf null,
    wenn der maximale darstellbare unsigned Wert inkrementiert wird.
- `gl.DECR`
  - : Dekrementiert den aktuellen Wert des Stencil-Puffers. Begrenzung auf 0.
- `gl.DECR_WRAP`
  - : Dekrementiert den aktuellen Wert des Stencil-Puffers. Setzt den Stencil-Pufferwert auf den
    maximal darstellbaren unsigned Wert, wenn ein Stencil-Pufferwert von 0 dekrementiert wird.
- `gl.INVERT`
  - : Invertiert den aktuellen Stencil-Pufferwert bitweise.

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie
die Methoden {{domxref("WebGLRenderingContext.enable", "enable()")}} und
{{domxref("WebGLRenderingContext.disable", "disable()")}} mit dem Argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOp(gl.INCR, gl.DECR, gl.INVERT);
```

Um die aktuellen Informationen über das Bestehen oder Fehlschlagen von Stencil und Tiefe zu erhalten, fragen Sie die
folgenden Konstanten mit {{domxref("WebGLRenderingContext.getParameter", "getParameter()")}} ab.

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

- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
