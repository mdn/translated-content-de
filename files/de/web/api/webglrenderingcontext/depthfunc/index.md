---
title: "WebGLRenderingContext: depthFunc() Methode"
short-title: depthFunc()
slug: Web/API/WebGLRenderingContext/depthFunc
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.depthFunc()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert eine Funktion, die die Tiefe des eintreffenden Pixels mit dem aktuellen Wert im Tiefenpuffer vergleicht.

## Syntax

```js-nolint
depthFunc(func)
```

### Parameter

- `func`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Vergleichsfunktion für die Tiefe angibt und die Bedingungen festlegt, unter denen das Pixel gezeichnet wird. Der Standardwert ist `gl.LESS`. Mögliche Werte sind:

    - `gl.NEVER` (nie passieren)
    - `gl.LESS` (passieren, wenn der eintreffende Wert kleiner als der Wert im Tiefenpuffer ist)
    - `gl.EQUAL` (passieren, wenn der eintreffende Wert gleich dem Wert im Tiefenpuffer ist)
    - `gl.LEQUAL` (passieren, wenn der eintreffende Wert kleiner oder gleich dem Wert im Tiefenpuffer ist)
    - `gl.GREATER` (passieren, wenn der eintreffende Wert größer als der Wert im Tiefenpuffer ist)
    - `gl.NOTEQUAL` (passieren, wenn der eintreffende Wert ungleich dem Wert im Tiefenpuffer ist)
    - `gl.GEQUAL` (passieren, wenn der eintreffende Wert größer oder gleich dem Wert im Tiefenpuffer ist)
    - `gl.ALWAYS` (immer passieren)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das Tiefentest ist standardmäßig deaktiviert. Um das Tiefentest zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.DEPTH_TEST`.

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
