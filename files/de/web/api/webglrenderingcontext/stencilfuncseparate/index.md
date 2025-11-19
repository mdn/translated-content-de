---
title: "WebGLRenderingContext: stencilFuncSeparate() Methode"
short-title: stencilFuncSeparate()
slug: Web/API/WebGLRenderingContext/stencilFuncSeparate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilFuncSeparate()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt die Vorder- und/oder Rückseite
Funktion und Referenzwert für den Stencil-Test fest.

Stencilling ermöglicht das Zeichnen auf Pixel-Basis zu aktivieren oder zu deaktivieren. Es wird typischerweise im
Multipass-Rendering verwendet, um spezielle Effekte zu erzielen.

## Syntax

```js-nolint
stencilFuncSeparate(face, func, ref, mask)
```

### Parameter

- `face`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der vordere und/oder hintere Stencil-Zustand
    aktualisiert wird. Die möglichen Werte sind:
    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `func`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Testfunktion angibt. Die Standardfunktion ist
    `gl.ALWAYS`. Die möglichen Werte sind:
    - `gl.NEVER`: Niemals bestehen.
    - `gl.LESS`: Bestehen, wenn `(ref & mask) < (stencil & mask)`.
    - `gl.EQUAL`: Bestehen, wenn `(ref & mask) = (stencil & mask)`.
    - `gl.LEQUAL`: Bestehen, wenn `(ref & mask) <= (stencil & mask)`.
    - `gl.GREATER`: Bestehen, wenn `(ref & mask) > (stencil & mask)`.
    - `gl.NOTEQUAL`: Bestehen, wenn `(ref & mask) !== (stencil & mask)`.
    - `gl.GEQUAL`: Bestehen, wenn `(ref & mask) >= (stencil & mask)`.
    - `gl.ALWAYS`: Immer bestehen.

- `ref`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Referenzwert für den Stencil-Test angibt. Dieser
    Wert wird in den Bereich 0 bis 2^n - 1 geklammert, wobei n die Anzahl der Bitplanes
    im Stencil-Puffer ist. Der Standardwert ist 0.
- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der eine Bit-weise Maske angibt, die verwendet wird, um den Referenzwert und den gespeicherten Stencilwert zu ver-UND-en, wenn der Test durchgeführt wird. Der Standardwert ist alle 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Stencil-Testing ist standardmäßig deaktiviert. Um das Stencil-Testing zu aktivieren oder zu deaktivieren, verwenden Sie
die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und
[`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilFuncSeparate(gl.FRONT, gl.LESS, 0.2, 1110011);
```

Um die aktuelle Stencil-Funktion, den Referenzwert oder andere Stencil-Informationen abzurufen,
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

- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
