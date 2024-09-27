---
title: "WebGL2RenderingContext: drawBuffers()-Methode"
short-title: drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.drawBuffers()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) definiert Draw-Buffers, in die Fragmentfarben geschrieben werden. Die Einstellungen der Draw-Buffers sind Teil des Zustands des aktuell gebundenen Framebuffers oder des Zeichnungsbuffers, falls kein Framebuffer gebunden ist.

## Syntax

```js-nolint
drawBuffers(buffers)
```

### Parameter

- `buffers`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Buffers spezifiziert, in die Fragmentfarben geschrieben werden. Mögliche Werte sind:

    - `gl.NONE`
      - : Die Ausgabe des Fragment-Shader wird in keinen Farb-Buffer geschrieben.
    - `gl.BACK`
      - : Die Ausgabe des Fragment-Shader wird in den back color buffer geschrieben.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Die Ausgabe des Fragment-Shader wird in das nth-Farb-Attachment des aktuellen Framebuffers geschrieben.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buffers` nicht einen der akzeptierten Werte enthält, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

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
