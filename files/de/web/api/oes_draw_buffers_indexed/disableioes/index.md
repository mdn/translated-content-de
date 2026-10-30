---
title: "OES_draw_buffers_indexed: Methode disableiOES()"
short-title: disableiOES()
slug: Web/API/OES_draw_buffers_indexed/disableiOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `disableiOES()` der WebGL-Erweiterung [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) aktiviert Blending für einen bestimmten Draw-Buffer.

## Syntax

```js-nolint
disableiOES(target, index)
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

### Blending für Draw-Buffer deaktivieren

Die folgenden beiden Aufrufe deaktivieren Blending für die Draw-Buffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1`.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.disableiOES(gl.BLEND, 0);
ext.disableiOES(gl.BLEND, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.enableiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/enableiOES)
- [WebGL-Draw-Buffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers)
