---
title: "WebGLRenderingContext: stencilFunc()-Methode"
short-title: stencilFunc()
slug: Web/API/WebGLRenderingContext/stencilFunc
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilFunc()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Vorder- und Rückseitenfunktion und den Referenzwert für den Stencil-Test fest.

Stenciling ermöglicht das Ein- und Ausschalten der Zeichnung auf Pixelbasis. Es wird typischerweise im Mehrpass-Rendering verwendet, um spezielle Effekte zu erzielen.

## Syntax

```js-nolint
stencilFunc(func, ref, mask)
```

### Parameter

- `func`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Testfunktion angibt. Die Standardfunktion ist `gl.ALWAYS`. Die möglichen Werte sind:

    - `gl.NEVER`: Niemals bestehen.
    - `gl.LESS`: Bestehen, wenn
      `(ref & mask) < (stencil & mask)`.
    - `gl.EQUAL`: Bestehen, wenn
      `(ref & mask) = (stencil & mask)`.
    - `gl.LEQUAL`: Bestehen, wenn
      `(ref & mask) <= (stencil & mask)`.
    - `gl.GREATER`: Bestehen, wenn
      `(ref & mask) > (stencil & mask)`.
    - `gl.NOTEQUAL`: Bestehen, wenn
      `(ref & mask) !== (stencil & mask)`.
    - `gl.GEQUAL`: Bestehen, wenn
      `(ref & mask) >= (stencil & mask)`.
    - `gl.ALWAYS`: Immer bestehen.

- `ref`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den Referenzwert für den Stencil-Test angibt. Dieser Wert wird auf den Bereich 0 bis 2^n - 1 geklammert, wobei n die Anzahl der Bitplanes im Stencil-Puffer ist. Der Standardwert ist 0.
- `mask`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das eine bitweise Maske angibt, die verwendet wird, um den Referenzwert und den gespeicherten Stencil-Wert zu verknüpfen, wenn der Test durchgeführt wird. Der Standardwert ist alles 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden {{domxref("WebGLRenderingContext.enable", "enable()")}} und {{domxref("WebGLRenderingContext.disable", "disable()")}} mit dem Argument `gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilFunc(gl.LESS, 0, 0b1110011);
```

Um die aktuelle Stencil-Funktion, den Referenzwert oder andere Stencil-Informationen zu erhalten, fragen Sie die folgenden Konstanten mit {{domxref("WebGLRenderingContext.getParameter", "getParameter()")}} ab.

```js
gl.getParameter(gl.STENCIL_FUNC);
gl.getParameter(gl.STENCIL_VALUE_MASK);
gl.getParameter(gl.STENCIL_REF);
gl.getParameter(gl.STENCIL_BACK_FUNC);
gl.getParameter(gl.STENCIL_BACK_VALUE_MASK);
gl.getParameter(gl.STENCIL_BACK_REF);
gl.getParameter(gl.STENCIL_BITS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilOp()")}}
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
