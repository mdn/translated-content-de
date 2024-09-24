---
title: "OES_draw_buffers_indexed: enableiOES() Methode"
short-title: enableiOES()
slug: Web/API/OES_draw_buffers_indexed/enableiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `enableiOES()` Methode der {{DOMxRef("OES_draw_buffers_indexed")}} WebGL-Erweiterung aktiviert das Blending für einen bestimmten Draw-Buffer.

## Syntax

```js-nolint
enableiOES(target, index)
```

### Parameter

- `target`
  - : Muss `gl.BLEND` sein.
- `index`
  - : Ein ganzzahliger Wert `i`, der den mit der Konstante `gl.DRAW_BUFFERi` verbundenen Draw-Buffer spezifiziert, siehe [WebGL Draw-Buffer Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `target` nicht `gl.BLEND` ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Wenn `index` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.

## Beispiele

### Blending für Draw-Buffers aktivieren

Die folgenden beiden Aufrufe aktivieren das Blending für die Draw-Buffers `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1`.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.enableiOES(gl.BLEND, 0);
ext.enableiOES(gl.BLEND, 1);
```

Sie können {{domxref("WebGLRenderingContext.getParameter()")}} verwenden, um zu sehen, wie viele Draw-Buffers verfügbar sind.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("OES_draw_buffers_indexed.disableiOES()")}}
- [WebGL Draw-Buffer Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers)
