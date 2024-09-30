---
title: "OES_draw_buffers_indexed: disableiOES()-Methode"
short-title: disableiOES()
slug: Web/API/OES_draw_buffers_indexed/disableiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `disableiOES()`-Methode der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung deaktiviert das Blending für einen bestimmten Zeichnungspuffer.

## Syntax

```js-nolint
disableiOES(target, index)
```

### Parameter

- `target`
  - : Muss `gl.BLEND` sein.
- `index`
  - : Ein ganzzahliger `i`, der den Zeichnungspuffer angegeben wird, der mit der Konstante `gl.DRAW_BUFFERi` verbunden ist, siehe [WebGL-Zeichnungspuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `target` nicht `gl.BLEND` ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `index` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

### Deaktivierung des Blendings für Zeichnungspuffer

Die folgenden beiden Aufrufe deaktivieren das Blending für die Zeichnungspuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1`.

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
- [WebGL-Zeichnungspuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers)
