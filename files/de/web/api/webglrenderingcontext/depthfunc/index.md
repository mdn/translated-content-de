---
title: "WebGLRenderingContext: depthFunc() Methode"
short-title: depthFunc()
slug: Web/API/WebGLRenderingContext/depthFunc
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.depthFunc()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt eine Funktion fest, die die Tiefe der eingehenden Pixel mit dem aktuellen Wert des Tiefenpuffers vergleicht.

## Syntax

```js-nolint
depthFunc(func)
```

### Parameter

- `func`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Tiefenvergleichsfunktion angibt, welche die Bedingungen festlegt, unter denen das Pixel gezeichnet wird. Der Standardwert ist `gl.LESS`. Mögliche Werte sind:
    - `gl.NEVER` (niemals durchlassen)
    - `gl.LESS` (durchlassen, wenn der eingehende Wert kleiner als der Tie­fen­puf­fer­wert ist)
    - `gl.EQUAL` (durchlassen, wenn der eingehende Wert dem Tiefenpufferwert entspricht)
    - `gl.LEQUAL` (durchlassen, wenn der eingehende Wert kleiner oder gleich dem Tiefenpufferwert ist)
    - `gl.GREATER` (durchlassen, wenn der eingehende Wert größer als der Tiefenpufferwert ist)
    - `gl.NOTEQUAL` (durchlassen, wenn der eingehende Wert ungleich dem Tiefenpufferwert ist)
    - `gl.GEQUAL` (durchlassen, wenn der eingehende Wert größer oder gleich dem Tiefenpufferwert ist)
    - `gl.ALWAYS` (immer durchlassen)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Die Tiefenprüfung ist standardmäßig deaktiviert. Um die Tiefenprüfung zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.DEPTH_TEST`.

```js
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.NEVER);
```

Um die aktuelle Tiefenfunktion zu überprüfen, fragen Sie die `DEPTH_FUNC`-Konstante ab.

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
