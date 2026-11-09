---
title: "EXT_polygon_offset_clamp: Methode polygonOffsetClampEXT()"
short-title: polygonOffsetClampEXT()
slug: Web/API/EXT_polygon_offset_clamp/polygonOffsetClampEXT
l10n:
  sourceCommit: 4707a91d383770b89cbb38bd5c6c373a25b25790
---

{{APIRef("WebGL")}}

Die Methode **`polygonOffsetClampEXT()`** der Erweiterung [`EXT_polygon_offset_clamp`](/de/docs/Web/API/EXT_polygon_offset_clamp) der [WebGL-API](/de/docs/Web/API/WebGL_API) legt den Skalierungsfaktor und die Einheiten für die Berechnung von Tiefenversätzen fest, ähnlich wie [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset). Zusätzlich legt sie einen Grenzwert für den resultierenden Versatz fest.

Der Versatz wird aus `factor` und `units` auf dieselbe Weise wie bei `polygonOffset()` berechnet und anschließend durch `clamp` begrenzt:

- Ist `clamp` positiv, beträgt der Versatz höchstens `clamp`.
- Ist `clamp` negativ, beträgt der Versatz mindestens `clamp`.
- Ist `clamp` gleich `0` oder `NaN`, wird der Versatz nicht begrenzt.

Ein Aufruf von `polygonOffset()` entspricht einem Aufruf von `polygonOffsetClampEXT()` mit einem `clamp`-Wert von `0` und hebt damit die Begrenzung auf.

Der Tiefenversatz wird nur angewendet, wenn `gl.POLYGON_OFFSET_FILL` mit [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) aktiviert wurde.

## Syntax

```js-nolint
polygonOffsetClampEXT(factor, units, clamp)
```

### Parameter

- `factor`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Skalierungsfaktor für den variablen Tiefenversatz jedes Polygons festlegt. Der Standardwert ist 0.
- `units`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Multiplikator festlegt, mit dem ein implementierungsspezifischer Wert multipliziert wird, um einen konstanten Tiefenversatz zu erzeugen. Der Standardwert ist 0.
- `clamp`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den maximalen (bei positivem Wert) oder minimalen (bei negativem Wert) Tiefenversatz festlegt. Der Standardwert ist 0; das bedeutet, dass keine Begrenzung gilt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Den Tiefenversatz begrenzen

Dieses Beispiel aktiviert den Tiefenversatz, setzt `factor` auf `2` und `units` auf `3` und begrenzt den Versatz auf `0.001`:

```js
const ext = gl.getExtension("EXT_polygon_offset_clamp");

gl.enable(gl.POLYGON_OFFSET_FILL);
ext.polygonOffsetClampEXT(2, 3, 0.001);
```

Um die aktuellen Werte zu prüfen, fragen Sie die Konstanten `POLYGON_OFFSET_FACTOR`, `POLYGON_OFFSET_UNITS` und `POLYGON_OFFSET_CLAMP_EXT` ab:

```js
gl.getParameter(gl.POLYGON_OFFSET_FACTOR); // 2
gl.getParameter(gl.POLYGON_OFFSET_UNITS); // 3
gl.getParameter(ext.POLYGON_OFFSET_CLAMP_EXT); // 0.0010000000474974513
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EXT_polygon_offset_clamp`](/de/docs/Web/API/EXT_polygon_offset_clamp)
- [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
