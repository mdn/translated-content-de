---
title: "WebGLRenderingContext: Methode clear()"
short-title: clear()
slug: Web/API/WebGLRenderingContext/clear
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.clear()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht Puffer auf voreingestellte Werte.

Die voreingestellten Werte können durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor), [`clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) oder [`clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil) festgelegt werden.

Der Scherenkasten, das Dithering und die Puffer-Schreibmasken können die `clear()` Methode beeinflussen.

## Syntax

```js-nolint
clear(mask)
```

### Parameter

- `mask`

  - : Ein bitweises OR-Masken [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Puffer geleert werden sollen. Mögliche Werte sind:

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _mask_ nicht einer der aufgelisteten möglichen Werte ist, wird ein
`gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

Die `clear()` Methode akzeptiert mehrere Werte.

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

Um die aktuellen Löschwerte zu erhalten, fragen Sie die `COLOR_CLEAR_VALUE`,
`DEPTH_CLEAR_VALUE` und `STENCIL_CLEAR_VALUE` Konstanten ab.

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
