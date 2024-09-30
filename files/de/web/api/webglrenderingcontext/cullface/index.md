---
title: "WebGLRenderingContext: cullFace()-Methode"
short-title: cullFace()
slug: Web/API/WebGLRenderingContext/cullFace
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.cullFace()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt an, ob Vorder- und/oder Rückflächen von Polygonen entfernt werden können.

## Syntax

```js-nolint
cullFace(mode)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob Vorder- oder Rückflächen von Polygonen für das Entfernen infrage kommen. Der Standardwert ist `gl.BACK`. Mögliche Werte sind:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Polygonentfernung ist standardmäßig deaktiviert. Um das Entfernen zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.CULL_FACE`.

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT_AND_BACK);
```

Um den aktuellen Entfernungsmodus der Polygone zu überprüfen, fragen Sie die `CULL_FACE_MODE`-Konstante ab.

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
