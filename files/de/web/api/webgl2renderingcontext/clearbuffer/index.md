---
title: "WebGL2RenderingContext: clearBuffer[fiuv]() Methode"
short-title: clearBuffer[fiuv]()
slug: Web/API/WebGL2RenderingContext/clearBuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.clearBuffer[fiuv]()`** Methoden der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) löschen Puffer des
aktuell gebundenen Framebuffers.

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

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den zu löschenden Puffer angibt. Mögliche Werte sind:

    - `gl.COLOR`: Farb-Puffer.
    - `gl.DEPTH`: Tiefen-Puffer.
    - `gl.STENCIL`: Schablonenpuffer.
    - `gl.DEPTH_STENCIL`: löscht Tiefen- und Schablonenpuffer (wird mit
      `clearBufferfi` verwendet).

- `drawBuffer`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den zu löschenden Zeichenpuffer angibt.
- `values`
  - : Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLint")}}, {{domxref("WebGL_API/Types", "GLuint")}}
    oder {{domxref("WebGL_API/Types", "GLfloat")}} Werten oder
    ein {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} oder {{jsxref("Float32Array")}},
    welche die zu löschenden Werte spezifizieren.
- `depth`
  - : Ein {{domxref("WebGL_API/Types", "GLfloat")}}, der den Wert angibt, auf den ein Tiefen-Renderpuffer gelöscht werden soll.
- `stencil`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Wert angibt, auf den der Schablonen-Renderpuffer gelöscht werden soll.

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

- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
