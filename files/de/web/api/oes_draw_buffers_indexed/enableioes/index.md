---
title: "OES_draw_buffers_indexed: enableiOES()-Methode"
short-title: enableiOES()
slug: Web/API/OES_draw_buffers_indexed/enableiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `enableiOES()`-Methode der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung aktiviert das Blending für einen bestimmten Zeichenpuffer.

## Syntax

```js-nolint
enableiOES(target, index)
```

### Parameter

- `target`
  - : Muss `gl.BLEND` sein.
- `index`
  - : Eine ganzzahlige Zahl `i`, die den Zeichenpuffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` verbunden ist. Siehe [WebGL Zeichenpuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `target` nicht `gl.BLEND` ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `index` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

### Blending für Zeichenpuffer aktivieren

Die folgenden zwei Aufrufe aktivieren das Blending für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1`.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.enableiOES(gl.BLEND, 0);
ext.enableiOES(gl.BLEND, 1);
```

Sie können [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwenden, um zu sehen, wie viele Zeichenpuffer verfügbar sind.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.disableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/disableiOES)
- [WebGL Zeichenpuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers)
