---
title: "WebGLRenderingContext: bindRenderbuffer()-Methode"
short-title: bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet ein angegebenes {{domxref("WebGLRenderbuffer")}} an ein Ziel, das `gl.RENDERBUFFER` sein muss.

## Syntax

```js-nolint
bindRenderbuffer(target, renderbuffer)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferdatenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein {{domxref("WebGLRenderbuffer")}}-Objekt, das gebunden werden soll.

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

- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
