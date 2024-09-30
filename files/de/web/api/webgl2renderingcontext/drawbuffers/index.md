---
title: "WebGL2RenderingContext: drawBuffers()-Methode"
short-title: drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawBuffers()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) definiert Zeichenpuffer, in die Fragmentfarben geschrieben werden. Die Zeichnungspuffer-Einstellungen sind Teil des Zustands des derzeit gebundenen Framebuffers oder des Zeichnungspuffers, wenn kein Framebuffer gebunden ist.

## Syntax

```js-nolint
drawBuffers(buffers)
```

### Parameter

- `buffers`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Puffer angibt, in die Fragmentfarben geschrieben werden. Mögliche Werte sind:

    - `gl.NONE`
      - : Der Fragment-Shader-Ausgabe wird in keinen Farb-Puffer geschrieben.
    - `gl.BACK`
      - : Der Fragment-Shader-Ausgabe wird in den hinteren Farb-Puffer geschrieben.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Der Fragment-Shader-Ausgabe wird in die n-te Farbanlage des aktuellen Framebuffers geschrieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buffers` keinen der akzeptierten Werte enthält, wird ein
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

- [`WebGL2RenderingContext.clearBuffer[fiuv]()`](/de/docs/Web/API/WebGL2RenderingContext/clearBuffer)
