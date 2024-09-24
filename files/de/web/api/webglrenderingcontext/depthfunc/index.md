---
title: "WebGLRenderingContext: depthFunc()-Methode"
short-title: depthFunc()
slug: Web/API/WebGLRenderingContext/depthFunc
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.depthFunc()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt eine Funktion an, die die Tiefenwerte der eingehenden Pixel mit dem aktuellen Wert im Tiefenpuffer vergleicht.

## Syntax

```js-nolint
depthFunc(func)
```

### Parameter

- `func`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Tiefenvergleichsfunktion spezifiziert und die Bedingungen festlegt, unter denen das Pixel gezeichnet wird. Der Standardwert ist `gl.LESS`. Mögliche Werte sind:

    - `gl.NEVER` (niemals bestehen)
    - `gl.LESS` (bestehen, wenn der eingehende Wert kleiner als der Wert im Tiefenpuffer ist)
    - `gl.EQUAL` (bestehen, wenn der eingehende Wert dem Wert im Tiefenpuffer entspricht)
    - `gl.LEQUAL` (bestehen, wenn der eingehende Wert kleiner oder gleich dem Wert im Tiefenpuffer ist)
    - `gl.GREATER` (bestehen, wenn der eingehende Wert größer als der Wert im Tiefenpuffer ist)
    - `gl.NOTEQUAL` (bestehen, wenn der eingehende Wert nicht gleich dem Wert im Tiefenpuffer ist)
    - `gl.GEQUAL` (bestehen, wenn der eingehende Wert größer oder gleich dem Wert im Tiefenpuffer ist)
    - `gl.ALWAYS` (immer bestehen)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Tiefentest ist standardmäßig deaktiviert. Um Tiefentests zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden {{domxref("WebGLRenderingContext.enable", "enable()")}} und {{domxref("WebGLRenderingContext.disable", "disable()")}} mit dem Argument `gl.DEPTH_TEST`.

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

- {{domxref("WebGLRenderingContext.enable()")}}
