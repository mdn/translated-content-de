---
title: "WebGLRenderingContext: depthFunc()-Methode"
short-title: depthFunc()
slug: Web/API/WebGLRenderingContext/depthFunc
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.depthFunc()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt eine Funktion fest, die die Tiefe der eingehenden Pixel mit dem aktuellen Wert im Tiefenpuffer vergleicht.

## Syntax

```js-nolint
depthFunc(func)
```

### Parameter

- `func`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Tiefenvergleichsfunktion spezifiziert, welche die Bedingungen festlegt, unter denen das Pixel gezeichnet wird. Der Standardwert ist `gl.LESS`. Mögliche Werte sind:

    - `gl.NEVER` (niemals durchlassen)
    - `gl.LESS` (durchlassen, wenn der eingehende Wert kleiner als der Wert im Tiefenpuffer ist)
    - `gl.EQUAL` (durchlassen, wenn der eingehende Wert dem Wert im Tiefenpuffer entspricht)
    - `gl.LEQUAL` (durchlassen, wenn der eingehende Wert kleiner oder gleich dem Wert im Tiefenpuffer ist)
    - `gl.GREATER` (durchlassen, wenn der eingehende Wert größer als der Wert im Tiefenpuffer ist)
    - `gl.NOTEQUAL` (durchlassen, wenn der eingehende Wert nicht dem Wert im Tiefenpuffer entspricht)
    - `gl.GEQUAL` (durchlassen, wenn der eingehende Wert größer oder gleich dem Wert im Tiefenpuffer ist)
    - `gl.ALWAYS` (immer durchlassen)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Tiefentest ist standardmäßig deaktiviert. Um den Tiefentest zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.DEPTH_TEST`.

```js
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.NEVER);
```

Um die aktuelle Tiefenfunktion zu überprüfen, fragen Sie die Konstante `DEPTH_FUNC` ab.

```js
gl.getParameter(gl.DEPTH_FUNC) === gl.NEVER;
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
