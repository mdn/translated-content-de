---
title: "WebGLRenderingContext: bindRenderbuffer()-Methode"
short-title: bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet ein gegebenes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) an ein Ziel, das `gl.RENDERBUFFER` sein muss.

## Syntax

```js-nolint
bindRenderbuffer(target, renderbuffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferdatenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt zum Binden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht `gl.RENDERBUFFER` ist.

## Beispiele

### Binden eines Renderbuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
```

### Abrufen der aktuellen Bindungen

Um die aktuelle Renderbuffer-Bindung zu überprüfen, fragen Sie die `RENDERBUFFER_BINDING`-Konstante ab.

```js
gl.getParameter(gl.RENDERBUFFER_BINDING);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
