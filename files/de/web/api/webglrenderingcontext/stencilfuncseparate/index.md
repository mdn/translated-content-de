---
title: "WebGLRenderingContext: stencilFuncSeparate()-Methode"
short-title: stencilFuncSeparate()
slug: Web/API/WebGLRenderingContext/stencilFuncSeparate
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilFuncSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt die Front- und/oder Back-Funktion sowie den Referenzwert für die Schablonentests.

Die Schablonierung ermöglicht das Ein- und Ausschalten des Zeichnens auf Pixelbasis. Sie wird typischerweise im Multipass-Rendering verwendet, um spezielle Effekte zu erzielen.

## Syntax

```js-nolint
stencilFuncSeparate(face, func, ref, mask)
```

### Parameter

- `face`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, ob der Front- und/oder Back-Schablonenzustand aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `func`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Testfunktion angibt. Die Standardfunktion ist `gl.ALWAYS`. Die möglichen Werte sind:

    - `gl.NEVER`: Niemals bestehen.
    - `gl.LESS`: Besteht, wenn `(ref & mask) < (stencil & mask)`.
    - `gl.EQUAL`: Besteht, wenn `(ref & mask) = (stencil & mask)`.
    - `gl.LEQUAL`: Besteht, wenn `(ref & mask) <= (stencil & mask)`.
    - `gl.GREATER`: Besteht, wenn `(ref & mask) > (stencil & mask)`.
    - `gl.NOTEQUAL`: Besteht, wenn `(ref & mask) !== (stencil & mask)`.
    - `gl.GEQUAL`: Besteht, wenn `(ref & mask) >= (stencil & mask)`.
    - `gl.ALWAYS`: Immer bestehen.

- `ref`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Referenzwert für den Schablonentest angibt. Dieser Wert wird auf den Bereich von 0 bis 2^n - 1 geklammert, wobei n die Anzahl der Bitplanes im Schablonenpuffer ist. Der Standardwert ist 0.
- `mask`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der eine bitweise Maske angibt, die verwendet wird, um den Referenzwert und den gespeicherten Schablonenwert zu verknüpfen, wenn der Test durchgeführt wird. Der Standardwert ist alles 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Die Schablonentests sind standardmäßig deaktiviert. Um Schablonentests zu aktivieren oder zu deaktivieren, verwenden Sie die {{domxref("WebGLRenderingContext.enable", "enable()")}}- und {{domxref("WebGLRenderingContext.disable", "disable()")}}-Methoden mit dem Argument `gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilFuncSeparate(gl.FRONT, gl.LESS, 0.2, 1110011);
```

Um die aktuelle Schablonenfunktion, den Referenzwert oder andere Schabloneninformationen abzurufen, fragen Sie die folgenden Konstanten mit {{domxref("WebGLRenderingContext.getParameter", "getParameter()")}} ab.

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

- {{domxref("WebGLRenderingContext.stencilFunc()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilOp()")}}
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
