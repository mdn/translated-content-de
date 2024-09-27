---
title: "WebGLRenderingContext: stencilFunc() Methode"
short-title: stencilFunc()
slug: Web/API/WebGLRenderingContext/stencilFunc
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.stencilFunc()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt die Funktion und den Referenzwert für Stencil-Tests für die Vorder- und Rückseite.

Das Stenciling ermöglicht das Zeichnen pro Pixel zu aktivieren oder zu deaktivieren. Es wird typischerweise beim Multi-Pass-Rendering verwendet, um spezielle Effekte zu erzielen.

## Syntax

```js-nolint
stencilFunc(func, ref, mask)
```

### Parameter

- `func`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Testfunktion angibt. Die Standardfunktion ist
    `gl.ALWAYS`. Die möglichen Werte sind:

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
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Referenzwert für den Stencil-Test angibt. Dieser
    Wert wird auf den Bereich 0 bis 2^n - 1 geklammert, wobei n die Anzahl der Bitplanes im Stencil-Buffer ist. Der Standardwert ist 0.
- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der eine bitweise Maske angibt, die zum AND-Verknüpfen des Referenzwertes und des gespeicherten Stencil-Wertes verwendet wird, wenn der Test durchgeführt wird. Der Standardwert ist alles 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und
[`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilFunc(gl.LESS, 0, 0b1110011);
```

Um die aktuelle Stencil-Funktion, den Referenzwert oder andere Stencil-Informationen zu erhalten,
fragen Sie die folgenden Konstanten mit [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) ab.

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

- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
