---
title: "WebGLRenderingContext: bindRenderbuffer()-Methode"
short-title: bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.bindRenderbuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet einen angegebenen [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) an ein Ziel, das `gl.RENDERBUFFER` sein muss.

## Syntax

```js-nolint
bindRenderbuffer(target, renderbuffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) angibt. Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Speicher für Pufferdaten einzelner Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein zu bindendes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt oder `null`, um die Bindung des aktuell an das angegebene Ziel gebundenen Objekts aufzuheben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn `target` nicht `gl.RENDERBUFFER` ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Einen Renderbuffer binden

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
```

### Aktuelle Bindungen abfragen

Um die aktuelle Renderbuffer-Bindung zu prüfen, fragen Sie die Konstante `RENDERBUFFER_BINDING` ab.

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
- Weitere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
