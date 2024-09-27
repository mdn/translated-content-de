---
title: "WebGLRenderingContext: cullFace()-Methode"
short-title: cullFace()
slug: Web/API/WebGLRenderingContext/cullFace
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.cullFace()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt an, ob Front- und/oder Rückseiten-Polygone entfernt werden können.

## Syntax

```js-nolint
cullFace(mode)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob Front- oder Rückseiten-Polygone Kandidaten für das Entfernen sind. Der Standardwert ist `gl.BACK`. Mögliche Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

### Rückgabewert

Keinen ({{jsxref("undefined")}}).

## Beispiele

Das Entfernen von Polygonen ist standardmäßig deaktiviert. Um das Entfernen zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.CULL_FACE`.

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT_AND_BACK);
```

Um den aktuellen Modus für die zu entfernenden Flächen abzufragen, verwenden Sie die Konstante `CULL_FACE_MODE`.

```js
gl.getParameter(gl.CULL_FACE_MODE) === gl.FRONT_AND_BACK;
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
- [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace)
