---
title: "OES_draw_buffers_indexed: disableiOES() Methode"
short-title: disableiOES()
slug: Web/API/OES_draw_buffers_indexed/disableiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `disableiOES()` Methode der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung deaktiviert das Blending für einen bestimmten Draw-Buffer.

## Syntax

```js-nolint
disableiOES(target, index)
```

### Parameter

- `target`
  - : Muss `gl.BLEND` sein.
- `index`
  - : Ein ganzzahliger Wert `i`, der den mit der Konstante `gl.DRAW_BUFFERi` verknüpften Draw-Buffer spezifiziert, siehe [WebGL Draw-Buffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `target` nicht `gl.BLEND` ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Wenn `index` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.

## Beispiele

### Deaktivieren des Blending für Draw-Buffer

Die folgenden zwei Aufrufe deaktivieren das Blending für die Draw-Buffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1`.

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
- [WebGL Draw-Buffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers)
