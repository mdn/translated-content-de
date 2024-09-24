---
title: "WebGLRenderingContext: polygonOffset() Methode"
short-title: polygonOffset()
slug: Web/API/WebGLRenderingContext/polygonOffset
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.polygonOffset()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) legt die Skalierungsfaktoren und
Einheiten fest, um Tiefenwerte zu berechnen.

Der Versatz wird hinzugefügt, bevor der Tiefentest durchgeführt wird und bevor der Wert
in den Tiefenpuffer geschrieben wird.

## Syntax

```js-nolint
polygonOffset(factor, units)
```

### Parameter

- `factor`
  - : Ein {{domxref("WebGL_API/Types", "GLfloat")}}, der den Skalierungsfaktor für den variablen Tiefenversatz
    für jedes Polygon festlegt. Der Standardwert ist 0.
- `units`
  - : Ein {{domxref("WebGL_API/Types", "GLfloat")}}, der den Multiplikator festlegt, mit dem ein
    implementierungsspezifischer Wert multipliziert wird, um einen konstanten Tiefenversatz zu erzeugen.
    Der Standardwert ist 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der Polygonversatz-Füllmodus ist standardmäßig deaktiviert. Um den Polygonversatz
Füllmodus zu aktivieren oder zu deaktivieren, verwenden Sie die {{domxref("WebGLRenderingContext.enable", "enable()")}}- und
{{domxref("WebGLRenderingContext.disable", "disable()")}}-Methoden mit dem Argument
`gl.POLYGON_OFFSET_FILL`.

```js
gl.enable(gl.POLYGON_OFFSET_FILL);
gl.polygonOffset(2, 3);
```

Um den aktuellen Polygonversatzfaktor oder die Einheiten zu überprüfen, fragen Sie die
`POLYGON_OFFSET_FACTOR`- und `POLYGON_OFFSET_UNITS`-Konstanten ab.

```js
gl.getParameter(gl.POLYGON_OFFSET_FACTOR); // 2
gl.getParameter(gl.POLYGON_OFFSET_UNITS); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.depthFunc()")}}
