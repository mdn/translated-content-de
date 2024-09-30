---
title: "WebGLRenderingContext: polygonOffset()-Methode"
short-title: polygonOffset()
slug: Web/API/WebGLRenderingContext/polygonOffset
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.polygonOffset()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt die Skalierungsfaktoren und
Einheiten fest, um Tiefenwerte zu berechnen.

Der Offset wird hinzugefügt, bevor der Tiefentest durchgeführt und bevor der Wert
in den Tiefenpuffer geschrieben wird.

## Syntax

```js-nolint
polygonOffset(factor, units)
```

### Parameter

- `factor`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Skalierungsfaktor für den variablen Tiefenoffset
    für jedes Polygon festlegt. Der Standardwert ist 0.
- `units`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Multiplikator festlegt, mit dem ein
    implementierungsspezifischer Wert multipliziert wird, um einen konstanten Tiefenoffset zu erzeugen.
    Der Standardwert ist 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Polygon-Offset-Fill ist standardmäßig deaktiviert. Um das Polygon-Offset-Fill zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und
[`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument
`gl.POLYGON_OFFSET_FILL`.

```js
gl.enable(gl.POLYGON_OFFSET_FILL);
gl.polygonOffset(2, 3);
```

Um den aktuellen Polygon-Offset-Faktor oder die Einheiten zu überprüfen, fragen Sie die Konstanten
`POLYGON_OFFSET_FACTOR` und `POLYGON_OFFSET_UNITS` ab.

```js
gl.getParameter(gl.POLYGON_OFFSET_FACTOR); // 2
gl.getParameter(gl.POLYGON_OFFSET_UNITS); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc)
