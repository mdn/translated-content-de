---
title: "WebGL2RenderingContext: drawBuffers()-Methode"
short-title: drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.drawBuffers()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) definiert die Zeichnungspuffer, in die Fragmentfarben geschrieben werden. Die Einstellungen der Zeichnungspuffer sind Teil des Zustands des derzeit gebundenen Framebuffers oder des Zeichnungspuffers, falls kein Framebuffer gebunden ist.

## Syntax

```js-nolint
drawBuffers(buffers)
```

### Parameter

- `buffers`

  - : Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLenum")}}, das die Puffer angibt, in die Fragmentfarben geschrieben werden. Mögliche Werte sind:

    - `gl.NONE`
      - : Der Ausgabewert des Fragment-Shader wird in keinen Farbepuffer geschrieben.
    - `gl.BACK`
      - : Der Ausgabewert des Fragment-Shader wird in den hinteren Farbepuffer geschrieben.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Der Ausgabewert des Fragment-Shader wird in den
        n-ten Farbanhang des aktuellen Framebuffers geschrieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buffers` nicht einen der akzeptierten Werte enthält, wird ein
  `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

```js
gl.drawBuffers([gl.NONE, gl.COLOR_ATTACHMENT1]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.clearBuffer", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
