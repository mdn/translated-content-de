---
title: "WebGLRenderingContext: Methode cullFace()"
short-title: cullFace()
slug: Web/API/WebGLRenderingContext/cullFace
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.cullFace()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt fest, ob Vorder- und/oder Rückseiten von Polygonen entfernt werden können.

## Syntax

```js-nolint
cullFace(mode)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, ob Vorder- oder Rückseiten von Polygonen für das Entfernen in Frage kommen. Der Standardwert ist `gl.BACK`. Mögliche Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Entfernen von Polygonen ist standardmäßig deaktiviert. Um das Entfernen zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden {{domxref("WebGLRenderingContext.enable", "enable()")}} und {{domxref("WebGLRenderingContext.disable", "disable()")}} mit dem Argument `gl.CULL_FACE`.

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT_AND_BACK);
```

Um den aktuellen Culling-Modus abzufragen, verwenden Sie die Konstante `CULL_FACE_MODE`.

```js
gl.getParameter(gl.CULL_FACE_MODE) === gl.FRONT_AND_BACK;
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.frontFace()")}}
