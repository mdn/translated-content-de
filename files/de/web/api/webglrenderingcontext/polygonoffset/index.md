---
title: "WebGLRenderingContext: Methode polygonOffset()"
short-title: polygonOffset()
slug: Web/API/WebGLRenderingContext/polygonOffset
l10n:
  sourceCommit: 4707a91d383770b89cbb38bd5c6c373a25b25790
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.polygonOffset()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Skalierungsfaktoren und Einheiten zur Berechnung von Tiefenwerten fest.

Der Versatz wird hinzugefügt, bevor der Tiefentest durchgeführt und der Wert in den Tiefenpuffer geschrieben wird.

## Syntax

```js-nolint
polygonOffset(factor, units)
```

### Parameter

- `factor`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Skalierungsfaktor für den variablen Tiefenversatz jedes Polygons festlegt. Der Standardwert ist 0.
- `units`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Multiplikator festlegt, mit dem ein implementierungsspezifischer Wert multipliziert wird, um einen konstanten Tiefenversatz zu erzeugen. Der Standardwert ist 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Füllen mit Polygonversatz ist standardmäßig deaktiviert. Um es zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.POLYGON_OFFSET_FILL`.

```js
gl.enable(gl.POLYGON_OFFSET_FILL);
gl.polygonOffset(2, 3);
```

Um den aktuellen Faktor oder die Einheiten für den Polygonversatz abzufragen, verwenden Sie die Konstanten `POLYGON_OFFSET_FACTOR` und `POLYGON_OFFSET_UNITS`.

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
- [`EXT_polygon_offset_clamp.polygonOffsetClampEXT()`](/de/docs/Web/API/EXT_polygon_offset_clamp/polygonOffsetClampEXT)
