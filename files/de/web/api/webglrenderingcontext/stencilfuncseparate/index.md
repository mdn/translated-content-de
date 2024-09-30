---
title: "WebGLRenderingContext: stencilFuncSeparate() Methode"
short-title: stencilFuncSeparate()
slug: Web/API/WebGLRenderingContext/stencilFuncSeparate
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.stencilFuncSeparate()`** Methode des
[WebGL API](/de/docs/Web/API/WebGL_API) setzt die Vorder- und/oder Rückseitenfunktion sowie den Referenzwert für den Stencil-Test.

Das Stenciln ermöglicht das Ein- und Ausschalten des Zeichnens auf Pixelbasis. Es wird typischerweise beim Multipass-Rendering verwendet, um spezielle Effekte zu erzielen.

## Syntax

```js-nolint
stencilFuncSeparate(face, func, ref, mask)
```

### Parameter

- `face`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob der Stencil-Zustand der Vorder- und/oder Rückseite aktualisiert wird. Die möglichen Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `func`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Testfunktion angibt. Die Standardfunktion ist `gl.ALWAYS`. Die möglichen Werte sind:

    - `gl.NEVER`: Nie passieren.
    - `gl.LESS`: Bestehen, wenn `(ref & mask) < (stencil & mask)`.
    - `gl.EQUAL`: Bestehen, wenn `(ref & mask) = (stencil & mask)`.
    - `gl.LEQUAL`: Bestehen, wenn `(ref & mask) <= (stencil & mask)`.
    - `gl.GREATER`: Bestehen, wenn `(ref & mask) > (stencil & mask)`.
    - `gl.NOTEQUAL`: Bestehen, wenn `(ref & mask) !== (stencil & mask)`.
    - `gl.GEQUAL`: Bestehen, wenn `(ref & mask) >= (stencil & mask)`.
    - `gl.ALWAYS`: Immer bestehen.

- `ref`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Referenzwert für den Stencil-Test angibt. Dieser Wert wird auf den Bereich 0 bis 2^n - 1 geklemmt, wobei n die Anzahl der Bit-Ebenen im Stencil-Puffer ist. Der Standardwert ist 0.
- `mask`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der eine bitweise Maske angibt, die verwendet wird, um den Referenzwert und den gespeicherten Stencil-Wert beim Testen zu maskieren. Der Standardwert ist alles 1.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der Stencil-Test ist standardmäßig deaktiviert. Um den Stencil-Test zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilFuncSeparate(gl.FRONT, gl.LESS, 0.2, 1110011);
```

Um die aktuelle Stencil-Funktion, den Referenzwert oder andere Stencil-Informationen zu erhalten, fragen Sie die folgenden Konstanten mit [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) ab.

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
