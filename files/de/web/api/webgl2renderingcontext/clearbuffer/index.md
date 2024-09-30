---
title: "WebGL2RenderingContext: clearBuffer[fiuv]() Methode"
short-title: clearBuffer[fiuv]()
slug: Web/API/WebGL2RenderingContext/clearBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.clearBuffer[fiuv]()`** Methoden des [WebGL 2 APIs](/de/docs/Web/API/WebGL_API) löschen Puffer aus dem aktuell gebundenen Framebuffer.

## Syntax

```js-nolint
clearBufferfv(buffer, drawbuffer, values)
clearBufferfv(buffer, drawbuffer, values, srcOffset)

clearBufferiv(buffer, drawbuffer, values)
clearBufferiv(buffer, drawbuffer, values, srcOffset)

clearBufferuiv(buffer, drawbuffer, values)
clearBufferuiv(buffer, drawbuffer, values, srcOffset)

clearBufferfi(buffer, drawbuffer, depth, stencil)
```

### Parameter

- `buffer`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den zu löschenden Puffer angibt. Mögliche Werte sind:

    - `gl.COLOR`: Farb-Puffer.
    - `gl.DEPTH`: Tiefen-Puffer.
    - `gl.STENCIL`: Schablonen-Puffer.
    - `gl.DEPTH_STENCIL`: löscht Tiefen- und Schablonen-Puffer (wird mit `clearBufferfi` verwendet).

- `drawBuffer`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den zu löschenden Zeichnungspuffer angibt.
- `values`
  - : Ein {{jsxref("Array")}} von [`GLint`](/de/docs/Web/API/WebGL_API/Types), [`GLuint`](/de/docs/Web/API/WebGL_API/Types)
    oder [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) Werten oder
    ein {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} oder {{jsxref("Float32Array")}},
    das die Werte angibt, auf die gelöscht werden soll.
- `depth`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Wert angibt, auf den ein Tiefen-Render-Puffer gelöscht werden soll.
- `stencil`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Wert angibt, auf den der Schablonen-Render-Puffer gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.clearBufferiv(gl.COLOR, 0, new Int32Array([r, g, b, a]));
gl.clearBufferuiv(gl.COLOR, 0, new Uint32Array([r, g, b, a]));
gl.clearBufferfv(gl.COLOR, 0, new Float32Array([r, g, b, a]));
gl.clearBufferfv(gl.COLOR, 0, [0.0, 0.0, 0.0, 0.0]);
gl.clearBufferfi(gl.DEPTH_STENCIL, 0, 1.0, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers)
