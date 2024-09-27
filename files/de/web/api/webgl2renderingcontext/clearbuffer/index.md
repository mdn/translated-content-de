---
title: "WebGL2RenderingContext: clearBuffer[fiuv]() Methode"
short-title: clearBuffer[fiuv]()
slug: Web/API/WebGL2RenderingContext/clearBuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.clearBuffer[fiuv]()`** Methoden des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) löschen Puffer des
derzeit gebundenen Framebuffers.

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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den zu löschenden Puffer angibt. Mögliche Werte sind:

    - `gl.COLOR`: Farbpuffer.
    - `gl.DEPTH`: Tiefenpuffer.
    - `gl.STENCIL`: Schablonenpuffer.
    - `gl.DEPTH_STENCIL`: löscht Tiefen- und Schablonenpuffer (verwendet mit
      `clearBufferfi`).

- `drawBuffer`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den zu löschenden Zeichenpuffer angibt.
- `values`
  - : Ein {{jsxref("Array")}} von [`GLint`](/de/docs/Web/API/WebGL_API/Types), [`GLuint`](/de/docs/Web/API/WebGL_API/Types)
    oder [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) Werten oder
    ein {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} oder {{jsxref("Float32Array")}}
    das die Werte angibt, auf die gelöscht werden soll.
- `depth`
  - : Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types), der den Wert angibt, auf den ein Tiefenrenderpuffer gelöscht werden soll.
- `stencil`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Wert angibt, auf den der Schablonenrenderpuffer gelöscht werden soll.

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
