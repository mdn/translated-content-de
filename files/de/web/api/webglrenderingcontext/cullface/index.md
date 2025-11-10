---
title: "WebGLRenderingContext: cullFace() Methode"
short-title: cullFace()
slug: Web/API/WebGLRenderingContext/cullFace
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.cullFace()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt fest, ob Vorder- und/oder Rückseitenpolygone herausgefiltert werden können.

## Syntax

```js-nolint
cullFace(mode)
```

### Parameter

- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob Vorder- oder Rückseitenpolygone Kandidaten für das Culling sind. Der Standardwert ist `gl.BACK`. Mögliche Werte sind:
    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Polygon-Culling ist standardmäßig deaktiviert. Um Culling zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.CULL_FACE`.

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT_AND_BACK);
```

Um den aktuellen Culling-Modus abzufragen, prüfen Sie die Konstante `CULL_FACE_MODE`.

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
