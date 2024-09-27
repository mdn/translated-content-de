---
title: "WebGLRenderingContext: bindRenderbuffer()-Methode"
short-title: bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet ein gegebenes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) an ein Ziel, das `gl.RENDERBUFFER` sein muss.

## Syntax

```js-nolint
bindRenderbuffer(target, renderbuffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Puffer-Datenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt, das gebunden werden soll.

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

### Aktuelle Bindungen abrufen

Um die aktuelle Renderbuffer-Bindung zu überprüfen, fragen Sie die Konstante `RENDERBUFFER_BINDING` ab.

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
