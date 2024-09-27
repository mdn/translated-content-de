---
title: "WebGLRenderingContext: clear() Methode"
short-title: clear()
slug: Web/API/WebGLRenderingContext/clear
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.clear()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht Puffer auf voreingestellte Werte.

Die voreingestellten Werte können durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor), [`clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) oder [`clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil) festgelegt werden.

Der Scherrahmen (scissor box), Dithering und die Puffer-Schreibmasken können die `clear()`-Methode beeinflussen.

## Syntax

```js-nolint
clear(mask)
```

### Parameter

- `mask`

  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types) Bit-oder-Maske, die angibt, welche Puffer gelöscht werden sollen. Mögliche Werte sind:

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mask_ nicht einer der aufgeführten möglichen Werte ist, wird ein
`gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

Die `clear()`-Methode akzeptiert mehrere Werte.

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

Um die aktuellen Löschwerte zu erhalten, fragen Sie die Konstanten `COLOR_CLEAR_VALUE`, `DEPTH_CLEAR_VALUE` und `STENCIL_CLEAR_VALUE` ab.

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
