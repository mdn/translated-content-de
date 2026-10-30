---
title: "OES_draw_buffers_indexed: Methode enableiOES()"
short-title: enableiOES()
slug: Web/API/OES_draw_buffers_indexed/enableiOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `enableiOES()` der WebGL-Erweiterung [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) aktiviert Blending für einen bestimmten Draw-Buffer.

## Syntax

```js-nolint
enableiOES(target, index)
```

### Parameter

- `target`
  - : Muss `gl.BLEND` sein.
- `index`
  - : Eine Ganzzahl `i`, die den Draw-Buffer angibt, der der Konstante `gl.DRAW_BUFFERi` zugeordnet ist. Siehe [WebGL-Draw-Buffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `target` nicht `gl.BLEND` ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `index` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

### Blending für Draw-Buffer aktivieren

Die folgenden beiden Aufrufe aktivieren Blending für die Draw-Buffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1`.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.enableiOES(gl.BLEND, 0);
ext.enableiOES(gl.BLEND, 1);
```

Mit [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) können Sie ermitteln, wie viele Draw-Buffer verfügbar sind.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.disableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/disableiOES)
- [WebGL-Draw-Buffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers)
