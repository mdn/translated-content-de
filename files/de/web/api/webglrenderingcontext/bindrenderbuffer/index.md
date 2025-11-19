---
title: "WebGLRenderingContext: bindRenderbuffer()-Methode"
short-title: bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindRenderbuffer()`**-Methode des [WebGL-API](/de/docs/Web/API/WebGL_API) bindet ein gegebenes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) an ein Ziel, das `gl.RENDERBUFFER` sein muss.

## Syntax

```js-nolint
bindRenderbuffer(target, renderbuffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (das Ziel) angibt. Mögliche Werte:
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

### Abrufen aktueller Bindungen

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
