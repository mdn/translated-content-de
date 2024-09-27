---
title: "WebGLRenderingContext: bindTexture()-Methode"
short-title: bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindTexture()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet eine gegebene
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) an ein Ziel (Bindungspunkt).

## Syntax

```js-nolint
bindTexture(target, texture)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Würfelkartierungstextur.
      Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
      sind zusätzlich folgende Werte verfügbar:

      - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
      - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, das gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM`-Fehler wird ausgegeben, wenn `target` nicht
`gl.TEXTURE_2D`, `gl.TEXTURE_CUBE_MAP`,
`gl.TEXTURE_3D` oder `gl.TEXTURE_2D_ARRAY` ist.

## Beispiele

### Binden einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### Abrufen der aktuellen Bindungen

Um die aktuelle Texturbindung zu überprüfen, fragen Sie die Konstanten `gl.TEXTURE_BINDING_2D` oder
`gl.TEXTURE_BINDING_CUBE_MAP` ab.

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
