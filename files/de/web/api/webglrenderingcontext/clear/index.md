---
title: "WebGLRenderingContext: clear()-Methode"
short-title: clear()
slug: Web/API/WebGLRenderingContext/clear
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.clear()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht Puffer auf voreingestellte Werte.

Die voreingestellten Werte können durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor), [`clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) oder [`clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil) festgelegt werden.

Das Scherrechteck, das Dithering und die Puffer-Schreibmasken können die `clear()`-Methode beeinflussen.

## Syntax

```js-nolint
clear(mask)
```

### Parameter

- `mask`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types) Bitweises ODER-Maske, die die zu löschenden Puffer angibt. Mögliche Werte sind:
    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mask_ nicht einer der aufgeführten möglichen Werte ist, wird ein
`gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

Die `clear()`-Methode akzeptiert mehrere Werte.

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

Um die aktuellen Löschwerte zu erhalten, fragen Sie die Konstanten `COLOR_CLEAR_VALUE`,
`DEPTH_CLEAR_VALUE` und `STENCIL_CLEAR_VALUE` ab.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
