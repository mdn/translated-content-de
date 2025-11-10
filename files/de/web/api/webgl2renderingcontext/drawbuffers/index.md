---
title: "WebGL2RenderingContext: drawBuffers()-Methode"
short-title: drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawBuffers()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legt die Zeichnungspuffer fest, in die Fragmentfarben geschrieben werden. Die Einstellungen der Zeichnungspuffer sind Teil des Zustands des derzeit gebundenen Framebuffers oder des Zeichenpuffers, wenn kein Framebuffer gebunden ist.

## Syntax

```js-nolint
drawBuffers(buffers)
```

### Parameter

- `buffers`
  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Puffer spezifiziert, in die Fragmentfarben geschrieben werden. Mögliche Werte sind:
    - `gl.NONE`
      - : Die Ausgabe des Fragment-Shaders wird in keinen Farb-
        puffer geschrieben.
    - `gl.BACK`
      - : Die Ausgabe des Fragment-Shaders wird in den hinteren Farb-
        puffer geschrieben.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Die Ausgabe des Fragment-Shaders wird in den
        n-ten Farb-Anhang des aktuellen Framebuffers geschrieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buffers` nicht einen der akzeptierten Werte enthält, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

```js
gl.drawBuffers([gl.NONE, gl.COLOR_ATTACHMENT1]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.clearBuffer[fiuv]()`](/de/docs/Web/API/WebGL2RenderingContext/clearBuffer)
