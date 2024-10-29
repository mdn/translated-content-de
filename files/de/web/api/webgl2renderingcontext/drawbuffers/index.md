---
title: "WebGL2RenderingContext: drawBuffers()-Methode"
short-title: drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawBuffers()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) definiert Zeichnungs-Puffer, in die Fragment-Farben geschrieben werden. Die Zeichnungs-Puffereinstellungen sind Teil des Status des aktuell gebundenen Framebuffers oder dem Zeichnungs-Puffer, wenn kein Framebuffer gebunden ist.

## Syntax

```js-nolint
drawBuffers(buffers)
```

### Parameter

- `buffers`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), welches die Puffer spezifiziert, in die Fragment-Farben geschrieben werden. Mögliche Werte sind:

    - `gl.NONE`
      - : Die Ausgabe des Fragment-Shaders wird in keinen Farb-Puffer geschrieben.
    - `gl.BACK`
      - : Die Ausgabe des Fragment-Shaders wird in den hinteren Farb-Puffer geschrieben.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Die Fragment-Shader-Ausgabe wird in den
        n-ten Farb-Anschluss des aktuellen Framebuffers geschrieben.

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
